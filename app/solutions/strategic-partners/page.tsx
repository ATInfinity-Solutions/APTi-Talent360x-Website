import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Handshake,
  Users,
  TrendingUp,
  DollarSign,
  BarChart3,
  Target,
  Building2,
  Globe,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Wallet,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "For Strategic Partners",
  description: "Partner with Talent360x to access verified hiring demand and grow together.",
}

export default function StrategicPartnersPage() {
  const features = [
    {
      icon: Building2,
      title: "Access Top Employers",
      description:
        "Get direct access to hiring requirements from 10,000+ verified employers across industries and locations.",
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description:
        "Our AI matches your working professional pool with the most relevant opportunities, maximizing placement success.",
    },
    {
      icon: DollarSign,
      title: "Transparent Payouts",
      description:
        "Clear commission structures and timely payouts. Track your earnings in real-time through our dashboard.",
    },
    {
      icon: Shield,
      title: "Verified Working Professional Profiles",
      description: "Upload and verify working professional credentials through our platform, building trust with employers.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track submissions, interviews, placements, and conversion rates with detailed analytics.",
    },
    {
      icon: Zap,
      title: "Fast-Track Submissions",
      description: "Priority submission queue for top-performing partners. Get your working professionals seen first.",
    },
  ]

  const benefits = [
    "Direct access to enterprise hiring requirements",
    "Competitive commission rates with timely payouts",
    "Real-time visibility into working professional status",
    "AI-powered job matching for your talent pool",
    "Dedicated partner success manager",
    "Performance-based incentives and bonuses",
  ]

  const stats = [
    { value: "2,500+", label: "Active Partners" },
    { value: "₹50Cr+", label: "Payouts Made" },
    { value: "15K+", label: "Monthly Placements" },
    { value: "48hrs", label: "Avg. Payout Time" },
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
                  <Handshake className="h-4 w-4" />
                  For Strategic Partners
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
                  Grow Together as a <span className="text-gradient-brand">Strategic Partner</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Sourcing agencies, channel and technology partners access verified hiring requirements from top
                  employers, submit working professionals seamlessly, and earn competitive commissions with transparent payouts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link href="/signup">
                      Join as Partner <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-card border border-border rounded-2xl shadow-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Wallet className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Partner Dashboard</p>
                        <p className="text-sm text-muted-foreground">This Month Performance</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Submissions", value: "142", trend: "+18%" },
                      { label: "Interviews", value: "67", trend: "+24%" },
                      { label: "Placements", value: "23", trend: "+31%" },
                      { label: "Earnings", value: "₹4.6L", trend: "+28%" },
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
                    <p className="text-sm font-medium text-foreground mb-3">Active Requirements</p>
                    <div className="space-y-2">
                      {[
                        { role: "Senior React Developer", company: "TechCorp", positions: 5 },
                        { role: "Data Engineer", company: "DataCo", positions: 3 },
                        { role: "DevOps Lead", company: "CloudInc", positions: 2 },
                      ].map((req, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <div>
                            <span className="text-foreground">{req.role}</span>
                            <span className="text-muted-foreground"> - {req.company}</span>
                          </div>
                          <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">
                            {req.positions} open
                          </span>
                        </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need to Succeed</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful tools and support to help you scale your staffing business.
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple Partnership Model</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start earning in days, not weeks. Our streamlined process gets you up and running fast.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Register & Verify",
                  description: "Complete partner registration and verification to access the platform.",
                  icon: Users,
                },
                {
                  step: "02",
                  title: "Access Requirements",
                  description: "Browse and accept hiring requirements that match your working professional pool.",
                  icon: Target,
                },
                {
                  step: "03",
                  title: "Submit Working Professionals",
                  description: "Upload verified working professional profiles and track their progress in real-time.",
                  icon: Zap,
                },
                {
                  step: "04",
                  title: "Earn & Grow",
                  description: "Get paid on successful placements. Unlock higher tiers with performance.",
                  icon: TrendingUp,
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

        {/* Commission Tiers */}
        <section className="py-20 lg:py-28">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partner Commission Tiers</h2>
              <p className="text-lg text-muted-foreground">
                Earn more as you grow. Performance-based tiers reward your success.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  tier: "Bronze",
                  placements: "1-10 / month",
                  commission: "8%",
                  features: ["Standard support", "Basic analytics", "Weekly payouts"],
                },
                {
                  tier: "Silver",
                  placements: "11-30 / month",
                  commission: "10%",
                  features: ["Priority support", "Advanced analytics", "Bi-weekly payouts", "Bonus incentives"],
                  popular: true,
                },
                {
                  tier: "Gold",
                  placements: "31+ / month",
                  commission: "12%",
                  features: [
                    "Dedicated manager",
                    "Custom analytics",
                    "Weekly payouts",
                    "Premium incentives",
                    "Early requirement access",
                  ],
                },
              ].map((plan, i) => (
                <Card key={i} className={plan.popular ? "border-primary shadow-lg relative" : "border-border"}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-2xl">{plan.tier}</CardTitle>
                    <CardDescription>{plan.placements}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold text-primary mb-6">{plan.commission}</p>
                    <ul className="space-y-3 text-left mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Partners Choose Us</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join 2,500+ partners who have scaled their business with our platform.
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
                  <Link href="/signup">Start Earning Today</Link>
                </Button>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center">
                    <Globe className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">Live Requirements</p>
                    <p className="text-muted-foreground">Updated in real-time</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { location: "Bangalore", openings: 1247, avg: "₹18,000" },
                    { location: "Hyderabad", openings: 892, avg: "₹16,500" },
                    { location: "Pune", openings: 654, avg: "₹15,000" },
                    { location: "Chennai", openings: 521, avg: "₹14,500" },
                    { location: "Mumbai", openings: 489, avg: "₹19,000" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{item.location}</p>
                        <p className="text-xs text-muted-foreground">{item.openings} openings</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{item.avg}</p>
                        <p className="text-xs text-muted-foreground">Avg. commission</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Updated 5 minutes ago</span>
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
              Ready to Grow With Us?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our strategic partner network and access thousands of verified hiring requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Register as Partner</Link>
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
