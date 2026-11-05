"use client"

import type React from "react"
import { useState } from "react"
import { submitLead } from "@/lib/lead"
import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageSquare, Building2, Users, Handshake, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await submitLead("contact", Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>)
      setFormSubmitted(true)
    } catch {
      window.alert("Something went wrong. Please try again or email hello@talent360x.com.")
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@talent360x.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: site.phone,
      subtext: "Mon-Fri, 9AM-6PM IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Hyderabad, Telangana",
      subtext: "Kukatpally",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      subtext: "9:00 AM - 6:00 PM IST",
    },
  ]

  const inquiryTypes = [
    { icon: Users, title: "Candidate Support", description: "Job search, profile, applications" },
    { icon: Building2, title: "Employer Solutions", description: "Hiring, subscriptions, integrations" },
    { icon: Handshake, title: "Partnership", description: "Training or Strategic Partnership" },
    { icon: MessageSquare, title: "General Inquiry", description: "Media, feedback, other questions" },
  ]

  return (
    <div>

      <div>
        {/* Hero Section */}
        <section className="page-hero py-20 lg:py-28">
          <div className="container-site text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="pb-12">
          <div className="container-site">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, i) => (
                <Card key={i} className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-foreground">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.subtext}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 lg:py-20">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <Button variant="outline" onClick={() => setFormSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
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
                        <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select name="inquiryType" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="candidate">Candidate Support</SelectItem>
                            <SelectItem value="employer">Employer Solutions</SelectItem>
                            <SelectItem value="training">Training Partnership</SelectItem>
                            <SelectItem value="sourcing">Strategic Partnership</SelectItem>
                            <SelectItem value="media">Media Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input id="company" name="company" placeholder="Your company name" />
                      </div>
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
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Inquiry Types */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">How Can We Help?</h2>
                <div className="space-y-4 mb-8">
                  {inquiryTypes.map((type, i) => (
                    <Card key={i} className="border-border hover:border-primary/50 transition-colors cursor-pointer">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <type.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{type.title}</h3>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Office Location */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Our Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-lg bg-muted mb-4 overflow-hidden">
                      <iframe
                        title="Office location map"
                        src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`}
                        className="h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">{site.company}</p>
                      <p className="text-muted-foreground">
                        {site.address.lines.map((line, i) => (
                          <span key={line}>
                            {i > 0 && <br />}
                            {line}
                          </span>
                        ))}
                      </p>
                      <p className="text-muted-foreground">
                        Phone:{" "}
                        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">
                          {site.phone}
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-12 bg-muted/30">
          <div className="container-site text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Looking for Quick Answers?</h2>
            <p className="text-muted-foreground mb-6">
              Check our frequently asked questions for instant help on common topics.
            </p>
            <Button variant="outline" asChild>
              <a href="/pricing#faq">View FAQs</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
