"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import {
  DEFAULT_REGION,
  REGION_STORAGE_KEY,
  getRegion,
  isRegionCode,
  type RegionCode,
  type RegionOption,
} from "@/lib/region"

type RegionContextValue = {
  region: RegionCode
  meta: RegionOption
  setRegion: (code: RegionCode) => void
}

const RegionContext = createContext<RegionContextValue | null>(null)

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegionState] = useState<RegionCode>(DEFAULT_REGION)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(REGION_STORAGE_KEY)
      if (saved && isRegionCode(saved)) setRegionState(saved)
    } catch {
      // ignore storage errors
    }
  }, [])

  const setRegion = (code: RegionCode) => {
    setRegionState(code)
    try {
      window.localStorage.setItem(REGION_STORAGE_KEY, code)
    } catch {
      // ignore storage errors
    }
  }

  const value = useMemo(
    () => ({
      region,
      meta: getRegion(region),
      setRegion,
    }),
    [region],
  )

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>
}

export function useRegion() {
  const ctx = useContext(RegionContext)
  if (!ctx) throw new Error("useRegion must be used within RegionProvider")
  return ctx
}
