import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  Brain,
  Users,
  Clock,
  Shield,
  BarChart3,
  Zap,
  Target,
  FileSearch,
  PieChart,
  CheckCircle2,
  ArrowRight,
  Globe,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "For Employers",
  description: "Hire faster with AI-scored, skills-first matching and a verified talent pipeline.",
}

export default function EmployersPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Talent Matching",
      description:
        "Our intelligent algorithms analyze job requirements and match them with pre-screened working professionals for faster, quality hiring.",
    },
    {
      icon: FileSearch,
      title: "Smart Screening & Filtering",
      description:
        "Automated resume parsing and skill-based filtering to surface the most relevant working professionals instantly.",
    },
    {
      icon: Globe,
      title: "Access Global Talent Pool",
      description: "Tap into our network of 5 million+ pre-verified working professionals across industries and geographies.",
    },
    {
      icon: Shield,
      title: "Verified Credentials",
      description:
        "All working professional credentials, certifications, and work history are pre-verified for trust and compliance.",
    },
    {
      icon: BarChart3,
      title: "Hiring Analytics Dashboard",
      description: "Real-time insights into your hiring funnel, time-to-hire metrics, and working professional quality scores.",
    },
    {
      icon: Zap,
      title: "Instant Sourcing Network",
      description: "Connect with verified strategic partners to scale your talent pipeline on demand.",
    },
  ]

  const benefits = [
    "Reduce time-to-hire by up to 60%",
    "Lower recruitment costs significantly",
    "Access to pre-verified, skilled working professionals",
    "AI-driven working professional ranking and scoring",
    "Integrated assessment and evaluation tools",
    "Compliance-ready hiring workflows",
  ]

  const stats = [
    { value: "60%", label: "Faster Hiring" },
    { value: "5M+", label: "Working Professionals Network" },
    { value: "40%", label: "Cost Reduction" },
    { value: "10K+", label: "Companies Trust Us" },
  ]

  const plans = [
    { name: "Startup", jobs: "Up to 5 active jobs", price: "Free" },
    { name: "Growth", jobs: "Up to 25 active jobs", price: "Custom" },
    { name: "Enterprise", jobs: "Unlimited jobs", price: "Custom" },
  ]

  return (
    <div>

      <div>
        {/* Hero Section */}
        <section className="page-hero relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-flame/5" />
          <div className="container-site relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Building2 className="h-4 w-4" />
                  For Employers
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
                  Hire Smarter with <span className="text-gradient-brand">AI-Driven</span> Talent Intelligence
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Access millions of pre-verified working professionals, reduce hiring time by 60%, and make data-driven hiring
                  decisions with our AI-powered platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link href="/signup">
                      Start Hiring <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-card border border-border rounded-2xl shadow-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Talent Pipeline</p>
                        <p className="text-sm text-muted-foreground">Senior Developer Role</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      12 New Matches
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Rahul M.", score: 96, skills: ["React", "Node.js", "AWS"] },
                      { name: "Priya S.", score: 94, skills: ["Python", "ML", "Docker"] },
                      { name: "Amit K.", score: 91, skills: ["Java", "Spring", "K8s"] },
                    ].map((professional, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                            {professional.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{professional.name}</p>
                            <div className="flex gap-1 mt-1">
                              {professional.skills.map((skill, j) => (
                                <span key={j} className="text-xs px-1.5 py-0.5 bg-muted rounded text-muted-foreground">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-primary">{professional.score}%</span>
                          <p className="text-xs text-muted-foreground">Match</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    View All Working Professionals
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-border bg-muted/30">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 lg:py-28">
          <div className="container-site">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Hiring Tools for Modern Teams
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to find, evaluate, and hire top talent efficiently.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <Card key={i} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container-site">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Streamlined Hiring Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From job posting to offer, our platform optimizes every step of your hiring workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Post Your Job",
                  description: "Create detailed job listings with skill requirements and preferences.",
                  icon: Target,
                },
                {
                  step: "02",
                  title: "AI Matching",
                  description: "Our AI instantly matches your job with the most relevant working professionals.",
                  icon: Sparkles,
                },
                {
                  step: "03",
                  title: "Review & Assess",
                  description: "Use built-in assessments and interviews to evaluate working professionals.",
                  icon: FileSearch,
                },
                {
                  step: "04",
                  title: "Hire & Onboard",
                  description: "Extend offers and onboard seamlessly with integrated tools.",
                  icon: CheckCircle2,
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-card border border-border rounded-2xl p-6 h-full text-center">
                    <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto my-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-28">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center">
                      <PieChart className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">Hiring Analytics</p>
                      <p className="text-muted-foreground">Real-time insights</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Active Jobs", value: "12" },
                      { label: "Applications", value: "847" },
                      { label: "Interviews", value: "64" },
                      { label: "Offers Made", value: "8" },
                    ].map((metric, i) => (
                      <div key={i} className="bg-muted/50 rounded-lg p-4">
                        <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Avg. Time to Hire: 14 days (Industry: 36 days)</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Leading Companies Choose Us
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From startups to enterprises, companies trust us to build their teams efficiently.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/pricing">View Pricing Plans</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Flexible Plans for Every Business</h2>
              <p className="text-lg text-muted-foreground">Start free and scale as you grow. No hidden fees.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {plans.map((plan, i) => (
                <Card key={i} className={i === 1 ? "border-primary shadow-lg" : "border-border"}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.jobs}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold text-foreground mb-4">{plan.price}</p>
                    <Button className={i === 1 ? "w-full" : "w-full"} variant={i === 1 ? "default" : "outline"} asChild>
                      <Link href="/pricing">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join 10,000+ companies who hire smarter with us. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
