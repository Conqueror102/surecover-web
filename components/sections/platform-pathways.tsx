import Link from "next/link"
import { ArrowRight, BadgeCheck, Building2, ClipboardList, FileCheck2, HandCoins, HeartPulse, Pill, QrCode, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/section"

const hospitalSteps = ["Discharge QR", "Specialist list", "Activation PIN", "At-home follow-up"]

const pharmacyProof = [
  ["48h", "verification window"],
  ["Code", "personal referral tracking"],
  ["Monthly", "recurring commission"],
]

export function PlatformPathways() {
  return (
    <>
      <section id="pathways" className="overflow-hidden bg-[#071D2F] py-20 text-white md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[rgb(var(--teal-hi))]">
              <Building2 className="h-3.5 w-3.5" />
              Hospital channel
            </div>
            <h2 className="max-w-[560px] font-serif text-[clamp(2.2rem,4.8vw,4.7rem)] font-bold leading-[0.98] tracking-[-0.02em]">
              Your doctor, after discharge.
            </h2>
            <p className="mt-6 max-w-[500px] text-[0.98rem] leading-[1.85] text-white/55">
              Hospitals get a branded discharge-care channel where patients can continue with the specialist who treated them. The hospital keeps visibility, the doctor keeps the relationship, and the patient goes home with continuity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/hospitals">
                  Explore Hospitals <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:border-white/50 hover:bg-white/5 hover:text-white">
                <Link href="/hospitals#hc-admin">View Dashboard</Link>
              </Button>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <div className="absolute inset-x-4 top-6 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(17,196,173,0.65),transparent)]" />
            <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/10 lg:block" />
            <div className="relative mx-auto max-w-[560px]">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/35">St. Mary&apos;s portal</div>
                    <div className="mt-1 font-serif text-xl font-bold">Discharge Care</div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-[rgba(23,168,92,0.14)] px-3 py-1 text-[0.7rem] font-semibold text-[rgb(var(--teal-hi))]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--green))]" />
                    Live
                  </div>
                </div>
                <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
                  {hospitalSteps.map((step, index) => (
                    <div className="bg-[#082238] px-4 py-5" key={step}>
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(17,196,173,0.32)] text-[0.72rem] font-bold text-[rgb(var(--teal-hi))]">
                        {index + 1}
                      </div>
                      <div className="text-[0.76rem] font-semibold leading-snug text-white/75">{step}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-[0.65rem] uppercase tracking-[0.1em] text-white/30">Next patient handoff</div>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(13,155,136,0.22)]">
                        <QrCode className="h-5 w-5 text-[rgb(var(--teal-hi))]" />
                      </div>
                      <div>
                        <div className="text-[0.86rem] font-bold">Cardiology ward</div>
                        <div className="text-[0.7rem] text-white/35">QR packet ready for discharge desk</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[rgb(var(--teal))] p-4 text-center">
                    <div className="font-serif text-3xl font-bold leading-none">147</div>
                    <div className="mt-1 max-w-20 text-[0.62rem] uppercase tracking-[0.08em] text-white/65">active patients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-[#F8FBF8] py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute left-8 top-1/2 hidden h-[calc(100%-40px)] w-[3px] -translate-y-1/2 rounded-full bg-[rgba(13,155,136,0.14)] sm:block" />
            <div className="space-y-4">
              {["Verify licence", "Share referral code", "Earn while patients stay active"].map((item, index) => (
                <div className="relative flex gap-5 rounded-[24px] border border-[rgba(10,20,40,0.06)] bg-white p-5 shadow-[0_12px_34px_rgba(7,46,40,0.05)]" key={item}>
                  <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[rgb(var(--teal-lo))] text-white">
                    {[<FileCheck2 className="h-5 w-5" key="file" />, <Pill className="h-5 w-5" key="pill" />, <HandCoins className="h-5 w-5" key="coins" />][index]}
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold text-[rgb(var(--dark))]">{item}</div>
                    <p className="mt-1 text-[0.78rem] leading-[1.65] text-[rgba(10,20,40,0.55)]">
                      {index === 0 && "Licensed pharmacists and pharmacy technicians apply with current registration documents."}
                      {index === 1 && "After approval, SureCova gives you a tracked referral code and patient-ready explanation materials."}
                      {index === 2 && "When referred patients remain subscribed, your pharmacy referral commission continues monthly."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(13,155,136,0.16)] bg-[rgba(13,155,136,0.07)] px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[rgb(var(--teal-hi))]">
              <Pill className="h-3.5 w-3.5" />
              Pharmacy referral program
            </div>
            <h2 className="max-w-[560px] font-serif text-[clamp(2rem,4vw,3.8rem)] font-bold leading-[1.04] tracking-[-0.02em] text-[rgb(var(--dark))]">
              Turn trusted pharmacy conversations into ongoing care.
            </h2>
            <p className="mt-6 max-w-[500px] text-[0.96rem] leading-[1.85] text-[rgba(10,20,40,0.58)]">
              Licensed pharmacists and pharmacy technicians can refer chronic-care patients to SureCova, get verified, and earn recurring commission for every active subscriber they bring.
            </p>
            <div className="mt-7 grid max-w-[460px] grid-cols-3 gap-3">
              {pharmacyProof.map(([value, label]) => (
                <div className="border-l border-[rgba(13,155,136,0.22)] pl-4" key={label}>
                  <div className="font-serif text-2xl font-bold text-[rgb(var(--dark))]">{value}</div>
                  <div className="mt-1 text-[0.62rem] uppercase tracking-[0.08em] text-[rgba(10,20,40,0.42)]">{label}</div>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8" size="lg">
              <Link href="/pharmacies">
                Open Pharmacy Program <ArrowRight />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(10,20,40,0.08)] bg-[rgb(var(--navy-2))] px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[rgb(var(--teal-hi))]">
              <Stethoscope className="h-3.5 w-3.5" />
              For doctors
            </div>
            <h2 className="max-w-[570px] font-serif text-[clamp(2rem,4vw,3.9rem)] font-bold leading-[1.03] tracking-[-0.02em] text-[rgb(var(--dark))]">
              Build a patient panel without renting a clinic.
            </h2>
            <p className="mt-6 max-w-[500px] text-[0.96rem] leading-[1.85] text-[rgba(10,20,40,0.58)]">
              Set your own subscription rate, manage patients asynchronously, use clinical tools, and earn recurring income from relationships you own.
            </p>
            <Button asChild className="mt-8" variant="dark" size="lg">
              <Link href="/for-doctors">
                See Doctor Platform <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[32px] bg-[rgb(var(--dark))] p-6 text-white">
                <HeartPulse className="mb-8 h-7 w-7 text-[rgb(var(--teal-hi))]" />
                <div className="font-serif text-5xl font-bold leading-none">$1,250</div>
                <div className="mt-2 text-[0.68rem] uppercase tracking-[0.1em] text-white/35">example monthly panel</div>
              </div>
              <div className="rounded-[32px] border border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="font-serif text-xl font-bold text-[rgb(var(--dark))]">Today&apos;s queue</div>
                  <BadgeCheck className="h-5 w-5 text-[rgb(var(--teal))]" />
                </div>
                {["BP update", "HbA1c result", "New subscriber", "Prescription review"].map((item, index) => (
                  <div className="flex items-center justify-between border-t border-[rgba(10,20,40,0.06)] py-3" key={item}>
                    <div className="flex items-center gap-3">
                      <ClipboardList className="h-4 w-4 text-[rgb(var(--teal-hi))]" />
                      <span className="text-[0.82rem] font-semibold text-[rgb(var(--dark))]">{item}</span>
                    </div>
                    <span className="text-[0.68rem] text-[rgba(10,20,40,0.4)]">{["8m", "1h", "new", "today"][index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
