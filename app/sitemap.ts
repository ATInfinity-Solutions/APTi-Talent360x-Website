import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { legalLinks, opportunityLinks, solutionGroups } from "@/lib/navigation"

export const dynamic = "force-static"

const corePages = [
  { path: "/", priority: 1 },
  { path: "/solutions", priority: 0.9 },
  { path: "/why-talent360x", priority: 0.9 },
  { path: "/pricing", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/careers", priority: 0.5 },
  { path: "/blog", priority: 0.5 },
  { path: "/signup", priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const url = (path: string) => `${site.url}${path === "/" ? "/" : `${path}/`}`

  return [
    ...corePages.map(({ path, priority }) => ({ url: url(path), lastModified, priority })),
    ...solutionGroups.flatMap((g) => g.links).map((l) => ({ url: url(l.href), lastModified, priority: 0.8 })),
    ...opportunityLinks.map((l) => ({ url: url(l.href), lastModified, priority: 0.7 })),
    ...legalLinks.map((l) => ({ url: url(l.href), lastModified, priority: 0.3 })),
  ]
}
