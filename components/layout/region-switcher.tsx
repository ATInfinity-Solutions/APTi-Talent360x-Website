"use client"

import { Globe } from "lucide-react"
import { regions, type RegionCode } from "@/lib/region"
import { useRegion } from "@/components/region-provider"
import { cn } from "@/lib/utils"

export function RegionSwitcher({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { region, setRegion } = useRegion()

  return (
    <div
      role="group"
      aria-label="Region"
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm",
        className,
      )}
    >
      {!compact && <Globe className="ml-1.5 size-3.5 text-muted-foreground" aria-hidden />}
      {regions.map((r) => (
        <button
          key={r.code}
          type="button"
          aria-pressed={region === r.code}
          onClick={() => setRegion(r.code as RegionCode)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors sm:text-sm",
            region === r.code
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {r.shortLabel}
        </button>
      ))}
    </div>
  )
}
