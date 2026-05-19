"use client"

import { useState } from "react"

const faqs = [
  { q: "How does SureCova work?", a: "You choose a personal doctor, subscribe monthly, and message them whenever you need care. Your doctor knows your history and manages your ongoing health." },
  { q: "Can my doctor prescribe if they're in a different country?", a: "Not directly - and SureCova is built around this legal reality. Your personal doctor manages your care and recommends treatment. A locally licensed partner doctor in your country independently reviews and issues the prescription. The result is a legally valid prescription you can fill locally." },
  { q: "Is SureCova for emergencies?", a: "No. SureCova is for continuous, non-emergency care. If you have chest pain, stroke symptoms, severe bleeding, loss of consciousness, or another emergency, call emergency services or go to the nearest hospital immediately." },
  { q: "How much does it cost?", a: "Pricing depends on your country and chosen doctor. You pay a monthly subscription for continuous access rather than per-consultation fees." },
  { q: "Can I change doctors?", a: "Yes. You can switch doctors from your account if your needs change or if you prefer another doctor." },
  { q: "Do doctors set their own rates?", a: "Yes. Doctors set their monthly subscription rates based on their experience, specialty, and market." },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {faqs.map((item, index) => {
        const open = openIndex === index

        return (
          <button
            key={item.q}
            type="button"
            className="rounded-[16px] border border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))] p-5 text-left transition hover:border-[rgba(13,155,136,0.2)]"
            onClick={() => setOpenIndex(open ? null : index)}
          >
            <div className="flex items-center justify-between gap-4 text-[0.9rem] font-bold text-[rgb(var(--dark))]">
              <span>{item.q}</span>
              <span className="text-[rgb(var(--teal-hi))]">{open ? "-" : "+"}</span>
            </div>
            {open && <p className="mt-3 text-[0.8rem] leading-[1.75] text-[rgba(10,20,40,0.55)]">{item.a}</p>}
          </button>
        )
      })}
    </div>
  )
}
