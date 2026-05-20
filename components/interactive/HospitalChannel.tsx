"use client"

import { useState } from "react"

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
  const [isPartnerSuccess, setIsPartnerSuccess] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePartnerSubmit = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsPartnerSuccess(true)
    }, 800)
  }

  return (
    <>
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
