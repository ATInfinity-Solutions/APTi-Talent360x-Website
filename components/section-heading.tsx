import type React from "react"
import { cn } from "@/lib/utils"

export function Eyebrow({ children, tone = "flame" }: { children: React.ReactNode; tone?: "flame" | "primary" }) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-widest",
        tone === "flame" ? "text-flame" : "text-primary",
      )}
    >
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "center" | "left"
  dark?: boolean
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-white/65" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  )
}
