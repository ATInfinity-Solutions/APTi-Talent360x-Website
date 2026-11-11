import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export const metadata = {
  title: "Blog",
  description: "Insights on talent, skills, hiring and the future of work.",
}

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI-Powered Talent Matching in India",
    excerpt:
      "How artificial intelligence is revolutionizing the way employers find working professionals and job seekers discover opportunities in the Indian job market.",
    author: "Our Team",
    date: "January 10, 2026",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "/ai-technology-talent-matching.jpg",
  }

  const posts = [
    {
      title: "5 Skills Every Fresh Graduate Needs in 2026",
      excerpt: "The job market is evolving. Here are the skills that will set you apart from the competition.",
      author: "Career Team",
      date: "January 8, 2026",
      readTime: "5 min read",
      category: "Career Advice",
    },
    {
      title: "How Employers Can Reduce Time-to-Hire by 60%",
      excerpt: "Strategies and tools that leading companies are using to streamline their recruitment process.",
      author: "HR Insights",
      date: "January 5, 2026",
      readTime: "6 min read",
      category: "Employer Tips",
    },
    {
      title: "The Rise of Gig Economy in India",
      excerpt: "Understanding the shift towards flexible work arrangements and what it means for workers.",
      author: "Research Team",
      date: "January 3, 2026",
      readTime: "7 min read",
      category: "Industry Insights",
    },
    {
      title: "Training Providers: How to Increase Course Enrollments",
      excerpt: "Best practices for training providers to attract more students and improve outcomes.",
      author: "Partner Success",
      date: "December 28, 2025",
      readTime: "5 min read",
      category: "Partner Resources",
    },
    {
      title: "Building an Effective Apprenticeship Program",
      excerpt: "A guide for employers looking to develop talent through structured apprenticeship programs.",
      author: "HR Insights",
      date: "December 22, 2025",
      readTime: "8 min read",
      category: "Employer Tips",
    },
    {
      title: "Interview Tips: How to Stand Out in Virtual Interviews",
      excerpt: "Remote interviews are here to stay. Learn how to make a great impression from home.",
      author: "Career Team",
      date: "December 18, 2025",
      readTime: "4 min read",
      category: "Career Advice",
    },
  ]

  const categories = ["All", "Industry Insights", "Career Advice", "Employer Tips", "Partner Resources"]

  return (
    <div>
      <div>
        {/* Hero */}
        <section className="page-hero py-16">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Blog</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Insights & <span className="text-gradient-brand">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest trends in hiring, career development, and the talent ecosystem
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 border-b border-border">
          <div className="container-site">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary/20"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container-site">
            <Card className="border-border overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div
                  className="h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                />
                <div className="p-8">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {featuredPost.readTime}
                    </span>
                  </div>
                  <Button>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-12 bg-muted/30">
          <div className="container-site">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-site text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get the latest insights, career tips, and industry updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
