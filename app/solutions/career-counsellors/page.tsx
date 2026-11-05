import {
  BarChart3,
  BookOpenCheck,
  ClipboardList,
  Compass,
  Globe2,
  Landmark,
  LayoutDashboard,
  MessageSquare,
  Sparkles,
  Users,
} from "lucide-react"
import { SolutionPage } from "@/components/solutions/solution-page"

export const metadata = {
  title: "For Career Counsellors",
  description:
    "Guide students with assessment data, connect with universities in India and abroad, and manage applications on Talent360x.",
}

export default function CareerCounsellorsPage() {
  return (
    <SolutionPage
      badge="For Career Counsellors"
      title="Guide Every Student"
      highlight="with Data, Not Guesswork."
      description="Use verified assessments, AI recommendations and a connected network of universities, institutions and banks to help students choose the right course - in India or abroad."
      primaryCta={{ label: "Join as a Counsellor", href: "/signup" }}
      secondaryCta={{ label: "Contact Us", href: "/contact" }}
      benefits={{
        heading: "Everything a Modern Counsellor Needs",
        description: "Spend less time on paperwork and more time on meaningful guidance.",
        items: [
          {
            icon: Compass,
            title: "Data-Driven Guidance",
            description: "Recommend courses using aptitude, skills and interest assessments.",
          },
          {
            icon: Globe2,
            title: "University Network",
            description: "Access programs from universities in India and abroad in one place.",
          },
          {
            icon: Landmark,
            title: "Funding Connect",
            description: "Help students explore education loans and scholarships through partner banks.",
          },
          {
            icon: Users,
            title: "More Students",
            description: "Receive referrals from partner institutions and students seeking guidance.",
          },
        ],
      }}
      features={{
        heading: "Tools Built for Counselling Practices",
        description: "Manage every student journey from first conversation to enrolment.",
        items: [
          {
            icon: BookOpenCheck,
            title: "Student Assessments",
            description: "Assign aptitude and skill assessments and review results instantly.",
          },
          {
            icon: Sparkles,
            title: "AI Course Matching",
            description: "Shortlist programs that fit each student's profile, budget and goals.",
          },
          {
            icon: ClipboardList,
            title: "Application Tracker",
            description: "Track documents, deadlines, offers and visas for every student.",
          },
          {
            icon: MessageSquare,
            title: "Student & Parent Updates",
            description: "Keep families informed with shared progress and milestones.",
          },
          {
            icon: LayoutDashboard,
            title: "Practice Dashboard",
            description: "See your full caseload, conversions and upcoming intakes at a glance.",
          },
          {
            icon: BarChart3,
            title: "Outcome Reports",
            description: "Build credibility with verified admission and outcome records.",
          },
        ],
      }}
      steps={{
        heading: "How It Works for Counsellors",
        description: "Four steps to a more effective counselling practice.",
        items: [
          { title: "Create Your Profile", description: "List your expertise, destinations and services." },
          { title: "Assess Students", description: "Use assessments to understand strengths and goals." },
          { title: "Match & Apply", description: "Shortlist universities and manage applications." },
          { title: "Track Outcomes", description: "Follow students through admission and beyond." },
        ],
      }}
      spotlight={{
        badge: "Connected Ecosystem",
        heading: "One Network for the Whole Student Journey",
        description:
          "Counsellors sit at the centre of the student decision. Our platform connects you with every party involved - so students get complete, trustworthy guidance from course choice to funding to careers.",
        bullets: [
          "Programs from universities in India and abroad",
          "Education loan options from partner banks",
          "Referrals from schools and colleges",
          "Career outcomes linked back to course choices",
        ],
        cta: { label: "For Universities Abroad", href: "/solutions/universities-abroad" },
        connections: [
          { label: "Universities Abroad", href: "/solutions/universities-abroad" },
          { label: "Banks", href: "/solutions/banks" },
          { label: "Students", href: "/solutions/students" },
          { label: "Institutions", href: "/solutions/institutions" },
        ],
      }}
      cta={{
        heading: "Ready to Elevate Your Counselling Practice?",
        description: "Join us and guide students with the data and network they deserve.",
        primary: { label: "Sign Up Free", href: "/signup" },
        secondary: { label: "Contact Us", href: "/contact" },
      }}
    />
  )
}
