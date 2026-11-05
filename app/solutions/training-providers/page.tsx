import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  TrendingUp,
  Award,
  BarChart3,
  BookOpen,
  Target,
  Briefcase,
  Globe,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "For Training Providers",
  description: "Connect courses to real hiring demand, acquire learners and prove placement outcomes.",
}

export default function TrainingProvidersPage() {
  const features = [
    {
      icon: Target,
      title: "Demand-Driven Curriculum",
      description:
        "Access real-time hiring data to align your courses with skills employers actually need, maximizing student placement rates.",
    },
    {
      icon: Users,
      title: "Direct Employer Connections",
      description: "Connect your graduates directly with hiring employers. Build partnerships that lead to placements.",
    },
    {
      icon: Award,
      title: "Credential Recognition",
      description:
        "Issue verified digital credentials that employers trust. Your certifications gain visibility across our network.",
    },
    {
      icon: BarChart3,
      title: "Placement Analytics",
      description: "Track student outcomes, placement rates, and employer feedback with detailed analytics dashboards.",
    },
    {
      icon: Globe,
      title: "Expand Your Reach",
      description:
        "Access millions of learners looking to upskill. Market your courses to a targeted, motivated audience.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Recommendations",
      description:
        "Our AI recommends your courses to candidates with matching skill gaps, driving qualified enrollments.",
    },
  ]

  const benefits = [
    "Increase course enrollments through targeted recommendations",
    "Improve placement rates with employer partnerships",
    "Issue industry-recognized digital credentials",
    "Access real-time labor market insights",
    "Track and showcase student outcomes",
    "Integrate with your existing LMS",
  ]

  const stats = [
    { value: "500+", label: "Training Partners" },
    { value: "85%", label: "Avg. Placement Rate" },
    { value: "2M+", label: "Learners Reached" },
    { value: "10K+", label: "Employer Network" },
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
                  <GraduationCap className="h-4 w-4" />
                  For Training Providers
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
                  Connect Training to <span className="text-gradient-brand">Employment</span> Outcomes
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Bridge the gap between education and employment. Access real hiring demand data, connect with
                  employers, and maximize your students placement success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link href="/signup">
                      Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Schedule Call</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-card border border-border rounded-2xl shadow-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Course Performance</p>
                        <p className="text-sm text-muted-foreground">Full Stack Development</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      High Demand
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Enrollments", value: "1,247", trend: "+23%" },
                      { label: "Completions", value: "892", trend: "+18%" },
                      { label: "Placements", value: "756", trend: "+31%" },
                      { label: "Avg. Salary", value: "₹8.5L", trend: "+12%" },
                    ].map((metric, i) => (
                      <div key={i} className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <p className="text-xl font-bold text-foreground">{metric.value}</p>
                          <span className="text-xs font-medium text-green-600">{metric.trend}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium text-foreground mb-2">Top Hiring Employers</p>
                    <div className="flex items-center gap-2">
                      {["Tech Co", "StartupX", "Global IT", "FinServ"].map((company, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tools to Maximize Training Impact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to align your training programs with real market demand.
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partner Success Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From onboarding to placements, we support you at every step.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Onboard & Integrate",
                  description: "Connect your LMS and upload course catalogs to our platform.",
                  icon: BookOpen,
                },
                {
                  step: "02",
                  title: "Access Demand Data",
                  description: "Get insights on hiring trends and skill gaps to optimize curriculum.",
                  icon: TrendingUp,
                },
                {
                  step: "03",
                  title: "Reach Learners",
                  description: "AI recommends your courses to candidates with matching skill needs.",
                  icon: Users,
                },
                {
                  step: "04",
                  title: "Track Outcomes",
                  description: "Monitor enrollments, completions, and placement success rates.",
                  icon: BarChart3,
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
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Training Partners Choose Us
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join 500+ training providers who have improved their placement outcomes and enrollment rates.
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
                  <Link href="/signup">Become a Partner</Link>
                </Button>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center">
                    <Building className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">Employer Demand</p>
                    <p className="text-muted-foreground">Top skills this quarter</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { skill: "Cloud Computing (AWS/Azure)", demand: 92 },
                    { skill: "Data Science & ML", demand: 88 },
                    { skill: "Full Stack Development", demand: 85 },
                    { skill: "DevOps & SRE", demand: 79 },
                    { skill: "Cybersecurity", demand: 74 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{item.skill}</span>
                        <span className="text-sm text-muted-foreground">{item.demand}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${item.demand}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span>Based on 10,000+ active job listings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Boost Your Placement Outcomes?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Partner with us and connect your training programs directly to employment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Become a Partner</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Talk to Partnership Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
