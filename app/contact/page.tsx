"use client"

import type React from "react"
import { useState } from "react"
import { submitLead } from "@/lib/lead"
import { solutionGroups } from "@/lib/navigation"
import { AddressFields, useRegionPhonePlaceholder } from "@/components/forms/address-fields"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

const inquiryTypes = solutionGroups.flatMap((group) =>
  group.links.map((link) => ({
    value: link.href.split("/").pop()!,
    label: `${link.label}-Support`,
  })),
)

export default function ContactPage() {
  const phonePlaceholder = useRegionPhonePlaceholder()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inquiryType, setInquiryType] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inquiryType) {
      setError("Please select an inquiry type.")
      return
    }
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    if (!data.country || !data.region) {
      setError("Please select a region.")
      return
    }
    if (!data.postalCode?.trim()) {
      setError("Please enter your PIN / ZIP code.")
      return
    }
    setError("")
    try {
      const inquiryLabel = inquiryTypes.find((t) => t.value === inquiryType)?.label ?? inquiryType
      await submitLead("contact", { ...data, inquiryType: inquiryLabel })
      setFormSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  return (
    <div>
      <section className="page-hero py-20 lg:py-28">
        <div className="container-site text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container-site">
          <Card className="mx-auto max-w-2xl border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="mb-6 text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder={phonePlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select value={inquiryType} onValueChange={setInquiryType} required>
                      <SelectTrigger id="inquiryType">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" name="company" placeholder="Your company name" />
                  </div>

                  <AddressFields idPrefix="contact-" />

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>
                  {error && <p className="text-sm leading-relaxed text-destructive">{error}</p>}
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
