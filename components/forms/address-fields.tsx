"use client"

import { useEffect, useMemo, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRegion } from "@/components/region-provider"
import { regions } from "@/lib/region"
import { getCities, getPostalCodes, getStates } from "@/lib/locations"

type AddressFieldsProps = {
  idPrefix?: string
}

export function AddressFields({ idPrefix = "" }: AddressFieldsProps) {
  const { region, meta, setRegion } = useRegion()
  const [stateName, setStateName] = useState("")
  const [cityName, setCityName] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const id = (name: string) => `${idPrefix}${name}`

  const country = meta.country
  const states = useMemo(() => getStates(region), [region])
  const cities = useMemo(() => getCities(region, stateName), [region, stateName])
  const postalCodes = useMemo(
    () => getPostalCodes(region, stateName, cityName),
    [region, stateName, cityName],
  )

  const stateLabel = region === "US" ? "State" : "State / Province"
  const postalLabel = region === "US" ? "ZIP code" : "PIN code"

  // Keep country in sync with the header region switcher; clear dependent fields.
  useEffect(() => {
    setStateName("")
    setCityName("")
    setPostalCode("")
  }, [region])

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

      <div className="space-y-2">
        <Label htmlFor={id("region")}>
          Country / Region <span className="text-destructive">*</span>
        </Label>
        <Select
          value={country}
          onValueChange={(value) => {
            const match = regions.find((r) => r.country === value)
            if (match) setRegion(match.code)
          }}
          required
        >
          <SelectTrigger id={id("region")} className="w-full">
            <SelectValue placeholder="Select country" />
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

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={id("state")}>
            {stateLabel} <span className="text-destructive">*</span>
          </Label>
          <Select
            value={stateName || undefined}
            onValueChange={(value) => {
              setStateName(value)
              setCityName("")
              setPostalCode("")
            }}
            required
          >
            <SelectTrigger id={id("state")} className="w-full">
              <SelectValue placeholder={`Select ${stateLabel.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state.name} value={state.name}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="state" value={stateName} />
        </div>

        <div className="space-y-2">
          <Label htmlFor={id("city")}>
            City <span className="text-destructive">*</span>
          </Label>
          <Select
            value={cityName || undefined}
            onValueChange={(value) => {
              setCityName(value)
              setPostalCode("")
            }}
            disabled={!stateName}
            required
          >
            <SelectTrigger id={id("city")} className="w-full">
              <SelectValue placeholder={stateName ? "Select city" : "Select state first"} />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city.name} value={city.name}>
                  {city.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="city" value={cityName} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={id("postalCode")}>
          {postalLabel} <span className="text-destructive">*</span>
        </Label>
        <Select
          value={postalCode || undefined}
          onValueChange={setPostalCode}
          disabled={!cityName}
          required
        >
          <SelectTrigger id={id("postalCode")} className="w-full">
            <SelectValue placeholder={cityName ? `Select ${postalLabel}` : "Select city first"} />
          </SelectTrigger>
          <SelectContent>
            {postalCodes.map((code) => (
              <SelectItem key={code} value={code}>
                {code}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="postalCode" value={postalCode} />
      </div>
    </div>
  )
}

export function useRegionPhonePlaceholder() {
  const { meta } = useRegion()
  return meta.phonePlaceholder
}
