"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { loginUrl } from "@/lib/stakeholders"
import { ArrowRight, Check, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { solutionGroups } from "@/lib/navigation"
import { submitLead } from "@/lib/lead"
const roles = solutionGroups.flatMap((g) => g.links).map((l) => ({ ...l, slug: l.href.split("/").pop()! }))

const individualRoles = new Set(["candidates", "students", "alumni"])

const roleFeatures: Record<string, string[]> = {
  candidates: [
    "AI-powered job matching",
    "Skill gap analysis & recommendations",
    "Free training course access",
    "Career pathway guidance",
    "Verified credential wallet",
  ],
  students: [
    "Internships and apprenticeships matched to your skills",
    "Placement readiness tracking",
    "Campus drive applications in one place",
    "Personalised learning pathways",
    "Verified skill profile for employers",
  ],
  alumni: [
    "Lifelong, portable talent record",
    "Career-move and upskilling recommendations",
    "Mentor current students from your institution",
    "Refer talent and stay connected to your network",
    "Exclusive alumni opportunities",
  ],
  institutions: [
    "Student lifecycle and placement management",
    "Employer partnerships and campus drives",
    "Curriculum aligned to live employer demand",
    "Placement outcome analytics",
    "Accreditation-ready reporting",
  ],
  "training-providers": [
    "Publish courses to the talent pool",
    "Demand-driven curriculum insights",
    "Placement tracking",
    "Revenue sharing model",
    "Certification issuance",
  ],
  "universities-abroad": [
    "Reach verified, skill-profiled students",
    "Partner with a network of education counsellors",
    "Readiness and outcome data before admission",
    "Application pipeline analytics",
    "Alumni outcome tracking",
  ],
  "career-counsellors": [
    "AI-matched study and career pathways",
    "Programme recommendations by fit and outcome",
    "Track progress across every advisee",
    "Direct connections to universities abroad",
    "Education loan referrals through partner banks",
  ],
  employers: [
    "Post unlimited jobs",
    "AI candidate scoring",
    "Talent pipeline management",
    "Analytics dashboard",
    "ATS integration ready",
  ],
  "staffing-firms": [
    "Verified, AI-ranked talent pool",
    "Client requirement management",
    "Explainable match scores on submissions",
    "Placement and billing tracking",
    "Team performance analytics",
  ],
  "strategic-partners": [
    "Access live job requirements",
    "Submit candidates easily",
    "Tiered commission structure",
    "Performance dashboard",
    "Milestone-based payouts",
  ],
  sponsors: [
    "Fund programmes linked to employment outcomes",
    "Real-time impact analytics",
    "CSR compliance reporting",
    "First access to sponsored talent",
    "Beneficiary tracking",
  ],
  banks: [
    "Skill- and outcome-linked lending insights",
    "Education and study-abroad loan origination",
    "Verified student and institution data",
    "Counsellor and university referral network",
    "Portfolio risk signals from placement data",
  ],
}

export function SignUpForm() {
  const [role, setRole] = useState(roles[0].slug)
  const [plan, setPlan] = useState("")
  const [agreed, setAgreed] = useState(false)

  // Read on the client so the page stays fully static.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const fromQuery = params.get("role")
    if (fromQuery && roles.some((r) => r.slug === fromQuery)) setRole(fromQuery)
    setPlan(params.get("plan") ?? "")
  }, [])

  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [error, setError] = useState("")
  const active = roles.find((r) => r.slug === role) ?? roles[0]
  const isIndividual = individualRoles.has(role)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    delete data.password
    setStatus("sending")
    setError("")
    try {
      await submitLead("signup", { role: active.label, ...(plan && { plan }), ...data })
      setStatus("done")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create {active.label} Account</CardTitle>
            <CardDescription>{active.description}</CardDescription>
            {plan && (
              <p className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Selected plan: {plan}
                <Link href="/pricing" className="text-xs underline hover:no-underline">
                  Change
                </Link>
              </p>
            )}
          </CardHeader>
          <CardContent>
            {status === "done" ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto mb-4 size-12 text-green-600" />
                <p className="font-display text-lg font-semibold">Thanks for signing up!</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;ll email you as soon as your workspace on our platform is ready.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="role">I am a</Label>
                  <Select
                    value={role}
                    onValueChange={(value) => {
                      if (!roles.some((r) => r.slug === value)) return
                      setRole(value)
                      setPlan("")
                      setStatus("idle")
                    }}
                  >
                    <SelectTrigger id="role" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((r) => (
                        <SelectItem key={r.slug} value={r.slug}>
                          {r.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>
                {!isIndividual && (
                  <div className="space-y-2">
                    <Label htmlFor="organisation">Organisation Name</Label>
                    <Input id="organisation" name="organisation" required />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">{isIndividual ? "Email" : "Work Email"}</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" placeholder="Create a strong password" required />
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(v) => setAgreed(v === true)}
                    className="mt-0.5"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {status === "error" && (
                  <p className="text-sm text-destructive">{error || "Something went wrong. Please try again."}</p>
                )}
                <Button className="w-full" size="lg" disabled={!agreed || status === "sending"}>
                  {status === "sending" ? "Creating account..." : "Create Account"} <ArrowRight />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href={loginUrl} className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </form>
            )}
          </CardContent>
        </Card>

        <Card className="h-fit border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg">What you get - {active.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {(roleFeatures[role] ?? []).map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 p-1">
                    <Check className="size-4 text-primary" />
                  </span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={active.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Learn more about our platform for {active.label} <ArrowRight className="size-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
