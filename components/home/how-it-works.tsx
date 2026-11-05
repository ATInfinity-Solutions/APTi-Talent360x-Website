import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    description: "Sign up and let our AI enrich your profile with parsed resume data and skill assessments.",
    points: ["Resume parsing", "AI profile enrichment", "Skill assessment"],
  },
  {
    step: "02",
    title: "Get Matched",
    description: "Our AI analyses your skills and preferences to match you with the best opportunities.",
    points: ["Skill-based matching", "Contextual recommendations", "Real-time updates"],
  },
  {
    step: "03",
    title: "Grow & Succeed",
    description: "Access training programs, track your progress and land the role you are aiming for.",
    points: ["Learning pathways", "Career progression", "Placement support"],
  },
]

export function HowItWorks() {
  return (
    <section className="container-site py-24">
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            How <span className="text-gradient-brand">Our Platform</span> works
          </>
        }
        description="A simple three-step process to transform your talent journey."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.step} className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-xl">
            <p className="font-display text-5xl font-extrabold text-primary/15">{s.step}</p>
            <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            <ul className="mt-6 space-y-2.5">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 text-flame" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
