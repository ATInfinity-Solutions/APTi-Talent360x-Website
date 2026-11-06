<?php
/**
 * Mail settings for Hostinger.
 * Upload this file with the site (it is included from send-mail.php).
 * Change $to to the inbox that should receive Contact / Sign Up messages.
 */
return [
  // Inbox that receives website form submissions
  'to' => 'contact@talent360x.com',

  // Must be an address on your Hostinger mailbox / domain
  'from' => 'contact@talent360x.com',
  'from_name' => 'Talent360x Website',

  // Optional SMTP (leave empty to use PHP mail(), which works on most Hostinger plans)
  // 'smtp_host' => 'smtp.hostinger.com',
  // 'smtp_port' => 465,
  // 'smtp_user' => 'noreply@talent360x.com',
  // 'smtp_pass' => 'YOUR_MAILBOX_PASSWORD',
];
