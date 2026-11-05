import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Users,
  Building2,
  BarChart3,
  Clock,
  Shield,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Wallet,
  RefreshCw,
} from "lucide-react"

export const metadata = {
  title: "For Staffing Firms",
  description: "Source from a verified, AI-ranked talent pool and submit candidates with explainable match scores.",
}

export default function StaffingFirmsPage() {
  const services = [
    {
      icon: Users,
      title: "Contract Staffing",
      description: "Access pre-vetted talent for contract and temporary positions across industries",
    },
    {
      icon: RefreshCw,
      title: "Temp-to-Perm",
      description: "Flexible hiring with conversion options based on performance",
    },
    {
      icon: Wallet,
      title: "Payrolling Services",
      description: "Manage payroll compliance and benefits for contract workforce",
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Ensure labor law compliance across all staffing engagements",
    },
  ]

  const features = [
    {
      icon: BarChart3,
      title: "Demand Forecasting",
      description: "AI-powered demand signals to anticipate client requirements",
    },
    {
      icon: Clock,
      title: "Rapid Fulfillment",
      description: "Fill positions 60% faster with our matched talent pool",
    },
    {
      icon: Shield,
      title: "Verified Talent",
      description: "All candidates are skill-assessed and background verified",
    },
    {
      icon: Building2,
      title: "Enterprise Clients",
      description: "Access requirements from Fortune 500 and enterprise clients",
    },
  ]

  return (
    <div>
      <div>
        {/* Hero */}
        <section className="page-hero relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-flame/5" />
          <div className="container-site relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                For Staffing & Recruitment Firms
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Scale Your <span className="text-gradient-brand">Staffing Business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Access enterprise requirements, pre-vetted talent, and compliance tools to grow your staffing operations
                efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/signup">Partner With Us</Link>
                </Button>
                <Link href="/contact" className="inline-flex items-center text-primary hover:underline font-medium">
                  Talk to Partnership Team <ArrowRight className="ml-2 h-4 w-4" />
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
                { value: "500+", label: "Staffing Partners" },
                { value: "50K+", label: "Monthly Requirements" },
                { value: "60%", label: "Faster Fulfillment" },
                { value: "95%", label: "Compliance Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Staffing Solutions We Support</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools for all your staffing service offerings
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Staffing Firms Choose Us</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="border-border text-center">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="py-16">
          <div className="container-site">
            <div className="bg-gradient-to-r from-primary/10 to-flame/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Revenue Model</Badge>
                  <h2 className="text-3xl font-bold mb-4">Grow Your Revenue with Us</h2>
                  <p className="text-muted-foreground mb-6">
                    Access a steady stream of requirements and earn competitive margins on every placement.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "No subscription fees - pay only on success",
                      "Competitive markup on contract placements",
                      "Conversion bonuses for temp-to-perm",
                      "Volume-based incentive tiers",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/pricing">View Partner Pricing</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary">15-25%</p>
                    <p className="text-sm text-muted-foreground">Markup on Contracts</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary">8-12%</p>
                    <p className="text-sm text-muted-foreground">Perm Placement Fee</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary">30 Days</p>
                    <p className="text-sm text-muted-foreground">Payment Cycle</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary">Zero</p>
                    <p className="text-sm text-muted-foreground">Upfront Costs</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Staffing Business?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join 500+ staffing firms already partnering with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Register as Partner</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
