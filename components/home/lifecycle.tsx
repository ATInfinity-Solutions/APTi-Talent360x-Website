import { Gauge, Rocket, Sprout, Target, TrendingUp, UserPlus, Waypoints, Repeat } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const stages = [
  { icon: UserPlus, label: "Onboarding" },
  { icon: Target, label: "Skill Intelligence" },
  { icon: Gauge, label: "Gap Detection" },
  { icon: Sprout, label: "Development" },
  { icon: Waypoints, label: "Matching" },
  { icon: Rocket, label: "Talent Opportunities" },
  { icon: TrendingUp, label: "Measurement" },
]

export function Lifecycle() {
  return (
    <section id="lifecycle" className="container-site scroll-mt-20 py-24">
      <SectionHeading
        eyebrow="The talent lifecycle"
        title="Seven stages, orchestrated by AI"
        description="From first onboarding to long-term outcome measurement, every stage of the talent lifecycle runs on the same intelligent core."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((s, i) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="size-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-2xl font-extrabold text-primary/15">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 font-display text-base font-semibold">{s.label}</h3>
          </div>
        ))}
        <div className="flex flex-col justify-center rounded-2xl bg-gradient-brand p-6 text-white">
          <Repeat className="size-6" strokeWidth={2.2} />
          <p className="mt-3 font-display text-base font-semibold">Continuous loop</p>
          <p className="mt-1 text-sm text-white/85">
            Measurement feeds back into onboarding - the lifecycle never stops learning.
          </p>
        </div>
      </div>
    </section>
  )
}
