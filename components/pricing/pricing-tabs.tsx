"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRegion } from "@/components/region-provider"
import { stakeholderPricing, YEARLY_DISCOUNT, type Plan, type StakeholderPricing } from "@/lib/pricing"
import { formatMoney } from "@/lib/region"
import { cn } from "@/lib/utils"

type Billing = "monthly" | "yearly"

export function PricingTabs() {
  const [active, setActive] = useState(0)
  const [billing, setBilling] = useState<Billing>("monthly")
  const [direction, setDirection] = useState<1 | -1>(1)
  const stripRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const count = stakeholderPricing.length
  const current = stakeholderPricing[active]

  const select = (index: number, dir: 1 | -1 = index >= active ? 1 : -1) => {
    setDirection(dir)
    setActive((index + count) % count)
  }

  // Scroll the strip itself (not the page) so the selected tab is centred without moving the viewport.
  useEffect(() => {
    const strip = stripRef.current
    const tab = tabRefs.current[active]
    if (!strip || !tab) return
    strip.scrollTo({ left: tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" })
  }, [active])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return
    e.preventDefault()
    const dir = e.key === "ArrowRight" ? 1 : -1
    const next = (active + dir + count) % count
    select(next, dir)
    tabRefs.current[next]?.focus()
  }

  return (
    <div>
      <div className="flex items-center gap-2 sm:gap-3">
        <ArrowButton label="Previous stakeholder" onClick={() => select(active - 1, -1)}>
          <ChevronLeft className="size-5" />
        </ArrowButton>

        <div
          ref={stripRef}
          role="tablist"
          aria-label="Stakeholders"
          onKeyDown={onKeyDown}
          className="no-scrollbar flex flex-1 snap-x gap-2 overflow-x-auto scroll-smooth rounded-2xl border border-border bg-card p-2 shadow-sm [mask-image:linear-gradient(to_right,transparent,black_1.5rem,black_calc(100%-1.5rem),transparent)]"
        >
          {stakeholderPricing.map((s, i) => (
            <button
              key={s.slug}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`pricing-tab-${s.slug}`}
              aria-selected={i === active}
              aria-controls="pricing-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => select(i)}
              className={cn(
                "flex shrink-0 snap-center items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors first:ml-4 last:mr-4 md:px-4 md:text-base",
                i === active
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {s.icon && <s.icon className="size-4" />}
              {s.label}
            </button>
          ))}
        </div>

        <ArrowButton label="Next stakeholder" onClick={() => select(active + 1, 1)}>
          <ChevronRight className="size-5" />
        </ArrowButton>
      </div>

      <div className="overflow-hidden">
        <div
          key={current.slug}
          id="pricing-panel"
          role="tabpanel"
          aria-labelledby={`pricing-tab-${current.slug}`}
          className="animate-slide-in pt-14 motion-reduce:animate-none"
          style={{ "--slide-from": `${direction * 3}rem` } as React.CSSProperties}
        >
          <h2 className="mb-10 text-center font-display text-2xl font-bold md:text-3xl">
            Plans for <span className="text-gradient-brand">{current.label}</span>
          </h2>
          {current.kind === "plans" && <BillingToggle billing={billing} onChange={setBilling} />}
          <StakeholderPanel stakeholder={current} billing={billing} />
        </div>
      </div>
    </div>
  )
}

function ArrowButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </button>
  )
}

function BillingToggle({ billing, onChange }: { billing: Billing; onChange: (b: Billing) => void }) {
  const options: { value: Billing; label: string }[] = [
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ]
  return (
    <div className="mb-12 flex justify-center">
      <div role="radiogroup" aria-label="Billing period" className="relative grid grid-cols-2 rounded-full border border-border bg-card p-1.5 shadow-sm">
        <span
          aria-hidden
          className={cn(
            "absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-primary shadow-md transition-transform duration-300 ease-out",
            billing === "yearly" && "translate-x-full",
          )}
        />
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={billing === o.value}
            onClick={() => onChange(o.value)}
            className={cn(
              "relative z-10 flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors md:px-6 md:text-base",
              billing === o.value ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {o.label}
            {o.value === "yearly" && (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-bold md:text-xs",
                  billing === "yearly" ? "bg-flame text-ink" : "bg-flame/15 text-flame",
                )}
              >
                Save {YEARLY_DISCOUNT * 100}%
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function StakeholderPanel({ stakeholder, billing }: { stakeholder: StakeholderPricing; billing: Billing }) {
  const Icon = stakeholder.icon

  if (stakeholder.kind === "tiers") {
    return (
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-10">
        {Icon && (
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="size-7 text-primary" />
          </div>
        )}
        <h3 className="font-display text-xl font-bold md:text-2xl">{stakeholder.title}</h3>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">{stakeholder.description}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {stakeholder.tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "rounded-xl p-6",
                tier.highlight ? "border border-primary bg-primary/10" : "bg-muted/60",
              )}
            >
              <p className="font-display text-2xl font-bold text-primary">{tier.value}</p>
              <p className="mt-2 text-base font-semibold">{tier.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{tier.detail}</p>
            </div>
          ))}
        </div>
        <Button size="lg" className="mt-8" asChild>
          <Link href={stakeholder.cta.href}>{stakeholder.cta.label}</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
      {stakeholder.plans.map((plan) => (
        <PlanCard key={plan.name} plan={plan} Icon={Icon} slug={stakeholder.slug} billing={billing} />
      ))}
    </div>
  )
}

function PlanCard({
  plan,
  Icon,
  slug,
  billing,
}: {
  plan: Plan
  Icon?: StakeholderPricing["icon"]
  slug: string
  billing: Billing
}) {
  const { region } = useRegion()
  const paid =
    typeof plan.price === "number" ? plan.price : plan.price === "₹0" || plan.price === "0" ? 0 : null
  const yearly = paid !== null && billing === "yearly"
  const fullYear = paid !== null ? paid * 12 : 0
  const yearPrice = Math.round(fullYear * (1 - YEARLY_DISCOUNT))
  const money = (amount: number) => formatMoney(amount, region)

  const display = paid === null ? plan.price : money(yearly ? yearPrice : paid)
  const period = paid === null ? plan.period : yearly ? "/ year" : "/ month"
  const note =
    paid === null
      ? plan.price === "Custom"
        ? "Tailored to your organisation"
        : null
      : yearly
        ? `${money(Math.round(yearPrice / 12))} / month, billed yearly`
        : "Billed monthly"

  const href =
    plan.cta.href === "/signup"
      ? `/signup/?${new URLSearchParams({ role: slug, plan: `${plan.name} (${display}${period ? ` ${period}` : ""})` })}`
      : plan.cta.href

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-7 shadow-sm",
        plan.popular ? "border-primary shadow-lg ring-1 ring-primary" : "border-border",
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </span>
      )}
      <div className="text-center">
        {Icon && (
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="size-6 text-primary" />
          </div>
        )}
        <h3 className="font-display text-xl font-bold">{plan.name}</h3>
        <p className="mt-2 min-h-10 text-sm text-muted-foreground">{plan.description}</p>
        <div className="mt-6">
          <span className="font-display text-4xl font-bold">{display}</span>
          {period && <span className="ml-1.5 text-base text-muted-foreground">{period}</span>}
          <div className="mt-2 min-h-10 text-xs text-muted-foreground">
            {yearly && (
              <p>
                <span className="mr-2 line-through">{money(fullYear)}</span>
                <span className="font-semibold text-flame">Save {money(fullYear - yearPrice)}</span>
              </p>
            )}
            {note && <p>{note}</p>}
          </div>
        </div>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full" variant={plan.popular ? "default" : "outline"} asChild>
        <Link href={href}>{plan.cta.label}</Link>
      </Button>
    </div>
  )
}
