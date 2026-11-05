import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  MapPin,
  Building2,
  Clock,
  Briefcase,
  TrendingUp,
  Filter,
  ArrowRight,
  IndianRupee,
  Users,
} from "lucide-react"

export const metadata = {
  title: "Jobs",
  description: "Find full-time roles AI-matched to your skills and preferences.",
}

export default function JobsPage() {
  const featuredJobs = [
    {
      title: "Senior Software Engineer",
      company: "Tech Mahindra",
      location: "Bangalore",
      type: "Full-time",
      salary: "18-25 LPA",
      posted: "2 days ago",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      title: "Data Analyst",
      company: "Infosys",
      location: "Hyderabad",
      type: "Full-time",
      salary: "8-12 LPA",
      posted: "1 day ago",
      skills: ["Python", "SQL", "Tableau"],
    },
    {
      title: "Product Manager",
      company: "Flipkart",
      location: "Bangalore",
      type: "Full-time",
      salary: "25-35 LPA",
      posted: "3 days ago",
      skills: ["Product Strategy", "Analytics", "Agile"],
    },
    {
      title: "UI/UX Designer",
      company: "Swiggy",
      location: "Mumbai",
      type: "Full-time",
      salary: "12-18 LPA",
      posted: "5 hours ago",
      skills: ["Figma", "User Research", "Prototyping"],
    },
    {
      title: "DevOps Engineer",
      company: "Razorpay",
      location: "Bangalore",
      type: "Full-time",
      salary: "15-22 LPA",
      posted: "1 week ago",
      skills: ["Kubernetes", "Docker", "CI/CD"],
    },
    {
      title: "Marketing Manager",
      company: "Zomato",
      location: "Delhi NCR",
      type: "Full-time",
      salary: "14-20 LPA",
      posted: "4 days ago",
      skills: ["Digital Marketing", "SEO", "Analytics"],
    },
  ]

  const categories = [
    { name: "Technology", count: "15,000+" },
    { name: "Sales & Marketing", count: "8,500+" },
    { name: "Finance", count: "5,200+" },
    { name: "Operations", count: "6,800+" },
    { name: "HR & Admin", count: "3,400+" },
    { name: "Design", count: "2,100+" },
  ]

  const topCompanies = ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", "Accenture", "IBM", "Cognizant"]

  return (
    <div>
      <div>
        {/* Hero */}
        <section className="page-hero relative py-16 md:py-20">
          <div className="container-site">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Jobs Marketplace</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Find Your <span className="text-gradient-brand">Dream Job</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                50,000+ jobs from 10,000+ companies. AI-matched to your skills and preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-border">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, value: "50,000+", label: "Active Jobs" },
                { icon: Building2, value: "10,000+", label: "Companies" },
                { icon: Users, value: "5M+", label: "Job Seekers" },
                { icon: TrendingUp, value: "85%", label: "Match Rate" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="container-site">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Browse by Category</h2>
              <Button variant="ghost" className="text-primary">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card
                  key={category.name}
                  className="border-border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">{category.name}</CardTitle>
                    <CardDescription>{category.count} jobs</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-12 bg-muted/30">
          <div className="container-site">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Jobs</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" /> Filters
                </Button>
                <Button variant="ghost" className="text-primary" asChild>
                  <Link href="/signup">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <Building2 className="h-4 w-4" /> {job.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <IndianRupee className="h-4 w-4" /> {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {job.posted}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
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

        {/* Top Companies */}
        <section className="py-12">
          <div className="container-site">
            <h2 className="text-2xl font-bold mb-6 text-center">Top Companies Hiring</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {topCompanies.map((company) => (
                <div
                  key={company}
                  className="px-6 py-3 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 cursor-pointer"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-site text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Opportunity?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Create your profile and let our AI match you with the perfect jobs
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
                <Link href="/solutions/employers">Post a Job</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
