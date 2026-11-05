import {
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Megaphone,
  Network,
  RefreshCw,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react"
import { SolutionPage } from "@/components/solutions/solution-page"

export const metadata = {
  title: "For Alumni",
  description:
    "Stay connected to your institution, upskill for your next move, mentor students and refer talent through Talent360x.",
}

export default function AlumniPage() {
  return (
    <SolutionPage
      badge="For Alumni"
      title="Your Career Keeps Growing."
      highlight="So Does Your Network."
      description="Our platform keeps alumni connected to their institution and the wider ecosystem - for career moves, lifelong upskilling, mentoring and giving back to the next generation."
      primaryCta={{ label: "Join as Alumni", href: "/signup" }}
      secondaryCta={{ label: "Browse Opportunities", href: "/opportunities/jobs" }}
      benefits={{
        heading: "Built for Every Stage After Graduation",
        description: "Whether you are switching roles, upskilling or giving back, your verified profile travels with you.",
        items: [
          {
            icon: Briefcase,
            title: "Career Mobility",
            description: "Discover lateral roles, leadership positions and gigs matched to your experience.",
          },
          {
            icon: GraduationCap,
            title: "Lifelong Learning",
            description: "Reskill and upskill with training programs aligned to current market demand.",
          },
          {
            icon: HeartHandshake,
            title: "Mentor Students",
            description: "Guide students from your alma mater with career advice and industry insight.",
          },
          {
            icon: UserCheck,
            title: "Refer Talent",
            description: "Refer graduates from your institution to openings at your organisation.",
          },
        ],
      }}
      features={{
        heading: "Stay Connected, Stay Relevant",
        description: "Tools that turn your alumni identity into a lasting professional advantage.",
        items: [
          {
            icon: Network,
            title: "Alumni Network",
            description: "Reconnect with batchmates and fellow alumni across companies and geographies.",
          },
          {
            icon: Sparkles,
            title: "AI Career Insights",
            description: "Personalised skill-gap analysis and role suggestions based on your career history.",
          },
          {
            icon: TrendingUp,
            title: "Verified Career Record",
            description: "Keep credentials, certifications and achievements in one verified profile.",
          },
          {
            icon: Megaphone,
            title: "Events & Reunions",
            description: "Stay informed about institution events, webinars and industry meetups.",
          },
          {
            icon: Users,
            title: "Give Back Programs",
            description: "Sponsor scholarships, guest lecture or support placement drives for your institution.",
          },
          {
            icon: RefreshCw,
            title: "Continuous Loop",
            description: "Your outcomes feed back to your institution, strengthening programs for future batches.",
          },
        ],
      }}
      steps={{
        heading: "How It Works for Alumni",
        description: "Four simple steps to reconnect and grow.",
        items: [
          { title: "Claim Your Profile", description: "Sign up and link your profile to your institution." },
          { title: "Update Your Journey", description: "Add experience, skills and certifications." },
          { title: "Get Matched", description: "Receive roles, training and mentoring requests that fit you." },
          { title: "Grow & Give Back", description: "Advance your career while supporting the next batch." },
        ],
      }}
      spotlight={{
        badge: "Institution Connect",
        heading: "Strengthen Your Alma Mater",
        description:
          "Alumni are the strongest proof of an institution's outcomes. Our platform gives institutions a structured way to engage alumni - and gives alumni a meaningful way to contribute.",
        bullets: [
          "Mentor current students in your field",
          "Refer graduates to roles at your organisation",
          "Share hiring needs directly with placement cells",
          "Support sponsored training and scholarships",
        ],
        cta: { label: "For Educational Institutions", href: "/solutions/institutions" },
        connections: [
          { label: "Students", href: "/solutions/students" },
          { label: "Institutions", href: "/solutions/institutions" },
          { label: "Employers", href: "/solutions/employers" },
          { label: "Training Providers", href: "/solutions/training-providers" },
        ],
      }}
      cta={{
        heading: "Ready to Reconnect?",
        description: "Join us as an alumnus and keep your career - and your community - moving forward.",
        primary: { label: "Sign Up Free", href: "/signup" },
        secondary: { label: "Contact Us", href: "/contact" },
      }}
    />
  )
}
