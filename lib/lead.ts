/**
 * Forms POST to /send-mail.php on the same host (Hostinger).
 * Configure the recipient in public/send-mail.config.php.
 */
const endpoint =
  (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/send-mail.php").trim().replace(/\/$/, "") || "/send-mail.php"

export type LeadKind = "signup" | "contact"

export async function submitLead(kind: LeadKind, fields: Record<string, string>): Promise<void> {
  const payload: Record<string, string> = {
    kind,
    _subject: `Talent360x ${kind}`,
    website: "",
    ...fields,
  }

  delete payload.password

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  })

  const text = await res.text()
  let data: { ok?: boolean; error?: string } = {}
  try {
    data = JSON.parse(text) as { ok?: boolean; error?: string }
  } catch {
    throw new Error("Unable to send your message. Please try again later.")
  }

  if (!res.ok || data.ok === false) {
    throw new Error(data.error || "Unable to send your message. Please try again later.")
  }
}
