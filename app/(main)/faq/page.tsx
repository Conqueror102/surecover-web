import Link from "next/link"

import FaqAccordion from "@/components/interactive/FaqAccordion"
import { Button } from "@/components/ui/button"
import { Container, Section, SectionHeader } from "@/components/ui/section"

export default function FAQPage() {
  return (
    <>
      <section className="bg-[linear-gradient(160deg,#F6FDFC_0%,#FAFCFE_60%,#F4F8F7_100%)] px-6 pb-[72px] pt-[120px] md:px-12">
        <Container className="text-center">
          <SectionHeader label="Frequently Asked Questions" title={<>Everything you need <em>to know</em></>} centered>
            Common questions about how SureCova works, prescriptions, pricing, and getting started.
          </SectionHeader>
        </Container>
      </section>

      <Section id="faq" className="bg-white pt-0">
        <Container>
          <FaqAccordion />
        </Container>
      </Section>

      <Section className="bg-[rgb(var(--navy-2))]">
        <Container className="text-center">
          <div className="mb-4 text-[2.4rem]">💬</div>
          <SectionHeader title="Still have questions?" centered>
            Our support team is here to help. Reach out via email, WhatsApp, or our contact form.
          </SectionHeader>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild><Link href="/about#contact">Contact Support</Link></Button>
            <Button variant="outline" asChild><Link href="/register">Get Started</Link></Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
