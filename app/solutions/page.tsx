import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Stakeholders } from "@/components/home/stakeholders"
import { CTA } from "@/components/home/cta"
import { primaryNav } from "@/lib/navigation"

export const metadata = {
  title: "Solutions",
  description:
    "Talent360x solutions for working professionals, students, alumni, institutions, universities abroad, counsellors, employers, staffing firms, training providers, banks, sponsors and strategic partners.",
}

export default function SolutionsPage() {
  return (
    <div>
      <section className="page-hero relative overflow-hidden py-20 md:py-24">
        <div className="container-site relative text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-flame">Solutions</p>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Built for <span className="text-gradient-brand">every stakeholder</span> in the talent ecosystem
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Twelve participant networks, one shared and intelligent talent graph. Find the experience designed for you.
          </p>
          <Button size="lg" variant="flame" asChild>
            <Link href={primaryNav.contact.href}>
              Contact Us <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
      <Stakeholders />
      <CTA />
    </div>
  )
}
