import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Zap,
  Users,
  GraduationCap,
  Coffee,
  Plane,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

export const metadata = {
  title: "Careers",
  description: "Join Aptinfinity Solutions LLP and help build the future of AI-powered talent ecosystems.",
}

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "5-8 years",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "AI/ML Engineer",
    department: "AI & Data",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-6 years",
    tags: ["Python", "TensorFlow", "NLP", "MLOps"],
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "4-7 years",
    tags: ["B2B SaaS", "HR Tech", "Agile"],
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "3-5 years",
    tags: ["Figma", "User Research", "Design Systems"],
  },
  {
    title: "Enterprise Sales Manager",
    department: "Sales",
    location: "Mumbai / Delhi",
    type: "Full-time",
    experience: "5-8 years",
    tags: ["Enterprise Sales", "HR Tech", "B2B"],
  },
  {
    title: "Customer Success Lead",
    department: "Customer Success",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "4-6 years",
    tags: ["SaaS", "Account Management", "Training"],
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family, plus mental health support",
  },
  {
    icon: Zap,
    title: "Learning Budget",
    description: "Annual learning allowance for courses, conferences, and certifications",
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    description: "Hybrid work model with flexible hours and work-from-home options",
  },
  {
    icon: Plane,
    title: "Generous PTO",
    description: "30 days paid time off plus public holidays and wellness days",
  },
  {
    icon: TrendingUp,
    title: "Stock Options",
    description: "Participate in the company's growth with employee stock options",
  },
  {
    icon: GraduationCap,
    title: "Career Growth",
    description: "Clear career paths with regular mentorship and promotion opportunities",
  },
]

const values = [
  {
    title: "Customer Obsession",
    description: "We start with the customer and work backwards. Every decision is made with their success in mind.",
  },
  {
    title: "Build for Scale",
    description: "We're building for India first, global next. Every feature is designed for massive scale.",
  },
  {
    title: "Move Fast",
    description: "Speed matters. We ship fast, learn faster, and iterate continuously.",
  },
  {
    title: "Transparency",
    description: "Open communication, honest feedback, and shared context across the team.",
  },
]

export default function CareersPage() {
  return (
    <div>
      <div>
        {/* Hero Section */}
        <section className="page-hero py-20 lg:py-28">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                We&apos;re Hiring
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                Build the Future of <span className="text-gradient-brand">Talent Ecosystems</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join Aptinfinity Solutions LLP and help connect millions of working professionals, employers, and training providers through
                AI-powered innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#openings">
                    View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide how we work, make decisions, and build products
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Join Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer competitive benefits designed to support your growth and well-being
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-16 lg:py-24 scroll-mt-20">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find your next role and help us transform the talent industry
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{position.department}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold">{position.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" /> {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {position.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" /> {position.experience}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {position.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="lg:flex-shrink-0">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Photo Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container-site">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/ai-technology-talent-matching.jpg"
                    alt="Aptinfinity Solutions LLP Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Life at Aptinfinity Solutions LLP</h2>
                  <p className="text-muted-foreground mb-6">
                    We're a diverse team of engineers, designers, product managers, and business leaders united by a
                    common mission: to transform how talent connects with opportunity.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Our office in Hyderabad is a hub of collaboration and innovation, but we also embrace remote work
                    and flexible schedules. We believe great work happens when people have the freedom to do their best.
                  </p>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-3xl font-bold text-primary">50+</p>
                      <p className="text-sm text-muted-foreground">Team Members</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">8</p>
                      <p className="text-sm text-muted-foreground">Countries</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">40%</p>
                      <p className="text-sm text-muted-foreground">Women in Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container-site">
            <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground">
              <CardContent className="p-8 lg:p-12 text-center">
                <Users className="h-12 w-12 mx-auto mb-6 opacity-80" />
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Don't see the right role?</h2>
                <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                  We're always looking for talented people to join our team. Send us your resume and we'll keep you in
                  mind for future opportunities.
                </p>
                <Button size="lg" variant="secondary">
                  Send General Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
