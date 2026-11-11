import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Search,
  Brain,
  GraduationCap,
  TrendingUp,
  FileCheck,
  Users,
  Award,
  Briefcase,
  Target,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "For Working Professionals",
  description: "AI-powered job matching, skill development paths and verified credentials for job seekers.",
}

export default function WorkingProfessionalsPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Job Matching",
      description:
        "Our intelligent algorithms analyze your skills, experience, and preferences to match you with the most relevant opportunities.",
    },
    {
      icon: Search,
      title: "Smart Job Discovery",
      description:
        "Discover hidden opportunities across industries. Our platform aggregates jobs from multiple sources for comprehensive coverage.",
    },
    {
      icon: GraduationCap,
      title: "Skill Development Paths",
      description:
        "Access personalized learning recommendations to bridge skill gaps and advance your career trajectory.",
    },
    {
      icon: FileCheck,
      title: "Credential Verification",
      description:
        "Showcase verified certifications and credentials that employers trust, increasing your visibility and credibility.",
    },
    {
      icon: TrendingUp,
      title: "Career Progression Insights",
      description: "Get data-driven insights on salary trends, in-demand skills, and career paths in your industry.",
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Receive tailored job alerts and training suggestions based on your profile and career goals.",
    },
  ]

  const benefits = [
    "Access to 50,000+ verified job opportunities",
    "AI-driven skill gap analysis and recommendations",
    "Direct connection to top employers",
    "Free access to certification courses",
    "Real-time application tracking",
    "Salary insights and negotiation support",
  ]

  const stats = [
    { value: "85%", label: "Placement Success Rate" },
    { value: "50K+", label: "Active Job Listings" },
    { value: "10K+", label: "Partner Employers" },
    { value: "48hrs", label: "Avg. Response Time" },
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
                  <Users className="h-4 w-4" />
                  For Job Seekers
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
                  Launch Your Career with <span className="text-gradient-brand">AI-Powered</span> Job Matching
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Join millions of professionals who found their dream jobs through our platform. Our AI matches your
                  skills with the right opportunities instantly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link href="/signup">
                      Create Free Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#features">Explore Features</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-card border border-border rounded-2xl shadow-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Job Matches for You</p>
                      <p className="text-sm text-muted-foreground">Based on your profile</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "Senior Software Engineer", company: "Tech Corp", match: "95%" },
                      { title: "Full Stack Developer", company: "StartupXYZ", match: "92%" },
                      { title: "Product Manager", company: "Innovation Labs", match: "88%" },
                    ].map((job, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div>
                          <p className="font-medium text-foreground">{job.title}</p>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            {job.match} Match
                          </span>
                        </div>
                      </div>
                    ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need to Succeed</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful tools and AI-driven insights to accelerate your job search and career growth.
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Start Your Journey in 3 Steps</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting started is quick and easy. Create your profile and let our AI do the rest.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Create Your Profile",
                  description:
                    "Sign up and build your professional profile with skills, experience, and career preferences.",
                  icon: Users,
                },
                {
                  step: "02",
                  title: "Get AI Matches",
                  description:
                    "Our AI analyzes your profile and matches you with relevant jobs and training opportunities.",
                  icon: Brain,
                },
                {
                  step: "03",
                  title: "Apply & Grow",
                  description: "Apply to matched positions, track applications, and access resources to upskill.",
                  icon: TrendingUp,
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-card border border-border rounded-2xl p-8 h-full">
                    <span className="text-5xl font-bold text-primary/20">{item.step}</span>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center my-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose Us?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of successful professionals who accelerated their careers through our platform.
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
                  <Link href="/signup">Get Started Free</Link>
                </Button>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">Skill Dashboard</p>
                    <p className="text-muted-foreground">Track your progress</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { skill: "JavaScript", level: 85 },
                    { skill: "React", level: 78 },
                    { skill: "Node.js", level: 72 },
                    { skill: "TypeScript", level: 65 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{item.skill}</span>
                        <span className="text-sm text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BarChart3 className="h-4 w-4" />
                    <span>AI-powered skill assessment</span>
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
              Ready to Find Your Dream Job?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join millions of working professionals who found their perfect career match through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Create Free Account</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
