import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  GraduationCap,
  Building2,
  Clock,
  IndianRupee,
  Award,
  BookOpen,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Target,
} from "lucide-react"

export const metadata = {
  title: "Apprenticeships",
  description: "Earn while you learn with structured apprenticeship programs.",
}

export default function ApprenticeshipsPage() {
  const apprenticeships = [
    {
      title: "Software Developer Apprentice",
      company: "Tata Consultancy Services",
      location: "Multiple Cities",
      duration: "12 months",
      stipend: "15,000/month",
      type: "NAPS",
      posted: "1 week ago",
    },
    {
      title: "Data Analyst Apprentice",
      company: "Infosys",
      location: "Bangalore",
      duration: "12 months",
      stipend: "12,000/month",
      type: "NAPS",
      posted: "3 days ago",
    },
    {
      title: "Mechanical Technician Apprentice",
      company: "Maruti Suzuki",
      location: "Gurgaon",
      duration: "24 months",
      stipend: "10,000/month",
      type: "NATS",
      posted: "1 week ago",
    },
    {
      title: "Electrician Apprentice",
      company: "L&T",
      location: "Chennai",
      duration: "12 months",
      stipend: "8,000/month",
      type: "NAPS",
      posted: "5 days ago",
    },
    {
      title: "Accounts Apprentice",
      company: "HDFC Bank",
      location: "Mumbai",
      duration: "12 months",
      stipend: "12,000/month",
      type: "NAPS",
      posted: "2 days ago",
    },
    {
      title: "Customer Service Apprentice",
      company: "Amazon India",
      location: "Hyderabad",
      duration: "12 months",
      stipend: "10,000/month",
      type: "NAPS",
      posted: "4 days ago",
    },
  ]

  const benefits = [
    { icon: BookOpen, title: "Learn & Earn", description: "Structured on-the-job training with monthly stipend" },
    { icon: Award, title: "Govt. Certification", description: "NCVT/SCVT recognized certificates" },
    { icon: Briefcase, title: "Job Guarantee", description: "High conversion to full-time employment" },
    { icon: Target, title: "Skill Development", description: "Industry-relevant practical skills" },
  ]

  return (
    <div>
      <div>
        {/* Hero */}
        <section className="page-hero relative py-16 md:py-20">
          <div className="container-site">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Apprenticeships</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Learn While You <span className="text-gradient-brand">Earn</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Government-sponsored apprenticeship programs with top companies. Get trained, certified, and employed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/signup">Apply for Apprenticeships</Link>
                </Button>
                <Link href="#programs" className="inline-flex items-center text-primary hover:underline font-medium">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-border">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "5,000+", label: "Apprenticeships" },
                { value: "1,000+", label: "Companies" },
                { value: "80%", label: "Conversion Rate" },
                { value: "50K+", label: "Apprentices Trained" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12">
          <div className="container-site">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Apprenticeship?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-border text-center">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Types */}
        <section className="py-12 bg-muted/30">
          <div className="container-site">
            <h2 className="text-2xl font-bold mb-8 text-center">Government Apprenticeship Schemes</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-border">
                <CardHeader>
                  <Badge className="w-fit mb-2">NAPS</Badge>
                  <CardTitle>National Apprenticeship Promotion Scheme</CardTitle>
                  <CardDescription>
                    Designed for ITI pass-outs and graduates. 12-month structured training with industry partners.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Government stipend support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      NCVT certification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Industry-relevant skills
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <Badge className="w-fit mb-2">NATS</Badge>
                  <CardTitle>National Apprenticeship Training Scheme</CardTitle>
                  <CardDescription>
                    For degree holders and diploma engineers. 12-24 month training in core engineering and technical
                    fields.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Higher stipend brackets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Professional certification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Fast-track to employment
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Apprenticeships */}
        <section id="programs" className="py-12">
          <div className="container-site">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Apprenticeships</h2>
              <Button variant="ghost" className="text-primary" asChild>
                <Link href="/signup">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apprenticeships.map((apprenticeship, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{apprenticeship.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <Building2 className="h-4 w-4" /> {apprenticeship.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{apprenticeship.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <GraduationCap className="h-4 w-4" /> {apprenticeship.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {apprenticeship.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" /> {apprenticeship.stipend}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="h-4 w-4" /> {apprenticeship.posted}
                      </span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/signup">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-site text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Apprenticeship Journey</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get trained by top companies, earn while you learn, and secure your career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/solutions/employers">Hire Apprentices</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
