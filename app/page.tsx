import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { Stakeholders } from "@/components/home/stakeholders"
import { HowItWorks } from "@/components/home/how-it-works"
import { Stats } from "@/components/home/stats"
import { Lifecycle } from "@/components/home/lifecycle"
import { Why } from "@/components/home/why"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stakeholders />
      <HowItWorks />
      <Stats />
      <Lifecycle />
      <Why />
      <CTA />
    </>
  )
}
