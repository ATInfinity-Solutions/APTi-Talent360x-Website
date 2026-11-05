import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  GraduationCap,
  Building2,
  Users,
  TrendingUp,
  BarChart3,
  Briefcase,
  Award,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  School,
  Globe,
} from "lucide-react"

export const metadata = {
  title: "For Educational Institutions",
  description: "Run placements, track student readiness and connect graduates to employers.",
}

export default function InstitutionsPage() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Campus Placement Portal",
      description: "Manage placement drives, employer visits, and student applications from a single dashboard",
    },
    {
      icon: TrendingUp,
      title: "Placement Analytics",
      description: "Track placement rates, salary trends, and sector-wise hiring data in real-time",
    },
    {
      icon: BookOpen,
      title: "Industry-Aligned Curriculum",
      description: "Access skill gap reports to align your curriculum with market demands",
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Offer industry-recognized certifications to enhance student employability",
    },
    {
      icon: Users,
      title: "Employer Network",
      description: "Connect with 10,000+ employers actively hiring fresh graduates",
    },
    {
      icon: BarChart3,
      title: "Student Tracking",
      description: "Monitor student progress, skill development, and career outcomes",
    },
  ]

  const institutionTypes = [
    { icon: School, title: "Universities", description: "Comprehensive placement and skill development solutions" },
    { icon: GraduationCap, title: "Engineering Colleges", description: "Technical hiring and IT placement focus" },
    { icon: Building2, title: "Management Institutes", description: "Corporate hiring and leadership programs" },
    { icon: Globe, title: "Skill Universities", description: "Vocational training and apprenticeship programs" },
  ]

  const stats = [
    { value: "500+", label: "Partner Institutions" },
    { value: "2M+", label: "Students Registered" },
    { value: "85%", label: "Average Placement Rate" },
    { value: "10K+", label: "Hiring Partners" },
  ]

  return (
    <div>
      <div>
        {/* Hero */}
        <section className="page-hero relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-flame/5" />
          <div className="container-site relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">For Educational Institutions</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Transform Your <span className="text-gradient-brand">Placement Outcomes</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Partner with us to connect your students with top employers, manage placements efficiently, and
                improve employability outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Partner With Us</Link>
                </Button>
                <Link href="/contact" className="inline-flex items-center text-primary hover:underline font-medium">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institution Types */}
        <section className="py-16">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Solutions for Every Institution Type</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you're a university, engineering college, or skill development center, we have tailored
                solutions for you
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {institutionTypes.map((type) => (
                <Card key={type.title} className="border-border hover:border-primary/50 transition-colors text-center">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Partner with Us?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive platform to manage placements, track outcomes, and connect with employers
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-border">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container-site">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">How It Works</Badge>
                <h2 className="text-3xl font-bold mb-6">Simple Onboarding, Powerful Results</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Sign Partnership Agreement",
                      description: "Quick onboarding with dedicated support",
                    },
                    {
                      step: "2",
                      title: "Upload Student Data",
                      description: "Bulk upload or integrate with your existing systems",
                    },
                    {
                      step: "3",
                      title: "Configure Placement Portal",
                      description: "Customize portal with your branding",
                    },
                    { step: "4", title: "Go Live", description: "Start connecting students with employers" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-flame/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">What You Get</h3>
                <ul className="space-y-4">
                  {[
                    "White-labeled placement portal",
                    "Employer relationship management",
                    "Student skill assessment tools",
                    "Placement analytics dashboard",
                    "Integration with existing LMS",
                    "Dedicated placement support team",
                    "Industry connect programs",
                    "Curriculum advisory reports",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Placements?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join 500+ institutions already using our platform to improve placement outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
