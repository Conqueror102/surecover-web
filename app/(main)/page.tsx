import { ChronicConditions } from "@/components/sections/chronic-conditions"
import { CTASection } from "@/components/sections/cta-section"
import { GlobalHealthcare } from "@/components/sections/global-healthcare"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { PlatformPathways } from "@/components/sections/platform-pathways"
import { PricingPreview } from "@/components/sections/pricing-preview"
import { TrustStrip } from "@/components/sections/trust-strip"
import { TwoDoctorModel } from "@/components/sections/two-doctor-model"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <ChronicConditions />
      <TwoDoctorModel />
      <PlatformPathways />
      <GlobalHealthcare />
      <PricingPreview />
      <CTASection />
    </>
  )
}
