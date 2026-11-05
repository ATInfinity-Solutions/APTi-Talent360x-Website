import Link from "next/link"
import { ArrowRight, Gauge, Network, Sparkles, Target, TrendingUp, Waypoints } from "lucide-react"
import { Button } from "@/components/ui/button"
import { primaryNav } from "@/lib/navigation"

const signals = [
  { label: "Skills Identified", icon: Target },
  { label: "Talent Readiness", icon: Gauge },
  { label: "Matching Intelligence", icon: Waypoints },
  { label: "Outcome Intelligence", icon: TrendingUp },
]

const bars = [42, 58, 50, 72, 64, 88, 70, 92, 78, 96, 84, 100]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute -right-32 top-10 size-96 rounded-full bg-flame/10 blur-3xl" />

      <div className="container-site relative grid min-h-[calc(92dvh-5rem)] items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-flame">
            <Sparkles className="size-3.5" /> AI-Powered Talent Ecosystem
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl xl:text-6xl">
            Connect talent. Build opportunity. <span className="text-gradient-brand">Improve outcomes.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            One AI-driven platform connecting candidates, students, alumni, institutions, employers, training providers,
            partners and funders. Transform how talent is discovered, developed and deployed.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="flame" size="lg" asChild>
              <Link href={primaryNav.contact.href}>
                Contact Us <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link href="#solutions">
                Explore Solutions <Network />
              </Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-white/45">
            <span>12 stakeholder networks</span>
            <span className="hidden sm:inline">·</span>
            <span>7-stage talent lifecycle</span>
            <span className="hidden sm:inline">·</span>
            <span>Closed-loop AI intelligence</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between">
            <p className="font-display text-sm font-semibold text-white">Platform Intelligence</p>
            <span className="flex items-center gap-1.5 rounded-full bg-flame/15 px-2.5 py-1 text-[11px] font-semibold text-flame">
              <span className="size-1.5 animate-pulse rounded-full bg-flame" /> Live
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {signals.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <s.icon className="size-4 text-flame" strokeWidth={2.2} />
                <p className="mt-2 text-[11px] font-semibold leading-tight text-white/85">{s.label}</p>
                <p className="mt-1 text-[10px] text-white/45">Active</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">Ecosystem signals</p>
            <div className="mt-3 flex h-28 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-linear-to-t from-[hsl(217_86%_35%)] to-flame opacity-90"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Skill Graph", "Match Engine", "Outcome Forecast"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
