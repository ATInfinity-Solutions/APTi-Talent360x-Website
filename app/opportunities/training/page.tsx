import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Users, Star, BookOpen, Award, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Training",
  description: "Industry-aligned courses and certifications tied to real hiring demand.",
}

export default function TrainingPage() {
  const courses = [
    {
      title: "Full Stack Web Development",
      provider: "Coding Ninjas",
      duration: "6 months",
      rating: 4.8,
      students: "50K+",
      price: "Free (Sponsored)",
      category: "Technology",
    },
    {
      title: "Data Science Bootcamp",
      provider: "UpGrad",
      duration: "4 months",
      rating: 4.7,
      students: "35K+",
      price: "Free (Sponsored)",
      category: "Data Science",
    },
    {
      title: "Digital Marketing Masterclass",
      provider: "NIIT",
      duration: "3 months",
      rating: 4.6,
      students: "25K+",
      price: "₹15,000",
      category: "Marketing",
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "Simplilearn",
      duration: "2 months",
      rating: 4.9,
      students: "40K+",
      price: "₹12,000",
      category: "Cloud",
    },
    {
      title: "Business Analytics",
      provider: "Great Learning",
      duration: "3 months",
      rating: 4.5,
      students: "20K+",
      price: "Free (Sponsored)",
      category: "Analytics",
    },
    {
      title: "UI/UX Design",
      provider: "Designboat",
      duration: "4 months",
      rating: 4.7,
      students: "15K+",
      price: "₹18,000",
      category: "Design",
    },
  ]

  const categories = [
    { name: "Technology", count: "500+" },
    { name: "Data Science", count: "200+" },
    { name: "Marketing", count: "150+" },
    { name: "Cloud & DevOps", count: "180+" },
    { name: "Finance", count: "100+" },
    { name: "Design", count: "80+" },
  ]

  return (
    <div>
      <div>
        {/* Hero */}
        <section className="page-hero relative py-16 md:py-20">
          <div className="container-site">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Training Marketplace</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Upskill with <span className="text-gradient-brand">Industry-Ready</span> Courses
              </h1>
              <p className="text-xl text-muted-foreground">
                1,000+ courses from top training providers. Many are sponsored - learn for free!
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-border">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, value: "1,000+", label: "Courses" },
                { icon: Users, value: "100+", label: "Training Providers" },
                { icon: Award, value: "500K+", label: "Certifications Issued" },
                { icon: TrendingUp, value: "75%", label: "Placement Rate" },
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
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card
                  key={category.name}
                  className="border-border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">{category.name}</CardTitle>
                    <CardDescription>{category.count} courses</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-12 bg-muted/30">
          <div className="container-site">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Courses</h2>
              <Button variant="ghost" className="text-primary" asChild>
                <Link href="/signup">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary">{course.category}</Badge>
                      {course.price.includes("Free") && (
                        <Badge className="bg-green-100 text-green-700">Sponsored</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg mt-2">{course.title}</CardTitle>
                    <CardDescription>{course.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" /> {course.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" /> {course.students}
                      </span>
                      <span className="font-semibold text-foreground">{course.price}</span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/signup">Enroll Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsored Programs */}
        <section className="py-12">
          <div className="container-site">
            <div className="bg-gradient-to-r from-primary/10 to-flame/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">100% Free Training</Badge>
                  <h2 className="text-3xl font-bold mb-4">Sponsored Training Programs</h2>
                  <p className="text-muted-foreground mb-6">
                    Many courses on our platform are fully sponsored by corporates and government programs. Learn in-demand
                    skills at zero cost.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "No fees - 100% sponsored",
                      "Industry-recognized certifications",
                      "Job placement assistance",
                      "Mentorship from industry experts",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/solutions/sponsors">View Sponsored Programs</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">200+</p>
                    <p className="text-sm text-muted-foreground">Free Courses</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Sponsors</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">100K+</p>
                    <p className="text-sm text-muted-foreground">Students Trained</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">75%</p>
                    <p className="text-sm text-muted-foreground">Placed</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-site text-center">
            <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Create your profile and get personalized course recommendations based on your career goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Get Started Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/solutions/training-providers">List Your Courses</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
