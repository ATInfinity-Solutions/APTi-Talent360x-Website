import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"
import Link from "next/link"
import { PricingTabs } from "@/components/pricing/pricing-tabs"

export const metadata = {
  title: "Pricing",
  description: "Plans for every stakeholder on the Talent360x ecosystem - from working professionals and students to institutions, employers, banks and sponsors.",
}

export default function PricingPage() {
  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! All paid plans come with a 14-day free trial. No credit card required to start. You can explore all features before committing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, UPI, net banking, and popular wallets. Enterprise customers can also pay via invoice.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer:
        "Yes, annual plans come with a 20% discount compared to monthly billing. Contact our sales team for custom enterprise pricing.",
    },
    {
      question: "What happens when my trial ends?",
      answer:
        "You'll be notified before your trial ends. If you don't upgrade, you'll be moved to the free plan with limited features. Your data is never deleted.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact support for a full refund.",
    },
  ]

  return (
    <div>
      <div>
        {/* Hero Section */}
        <section className="page-hero py-20 lg:py-28">
          <div className="container-site text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the plan that fits your needs. Start free and scale as you grow. No hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Tabs */}
        <section className="pt-16 pb-20 lg:pt-20 lg:pb-28">
          <div className="container-site">
            <PricingTabs />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container-site">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Have questions? We have answers. If you need more help, contact our support team.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, i) => (
                <Card key={i} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container-site text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Still Have Questions?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect plan for your needs. Get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/signup">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
