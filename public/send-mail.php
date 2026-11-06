<?php
/**
 * Receives Contact / Sign Up JSON posts from the static Talent360x site
 * and emails them via Hostinger PHP mail() (or optional SMTP in send-mail.config.php).
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
// Allow local UI (localhost) to POST to the live Hostinger script for testing.
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$configFile = __DIR__ . '/send-mail.config.php';
if (!is_file($configFile)) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Mail config missing']);
  exit;
}

/** @var array{to:string,from:string,from_name:string,smtp_host?:string,smtp_port?:int,smtp_user?:string,smtp_pass?:string} $config */
$config = require $configFile;

$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid JSON body']);
  exit;
}

// Honeypot: bots fill this; real users leave it empty.
if (!empty($data['website']) || !empty($data['_gotcha'])) {
  echo json_encode(['ok' => true]);
  exit;
}

$kind = isset($data['kind']) ? preg_replace('/[^a-z\-]/', '', strtolower((string) $data['kind'])) : 'contact';
if ($kind === '') {
  $kind = 'contact';
}

$allowed = ['contact', 'signup'];
if (!in_array($kind, $allowed, true)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Unknown form kind']);
  exit;
}

unset($data['kind'], $data['_subject'], $data['website'], $data['_gotcha']);

$clean = [];
foreach ($data as $key => $value) {
  if (!is_string($key) || !is_scalar($value)) {
    continue;
  }
  $k = preg_replace('/[^a-zA-Z0-9_\- ]/', '', $key) ?: 'field';
  $v = trim(str_replace(["\r", "\n"], ' ', (string) $value));
  if (strlen($v) > 5000) {
    $v = substr($v, 0, 5000) . '…';
  }
  if ($v !== '') {
    $clean[$k] = $v;
  }
}

if (count($clean) === 0) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Empty form']);
  exit;
}

$email = $clean['email'] ?? '';
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid email']);
  exit;
}

$labels = [
  'contact' => 'Contact form',
  'signup' => 'Sign-up request',
];
$subject = 'Talent360x — ' . ($labels[$kind] ?? $kind);
if (!empty($clean['inquiryType'])) {
  $subject .= ' (' . $clean['inquiryType'] . ')';
} elseif (!empty($clean['role'])) {
  $subject .= ' (' . $clean['role'] . ')';
}

$lines = ['Kind: ' . $kind, 'Received: ' . gmdate('Y-m-d H:i:s') . ' UTC', ''];
foreach ($clean as $k => $v) {
  $lines[] = $k . ': ' . $v;
}
$body = implode("\n", $lines);

$to = $config['to'];
$from = $config['from'];
$fromName = $config['from_name'] ?? 'Talent360x Website';
$replyTo = $email !== '' ? $email : $from;

$headers = [
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'From: ' . sprintf('"%s" <%s>', addcslashes($fromName, '"\\'), $from),
  'Reply-To: ' . $replyTo,
  'X-Mailer: Talent360x-Website',
];

$sent = false;
if (!empty($config['smtp_host']) && !empty($config['smtp_user']) && !empty($config['smtp_pass'])) {
  $sent = send_via_smtp(
    $config['smtp_host'],
    (int) ($config['smtp_port'] ?? 465),
    $config['smtp_user'],
    $config['smtp_pass'],
    $to,
    $from,
    $fromName,
    $replyTo,
    $subject,
    $body
  );
} else {
  $sent = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));
}

if (!$sent) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Unable to send email. Check Hostinger mailbox / SMTP settings.']);
  exit;
}

echo json_encode(['ok' => true]);

/**
 * Minimal SMTPS (implicit TLS on 465) sender for Hostinger when mail() is disabled.
 */
function send_via_smtp(
  string $host,
  int $port,
  string $user,
  string $pass,
  string $to,
  string $from,
  string $fromName,
  string $replyTo,
  string $subject,
  string $body
): bool {
  $errno = 0;
  $errstr = '';
  $socket = @stream_socket_client(
    "ssl://{$host}:{$port}",
    $errno,
    $errstr,
    20,
    STREAM_CLIENT_CONNECT
  );
  if (!$socket) {
    return false;
  }

  $read = static function () use ($socket): string {
    $data = '';
    while ($line = fgets($socket, 515)) {
      $data .= $line;
      if (isset($line[3]) && $line[3] === ' ') {
        break;
      }
    }
    return $data;
  };

  $write = static function (string $cmd) use ($socket): void {
    fwrite($socket, $cmd . "\r\n");
  };

  $expect = static function (string $response, string $code): bool {
    return str_starts_with($response, $code);
  };

  try {
    if (!$expect($read(), '220')) {
      return false;
    }
    $write('EHLO talent360x.com');
    if (!$expect($read(), '250')) {
      return false;
    }
    $write('AUTH LOGIN');
    if (!$expect($read(), '334')) {
      return false;
    }
    $write(base64_encode($user));
    if (!$expect($read(), '334')) {
      return false;
    }
    $write(base64_encode($pass));
    if (!$expect($read(), '235')) {
      return false;
    }
    $write('MAIL FROM:<' . $from . '>');
    if (!$expect($read(), '250')) {
      return false;
    }
    $write('RCPT TO:<' . $to . '>');
    if (!$expect($read(), '250')) {
      return false;
    }
    $write('DATA');
    if (!$expect($read(), '354')) {
      return false;
    }

    $payload = [
      'Date: ' . date('r'),
      'To: ' . $to,
      'From: "' . addcslashes($fromName, '"\\') . '" <' . $from . '>',
      'Reply-To: ' . $replyTo,
      'Subject: =?UTF-8?B?' . base64_encode($subject) . '?=',
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: 8bit',
      '',
      $body,
      '.',
    ];
    $write(implode("\r\n", $payload));
    if (!$expect($read(), '250')) {
      return false;
    }
    $write('QUIT');
    return true;
  } finally {
    fclose($socket);
  }
}
