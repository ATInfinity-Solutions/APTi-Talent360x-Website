import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Database,
  Eye,
  Layers,
  LineChart,
  Puzzle,
  Unplug,
  UserX,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Why } from "@/components/home/why"
import { Lifecycle } from "@/components/home/lifecycle"
import { Stakeholders } from "@/components/home/stakeholders"
import { Stats } from "@/components/home/stats"
import { CTA } from "@/components/home/cta"
import { primaryNav } from "@/lib/navigation"

export const metadata = {
  title: "Why Talent360x",
  description:
    "Talent360x is an AI-powered, multi-stakeholder talent ecosystem connecting learners, institutions, employers, funders and partners across the full talent lifecycle.",
}

const problems = [
  {
    icon: Unplug,
    title: "Fragmented systems",
    text: "Learners, institutions, employers, counsellors and funders each work in separate tools with no shared view of talent.",
  },
  {
    icon: UserX,
    title: "Skills mismatch",
    text: "Graduates struggle to find roles while employers struggle to find job-ready talent - the signals never meet.",
  },
  {
    icon: Eye,
    title: "No outcome visibility",
    text: "Training, education loans and CSR budgets are spent without knowing what happened next.",
  },
]

const intelligence = [
  {
    icon: Brain,
    title: "Skill intelligence",
    text: "Assessments and activity build a living skill profile for every learner and professional.",
  },
  {
    icon: Puzzle,
    title: "Smart matching",
    text: "AI connects people to jobs, internships, training, universities and funding that genuinely fit.",
  },
  {
    icon: LineChart,
    title: "Predictive insights",
    text: "Employability, retention and course-success signals help every stakeholder act earlier.",
  },
  {
    icon: Database,
    title: "Shared talent graph",
    text: "One verified record connects every participant, so data is captured once and trusted everywhere.",
  },
]

export default function WhyTalent360xPage() {
  return (
    <div>
      <section className="page-hero relative overflow-hidden py-20 md:py-28">
        <div className="container-site relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-flame">Why Us</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              One ecosystem for the <span className="text-gradient-brand">entire talent lifecycle</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              Our platform connects working professionals, students, alumni, institutions, universities abroad, counsellors,
              employers, staffing firms, training providers, banks, sponsors and strategic partners on one AI-powered
              platform - so every decision is informed by real outcomes.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="flame" asChild>
                <Link href={primaryNav.contact.href}>
                  Contact Us <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline-light" asChild>
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="The problem"
            title="The talent ecosystem is disconnected"
            description="Everyone involved in building careers holds part of the picture. Nobody holds all of it."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-7">
                <span className="flex size-12 items-center justify-center rounded-xl bg-aptired/10 text-aptired">
                  <p.icon className="size-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Why showLink={false} />

      <section className="py-24">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Platform Intelligence"
                title={
                  <>
                    AI that <span className="text-gradient-brand">learns from outcomes</span>
                  </>
                }
                description="Every placement, enrolment, loan and training completion feeds back into the platform, so recommendations get sharper for everyone with each cycle."
              />
              <div className="mt-8 flex items-center gap-3 text-sm font-medium text-muted-foreground">
                <Layers className="size-5 text-primary" />
                Built by Aptinfinity Solutions LLP
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {intelligence.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5" strokeWidth={2.1} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Lifecycle />
      <Stakeholders />
      <Stats />
      <CTA />
    </div>
  )
}
