import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { primaryNav } from "@/lib/navigation"

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-flame">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        This page is <span className="text-gradient-brand">not available</span>
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        The page you are looking for may have moved or is still being built.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button variant="flame" asChild>
          <Link href={primaryNav.contact.href}>
            Contact Us <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  )
}
