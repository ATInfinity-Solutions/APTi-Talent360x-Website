import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { primaryNav } from "@/lib/navigation"

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="container-site relative text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-flame">Get started</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
          Ready to transform your <span className="text-gradient-brand">talent strategy?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/65">
          See how our platform connects your stakeholders, lifecycle and outcomes on one intelligent platform.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="flame" size="lg" asChild>
            <Link href={primaryNav.contact.href}>
              Contact Us <ArrowRight />
            </Link>
          </Button>
          <Button variant="outline-light" size="lg" asChild>
            <Link href={primaryNav.signUp.href}>Create a free account</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
