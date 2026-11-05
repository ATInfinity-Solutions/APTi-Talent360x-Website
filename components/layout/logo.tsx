import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex shrink-0 items-center" aria-label="Talent360x home">
      {/* The source PNG has an opaque white background; multiply blends it into tinted surfaces. */}
      <img
        src="/images/talent360x-logo.png"
        alt="Talent360x"
        width={900}
        height={265}
        className={cn("h-[3.45rem] w-auto mix-blend-multiply", className)}
      />
    </Link>
  )
}
