import {
  BarChart3,
  BadgeCheck,
  FileCheck2,
  Filter,
  Globe2,
  GraduationCap,
  Handshake,
  MapPinned,
  Megaphone,
  Users,
} from "lucide-react"
import { SolutionPage } from "@/components/solutions/solution-page"

export const metadata = {
  title: "For Universities Abroad",
  description:
    "Reach qualified, verified Indian students through institutions and counsellors, and track admissions outcomes on Talent360x.",
}

export default function UniversitiesAbroadPage() {
  return (
    <SolutionPage
      badge="For Universities Abroad"
      title="Recruit Qualified Students"
      highlight="from India, Verified."
      description="Connect with motivated, pre-assessed students through Indian institutions and career counsellors - with transparent profiles, verified credentials and measurable admissions outcomes."
      primaryCta={{ label: "Partner With Us", href: "/contact" }}
      secondaryCta={{ label: "Talk to Our Team", href: "/contact" }}
      benefits={{
        heading: "Why International Universities Choose Us",
        description: "Move beyond fragmented agent networks to a transparent, outcome-driven recruitment channel.",
        items: [
          {
            icon: Users,
            title: "Quality Applicants",
            description: "Reach students with assessed skills, academic records and clear study intent.",
          },
          {
            icon: BadgeCheck,
            title: "Verified Credentials",
            description: "Reduce document fraud with institution-verified academic and skill records.",
          },
          {
            icon: Handshake,
            title: "Trusted Counsellors",
            description: "Work with vetted career counsellors who guide students to the right fit.",
          },
          {
            icon: Globe2,
            title: "Direct Campus Reach",
            description: "Engage Indian colleges and schools for fairs, webinars and articulation programs.",
          },
        ],
      }}
      features={{
        heading: "An End-to-End International Recruitment Channel",
        description: "Everything you need to attract, assess and admit the right students.",
        items: [
          {
            icon: Filter,
            title: "Smart Student Matching",
            description: "AI matches student profiles with your programs, entry requirements and intakes.",
          },
          {
            icon: Megaphone,
            title: "Program Showcases",
            description: "Publish programs, scholarships and deadlines to students and counsellors.",
          },
          {
            icon: MapPinned,
            title: "Virtual & Campus Events",
            description: "Run information sessions with partner institutions across Indian cities.",
          },
          {
            icon: FileCheck2,
            title: "Application Pipeline",
            description: "Track enquiries, applications, offers and enrolments in one place.",
          },
          {
            icon: GraduationCap,
            title: "Pathway Programs",
            description: "Build twinning, transfer and pathway partnerships with Indian institutions.",
          },
          {
            icon: BarChart3,
            title: "Outcome Analytics",
            description: "Measure conversion by source, region and counsellor to optimise recruitment spend.",
          },
        ],
      }}
      steps={{
        heading: "How It Works for Universities",
        description: "From listing to enrolment in four steps.",
        items: [
          { title: "Create University Profile", description: "Showcase programs, scholarships and requirements." },
          { title: "Connect Partners", description: "Engage institutions and counsellors across India." },
          { title: "Receive Matched Students", description: "Get pre-assessed applicants aligned to your criteria." },
          { title: "Admit & Track", description: "Monitor offers, enrolments and student outcomes." },
        ],
      }}
      spotlight={{
        badge: "Counsellor Network",
        heading: "Work With Verified Counsellors",
        description:
          "Career counsellors on our platform guide students using assessed skills and real profile data - so the students who apply are the ones most likely to succeed in your programs.",
        bullets: [
          "Transparent counsellor profiles and track records",
          "Student profiles backed by verified assessments",
          "Shared visibility of every application stage",
          "Outcome data from admission through graduation",
        ],
        cta: { label: "For Career Counsellors", href: "/solutions/career-counsellors" },
        connections: [
          { label: "Counsellors", href: "/solutions/career-counsellors" },
          { label: "Institutions", href: "/solutions/institutions" },
          { label: "Students", href: "/solutions/students" },
          { label: "Banks", href: "/solutions/banks" },
        ],
      }}
      cta={{
        heading: "Ready to Grow Your India Intake?",
        description: "Partner with us to reach verified, motivated students through a trusted ecosystem.",
        primary: { label: "Contact Us", href: "/contact" },
        secondary: { label: "Contact Us", href: "/contact" },
      }}
    />
  )
}
