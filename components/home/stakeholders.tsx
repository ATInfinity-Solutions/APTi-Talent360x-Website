import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { solutionGroups } from "@/lib/navigation"

const stakeholders = solutionGroups.flatMap((group) => group.links.map((link) => ({ ...link, group: group.label })))

export function Stakeholders() {
  return (
    <section id="solutions" className="scroll-mt-20 bg-secondary/60 py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="Solutions"
          title={
            <>
              One platform, <span className="text-gradient-brand">every stakeholder</span>
            </>
          }
          description="Tailored experiences for every participant in the talent ecosystem - all operating on one shared, intelligent talent graph."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stakeholders.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <ArrowUpRight className="absolute right-5 top-5 size-4 text-muted-foreground transition-colors group-hover:text-flame" />
              {s.icon && (
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-5" strokeWidth={2.1} />
                </span>
              )}
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-flame">{s.group}</p>
              <h3 className="mt-1 font-display text-base font-semibold">For {s.label}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
