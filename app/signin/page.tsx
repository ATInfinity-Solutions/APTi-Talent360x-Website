"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Info, Shield, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { appUrl, loginUrl, stakeholderRoles } from "@/lib/stakeholders"

const highlights = [
  {
    icon: Zap,
    title: "AI-Powered Matching",
    text: "Get matched with the right opportunities based on your skills and preferences.",
  },
  {
    icon: Users,
    title: "Multi-Stakeholder Platform",
    text: "Learners, institutions, employers, partners and funders - all connected.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    text: "DPDP compliant with enterprise-grade security for your data.",
  },
]

export default function SignInPage() {
  const [selectedRole, setSelectedRole] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [notice, setNotice] = useState(false)

  useEffect(() => {
    if (appUrl) window.location.replace(loginUrl)
  }, [])

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    if (appUrl) {
      window.location.href = `${appUrl}/login?role=${encodeURIComponent(selectedRole)}&email=${encodeURIComponent(email)}`
    } else {
      setNotice(true)
    }
  }

  return (
    <section className="bg-linear-to-br from-background via-background to-primary/5 py-16">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Card className="mx-auto w-full max-w-md lg:mx-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            {notice && (
              <div className="mb-5 flex gap-3 rounded-lg border border-flame/30 bg-accent p-4 text-sm text-accent-foreground">
                <Info className="mt-0.5 size-4 shrink-0" />
                <p>
                  Our platform is opening to early partners.{" "}
                  <Link href="/contact" className="font-semibold underline">
                    Contact Us
                  </Link>{" "}
                  to get access.
                </p>
              </div>
            )}
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Sign in as</Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger id="role" className="w-full">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {stakeholderRoles.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-muted-foreground">
                  Remember me for 30 days
                </label>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Sign In <ArrowRight />
              </Button>
            </form>

            <p className="pt-6 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium text-primary hover:underline">
                Sign up for free
              </Link>
            </p>
          </CardContent>
        </Card>

        <div className="hidden space-y-8 lg:block">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Your gateway to the <span className="text-gradient-brand">AI-powered talent ecosystem</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Access opportunities, manage your hiring pipeline, publish courses, guide students or fund programs - all
              from one platform.
            </p>
          </div>
          <div className="space-y-6">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-4">
                <div className="h-fit rounded-lg bg-primary/10 p-3">
                  <h.icon className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{h.title}</h3>
                  <p className="text-sm text-muted-foreground">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
