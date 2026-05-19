import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container, SectionHeader } from "@/components/ui/section"

const options = [
  {
    icon: "🩺",
    title: "I'm a Patient",
    text: "Find a personal doctor who knows your history, manages your conditions, and prescribes when you need it - all from your phone.",
    href: "/register#register-patient",
    cta: "Start as a Patient →",
    variant: "default" as const,
    features: ["Unlimited consultations with your doctor", "Legally valid prescriptions", "24/7 messaging access", "Health tracking & records"],
  },
  {
    icon: "👨‍⚕️",
    title: "I'm a Doctor",
    text: "Build a panel of patients who pay you monthly. Practice on your schedule. No overhead. No admin burden. Just medicine.",
    href: "/register#register-doctor",
    cta: "Apply as a Doctor →",
    variant: "default" as const,
    featured: true,
    features: ["Monthly recurring income", "Set your own subscription rate", "Work on your schedule", "Licence protection built in"],
  },
  {
    icon: "🏥",
    title: "I'm a Hospital",
    text: "Keep patients connected to your specialists after discharge. A white-label channel for continuing care that generates recurring revenue.",
    href: "/hospitals",
    cta: "Learn More →",
    variant: "outline" as const,
    features: ["Your own hospital subdomain", "Revenue share on subscriptions", "QR codes for discharge", "Admin dashboard & analytics"],
  },
]

export default function GetStartedPage() {
  return (
    <section className="flex min-h-screen items-center bg-[linear-gradient(160deg,#F6FDFC_0%,#FAFCFE_60%,#F4F8F7_100%)] px-6 py-[120px] md:px-12">
      <Container className="w-full">
        <SectionHeader label="Get Started" title={<>Choose how you want to <em>join SureCova</em></>} centered>
          Whether you&apos;re a patient looking for continuous care or a doctor building your practice, we&apos;ve got you covered.
        </SectionHeader>

        <div className="mx-auto mt-14 grid max-w-[1040px] gap-6 lg:grid-cols-3">
          {options.map((option) => (
            <div
              className={`relative rounded-[32px] border p-10 transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.09)] ${
                option.featured
                  ? "border-[rgba(13,155,136,0.22)] bg-[linear-gradient(145deg,#E4F4F1,#EBF0F8)]"
                  : "border-[rgba(10,20,40,0.06)] bg-white"
              }`}
              key={option.title}
            >
              {option.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-[rgb(var(--teal))] px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.07em] text-white">
                  Popular
                </div>
              )}
              <div className="mb-4 text-[2.8rem]">{option.icon}</div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-[rgb(var(--dark))]">{option.title}</h3>
              <p className="mb-6 text-[0.88rem] leading-[1.75] text-[rgba(10,20,40,0.55)]">{option.text}</p>
              <div className="mb-6 rounded-[16px] bg-[rgb(var(--navy-2))] p-[18px]">
                <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[rgb(var(--teal-hi))]">What you get</div>
                <div className="space-y-2">
                  {option.features.map((feature) => (
                    <div className="flex items-start gap-2 text-[0.8rem] text-[rgba(10,20,40,0.55)]" key={feature}>
                      <span className="shrink-0 font-bold text-[rgb(var(--green))]">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <Button variant={option.variant} className="w-full" asChild>
                <Link href={option.href}>{option.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-[720px] rounded-[32px] border border-[rgba(13,155,136,0.14)] bg-[rgba(13,155,136,0.04)] p-8 text-center">
          <div className="mb-3 text-[1.8rem]">💊</div>
          <h3 className="mb-2.5 font-serif text-xl font-bold text-[rgb(var(--dark))]">Are you a Pharmacist?</h3>
          <p className="mb-5 text-[0.85rem] leading-[1.7] text-[rgba(10,20,40,0.55)]">
            Join our referral program. Earn monthly commission for every patient you refer who stays subscribed.
          </p>
          <Button variant="outline" asChild><Link href="/register#register-pharmacy">Join Referral Program →</Link></Button>
        </div>

        <div className="mt-12 text-center text-[0.85rem] text-[rgba(10,20,40,0.4)]">
          Not sure which option is right for you?{" "}
          <a href="/about#contact" className="font-semibold text-[rgb(var(--teal-hi))]">Contact us</a> and we&apos;ll help you get started.
        </div>
      </Container>
    </section>
  )
}
