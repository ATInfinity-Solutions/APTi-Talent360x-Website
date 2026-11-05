import Link from "next/link"
import { ArrowRight, Blocks, Cpu, Network, Repeat, ShieldCheck, TrendingUp } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { primaryNav } from "@/lib/navigation"

const reasons = [
  {
    icon: Network,
    title: "Multi-stakeholder by design",
    text: "Twelve participant networks on one shared talent graph - no silos, no stitching.",
  },
  {
    icon: Cpu,
    title: "AI at the core",
    text: "Intelligence isn't a feature bolted on; it's the engine every stage runs on.",
  },
  {
    icon: Repeat,
    title: "Closed-loop learning",
    text: "Outcomes feed back into the core, so accuracy compounds with every cycle.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade trust",
    text: "Role-based access, verified profiles and governance built for institutions.",
  },
  {
    icon: Blocks,
    title: "Composable platform",
    text: "Modular integrations and lifecycle stages adapt to your workflow.",
  },
  {
    icon: TrendingUp,
    title: "Outcome-obsessed",
    text: "Every action is measured against career outcomes, retention and ROI.",
  },
]

export function Why({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="bg-secondary/60 py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="Why Us"
          title="An operating platform, not another portal"
          description="Our platform is engineered as a multi-stakeholder AI ecosystem - the difference between connecting participants and orchestrating outcomes."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="flex size-12 items-center justify-center rounded-xl bg-flame/10 text-flame">
                <r.icon className="size-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
        {showLink && (
          <div className="mt-10 text-center">
            <Link
              href={primaryNav.why.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              See our full story <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
