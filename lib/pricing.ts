import type { LucideIcon } from "lucide-react"
import { solutionGroups } from "@/lib/navigation"

export type Plan = {
  name: string
  /** A number is a monthly price in rupees; strings ("Free", "Custom") are shown as-is. */
  price: number | string
  /** Shown after a non-numeric price, e.g. "forever". */
  period?: string
  description: string
  features: string[]
  cta: { label: string; href: string }
  popular?: boolean
}

export const YEARLY_DISCOUNT = 0.2

export type Tier = { name: string; value: string; detail: string; highlight?: boolean }

type PricingModel =
  | { kind: "plans"; plans: Plan[] }
  | { kind: "tiers"; title: string; description: string; tiers: Tier[]; cta: { label: string; href: string } }

export type StakeholderPricing = { slug: string; label: string; icon?: LucideIcon } & PricingModel

const signUp = (label = "Get Started") => ({ label, href: "/signup" })
const trial = signUp("Start Free Trial")
const sales = { label: "Contact Sales", href: "/contact" }

const pricing: Record<string, PricingModel> = {
  candidates: {
    kind: "plans",
    plans: [
      {
        name: "Free",
        price: "₹0",
        period: "forever",
        description: "Get started with essential job search tools",
        features: ["Create professional profile", "Apply to up to 20 jobs/month", "Basic job matching", "Email notifications", "Resume builder"],
        cta: signUp(),
      },
      {
        name: "Pro",
        price: 499,
        description: "Accelerate your job search with premium features",
        features: ["Everything in Free", "Unlimited job applications", "AI-powered job matching", "Priority application review", "Salary insights & benchmarks", "Skill gap analysis"],
        cta: trial,
        popular: true,
      },
      {
        name: "Premium",
        price: 999,
        description: "Maximum visibility and exclusive opportunities",
        features: ["Everything in Pro", "Profile featured to employers", "Direct recruiter messaging", "Exclusive job listings", "1-on-1 interview coaching", "Resume review by experts"],
        cta: trial,
      },
    ],
  },
  students: {
    kind: "plans",
    plans: [
      {
        name: "Free",
        price: "₹0",
        period: "forever",
        description: "Start building your career while you study",
        features: ["Student profile & skill wallet", "Internship and apprenticeship matching", "Aptitude assessments", "Campus drive applications", "Email notifications"],
        cta: signUp(),
      },
      {
        name: "Student Pro",
        price: 199,
        description: "Get placement-ready faster",
        features: ["Everything in Free", "AI career pathway guidance", "Unlimited applications", "Mock interviews & feedback", "Skill gap analysis", "Priority internship alerts"],
        cta: trial,
        popular: true,
      },
      {
        name: "Campus Access",
        price: "Included",
        period: "via your institution",
        description: "Premium access sponsored by your college",
        features: ["Everything in Student Pro", "Exclusive campus placement drives", "Sponsored training programs", "Placement cell support", "Verified academic records"],
        cta: { label: "Check Your College", href: "/solutions/institutions" },
      },
    ],
  },
  alumni: {
    kind: "plans",
    plans: [
      {
        name: "Free",
        price: "₹0",
        period: "forever",
        description: "Stay connected to your institution and network",
        features: ["Verified alumni profile", "Alumni network access", "Job and gig matching", "Institution events & updates", "Mentor sign-up"],
        cta: signUp(),
      },
      {
        name: "Alumni Pro",
        price: 299,
        description: "Plan your next career move",
        features: ["Everything in Free", "AI career-move recommendations", "Upskilling pathways", "Priority recruiter visibility", "Salary insights & benchmarks", "Unlimited applications"],
        cta: trial,
        popular: true,
      },
      {
        name: "Premium",
        price: 699,
        description: "Leadership roles and personalised coaching",
        features: ["Everything in Alumni Pro", "Leadership & lateral role listings", "Direct recruiter messaging", "1-on-1 career coaching", "Executive profile review"],
        cta: trial,
      },
    ],
  },
  institutions: {
    kind: "plans",
    plans: [
      {
        name: "Starter",
        price: "Free",
        period: "forever",
        description: "Get your placement cell online",
        features: ["Up to 100 student profiles", "Basic placement tracking", "Employer directory access", "Standard reports", "Email support"],
        cta: signUp(),
      },
      {
        name: "Campus",
        price: 20000,
        description: "Run placements and industry partnerships at scale",
        features: ["Unlimited student profiles", "Campus drive management", "Employer partnership tools", "Placement outcome analytics", "Alumni engagement", "Priority support"],
        cta: trial,
        popular: true,
      },
      {
        name: "University",
        price: "Custom",
        description: "Multi-campus and university-wide deployments",
        features: ["Everything in Campus", "Multi-campus management", "Accreditation-ready reporting", "White-label student portal", "Dedicated success manager", "API & ERP integrations"],
        cta: sales,
      },
    ],
  },
  "training-providers": {
    kind: "plans",
    plans: [
      {
        name: "Basic",
        price: "Free",
        period: "forever",
        description: "List your courses and reach learners",
        features: ["List up to 5 courses", "Basic course analytics", "Standard visibility", "Community support"],
        cta: signUp(),
      },
      {
        name: "Professional",
        price: 10000,
        description: "Grow your training business",
        features: ["Unlimited course listings", "AI course recommendations", "Placement tracking", "Employer connection tools", "Advanced analytics", "LMS integration"],
        cta: trial,
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large training networks and academies",
        features: ["Everything in Professional", "White-label solution", "Bulk learner management", "Custom reporting", "Dedicated success manager", "API access"],
        cta: sales,
      },
    ],
  },
  "universities-abroad": {
    kind: "plans",
    plans: [
      {
        name: "Listing",
        price: "Free",
        period: "forever",
        description: "Showcase your university to Indian students",
        features: ["University profile page", "Up to 10 program listings", "Scholarship listings", "Basic enquiry inbox"],
        cta: signUp(),
      },
      {
        name: "Recruitment",
        price: 40000,
        description: "Build a steady India recruitment pipeline",
        features: ["Unlimited program listings", "AI student matching", "Counsellor network access", "Virtual fairs & webinars", "Application pipeline tracking", "Conversion analytics"],
        cta: trial,
        popular: true,
      },
      {
        name: "Global Partner",
        price: "Custom",
        description: "Strategic partnerships across India",
        features: ["Everything in Recruitment", "Pathway & twinning programs", "Campus events with partner institutions", "Dedicated India partnership manager", "Outcome & alumni reporting"],
        cta: sales,
      },
    ],
  },
  "career-counsellors": {
    kind: "plans",
    plans: [
      {
        name: "Starter",
        price: "Free",
        period: "forever",
        description: "Try data-driven counselling",
        features: ["Up to 10 active students", "Student assessments", "University program search", "Basic application tracker"],
        cta: signUp(),
      },
      {
        name: "Professional",
        price: 2999,
        description: "For independent counsellors",
        features: ["Unlimited students", "AI course & university matching", "Full application tracker", "Student & parent updates", "Education loan referrals", "Outcome reports"],
        cta: trial,
        popular: true,
      },
      {
        name: "Agency",
        price: "Custom",
        description: "For counselling firms with multiple advisors",
        features: ["Everything in Professional", "Multi-counsellor workspace", "Team performance dashboards", "Priority university partnerships", "Dedicated account manager"],
        cta: sales,
      },
    ],
  },
  employers: {
    kind: "plans",
    plans: [
      {
        name: "Startup",
        price: "Free",
        period: "forever",
        description: "Perfect for early-stage companies",
        features: ["Up to 3 active job posts", "Basic candidate search", "5 candidate contacts/month", "Standard job visibility", "Email support"],
        cta: signUp(),
      },
      {
        name: "Growth",
        price: 15000,
        description: "Scale your hiring with powerful tools",
        features: ["Up to 15 active job posts", "AI-powered candidate matching", "50 candidate contacts/month", "Featured job listings", "Analytics dashboard", "ATS integration"],
        cta: trial,
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Full-scale hiring solution for large teams",
        features: ["Unlimited job posts", "Advanced AI matching & ranking", "Unlimited candidate contacts", "Advanced analytics & reporting", "Dedicated account manager", "SLA guarantee"],
        cta: sales,
      },
    ],
  },
  "staffing-firms": {
    kind: "plans",
    plans: [
      {
        name: "Starter",
        price: "Free",
        period: "forever",
        description: "Explore verified talent for your clients",
        features: ["Up to 5 active requirements", "Verified talent search", "10 candidate contacts/month", "Email support"],
        cta: signUp(),
      },
      {
        name: "Agency",
        price: 12000,
        description: "Fill client requirements faster",
        features: ["Unlimited requirements", "AI-ranked talent pool", "Explainable match scores", "Client requirement management", "Submission tracking", "Priority support"],
        cta: trial,
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large and multi-branch staffing firms",
        features: ["Everything in Agency", "Multi-branch workspace", "Bulk hiring workflows", "VMS & ATS integrations", "Dedicated account manager"],
        cta: sales,
      },
    ],
  },
  "strategic-partners": {
    kind: "tiers",
    title: "Commission-Based Model",
    description: "No upfront costs. Earn commissions on successful placements.",
    tiers: [
      { name: "Bronze", value: "8%", detail: "1-10 placements / month" },
      { name: "Silver", value: "10%", detail: "11-30 placements / month", highlight: true },
      { name: "Gold", value: "12%", detail: "31+ placements / month" },
    ],
    cta: { label: "Learn More About Partnership", href: "/solutions/strategic-partners" },
  },
  sponsors: {
    kind: "tiers",
    title: "Impact-Based Programs",
    description: "Fund training and placements with every rupee tracked from enrolment to employment.",
    tiers: [
      { name: "Pilot", value: "1 cohort", detail: "Single program, one region, full outcome report" },
      { name: "Program", value: "Multi-cohort", detail: "Multiple skills tracks with live impact dashboards", highlight: true },
      { name: "Flagship", value: "State / National", detail: "Large-scale CSR or government missions with audit-ready reporting" },
    ],
    cta: { label: "Plan Your Program", href: "/contact" },
  },
  banks: {
    kind: "tiers",
    title: "Lending Partnership Models",
    description: "Partner on the model that fits your education and skilling loan strategy.",
    tiers: [
      { name: "Referral", value: "Per loan", detail: "Qualified loan referrals from counsellors, universities and institutions" },
      { name: "Data", value: "Subscription", detail: "Verified academic, admission and employability signals for underwriting", highlight: true },
      { name: "Strategic", value: "Custom", detail: "Co-branded loan products, portfolio monitoring and impact analytics" },
    ],
    cta: { label: "Talk to Partnerships", href: "/contact" },
  },
}

export const stakeholderPricing: StakeholderPricing[] = solutionGroups
  .flatMap((g) => g.links)
  .map((link) => {
    const slug = link.href.split("/").pop()!
    return { slug, label: link.label, icon: link.icon, ...pricing[slug] }
  })
