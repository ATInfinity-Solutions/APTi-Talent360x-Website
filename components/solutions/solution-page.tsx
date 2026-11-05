import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Item = { icon: LucideIcon; title: string; description: string }
type CtaLink = { label: string; href: string }

export type SolutionPageProps = {
  badge: string
  title: string
  highlight: string
  description: string
  primaryCta: CtaLink
  secondaryCta: CtaLink
  benefits: { heading: string; description: string; items: Item[] }
  features: { heading: string; description: string; items: Item[] }
  steps: { heading: string; description: string; items: { title: string; description: string }[] }
  spotlight: {
    badge: string
    heading: string
    description: string
    bullets: string[]
    cta: CtaLink
    connections: { label: string; href: string }[]
  }
  cta: { heading: string; description: string; primary: CtaLink; secondary: CtaLink }
}

export function SolutionPage(props: SolutionPageProps) {
  const { benefits, features, steps, spotlight, cta } = props

  return (
    <div>
      <section className="page-hero relative overflow-hidden py-20 md:py-28">
        <div className="container-site relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">{props.badge}</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {props.title} <span className="text-gradient-brand">{props.highlight}</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">{props.description}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={props.primaryCta.href}>{props.primaryCta.label}</Link>
              </Button>
              <Link
                href={props.secondaryCta.href}
                className="inline-flex items-center justify-center font-medium text-primary hover:underline"
              >
                {props.secondaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">{benefits.heading}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">{benefits.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.items.map((item) => (
              <Card key={item.title} className="group border-border transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">{features.heading}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">{features.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.items.map((item) => (
              <Card key={item.title} className="border-border">
                <CardHeader>
                  <item.icon className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">{steps.heading}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">{steps.description}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {steps.items.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.items.length - 1 && (
                  <div className="absolute left-[60%] top-8 hidden h-0.5 w-[80%] bg-border md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-flame/10 p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">{spotlight.badge}</Badge>
                <h2 className="mb-4 text-3xl font-bold">{spotlight.heading}</h2>
                <p className="mb-6 text-muted-foreground">{spotlight.description}</p>
                <ul className="mb-6 space-y-3">
                  {spotlight.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild>
                  <Link href={spotlight.cta.href}>{spotlight.cta.label}</Link>
                </Button>
              </div>
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Connected on Our Platform
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {spotlight.connections.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 text-sm font-semibold shadow-sm transition-colors hover:border-primary/50"
                    >
                      {c.label}
                      <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-site text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{cta.heading}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">{cta.description}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href={cta.primary.href}>{cta.primary.label}</Link>
            </Button>
            <Button size="lg" variant="outline-light" asChild>
              <Link href={cta.secondary.href}>{cta.secondary.label}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
