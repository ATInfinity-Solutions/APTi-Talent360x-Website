import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MapPin, Building2, Clock, GraduationCap, IndianRupee, Calendar, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Internships",
  description: "Hands-on internships with leading organisations to kick-start your career.",
}

export default function InternshipsPage() {
  const internships = [
    {
      title: "Software Development Intern",
      company: "Microsoft India",
      location: "Bangalore",
      duration: "6 months",
      stipend: "50,000/month",
      type: "Paid",
      posted: "1 day ago",
    },
    {
      title: "Data Science Intern",
      company: "Amazon",
      location: "Hyderabad",
      duration: "3 months",
      stipend: "40,000/month",
      type: "Paid",
      posted: "3 days ago",
    },
    {
      title: "Marketing Intern",
      company: "Unilever",
      location: "Mumbai",
      duration: "6 months",
      stipend: "25,000/month",
      type: "Paid",
      posted: "1 week ago",
    },
    {
      title: "UI/UX Design Intern",
      company: "Paytm",
      location: "Remote",
      duration: "3 months",
      stipend: "20,000/month",
      type: "Paid",
      posted: "2 days ago",
    },
    {
      title: "Finance Intern",
      company: "Goldman Sachs",
      location: "Bangalore",
      duration: "2 months",
      stipend: "60,000/month",
      type: "Paid",
      posted: "5 days ago",
    },
    {
      title: "HR Intern",
      company: "Deloitte",
      location: "Delhi NCR",
      duration: "3 months",
      stipend: "15,000/month",
      type: "Paid",
      posted: "4 days ago",
    },
  ]

  const categories = [
    { name: "Technology", count: "5,000+" },
    { name: "Marketing", count: "2,500+" },
    { name: "Finance", count: "1,800+" },
    { name: "Design", count: "1,200+" },
    { name: "Operations", count: "900+" },
    { name: "HR", count: "600+" },
  ]

  return (
    <div>
      <div>
        {/* Hero */}
        <section className="page-hero relative py-16 md:py-20">
          <div className="container-site">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Internships</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Kickstart Your <span className="text-gradient-brand">Career</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                15,000+ internships from top companies. Build real experience while you learn.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-border">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "15,000+", label: "Internships" },
                { value: "5,000+", label: "Companies" },
                { value: "80%", label: "Conversion Rate" },
                { value: "2M+", label: "Students" },
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
                    <CardDescription>{category.count}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Internships */}
        <section className="py-12 bg-muted/30">
          <div className="container-site">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Internships</h2>
              <Button variant="ghost" className="text-primary" asChild>
                <Link href="/signup">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{internship.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <Building2 className="h-4 w-4" /> {internship.company}
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-700">{internship.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {internship.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> {internship.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" /> {internship.stipend}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {internship.posted}
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

        {/* For Students */}
        <section className="py-12">
          <div className="container-site">
            <div className="bg-gradient-to-r from-primary/10 to-flame/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <GraduationCap className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">College Student?</h2>
                  <p className="text-muted-foreground mb-6">
                    Check if your college is partnered with us for exclusive internship access and placement
                    support.
                  </p>
                  <Button asChild>
                    <Link href="/solutions/students">Learn More</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Partner Colleges</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">80%</p>
                    <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">50K</p>
                    <p className="text-sm text-muted-foreground">Avg Stipend</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">3-6</p>
                    <p className="text-sm text-muted-foreground">Months Duration</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-site text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Career Journey</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Create your profile and get matched with internships that align with your career goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Create Free Profile</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/solutions/employers">Post Internships</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
