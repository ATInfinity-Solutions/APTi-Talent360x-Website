import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Globe, Award, Lightbulb, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us",
  description: "Learn about Talent360x, a product of Aptinfinity Solutions LLP.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We leverage cutting-edge AI and technology to solve complex talent ecosystem challenges and create value for all stakeholders.",
    },
    {
      icon: Users,
      title: "People Centric",
      description:
        "Every decision we make is centered around creating better outcomes for working professionals, employers, and partners in our ecosystem.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "We build trust through transparent processes, verified credentials, and honest communication with all stakeholders.",
    },
    {
      icon: Globe,
      title: "Inclusive Growth",
      description:
        "We believe in democratizing access to opportunities, enabling talent from all backgrounds to reach their potential.",
    },
  ]

  const stats = [
    { value: "5M+", label: "Working Professionals" },
    { value: "10K+", label: "Employers" },
    { value: "500+", label: "Training Partners" },
    { value: "2.5K+", label: "Strategic Partners" },
  ]

  const team = [
    {
      name: "Leadership Team",
      description: "Experienced professionals from IITs, IIMs, and leading tech companies driving our vision forward.",
    },
    {
      name: "Engineering",
      description: "World-class engineers building scalable AI systems that power intelligent talent matching.",
    },
    {
      name: "Product & Design",
      description: "User-focused team creating intuitive experiences for all stakeholders in the talent ecosystem.",
    },
    {
      name: "Customer Success",
      description: "Dedicated team ensuring our working professionals, employers, and partners achieve their goals.",
    },
  ]

  return (
    <div>

      <div>
        {/* Hero Section */}
        <section className="page-hero py-20 lg:py-32">
          <div className="container-site">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
                Building the Future of <span className="text-gradient-brand">Talent Intelligence</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Talent360x, a product of Aptinfinity Solutions LLP, is revolutionizing how talent, jobs, skills, and
                opportunities connect in the modern economy. We are building the most efficient global talent exchange.
              </p>
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

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28">
          <div className="container-site">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize access to employment opportunities by building an AI-powered talent ecosystem that
                    intelligently connects working professionals with the right jobs, employers with quality talent, and training
                    providers with real market demand. We aim to make the hiring process more efficient, transparent,
                    and equitable for everyone.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most efficient global talent exchange where skills, jobs, and hiring signals are
                    intelligently matched at scale. We envision a world where every individual has access to meaningful
                    employment opportunities, and every organization can build high-performing teams efficiently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container-site">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Story</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Founded by Aptinfinity Solutions LLP, our platform was born from a simple observation: the talent ecosystem is
                  fundamentally broken. Working professionals struggle to find the right opportunities, employers waste resources
                  on inefficient hiring, training providers lack visibility into real market demand, and sourcing
                  partners operate in silos.
                </p>
                <p className="mb-6">
                  We set out to build something different a unified platform that brings together all stakeholders in
                  the talent supply chain. By leveraging artificial intelligence and data-driven insights, we have
                  created an ecosystem where supply meets demand efficiently, skills are matched to opportunities
                  intelligently, and outcomes are optimized for everyone.
                </p>
                <p>
                  Today, our platform serves millions of working professionals, thousands of employers, and hundreds of training and
                  strategic partners across India. We are just getting started on our mission to transform how the world
                  connects talent with opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28">
          <div className="container-site">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <Card key={i} className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container-site">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A diverse team of passionate individuals working together to transform the talent ecosystem.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((dept, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground">{dept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Interested in joining our team?</p>
              <Button variant="outline" asChild>
                <Link href="/careers">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 lg:py-28">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Awards & Recognition</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                "Top HR Tech Startup 2025",
                "Best AI Innovation Award",
                "Nasscom Emerge 50",
                "Economic Times HR Excellence",
              ].map((award, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 bg-muted rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Join the Talent Revolution</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Be part of the ecosystem that is transforming how talent connects with opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Get Started</Link>
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
