"use client"

import { Fragment, useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/layout/logo"
import { MobileNav } from "@/components/layout/mobile-nav"
import { RegionSwitcher } from "@/components/layout/region-switcher"
import { opportunityLinks, primaryNav, solutionGroups, type NavGroup } from "@/lib/navigation"
import { cn } from "@/lib/utils"

type MenuKey = "solutions" | "opportunities"

const navItemClass = "inline-flex items-center gap-1 whitespace-nowrap text-[15px] font-medium xl:text-base text-foreground transition-colors hover:text-primary"

const solutionMenu: NavGroup[] = solutionGroups.map((group) => ({
  label: group.label,
  links: group.links.map((link) => ({ label: `For ${link.label}`, href: link.href })),
}))

const opportunityMenu: NavGroup[] = [{ label: "Opportunities", links: opportunityLinks }]

export function SiteHeader() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hoverOpenedAt = useRef(0)
  const headerRef = useRef<HTMLElement>(null)

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  const scheduleClose = useCallback(() => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }, [cancelClose])

  const openOnHover = (key: MenuKey) => {
    cancelClose()
    if (openMenu !== key) hoverOpenedAt.current = Date.now()
    setOpenMenu(key)
  }

  // A click that lands right after hover opened the menu must not immediately close it again.
  const toggleOnClick = (key: MenuKey) => {
    if (openMenu === key && Date.now() - hoverOpenedAt.current > 400) setOpenMenu(null)
    else setOpenMenu(key)
  }

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!openMenu && !mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [openMenu, mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const isActive = (prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`)

  const dropdowns: { key: MenuKey; label: string; prefix: string; groups: NavGroup[]; width: string }[] = [
    { key: "solutions", label: "Solutions", prefix: "/solutions", groups: solutionMenu, width: "w-80" },
    { key: "opportunities", label: "Opportunities", prefix: "/opportunities", groups: opportunityMenu, width: "w-64" },
  ]

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-border bg-linear-to-b from-[hsl(214_70%_95%)] to-background"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-6 xl:gap-6 xl:px-8">
        <Logo className="h-[2.875rem] xl:h-[3.45rem]" />

        <nav className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-7" aria-label="Main">
          {dropdowns.map((d) => (
            <div
              key={d.key}
              className="relative flex"
              onMouseEnter={() => openOnHover(d.key)}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className={cn(navItemClass, (openMenu === d.key || isActive(d.prefix)) && "text-primary")}
                aria-expanded={openMenu === d.key}
                aria-haspopup="true"
                onClick={() => toggleOnClick(d.key)}
              >
                {d.label}
                <ChevronDown className={cn("size-4 transition-transform", openMenu === d.key && "rotate-180")} />
              </button>
              {openMenu === d.key && <DropdownList groups={d.groups} width={d.width} pathname={pathname} />}
            </div>
          ))}
          {[primaryNav.pricing, primaryNav.why, primaryNav.contact].map((item) => (
            <Link key={item.href} href={item.href} className={cn(navItemClass, isActive(item.href) && "text-primary")}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          <RegionSwitcher />
          <Button variant="ghost" className="px-3 text-[15px] xl:px-4 xl:text-base" asChild>
            <Link href={primaryNav.signIn.href}>{primaryNav.signIn.label}</Link>
          </Button>
          <Button className="text-[15px] xl:text-base" asChild>
            <Link href={primaryNav.signUp.href}>{primaryNav.signUp.label}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <RegionSwitcher compact />
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {mobileOpen && <MobileNav onNavigate={() => setMobileOpen(false)} />}
    </header>
  )
}

function DropdownList({ groups, width, pathname }: { groups: NavGroup[]; width: string; pathname: string }) {
  return (
    <div className={cn("absolute left-0 top-full pt-3", width)}>
      <div className="animate-menu-in rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg">
        {groups.map((group, i) => (
          <Fragment key={group.label}>
            {i > 0 && <div className="-mx-1 my-1 h-px bg-border" role="separator" />}
            {group.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-sm px-3 py-1.5 text-[15px] text-foreground xl:text-base outline-none transition-colors hover:bg-aptired hover:text-white focus-visible:bg-aptired focus-visible:text-white",
                  pathname === link.href && "font-semibold text-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
