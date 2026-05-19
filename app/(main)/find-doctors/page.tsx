"use client"

import { useState } from "react"

import BodyTileGrid from "@/components/interactive/BodyTileGrid"
import DoctorModal from "@/components/interactive/DoctorModal"
import { Button } from "@/components/ui/button"
import { Container, SectionHeader } from "@/components/ui/section"

const doctors = [
  { name: "Dr. Adaeze Nwachukwu", spec: "General Practice · Abuja, Nigeria", price: "20", initials: "AN", bg: "linear-gradient(135deg,#0B6E6E,#0D9B88)", tags: ["❤️ Heart", "🩸 Diabetes", "English", "Igbo"], meta: "Nigeria · MDCN Verified · 4.9 · 84 patients", response: "Responds within 12 hours" },
  { name: "Dr. Kwame Mensah", spec: "Cardiology · Accra, Ghana", price: "25", initials: "KM", bg: "linear-gradient(135deg,#0B2545,#1A3A5C)", tags: ["⭐ Best Match", "🫀 Heart", "English", "Twi"], meta: "Ghana · MDCG Verified · 4.8 · 61 patients", response: "Responds within 8 hours" },
  { name: "Dr. Priya Nair", spec: "Endocrinology · Chennai, India", price: "22", initials: "PN", bg: "linear-gradient(135deg,#072E28,#0B5C52)", tags: ["🩸 Diabetes", "⚖️ Thyroid", "English", "Tamil"], meta: "India · MCI Verified · 4.9 · 102 patients", response: "Responds within 24 hours" },
  { name: "Dr. Sarah Omondi", spec: "Psychology · Nairobi, Kenya", price: "30", initials: "SO", bg: "linear-gradient(135deg,#3A0B5C,#6A20A0)", tags: ["🧠 Mental Health", "💬 Therapy", "English", "Swahili"], meta: "Kenya · KMPDB Verified · 5.0 · 47 patients", response: "Responds within 6 hours" },
  { name: "Dr. Raj Kumar", spec: "Nutrition · Mumbai, India", price: "18", initials: "RK", bg: "linear-gradient(135deg,#2A6E20,#3A9B2A)", tags: ["🥗 Nutrition", "⚖️ Weight Loss", "English", "Hindi"], meta: "India · IDA Verified · 4.7 · 93 patients", response: "Responds within 18 hours" },
  { name: "Dr. Tunde Musa", spec: "Dermatology · Lagos, Nigeria", price: "28", initials: "TM", bg: "linear-gradient(135deg,#5C2A0B,#9B4A1A)", tags: ["🧴 Skin", "💆 Acne", "English", "Yoruba"], meta: "Nigeria · MDCN Verified · 4.8 · 76 patients", response: "Responds within 10 hours" },
]

export default function FindDoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<(typeof doctors)[number] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTiles, setSelectedTiles] = useState<Set<string>>(new Set())
  const [showAllTiles, setShowAllTiles] = useState(false)

  const toggleTile = (label: string) => {
    const next = new Set(selectedTiles)
    if (next.has(label)) {
      next.delete(label)
    } else {
      next.add(label)
    }
    setSelectedTiles(next)
  }

  const openSubscribe = (doctor: (typeof doctors)[number]) => {
    setSelectedDoctor(doctor)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="find" className="min-h-screen bg-[rgb(var(--navy-2))] px-6 pb-[72px] pt-[120px] md:px-12">
        <Container>
          <SectionHeader label="Doctor Marketplace" title={<>Find your <em>personal doctor</em></>}>
            Don&apos;t know which specialty you need? Start by tapping the part of your body that&apos;s giving you trouble, or search by name if you already have someone in mind.
          </SectionHeader>

          <div className="mt-10">
            <BodyTileGrid selected={selectedTiles} onToggle={toggleTile} showAll={showAllTiles} onShowAll={() => setShowAllTiles(true)} />
          </div>

          <div className="mb-7 mt-11 grid items-end gap-3.5 rounded-[24px] border border-[rgba(10,20,40,0.12)] bg-[rgb(var(--navy-2))] p-6 md:grid-cols-[1fr_1fr_1fr_auto]">
            {["Specialty", "Location", "Language"].map((label) => (
              <label className="flex flex-col gap-1.5" key={label}>
                <span className="text-[0.63rem] font-bold uppercase tracking-[0.08em] text-[rgba(10,20,40,0.4)]">{label}</span>
                <select className="rounded-[10px] border border-[rgba(10,20,40,0.12)] bg-white px-3 py-2.5 text-[0.8rem] text-[rgb(var(--dark))] outline-none transition focus:border-[rgb(var(--teal))]">
                  <option>All {label}s</option>
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>India</option>
                </select>
              </label>
            ))}
            <Button className="rounded-[10px]">Search →</Button>
          </div>

          <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                className="overflow-hidden rounded-[24px] border border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))] transition hover:-translate-y-1 hover:border-[rgba(13,155,136,0.28)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.09)]"
                key={doctor.name}
              >
                <div className="flex items-center justify-between px-5 py-4" style={{ background: doctor.bg }}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 font-serif text-[1.1rem] font-bold text-white">
                      {doctor.initials}
                    </div>
                    <div>
                      <div className="text-[0.88rem] font-bold text-white">{doctor.name}</div>
                      <div className="text-[0.68rem] text-white/75">{doctor.spec}</div>
                    </div>
                  </div>
                  <div className="rounded-full bg-white/15 px-2.5 py-1 text-[0.65rem] font-semibold text-white/70">View Pricing →</div>
                </div>
                <div className="px-5 pt-3.5">
                  <div className="mb-2.5 flex flex-wrap gap-1.5">
                    {doctor.tags.map((tag) => (
                      <span className="rounded-md bg-[rgba(13,155,136,0.08)] px-2 py-1 text-[0.6rem] font-semibold text-[rgb(var(--teal-hi))]" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-[0.7rem] text-[rgba(10,20,40,0.4)]">{doctor.meta}</div>
                </div>
                <div className="mt-3.5 flex items-center justify-between border-t border-[rgba(10,20,40,0.06)] px-5 py-4">
                  <div>
                    <div className="mb-1 flex items-center gap-1.5 text-[0.67rem] text-[rgb(var(--green))]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--green))]" />
                      Accepting patients
                    </div>
                    <div className="text-[0.6rem] text-[rgba(10,20,40,0.4)]">{doctor.response}</div>
                  </div>
                  <button
                    className="rounded-full bg-[rgb(var(--teal))] px-4 py-2 text-[0.73rem] font-semibold text-white transition hover:bg-[rgb(var(--teal-hi))]"
                    onClick={() => openSubscribe(doctor)}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <DoctorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} doctor={selectedDoctor} />
    </>
  )
}
