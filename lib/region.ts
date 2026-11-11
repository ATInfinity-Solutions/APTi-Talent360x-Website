export type RegionCode = "IN" | "US"

export type RegionOption = {
  code: RegionCode
  label: string
  shortLabel: string
  country: string
  currency: "INR" | "USD"
  symbol: "₹" | "$"
  locale: string
  phonePlaceholder: string
}

export const regions: RegionOption[] = [
  {
    code: "IN",
    label: "India",
    shortLabel: "India",
    country: "India",
    currency: "INR",
    symbol: "₹",
    locale: "en-IN",
    phonePlaceholder: "+91 98765 43210",
  },
  {
    code: "US",
    label: "United States",
    shortLabel: "US",
    country: "United States",
    currency: "USD",
    symbol: "$",
    locale: "en-US",
    phonePlaceholder: "+1 555 123 4567",
  },
]

export const DEFAULT_REGION: RegionCode = "IN"
export const REGION_STORAGE_KEY = "talent360x-region"

/** Prices in lib/pricing.ts are stored in INR. Convert for US display. */
export const INR_PER_USD = 83

export function getRegion(code: RegionCode): RegionOption {
  return regions.find((r) => r.code === code) ?? regions[0]
}

export function isRegionCode(value: string): value is RegionCode {
  return value === "IN" || value === "US"
}

/** Format an INR-based amount for the active region. */
export function formatMoney(amountInr: number, region: RegionCode): string {
  const meta = getRegion(region)
  if (region === "IN") {
    return `${meta.symbol}${amountInr.toLocaleString(meta.locale)}`
  }
  const usd = amountInr === 0 ? 0 : Math.max(1, Math.round(amountInr / INR_PER_USD))
  return `${meta.symbol}${usd.toLocaleString(meta.locale)}`
}
