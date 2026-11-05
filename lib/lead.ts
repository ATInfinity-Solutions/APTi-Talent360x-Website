/**
 * Static hosting has no server, so form submissions post to a hosted form endpoint (Formspree).
 * Set NEXT_PUBLIC_FORMSPREE_ENDPOINT, e.g. https://formspree.io/f/abcdwxyz, before building for production.
 */
const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? ""

export type LeadKind = "signup" | "contact"

export async function submitLead(kind: LeadKind, fields: Record<string, string>): Promise<void> {
  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") console.info(`[lead:${kind}]`, fields)
    return
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _subject: `Talent360x ${kind}`, kind, ...fields }),
  })
  if (!res.ok) throw new Error(`Submission failed (${res.status})`)
}
