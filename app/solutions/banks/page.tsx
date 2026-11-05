import {
  BadgeIndianRupee,
  BarChart3,
  Briefcase,
  FileCheck2,
  GraduationCap,
  HandCoins,
  Landmark,
  LineChart,
  ShieldCheck,
  Users,
} from "lucide-react"
import { SolutionPage } from "@/components/solutions/solution-page"

export const metadata = {
  title: "For Banks",
  description:
    "Underwrite education and skilling loans with verified student data, employability signals and placement outcomes on Talent360x.",
}

export default function BanksPage() {
  return (
    <SolutionPage
      badge="For Banks"
      title="Lend to Talent"
      highlight="with Outcome Visibility."
      description="Our platform gives banks and NBFCs verified student, course and employability data - so education and skilling loans can be originated, underwritten and monitored with confidence."
      primaryCta={{ label: "Partner With Us", href: "/contact" }}
      secondaryCta={{ label: "Talk to Our Team", href: "/contact" }}
      benefits={{
        heading: "Why Banks Partner With Us",
        description: "Turn education lending from a blind bet into an informed, outcome-linked portfolio.",
        items: [
          {
            icon: Users,
            title: "Qualified Borrowers",
            description: "Reach students and learners already assessed and enrolled in credible programs.",
          },
          {
            icon: ShieldCheck,
            title: "Verified Data",
            description: "Institution-verified academics, admissions and skill credentials reduce risk.",
          },
          {
            icon: Briefcase,
            title: "Employability Signals",
            description: "Factor in skill scores, internships and placement outcomes when underwriting.",
          },
          {
            icon: LineChart,
            title: "Portfolio Visibility",
            description: "Track borrower progress from enrolment to employment and repayment readiness.",
          },
        ],
      }}
      features={{
        heading: "Built for Education and Skilling Finance",
        description: "Products and data that fit the way banks lend to learners.",
        items: [
          {
            icon: GraduationCap,
            title: "Education Loans",
            description: "Originate loans for domestic and overseas study through counsellors and universities.",
          },
          {
            icon: HandCoins,
            title: "Skilling Finance",
            description: "Fund vocational and certification programs with training-provider verification.",
          },
          {
            icon: FileCheck2,
            title: "Digital Documentation",
            description: "Receive admission letters, fee structures and credentials digitally.",
          },
          {
            icon: BadgeIndianRupee,
            title: "Outcome-Linked Products",
            description: "Design repayment plans aligned to placement timelines and income outcomes.",
          },
          {
            icon: Landmark,
            title: "CSR & Scholarship Programs",
            description: "Run financial inclusion and scholarship initiatives with measurable impact.",
          },
          {
            icon: BarChart3,
            title: "Risk & Impact Analytics",
            description: "Monitor cohort performance, employment rates and portfolio health.",
          },
        ],
      }}
      steps={{
        heading: "How It Works for Banks",
        description: "From partnership to performing portfolio in four steps.",
        items: [
          { title: "Onboard as Lending Partner", description: "Configure loan products and eligibility criteria." },
          { title: "Receive Applications", description: "Get referrals from counsellors, institutions and students." },
          { title: "Underwrite with Data", description: "Use verified academic and employability signals." },
          { title: "Monitor Outcomes", description: "Track progress from enrolment to employment." },
        ],
      }}
      spotlight={{
        badge: "Ecosystem Lending",
        heading: "Finance the Full Talent Lifecycle",
        description:
          "Banks on our platform connect directly with the people deciding where students study and train. Every loan is backed by context - the course, the institution, the skills and the career path.",
        bullets: [
          "Referrals from career counsellors",
          "Verified admissions from universities in India and abroad",
          "Skill and placement data from training providers and employers",
          "Impact reporting for CSR and financial inclusion goals",
        ],
        cta: { label: "For Sponsors (CSR / Govt)", href: "/solutions/sponsors" },
        connections: [
          { label: "Counsellors", href: "/solutions/career-counsellors" },
          { label: "Universities Abroad", href: "/solutions/universities-abroad" },
          { label: "Training Providers", href: "/solutions/training-providers" },
          { label: "Employers", href: "/solutions/employers" },
        ],
      }}
      cta={{
        heading: "Ready to Lend With Confidence?",
        description: "Partner with us to grow an education and skilling portfolio backed by real outcomes.",
        primary: { label: "Contact Us", href: "/contact" },
        secondary: { label: "Contact Us", href: "/contact" },
      }}
    />
  )
}
