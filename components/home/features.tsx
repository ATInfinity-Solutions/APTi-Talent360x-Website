import { Brain, Briefcase, GraduationCap, Target, TrendingUp, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description:
      "Intelligent skill-based matching that goes beyond keyword search to connect the right talent with the right opportunities.",
  },
  {
    icon: Briefcase,
    title: "Job Portal",
    description:
      "Unified job marketplace for urban, white-collar and blue-collar positions with seamless application tracking.",
  },
  {
    icon: GraduationCap,
    title: "Training Marketplace",
    description: "Connect with top training providers and certification programs aligned to real hiring demand.",
  },
  {
    icon: Users,
    title: "Sourcing Network",
    description: "Access rural, regional and agency pipelines with vendor onboarding and credit-based sourcing.",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    description: "Identify skill gaps and get personalised learning pathways to improve employability.",
  },
  {
    icon: TrendingUp,
    title: "Talent Analytics",
    description: "Comprehensive dashboards for hiring efficiency, training conversion and marketplace insights.",
  },
]

export function Features() {
  return (
    <section id="features" className="container-site py-24">
      <SectionHeading
        eyebrow="The platform"
        title={
          <>
            Everything you need to <span className="text-gradient-brand">hire smarter</span>
          </>
        }
        description="A complete ecosystem that bridges skill development, job matching and the sourcing lifecycle with AI-driven orchestration."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <span
              className={
                i % 2 === 0
                  ? "flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                  : "flex size-12 items-center justify-center rounded-xl bg-flame/10 text-flame"
              }
            >
              <f.icon className="size-6" strokeWidth={2.1} />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
