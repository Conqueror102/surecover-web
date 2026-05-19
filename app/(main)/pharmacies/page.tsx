import Link from "next/link"
import { ArrowRight, BadgeCheck, FileUp, HandCoins, Pill, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container, Section, SectionHeader, formInputClass, labelClass } from "@/components/ui/section"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Pharmacy Referral Program",
  description: "Licensed pharmacists and pharmacy technicians can refer patients to SureCova and earn recurring commission from active subscribers.",
})

const steps = [
  ["01", "Apply with licence", "Submit your current pharmacy registration certificate and role details."],
  ["02", "Get verified", "SureCova reviews licensed pharmacists and pharmacy technicians first."],
  ["03", "Refer patients", "Use your tracked referral code and patient brochure in everyday pharmacy conversations."],
  ["04", "Earn monthly", "Receive recurring commission while referred patients remain active subscribers."],
]

export default function PharmaciesPage() {
  return (
    <>
      <section className="overflow-hidden bg-[linear-gradient(145deg,#F7FCFB_0%,#FFFFFF_58%,#EEF8F6_100%)] pt-28 pb-20">
        <Container className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(13,155,136,0.16)] bg-[rgba(13,155,136,0.07)] px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[rgb(var(--teal-hi))]">
              <Pill className="h-3.5 w-3.5" />
              Pharmacy referral program
            </div>
            <h1 className="max-w-[620px] font-serif text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.98] tracking-[-0.025em] text-[rgb(var(--dark))]">
              Refer patients into continuous care.
            </h1>
            <p className="mt-6 max-w-[540px] text-[1rem] leading-[1.85] text-[rgba(10,20,40,0.58)]">
              Open to licensed pharmacists and pharmacy technicians. Help chronic-care patients connect with a personal doctor, then earn recurring commission for every active subscriber you bring.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#apply">
                  Apply Now <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/find-doctors">See Patient Experience</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[36px] border border-[rgba(10,20,40,0.06)] bg-white p-6 shadow-[0_26px_80px_rgba(7,46,40,0.1)]">
              <div className="flex items-start justify-between border-b border-[rgba(10,20,40,0.06)] pb-5">
                <div>
                  <div className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[rgba(10,20,40,0.38)]">Referral desk</div>
                  <div className="mt-1 font-serif text-2xl font-bold text-[rgb(var(--dark))]">Verified pharmacy partner</div>
                </div>
                <ShieldCheck className="h-7 w-7 text-[rgb(var(--teal))]" />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Licence uploaded", "Referral code active", "Monthly payout"].map((item) => (
                  <div className="rounded-2xl bg-[rgb(var(--navy-2))] p-4" key={item}>
                    <BadgeCheck className="mb-4 h-5 w-5 text-[rgb(var(--teal-hi))]" />
                    <div className="text-[0.78rem] font-bold leading-snug text-[rgb(var(--dark))]">{item}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[24px] bg-[rgb(var(--teal-lo))] p-5 text-white">
                <div className="text-[0.68rem] uppercase tracking-[0.12em] text-white/35">Example handoff</div>
                <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-[0.78rem] font-bold">Patient asks about BP refill</div>
                    <div className="mt-1 text-[0.7rem] leading-relaxed text-white/45">Pharmacy recognizes ongoing-care need</div>
                  </div>
                  <ArrowRight className="mx-auto hidden h-5 w-5 text-[rgb(var(--teal-hi))] md:block" />
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="text-[0.78rem] font-bold">SureCova doctor takes over</div>
                    <div className="mt-1 text-[0.7rem] leading-relaxed text-white/45">Subscription and referral are tracked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <SectionHeader label="How it works" title={<>Verification first. Then <em>tracked referrals.</em></>} centered>
            The process is built for licensed pharmacy professionals, not generic affiliate traffic.
          </SectionHeader>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[32px] border border-[rgba(10,20,40,0.06)] bg-[rgba(10,20,40,0.06)] md:grid-cols-4">
            {steps.map(([num, title, desc]) => (
              <div className="bg-white p-6" key={num}>
                <div className="mb-7 font-mono text-[0.7rem] font-bold text-[rgb(var(--teal-hi))]">{num}</div>
                <div className="font-serif text-xl font-bold text-[rgb(var(--dark))]">{title}</div>
                <p className="mt-3 text-[0.78rem] leading-[1.7] text-[rgba(10,20,40,0.55)]">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="apply" className="bg-[rgb(var(--navy-2))]">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader label="Application" title={<>Apply as a <em>pharmacy partner.</em></>}>
              Submit your details and registration information. In production, this form connects to partner verification and referral-code issuance.
            </SectionHeader>
            <div className="mt-8 grid gap-3">
              {[
                ["Verification first", "Only licensed pharmacists and pharmacy technicians qualify."],
                ["Patient materials", "Approved partners receive brochures and a referral code."],
                ["Recurring commission", "Commission continues while referred patients remain active."],
              ].map(([title, desc], index) => (
                <div className="flex gap-4 rounded-2xl border border-[rgba(10,20,40,0.06)] bg-white p-4" key={title}>
                  {[<FileUp className="h-5 w-5" key="file" />, <Pill className="h-5 w-5" key="pill" />, <HandCoins className="h-5 w-5" key="coins" />][index]}
                  <div>
                    <div className="font-bold text-[rgb(var(--dark))]">{title}</div>
                    <div className="mt-1 text-[0.76rem] leading-[1.6] text-[rgba(10,20,40,0.55)]">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-[32px] border border-[rgba(10,20,40,0.06)] bg-white p-6 shadow-[0_14px_50px_rgba(0,0,0,0.06)] md:p-8">
            <div className="mb-7">
              <h2 className="font-serif text-2xl font-bold text-[rgb(var(--dark))]">Pharmacy Referral Application</h2>
              <p className="mt-2 text-[0.78rem] leading-[1.7] text-[rgba(10,20,40,0.55)]">For licensed pharmacists and pharmacy technicians only.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className={labelClass}>Full Name</span>
                <input className={formInputClass} placeholder="Your full name" />
              </label>
              <label className="grid gap-2">
                <span className={labelClass}>Work Email</span>
                <input className={formInputClass} placeholder="you@pharmacy.com" type="email" />
              </label>
              <label className="grid gap-2">
                <span className={labelClass}>Role</span>
                <select className={formInputClass} defaultValue="">
                  <option value="" disabled>Select role</option>
                  <option>Pharmacist</option>
                  <option>Pharmacy Technician</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className={labelClass}>Pharmacy Name</span>
                <input className={formInputClass} placeholder="Name of pharmacy" />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className={labelClass}>Registration Number</span>
                <input className={formInputClass} placeholder="e.g. PCN-XXXX" />
              </label>
              <div className="sm:col-span-2 rounded-[20px] border-2 border-dashed border-[rgba(13,155,136,0.22)] bg-[rgba(13,155,136,0.04)] p-6 text-center">
                <FileUp className="mx-auto mb-3 h-7 w-7 text-[rgb(var(--teal))]" />
                <div className="text-[0.83rem] font-bold text-[rgb(var(--dark))]">Upload pharmacy licence or registration certificate</div>
                <p className="mt-1 text-[0.72rem] text-[rgba(10,20,40,0.48)]">PDF, JPG, or PNG. Must be current and valid.</p>
              </div>
            </div>
            <Button className="mt-6 w-full" size="lg" type="button">
              Submit Application <ArrowRight />
            </Button>
          </form>
        </Container>
      </Section>
    </>
  )
}
