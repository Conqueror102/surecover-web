import FaqAccordion from "@/components/interactive/FaqAccordion"
import { Button } from "@/components/ui/button"
import { Container, Section, SectionHeader, formInputClass, labelClass } from "@/components/ui/section"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "About SureCova | Our Mission & Values",
  description:
    "Built by a doctor, for every patient the system left behind. SureCova is the infrastructure layer that removes barriers to care.",
})

const values = [
  ["🔬", "Evidence over tradition", "We follow what chronic disease management needs: consistent relationships, not one-off appointments."],
  ["⚖️", "Legally correct, not just convenient", "Every prescription on SureCova is designed to be legally valid in the patient's jurisdiction."],
  ["🌍", "Built for the world's majority", "SureCova is built first for people who do not already have easy healthcare access."],
  ["🩺", "Doctors are partners, not labour", "Doctors should own patient relationships, set rates, and build careers on their own terms."],
]

const appFeatures = [
  ["💬", "Chat & Voice", "Message your doctor anytime. Send voice notes and photos."],
  ["💊", "Prescriptions", "Receive valid prescriptions you can fill locally."],
  ["📊", "Health Tracking", "Log readings and share them with your doctor in real time."],
  ["🔔", "Notifications", "Get notified when your doctor responds or a check-in is due."],
]

export default function AboutPage() {
  return (
    <>
      <Section id="about" className="bg-white pt-[120px]">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader label="About SureCova" title={<>Built by a doctor,<br />for every patient<br /><em>the system left behind.</em></>} />
            <div className="space-y-4 text-[0.9rem] leading-[1.8] text-[rgba(10,20,40,0.55)]">
              <p>SureCova was founded on a simple observation: there are enough doctors in the world to give every chronic patient access to a personal doctor. The barrier isn&apos;t supply - it&apos;s infrastructure.</p>
              <p>SureCova is the infrastructure layer that removes those barriers: compliance-first prescriptions, cross-border care, and a subscription model for continuity.</p>
              <p>We started with chronic care patients in developing markets and diaspora communities. That is where the gap is largest.</p>
            </div>
            <div className="mt-7 flex items-center gap-3 rounded-[16px] border border-[rgba(13,155,136,0.14)] bg-[rgba(13,155,136,0.05)] p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--teal))] font-serif text-xl font-bold text-white">H</div>
              <div>
                <div className="font-bold text-[rgb(var(--dark))]">Dr. Henry N.</div>
                <div className="text-[0.75rem] text-[rgba(10,20,40,0.4)]">Co-Founder & CMO · MBBCh, MDCN Licensed</div>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            {values.map(([icon, title, text]) => (
              <div className="flex gap-3 rounded-[16px] border border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))] p-5" key={title}>
                <div className="text-xl">{icon}</div>
                <div>
                  <div className="mb-1 font-bold text-[rgb(var(--dark))]">{title}</div>
                  <p className="text-[0.78rem] leading-[1.65] text-[rgba(10,20,40,0.55)]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="app" className="bg-gradient-to-br from-[rgb(var(--teal-lo))] to-[rgb(var(--teal-mid))]">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[rgb(var(--teal-hi))]">Mobile App</div>
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white/60">
              Coming Soon to App Stores
            </div>
            <h2 className="mb-4 font-serif text-[clamp(1.9rem,3vw,2.8rem)] font-bold leading-[1.1] text-white">
              SureCova in your pocket.<br /><em className="text-[rgb(var(--teal-hi))]">Always.</em>
            </h2>
            <p className="mb-7 max-w-[520px] text-[0.93rem] leading-[1.75] text-white/60">
              The full SureCova experience is available now on our web platform. Native iOS and Android apps are coming soon.
            </p>
            <div className="flex flex-wrap gap-3">
              {["🍎 App Store", "🤖 Google Play"].map((item) => (
                <div className="rounded-[16px] border border-white/15 bg-white/10 px-5 py-3 text-white" key={item}>
                  <div className="text-[0.58rem] uppercase tracking-[0.06em] text-white/45">Coming soon to</div>
                  <div className="font-bold">{item}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.75rem] text-white/35">Use SureCova now at surecova.com - fully functional in your mobile browser.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {appFeatures.map(([icon, title, text]) => (
              <div className="rounded-[16px] border border-white/10 bg-white/[0.06] p-5" key={title}>
                <div className="mb-2 text-2xl">{icon}</div>
                <div className="mb-1 font-bold text-white">{title}</div>
                <p className="text-[0.75rem] leading-[1.65] text-white/45">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="contact" className="bg-white">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader label="Contact & Support" title={<>We&apos;re a real team.<br /><em>Talk to us.</em></>}>
              Whether you&apos;re a patient with a question, a doctor considering joining, or a pharmacist asking about the referral program - reach out.
            </SectionHeader>
            <div className="mt-8 grid gap-3">
              {["hello@surecova.com", "doctors@surecova.com", "support@surecova.com", "SureCova Inc. · Delaware C-Corp"].map((item) => (
                <div className="rounded-[16px] border border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))] p-4 text-[0.85rem] text-[rgb(var(--dark))]" key={item}>
                  {item}
                </div>
              ))}
              <a href="https://wa.me/2348000000000" target="_blank" className="rounded-[16px] border border-[rgba(13,155,136,0.18)] bg-[rgba(13,155,136,0.05)] p-4 text-[0.85rem] font-semibold text-[rgb(var(--teal-hi))]">
                Chat with us on WhatsApp →
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-[rgba(10,20,40,0.06)] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
            <div className="bg-gradient-to-br from-[rgb(var(--teal))] to-[rgb(var(--teal-lo))] p-6">
              <h3 className="font-serif text-xl font-bold text-white">Send us a message</h3>
              <p className="text-[0.78rem] text-white/55">We respond within 24 hours on business days.</p>
            </div>
            <div className="space-y-4 p-6">
              {["Your Name", "Email"].map((label) => (
                <label className="block" key={label}>
                  <span className={`${labelClass} mb-2 block`}>{label}</span>
                  <input className={formInputClass} type={label === "Email" ? "email" : "text"} placeholder={label === "Email" ? "you@email.com" : "Full name"} />
                </label>
              ))}
              <label className="block">
                <span className={`${labelClass} mb-2 block`}>I am a</span>
                <select className={formInputClass}><option>Select...</option><option>Patient</option><option>Doctor considering joining</option><option>Pharmacist</option><option>Other</option></select>
              </label>
              <label className="block">
                <span className={`${labelClass} mb-2 block`}>Message</span>
                <textarea className={formInputClass} placeholder="Your question or message..." rows={4} />
              </label>
              <Button className="w-full">Send Message →</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq" className="bg-[rgb(var(--navy-2))]">
        <Container>
          <SectionHeader label="Common Questions" title={<>Everything you need <em>to know</em></>} />
          <div className="mt-10"><FaqAccordion /></div>
        </Container>
      </Section>
    </>
  )
}
