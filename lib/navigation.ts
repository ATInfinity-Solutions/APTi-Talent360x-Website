import type { LucideIcon } from "lucide-react"
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Compass,
  Globe,
  GraduationCap,
  Hammer,
  Handshake,
  HeartHandshake,
  Landmark,
  Laptop,
  School,
  UserRound,
  Users,
  Wrench,
} from "lucide-react"
import { loginUrl, registerUrl } from "@/lib/stakeholders"

export type NavLink = {
  label: string
  href: string
  description?: string
  icon?: LucideIcon
}

export type NavGroup = {
  label: string
  links: NavLink[]
}

export const solutionGroups: NavGroup[] = [
  {
    label: "For Talent",
    links: [
      {
        label: "Candidates",
        href: "/solutions/candidates",
        description: "Verified profile, matched jobs",
        icon: UserRound,
      },
      {
        label: "Students",
        href: "/solutions/students",
        description: "Campus to career, guided",
        icon: GraduationCap,
      },
      {
        label: "Alumni",
        href: "/solutions/alumni",
        description: "A lifelong talent record",
        icon: Award,
      },
    ],
  },
  {
    label: "For Education",
    links: [
      {
        label: "Educational Institutions",
        href: "/solutions/institutions",
        description: "Placements and outcomes",
        icon: School,
      },
      {
        label: "Training Providers",
        href: "/solutions/training-providers",
        description: "Close real skill gaps",
        icon: BookOpen,
      },
      {
        label: "Universities Abroad",
        href: "/solutions/universities-abroad",
        description: "Recruit verified students",
        icon: Globe,
      },
      {
        label: "Career Counsellors",
        href: "/solutions/career-counsellors",
        description: "AI-matched pathways",
        icon: Compass,
      },
    ],
  },
  {
    label: "For Hiring",
    links: [
      {
        label: "Employers",
        href: "/solutions/employers",
        description: "AI-scored, skills-first hiring",
        icon: Building2,
      },
      {
        label: "Staffing Firms",
        href: "/solutions/staffing-firms",
        description: "A ranked, verified talent pool",
        icon: Users,
      },
    ],
  },
  {
    label: "For Partners & Funders",
    links: [
      {
        label: "Strategic Partners",
        href: "/solutions/strategic-partners",
        description: "Co-sell, integrate and grow",
        icon: Handshake,
      },
      {
        label: "Sponsors (CSR / Govt)",
        href: "/solutions/sponsors",
        description: "Fund measurable impact",
        icon: HeartHandshake,
      },
      {
        label: "Banks",
        href: "/solutions/banks",
        description: "Skill-linked lending",
        icon: Landmark,
      },
    ],
  },
]

export const opportunityLinks: NavLink[] = [
  { label: "Jobs", href: "/opportunities/jobs", description: "Full-time roles across sectors", icon: Briefcase },
  {
    label: "Internships",
    href: "/opportunities/internships",
    description: "Hands-on early-career experience",
    icon: Laptop,
  },
  { label: "Training", href: "/opportunities/training", description: "Courses tied to hiring demand", icon: BookOpen },
  { label: "Gigs & Contracts", href: "/opportunities/gigs", description: "Flexible project work", icon: Wrench },
  {
    label: "Apprenticeships",
    href: "/opportunities/apprenticeships",
    description: "Earn while you learn",
    icon: Hammer,
  },
]

export const primaryNav = {
  pricing: { label: "Pricing", href: "/pricing" },
  why: { label: "Why Talent360x", href: "/why-talent360x" },
  contact: { label: "Contact Us", href: "/contact" },
  signIn: { label: "Sign In", href: loginUrl },
  signUp: { label: "Sign Up", href: registerUrl },
} as const

export const footerGroups: NavGroup[] = [
  {
    label: "Solutions",
    links: [...solutionGroups[0].links, ...solutionGroups[1].links].map(({ label, href }) => ({ label, href })),
  },
  {
    label: "For Organisations",
    links: [...solutionGroups[2].links, ...solutionGroups[3].links].map(({ label, href }) => ({ label, href })),
  },
  {
    label: "Opportunities",
    links: opportunityLinks.map(({ label, href }) => ({ label, href })),
  },
  {
    label: "Company",
    links: [
      { label: "Why Talent360x", href: "/why-talent360x" },
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
]

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
]
