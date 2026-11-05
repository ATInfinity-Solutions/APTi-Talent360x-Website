import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MapPin, Clock, IndianRupee, Briefcase, Calendar, ArrowRight, Zap } from "lucide-react"

export const metadata = {
  title: "Gigs & Contracts",
  description: "Flexible project-based work and contracts for skilled professionals.",
}

export default function GigsPage() {
  const gigs = [
    {
      title: "React Developer",
      company: "Startup XYZ",
      location: "Remote",
      duration: "3 months",
      budget: "1.5-2 Lakh",
      type: "Contract",
      posted: "1 day ago",
      skills: ["React", "TypeScript", "Node.js"],
    },
    {
      title: "Content Writer",
      company: "Digital Agency",
      location: "Remote",
      duration: "1 month",
      budget: "30-40K",
      type: "Project",
      posted: "2 days ago",
      skills: ["SEO Writing", "Blog", "Copywriting"],
    },
    {
      title: "Data Entry Specialist",
      company: "BPO Services",
      location: "Bangalore",
      duration: "2 months",
      budget: "25-30K/month",
      type: "Contract",
      posted: "3 days ago",
      skills: ["Excel", "Data Entry", "Accuracy"],
    },
    {
      title: "Graphic Designer",
      company: "E-commerce Co",
      location: "Remote",
      duration: "1 month",
      budget: "50-60K",
      type: "Project",
      posted: "1 week ago",
      skills: ["Photoshop", "Illustrator", "Branding"],
    },
    {
      title: "Python Developer",
      company: "Analytics Firm",
      location: "Hyderabad",
      duration: "6 months",
      budget: "3-4 Lakh",
      type: "Contract",
      posted: "4 days ago",
      skills: ["Python", "Django", "APIs"],
    },
    {
      title: "Video Editor",
      company: "Media House",
      location: "Remote",
      duration: "2 months",
      budget: "40-50K/month",
      type: "Contract",
      posted: "5 days ago",
      skills: ["Premiere Pro", "After Effects", "Motion Graphics"],
    },
  ]

  const categories = [
    { name: "Technology", count: "3,000+" },
    { name: "Content & Writing", count: "1,500+" },
    { name: "Design", count: "1,200+" },
    { name: "Data Entry", count: "2,000+" },
    { name: "Marketing", count: "800+" },
    { name: "Admin Support", count: "1,000+" },
  ]

  return (
    <div>
      <div>
        {/* Hero */}
        <section className="page-hero relative py-16 md:py-20">
          <div className="container-site">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Gigs & Contracts</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Flexible <span className="text-gradient-brand">Work Opportunities</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                10,000+ gigs and contract opportunities. Work on your terms with top companies.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-border">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "10,000+", label: "Active Gigs" },
                { value: "5,000+", label: "Companies" },
                { value: "50K+", label: "Gig Workers" },
                { value: "48hrs", label: "Avg. Response" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="container-site">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card
                  key={category.name}
                  className="border-border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">{category.name}</CardTitle>
                    <CardDescription>{category.count} gigs</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Gigs */}
        <section className="py-12 bg-muted/30">
          <div className="container-site">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Gigs</h2>
              <Button variant="ghost" className="text-primary" asChild>
                <Link href="/signup">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gigs.map((gig, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{gig.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <Briefcase className="h-4 w-4" /> {gig.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{gig.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {gig.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> {gig.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" /> {gig.budget}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {gig.posted}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {gig.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
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

        {/* Why Gig Work */}
        <section className="py-12">
          <div className="container-site">
            <div className="bg-gradient-to-r from-primary/10 to-flame/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Why Gig Work?</h2>
                  <p className="text-muted-foreground mb-6">
                    Gig economy offers flexibility, diverse experiences, and the ability to work on multiple projects.
                    Perfect for freelancers and professionals seeking work-life balance.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Flexibility", desc: "Work on your schedule" },
                      { label: "Variety", desc: "Diverse projects" },
                      { label: "Income", desc: "Multiple revenue streams" },
                      { label: "Skills", desc: "Build diverse portfolio" },
                    ].map((item) => (
                      <div key={item.label}>
                        <p className="font-semibold">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">50K+</p>
                    <p className="text-sm text-muted-foreground">Active Gig Workers</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">₹75K</p>
                    <p className="text-sm text-muted-foreground">Avg. Monthly Earning</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">4.5</p>
                    <p className="text-sm text-muted-foreground">Avg. Rating</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">85%</p>
                    <p className="text-sm text-muted-foreground">Repeat Clients</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-site text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Gig Journey</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Create your profile and start applying to gigs that match your skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Join as Freelancer</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/solutions/employers">Post a Gig</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
