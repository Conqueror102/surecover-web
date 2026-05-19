import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container, Section, SectionHeader } from "@/components/ui/section"

const plans = [
  { flag: "🇳🇬", market: "Nigeria", price: "₦8,000", cities: "Lagos · Abuja · Port Harcourt · Ibadan" },
  { flag: "🇬🇭", market: "Ghana", price: "GH₵150", cities: "Accra · Kumasi · Tamale · Takoradi", featured: true },
  { flag: "🇰🇪", market: "Kenya", price: "KSh 2,500", cities: "Nairobi · Mombasa · Kisumu · Nakuru" },
  { flag: "🇮🇳", market: "India", price: "₹1,200", cities: "Mumbai · Delhi · Bangalore · Chennai · Kolkata" },
  { flag: "🇬🇧", market: "United Kingdom", price: "£18", cities: "London · Manchester · Birmingham · Leeds" },
  { flag: "🇿🇦", market: "South Africa", price: "R350", cities: "Johannesburg · Cape Town · Durban · Pretoria" },
]

const features = [
  "Unlimited consultations with your doctor",
  "Legally valid prescriptions",
  "24/7 messaging access",
  "Health records & tracking",
  "Lab test ordering",
  "Cancel anytime",
]

const included = [
  ["💬", "Unlimited Messaging", "Message your doctor anytime. Send photos, voice notes, test results. No per-message fees."],
  ["💊", "Valid Prescriptions", "Receive legally valid prescriptions you can fill at any local pharmacy. Compliance built in."],
  ["📊", "Health Tracking", "Log BP, glucose, weight, and other vitals. Your doctor sees everything in real time."],
  ["🔔", "Smart Notifications", "Get notified when your doctor responds, when prescriptions are ready, or when check-ins are due."],
  ["🧪", "Lab Test Ordering", "Your doctor can order lab tests directly through the platform. Results come back automatically."],
  ["🔒", "Secure & Private", "Encrypted health data protected and never shared without consent."],
]

const faqs = [
  ["Can I cancel anytime?", "Yes. Cancel anytime from your account settings. Your subscription remains active until the end of your billing period."],
  ["What payment methods do you accept?", "We accept major payment methods through regional providers such as Paystack, Stripe, and Razorpay."],
  ["Do I pay the doctor directly or SureCova?", "You pay SureCova. We handle billing and remit to doctors monthly."],
  ["Can I switch doctors after subscribing?", "Yes. You can switch to a different doctor anytime."],
]

export default function PricingPage() {
  return (
    <>
      <section className="bg-[linear-gradient(160deg,#F6FDFC_0%,#FAFCFE_60%,#F4F8F7_100%)] px-6 pb-[72px] pt-[120px] md:px-12">
        <Container className="text-center">
          <SectionHeader label="Pricing" title={<>One subscription. <em>Unlimited care.</em></>} centered>
            Pay your doctor monthly. Message them anytime. Get prescriptions when you need them. No per-consultation fees. No surprise charges.
          </SectionHeader>
        </Container>
      </section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                className={`relative overflow-hidden rounded-[32px] border p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.09)] ${
                  plan.featured
                    ? "border-[rgba(13,155,136,0.22)] bg-[linear-gradient(145deg,#E4F4F1,#EBF0F8)] shadow-[0_10px_36px_rgba(13,155,136,0.09)]"
                    : "border-[rgba(10,20,40,0.06)] bg-white"
                }`}
                key={plan.market}
              >
                {plan.featured && (
                  <div className="absolute right-4 top-4 rounded-full bg-[rgb(var(--teal))] px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.07em] text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-3 text-[2rem]">{plan.flag}</div>
                <div className="mb-1 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[rgba(10,20,40,0.4)]">{plan.market}</div>
                <div className="font-serif text-4xl font-bold text-[rgb(var(--dark))]">{plan.price}</div>
                <div className="mb-1 text-[0.75rem] text-[rgba(10,20,40,0.4)]">per month</div>
                <div className="mb-6 text-[0.72rem] text-[rgb(var(--teal-hi))]">{plan.cities}</div>
                <div className="mb-6 h-px bg-[rgba(10,20,40,0.06)]" />
                <div className="mb-7 space-y-3">
                  {features.map((feature) => (
                    <div className="flex items-start gap-2 text-[0.8rem] leading-[1.5] text-[rgba(10,20,40,0.55)]" key={feature}>
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--green))]" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full">Subscribe Now →</Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[rgb(var(--navy-2))]">
        <Container>
          <SectionHeader label="What's Included" title={<>Everything you need for <em>continuous care</em></>}>
            Your subscription includes unlimited access to your personal doctor and all the tools you need to manage your health.
          </SectionHeader>
          <div className="mt-12 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {included.map(([icon, title, text]) => (
              <div className="rounded-[24px] border border-[rgba(10,20,40,0.06)] bg-white p-7" key={title}>
                <div className="mb-3 text-[1.6rem]">{icon}</div>
                <div className="mb-2 text-[0.92rem] font-bold text-[rgb(var(--dark))]">{title}</div>
                <p className="text-[0.78rem] leading-[1.68] text-[rgba(10,20,40,0.55)]">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeader label="Common Questions" title={<>Pricing <em>questions answered</em></>} />
          <div className="mt-10 max-w-[720px] space-y-3.5">
            {faqs.map(([question, answer]) => (
              <div className="rounded-[16px] border border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))] p-6" key={question}>
                <div className="mb-2 text-[0.9rem] font-bold text-[rgb(var(--dark))]">{question}</div>
                <p className="text-[0.82rem] leading-[1.7] text-[rgba(10,20,40,0.55)]">{answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-[rgba(13,155,136,0.14)] bg-[linear-gradient(135deg,rgba(13,155,136,0.06),rgba(11,37,69,0.03))]">
        <Container className="text-center">
          <SectionHeader title="Ready to get started?" centered>
            Create your account, choose your doctor, and start your first consultation today.
          </SectionHeader>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild><Link href="/register#register-patient">Start as a Patient →</Link></Button>
            <Button variant="outline" asChild><Link href="/find-doctors">Browse Doctors</Link></Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
