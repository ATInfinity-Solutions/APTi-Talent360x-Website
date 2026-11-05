import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Building2, BarChart3, Users, Target, ArrowRight, CheckCircle2, Globe, Shield } from "lucide-react"

export const metadata = {
  title: "For Sponsors (CSR / Govt)",
  description: "Fund skill development programs linked to measurable employment outcomes.",
}

export default function SponsorsPage() {
  const sponsorTypes = [
    {
      icon: Building2,
      title: "Corporate CSR",
      description: "Fund skill development programs aligned with your CSR objectives and hiring needs",
    },
    {
      icon: Globe,
      title: "Government Programs",
      description: "National and state skill mission programs for youth employment",
    },
    {
      icon: Heart,
      title: "NGOs & Foundations",
      description: "Social impact skilling and inclusion programs for underserved communities",
    },
  ]

  const programTypes = [
    { title: "Sponsored Training", description: "Fund training programs and get first access to trained talent" },
    { title: "Scholarship Programs", description: "Support students with scholarships linked to employment outcomes" },
    { title: "Apprenticeship Sponsorship", description: "Fund apprenticeships with guaranteed hiring pipelines" },
    { title: "Internship Funding", description: "Sponsor internships to build early talent relationships" },
  ]

  const benefits = [
    { icon: Target, title: "Targeted Impact", description: "Direct CSR spending to measurable employment outcomes" },
    {
      icon: BarChart3,
      title: "Impact Analytics",
      description: "Real-time tracking of training completion and placements",
    },
    { icon: Shield, title: "Compliance Ready", description: "Full documentation for CSR compliance and reporting" },
    { icon: Users, title: "Talent Pipeline", description: "First access to sponsored candidates for hiring" },
  ]

  return (
    <div>
      <div>
        {/* Hero */}
        <section className="page-hero relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-flame/5" />
          <div className="container-site relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">For Sponsors</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Fund Employability, <span className="text-gradient-brand">Create Impact</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're a corporate CSR team, government body, or foundation, fund skill development programs
                that lead to real employment outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Discuss Sponsorship</Link>
                </Button>
                <Link href="/contact" className="inline-flex items-center text-primary hover:underline font-medium">
                  See Impact Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "100+", label: "Active Sponsors" },
                { value: "50K+", label: "Candidates Trained" },
                { value: "75%", label: "Placement Rate" },
                { value: "₹50Cr+", label: "CSR Deployed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsor Types */}
        <section className="py-16">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Who Can Sponsor?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {sponsorTypes.map((type) => (
                <Card key={type.title} className="border-border hover:border-primary/50 transition-colors text-center">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Types */}
        <section className="py-16 bg-muted/30">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sponsorship Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to fund employability with measurable outcomes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programTypes.map((program) => (
                <Card key={program.title} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container-site">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Why Sponsor With Us</Badge>
                <h2 className="text-3xl font-bold mb-6">Turn CSR into Measurable Employment Impact</h2>
                <p className="text-muted-foreground mb-8">
                  Unlike traditional CSR spending, every rupee you invest on our platform is tracked from training
                  enrollment to job placement. Get complete visibility into your social impact.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-flame/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Impact Dashboard Includes</h3>
                <ul className="space-y-4">
                  {[
                    "Real-time training progress tracking",
                    "Candidate demographics and diversity metrics",
                    "Skill assessment scores and certifications",
                    "Placement status and salary data",
                    "Geographic impact distribution",
                    "CSR compliance documentation",
                    "ROI and impact reports",
                    "Media-ready impact stories",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Employment Impact?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's design a sponsorship program that aligns with your goals and creates measurable social impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Talk to CSR Team</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">See Impact Dashboard</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
