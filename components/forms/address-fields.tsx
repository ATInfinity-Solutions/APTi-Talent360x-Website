"use client"

import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRegion } from "@/components/region-provider"
import { regions } from "@/lib/region"

type AddressFieldsProps = {
  idPrefix?: string
}

export function AddressFields({ idPrefix = "" }: AddressFieldsProps) {
  const { region, meta, setRegion } = useRegion()
  const [country, setCountry] = useState(meta.country)
  const id = (name: string) => `${idPrefix}${name}`

  useEffect(() => {
    setCountry(meta.country)
  }, [meta.country])

  return (
    <div className="space-y-4 rounded-xl border border-border bg-muted/30 p-4">
      <p className="text-sm font-semibold text-foreground">Complete address</p>

      <div className="space-y-2">
        <Label htmlFor={id("addressLine1")}>
          Street address <span className="text-destructive">*</span>
        </Label>
        <Input id={id("addressLine1")} name="addressLine1" placeholder="House / street / area" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor={id("addressLine2")}>Address line 2 (Optional)</Label>
        <Input id={id("addressLine2")} name="addressLine2" placeholder="Apartment, suite, landmark" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={id("city")}>
            City <span className="text-destructive">*</span>
          </Label>
          <Input id={id("city")} name="city" placeholder="City" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor={id("state")}>
            {region === "US" ? "State" : "State / Province"} <span className="text-destructive">*</span>
          </Label>
          <Input
            id={id("state")}
            name="state"
            placeholder={region === "US" ? "State" : "State / Province"}
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={id("postalCode")}>
            {region === "US" ? "ZIP code" : "PIN code"} <span className="text-destructive">*</span>
          </Label>
          <Input
            id={id("postalCode")}
            name="postalCode"
            placeholder={region === "US" ? "10001" : "500072"}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={id("region")}>
            Region <span className="text-destructive">*</span>
          </Label>
          <Select
            value={country}
            onValueChange={(value) => {
              setCountry(value)
              const match = regions.find((r) => r.country === value)
              if (match) setRegion(match.code)
            }}
            required
          >
            <SelectTrigger id={id("region")}>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((r) => (
                <SelectItem key={r.code} value={r.country}>
                  {r.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="country" value={country} />
          <input type="hidden" name="region" value={meta.label} />
        </div>
      </div>
    </div>
  )
}

export function useRegionPhonePlaceholder() {
  const { meta } = useRegion()
  return meta.phonePlaceholder
}
