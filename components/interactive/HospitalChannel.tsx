"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Container, Section, SectionHeader, formInputClass, labelClass } from "@/components/ui/section"

const doctors = [
  { name: "Dr. Emeka Okafor", dept: "Cardiology", initials: "EO", bg: "linear-gradient(135deg,#0B6E6E,#0D9B88)", price: "12,000" },
  { name: "Dr. Amina Bello", dept: "Endocrinology", initials: "AB", bg: "linear-gradient(135deg,#3A0B5C,#6A20A0)", price: "10,000" },
  { name: "Dr. Chukwudi Nwosu", dept: "Nephrology", initials: "CN", bg: "linear-gradient(135deg,#0B2545,#1A3A5C)", price: "15,000" },
  { name: "Dr. Ngozi Eze", dept: "General Practice", initials: "NE", bg: "linear-gradient(135deg,#2A6E20,#3A9B2A)", price: "8,000" },
]

export default function HospitalChannel() {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0])
  const [step, setStep] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isPartnerSuccess, setIsPartnerSuccess] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({ firstName: "", lastName: "" })
  const pin = "482-913"

  const handleRegister = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
      setTimeout(() => document.getElementById("hc-success")?.scrollIntoView({ behavior: "smooth" }), 50)
    }, 800)
  }

  const handlePartnerSubmit = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsPartnerSuccess(true)
    }, 800)
  }

  if (isSuccess) {
    return (
      <section id="hc-success" className="bg-gradient-to-br from-[rgb(var(--teal-lo))] to-[rgb(var(--teal-mid))] px-6 py-[88px] md:px-12">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="mx-auto mb-5 flex h-[68px] w-[68px] animate-[hcpop_0.4s_ease] items-center justify-center rounded-full border-2 border-[rgba(23,168,92,0.3)] bg-[rgba(23,168,92,0.15)] text-[1.9rem] text-white">✓</div>
          <h2 className="mb-3 font-serif text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.1] text-white">
            You&apos;re registered.<br /><em className="text-[rgb(var(--teal-hi))]">Here&apos;s your PIN.</em>
          </h2>
          <p className="mb-7 text-[0.9rem] leading-[1.78] text-white/60">Save this PIN. You&apos;ll need it to activate the SureCova app and connect with your doctor.</p>
          <div className="mb-6 rounded-[32px] border-[1.5px] border-white/20 bg-white/10 p-7">
            <div className="mb-2.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white/50">Your Activation PIN</div>
            <div className="mb-2 font-mono text-[2.2rem] font-bold tracking-[0.22em] text-white">{pin}</div>
            <p className="text-[0.72rem] leading-[1.5] text-white/45">Enter it in the SureCova app to activate your account.</p>
            <div className="mt-4 flex items-center gap-2.5 border-t border-white/10 pt-4 text-left">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] font-serif text-[0.85rem] font-bold text-white" style={{ background: selectedDoctor.bg }}>{selectedDoctor.initials}</div>
              <div>
                <div className="text-[0.83rem] font-bold text-white">{selectedDoctor.name}</div>
                <div className="text-[0.65rem] text-white/45">{selectedDoctor.dept} · St. Mary&apos;s Teaching Hospital · SureCova</div>
              </div>
            </div>
          </div>
          <div className="mb-5 grid gap-3 sm:grid-cols-2">
            {["🍎 App Store", "▶ Google Play"].map((item) => (
              <div className="flex items-center gap-3 rounded-[16px] border-[1.5px] border-white/20 bg-white/10 px-5 py-3 text-left text-white" key={item}>
                <span className="text-2xl">{item.split(" ")[0]}</span>
                <div><div className="text-[0.56rem] uppercase tracking-[0.06em] text-white/50">Download on</div><div className="font-bold">{item.replace(/^. /, "")}</div></div>
              </div>
            ))}
          </div>
          <Button variant="outline" onClick={() => setIsSuccess(false)} className="border-white/25 text-white hover:bg-white/10">Back to Hospital Page</Button>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#EEF8F7_0%,#F8FCFB_60%,#EDF5F4_100%)] px-6 py-16 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,155,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,155,136,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <Container className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-gradient-to-br from-[rgb(var(--dark))] to-[#1A3A5C] font-serif font-bold text-white">SM</div>
              <div><div className="font-serif font-bold text-[rgb(var(--dark))]">St. Mary&apos;s Teaching Hospital</div><div className="text-[0.6rem] text-[rgba(10,20,40,0.4)]">Discharge Care · powered by <span className="font-bold text-[rgb(var(--teal-hi))]">SureCova</span></div></div>
              <div className="hidden h-9 w-px bg-[rgba(10,20,40,0.12)] sm:block" />
              <div className="hidden items-center gap-1 rounded-full border border-[rgba(23,168,92,0.18)] bg-[rgba(23,168,92,0.08)] px-2.5 py-1 text-[0.68rem] font-semibold text-[rgb(var(--green))] sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--green))]" />Verified Partner</div>
            </div>
            <div className="mb-4 inline-flex gap-2 rounded-xl border border-[rgba(232,147,10,0.2)] bg-[rgba(232,147,10,0.07)] px-3.5 py-2 text-[0.76rem] leading-[1.45] text-[#7A4800]">
              <span>🏥</span><span><strong className="block text-[0.8rem] text-[#5C3300]">Continuing care after discharge.</strong>Your hospital has invited you to stay connected with your specialist.</span>
            </div>
            <h1 className="mb-4 font-serif text-[clamp(2rem,3.4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[rgb(var(--dark))]">
              Your doctor,<br /><em className="text-[rgb(var(--teal-hi))]">after discharge.</em>
            </h1>
            <p className="mb-7 max-w-[420px] text-[0.93rem] leading-[1.8] text-[rgba(10,20,40,0.55)]">
              Your hospital wants to stay with you beyond the ward. Subscribe in minutes. No waiting room. No new appointments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => document.getElementById("hc-register")?.scrollIntoView({ behavior: "smooth" })}>Register as a Patient →</Button>
              <Button variant="outline" onClick={() => document.getElementById("hc-partner")?.scrollIntoView({ behavior: "smooth" })}>For Hospitals</Button>
            </div>
          </div>
          <div>
            <div className="mb-2.5 flex justify-between text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[rgba(10,20,40,0.4)]">
              St. Mary&apos;s Specialists on SureCova <span className="text-[rgb(var(--teal-hi))]">4 available</span>
            </div>
            {doctors.map((doctor) => (
              <button
                key={doctor.name}
                type="button"
                onClick={() => setSelectedDoctor(doctor)}
                className={`mb-2.5 flex w-full items-center gap-3 rounded-[16px] border bg-white p-3.5 text-left transition hover:translate-x-1 hover:border-[rgba(13,155,136,0.28)] hover:shadow-[0_5px_18px_rgba(0,0,0,0.06)] ${
                  selectedDoctor.name === doctor.name ? "border-[rgba(13,155,136,0.22)] bg-[rgba(13,155,136,0.04)]" : "border-[rgba(10,20,40,0.06)]"
                }`}
              >
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] font-serif text-[0.85rem] font-bold text-white" style={{ background: doctor.bg }}>{doctor.initials}</span>
                <span className="flex-1"><span className="block text-[0.83rem] font-bold text-[rgb(var(--dark))]">{doctor.name}</span><span className="text-[0.68rem] text-[rgba(10,20,40,0.55)]">{doctor.dept} · Specialist</span></span>
                <span className="rounded-full bg-[rgb(var(--teal))] px-3 py-1.5 text-[0.68rem] font-bold text-white">Select →</span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      <Section id="hc-register" className="bg-white">
        <Container className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader label="Register as a Patient" title={<>Connect with your <em>St. Mary&apos;s doctor</em></>} />
            <div className="overflow-hidden rounded-[32px] border border-[rgba(10,20,40,0.06)] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              <div className="bg-gradient-to-br from-[#0B3D5C] to-[#1A6080] p-6">
                <h3 className="font-serif text-xl font-bold text-white">Patient Registration</h3>
                <p className="text-[0.72rem] text-white/50">Your doctor connection starts here.</p>
                <div className="mt-3 flex gap-1.5">{[1, 2, 3].map((item) => <span className={`h-1 flex-1 rounded ${step >= item ? "bg-[rgb(var(--teal-hi))]" : "bg-white/15"}`} key={item} />)}</div>
              </div>
              <div className="flex border-b border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))]">
                {["Your Details", "Your Doctor", "Confirm & Pay"].map((tab, index) => (
                  <button className={`flex-1 px-2 py-3 text-[0.68rem] font-semibold ${step === index + 1 ? "border-b-2 border-[rgb(var(--teal-hi))] bg-white text-[rgb(var(--teal-hi))]" : "text-[rgba(10,20,40,0.4)]"}`} onClick={() => setStep(index + 1)} key={tab}>{tab}</button>
                ))}
              </div>
              <div className="space-y-3 p-6">
                {step === 1 && (
                  <>
                    <PatientField label="First Name" value={formData.firstName} onChange={(value) => setFormData({ ...formData, firstName: value })} />
                    <PatientField label="Last Name" value={formData.lastName} onChange={(value) => setFormData({ ...formData, lastName: value })} />
                    <PatientField label="Email" type="email" />
                    <PatientField label="Phone" />
                    <Button className="w-full" onClick={() => setStep(2)}>Continue to Doctor Selection →</Button>
                  </>
                )}
                {step === 2 && (
                  <>
                    <p className="text-[0.8rem] leading-[1.65] text-[rgba(10,20,40,0.55)]">We&apos;ve pre-selected your treating specialist. Change if needed.</p>
                    <div className="rounded-[24px] border-[1.5px] border-[rgba(13,155,136,0.2)] bg-[rgba(13,155,136,0.06)] p-4">
                      <div className="mb-2 text-[0.6rem] font-bold uppercase tracking-[0.09em] text-[rgb(var(--teal-hi))]">Assigned from your department</div>
                      <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl font-serif font-bold text-white" style={{ background: selectedDoctor.bg }}>{selectedDoctor.initials}</span><div><div className="font-bold text-[rgb(var(--dark))]">{selectedDoctor.name}</div><div className="text-[0.7rem] text-[rgba(10,20,40,0.55)]">{selectedDoctor.dept}</div></div></div>
                    </div>
                    <div className="flex gap-2"><Button variant="outline" className="flex-[0.4]" onClick={() => setStep(1)}>← Back</Button><Button className="flex-1" onClick={() => setStep(3)}>Continue to Payment →</Button></div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <div className="rounded-[16px] border border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))] p-4">
                      <SummaryRow label="Patient" value={`${formData.firstName} ${formData.lastName || "-"}`} />
                      <SummaryRow label="Doctor" value={selectedDoctor.name} />
                      <SummaryRow label="Hospital" value="St. Mary's Teaching Hospital" />
                      <div className="my-2 h-px bg-[rgba(10,20,40,0.06)]" />
                      <SummaryRow label="Monthly subscription" value={`₦${selectedDoctor.price} / month`} highlight />
                    </div>
                    <Button className="w-full" disabled={isProcessing} onClick={handleRegister}>{isProcessing ? "Processing..." : "Register & Generate PIN →"}</Button>
                    <Button variant="outline" className="w-full" onClick={() => setStep(2)}>← Back</Button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[rgba(10,20,40,0.4)]">What happens after you register</div>
            <div className="space-y-3">
              {["You receive a secure PIN.", "You download the app.", "Your doctor is notified.", "Care continues from home."].map((item, index) => (
                <div className="rounded-[16px] border border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))] p-4 text-[0.85rem] text-[rgba(10,20,40,0.65)]" key={item}>
                  <span className="mr-2 font-mono text-[rgb(var(--teal-hi))]">0{index + 1}</span>{item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="hc-partner" className="bg-[rgb(var(--navy-2))]">
        <Container className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader label="For Hospital Leadership" title={<>Your patients don&apos;t disappear<br />after discharge. <em>Now neither do you.</em></>}>
              Partner with SureCova to become the continuity-of-care infrastructure for your discharged patients.
            </SectionHeader>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Reduce readmission", "New revenue stream", "Retain your doctors", "Zero admin complexity"].map((item) => (
                <div className="rounded-[16px] border border-[rgba(10,20,40,0.06)] bg-white p-4" key={item}><div className="font-bold text-[rgb(var(--dark))]">{item}</div><p className="mt-1 text-[0.72rem] leading-[1.6] text-[rgba(10,20,40,0.55)]">SureCova handles the operational details.</p></div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-[rgba(10,20,40,0.06)] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
            {isPartnerSuccess ? (
              <div className="px-10 py-14 text-center">
                <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[rgba(23,168,92,0.1)] text-[1.8rem] text-[rgb(var(--green))]">✓</div>
                <h3 className="mb-3 font-serif text-[1.3rem] font-bold text-[rgb(var(--dark))]">Enquiry Sent</h3>
                <p className="text-[0.82rem] leading-[1.6] text-[rgba(10,20,40,0.55)]">Our partnership team will reach out within 48 hours.</p>
                <Button className="mt-6" onClick={() => setIsPartnerSuccess(false)}>Send another enquiry</Button>
              </div>
            ) : (
              <>
                <div className="bg-gradient-to-br from-[rgb(var(--dark))] to-[#1A3A5C] p-6"><h3 className="font-serif text-xl font-bold text-white">Apply to Partner with SureCova</h3><p className="text-[0.72rem] text-white/45">For hospitals, clinics, and health systems.</p></div>
                <div className="space-y-4 p-6">
                  {["Hospital Name", "Contact Person", "Work Email", "Phone Number"].map((label) => <PatientField key={label} label={label} type={label.includes("Email") ? "email" : "text"} />)}
                  <Button className="w-full" disabled={isProcessing} onClick={handlePartnerSubmit}>{isProcessing ? "Sending..." : "Submit Partnership Enquiry →"}</Button>
                </div>
              </>
            )}
          </div>
        </Container>
      </Section>
    </>
  )
}

function PatientField({ label, type = "text", value, onChange }: { label: string; type?: string; value?: string; onChange?: (value: string) => void }) {
  return (
    <label className="block">
      <span className={`${labelClass} mb-2 block`}>{label}</span>
      <input className={formInputClass} type={type} placeholder={label} value={value} onChange={(event) => onChange?.(event.target.value)} />
    </label>
  )
}

function SummaryRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="my-1.5 flex justify-between gap-3 text-[0.8rem]">
      <span className="text-[rgba(10,20,40,0.55)]">{label}</span>
      <span className={highlight ? "font-bold text-[rgb(var(--teal-hi))]" : "font-bold text-[rgb(var(--dark))]"}>{value}</span>
    </div>
  )
}
