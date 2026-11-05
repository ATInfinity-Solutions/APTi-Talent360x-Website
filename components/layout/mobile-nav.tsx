"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { opportunityLinks, primaryNav, solutionGroups } from "@/lib/navigation"
import { cn } from "@/lib/utils"

type Section = "solutions" | "opportunities"

export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState<Section | null>("solutions")

  const toggle = (section: Section) => setOpen((current) => (current === section ? null : section))

  return (
    <div className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-border bg-background lg:hidden">
      <nav className="mx-auto flex max-w-2xl flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
        <AccordionHeader label="Solutions" open={open === "solutions"} onClick={() => toggle("solutions")} />
        {open === "solutions" && (
          <div className="space-y-5 pb-5 pl-1">
            {solutionGroups.map((group) => (
              <div key={group.label}>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-flame">{group.label}</p>
                <ul className="mt-2 space-y-0.5">
                  {group.links.map((link) => (
                    <MobileLink key={link.href} link={link} onNavigate={onNavigate} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <AccordionHeader label="Opportunities" open={open === "opportunities"} onClick={() => toggle("opportunities")} />
        {open === "opportunities" && (
          <ul className="space-y-0.5 pb-5 pl-1">
            {opportunityLinks.map((link) => (
              <MobileLink key={link.href} link={link} onNavigate={onNavigate} />
            ))}
          </ul>
        )}

        {[primaryNav.pricing, primaryNav.why].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="border-b border-border py-4 text-base font-semibold uppercase tracking-[0.06em] text-foreground/80"
          >
            {item.label}
          </Link>
        ))}

        <div className="mt-6 grid gap-3">
          <Button variant="flame" size="lg" asChild>
            <Link href={primaryNav.contact.href} onClick={onNavigate}>
              Contact Us
            </Link>
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="lg" asChild>
              <Link href={primaryNav.signIn.href} onClick={onNavigate}>
                {primaryNav.signIn.label}
              </Link>
            </Button>
            <Button size="lg" asChild>
              <Link href={primaryNav.signUp.href} onClick={onNavigate}>
                {primaryNav.signUp.label}
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}

function AccordionHeader({ label, open, onClick }: { label: string; open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      className="flex items-center justify-between border-b border-border py-4 text-left text-base font-semibold uppercase tracking-[0.06em] text-foreground/80"
    >
      {label}
      <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
    </button>
  )
}

function MobileLink({
  link,
  onNavigate,
}: {
  link: (typeof opportunityLinks)[number]
  onNavigate: () => void
}) {
  return (
    <li>
      <Link
        href={link.href}
        onClick={onNavigate}
        className="flex items-center gap-3 rounded-lg px-2 py-2 text-base font-medium text-foreground hover:bg-secondary"
      >
        {link.icon && <link.icon className="size-4 text-primary" strokeWidth={2.1} />}
        {link.label}
      </Link>
    </li>
  )
}
