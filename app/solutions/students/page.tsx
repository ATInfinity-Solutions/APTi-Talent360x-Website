import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Award,
  TrendingUp,
  Building2,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata = {
  title: "For Students",
  description: "Internships, apprenticeships, skills and campus-to-career guidance for students.",
}

export default function StudentsPage() {
  const opportunities = [
    {
      icon: Briefcase,
      title: "Internships",
      description: "Paid and unpaid internships with top companies to kickstart your career",
      count: "5,000+",
    },
    {
      icon: Award,
      title: "Apprenticeships",
      description: "Learn while you earn with structured apprenticeship programs",
      count: "1,200+",
    },
    {
      icon: BookOpen,
      title: "Sponsored Training",
      description: "Free skill development programs funded by corporates and government",
      count: "800+",
    },
    {
      icon: Target,
      title: "Campus Placements",
      description: "Direct placement opportunities from 500+ hiring partners",
      count: "10,000+",
    },
  ]

  const features = [
    {
      icon: GraduationCap,
      title: "Skill Assessment",
      description: "Get your skills evaluated and receive personalized recommendations for improvement",
    },
    {
      icon: Lightbulb,
      title: "Career Guidance",
      description: "AI-powered career path suggestions based on your interests and market demand",
    },
    {
      icon: Building2,
      title: "Industry Connect",
      description: "Connect directly with industry mentors and hiring managers",
    },
    {
      icon: TrendingUp,
      title: "Employability Score",
      description: "Track your job-readiness with our comprehensive employability metrics",
    },
  ]

  const journeySteps = [
    {
      step: "1",
      title: "Create Profile",
      description: "Sign up and build your student profile with skills and interests",
    },
    { step: "2", title: "Take Assessments", description: "Complete skill assessments to showcase your capabilities" },
    { step: "3", title: "Get Matched", description: "Receive AI-matched opportunities for internships and training" },
    { step: "4", title: "Apply & Grow", description: "Apply to opportunities and track your career progression" },
  ]

  return (
    <div>
      <div>
        {/* Hero Section */}
        <section className="page-hero relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-flame/5" />
          <div className="container-site relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">For Students</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Launch Your Career with <span className="text-gradient-brand">Real Opportunities</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Access internships, apprenticeships, sponsored training, and campus placements from India's top
                employers. Your career journey starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/signup">Create Student Profile</Link>
                </Button>
                <Link
                  href="/opportunities/internships"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Browse Internships <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Opportunities Waiting for You</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover thousands of opportunities tailored for students and fresh graduates
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((opp) => (
                <Card key={opp.title} className="border-border hover:border-primary/50 transition-colors group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <opp.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{opp.title}</CardTitle>
                    <CardDescription>{opp.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">{opp.count}</p>
                    <p className="text-sm text-muted-foreground">Active Opportunities</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tools and resources designed specifically for students entering the workforce
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="border-border">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Steps */}
        <section className="py-16 bg-muted/30">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Journey to Employment</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A simple 4-step process to go from student to employed professional
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {journeySteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* College Connect */}
        <section className="py-16">
          <div className="container-site">
            <div className="bg-gradient-to-r from-primary/10 to-flame/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">College Connect</Badge>
                  <h2 className="text-3xl font-bold mb-4">Is Your College on Our Platform?</h2>
                  <p className="text-muted-foreground mb-6">
                    If your college is already partnered with us, you get exclusive access to campus placement
                    drives, sponsored training programs, and direct employer connections.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Priority access to internships",
                      "Campus placement drives",
                      "Free skill certifications",
                      "Direct recruiter connects",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild>
                    <Link href="/solutions/institutions">Check if Your College is Listed</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Partner Colleges</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary">2M+</p>
                    <p className="text-sm text-muted-foreground">Students Registered</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary">85%</p>
                    <p className="text-sm text-muted-foreground">Placement Rate</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary">1,000+</p>
                    <p className="text-sm text-muted-foreground">Hiring Partners</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join millions of students who have launched their careers through our platform. It's free to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Sign Up Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Talk to Campus Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
