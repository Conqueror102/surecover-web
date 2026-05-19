"use client"

import { useState } from "react"

const objections = [
  { q: "Will this interfere with my existing hospital job?", a: "No. SureCova is asynchronous and flexible. You set your response window and panel size." },
  { q: "What about my medical licence?", a: "SureCova is designed around jurisdiction-aware care. Prescription issuance is handled by locally licensed partner doctors where needed." },
  { q: "Do I need to pay to join?", a: "No. Doctors can apply and join for free after credential verification." },
]

export default function ObjectionHandling() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="my-12 grid gap-3">
      {objections.map((item, index) => {
        const open = openIndex === index

        return (
          <button
            type="button"
            key={item.q}
            className="rounded-[16px] border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-[rgba(13,155,136,0.28)]"
            onClick={() => setOpenIndex(open ? -1 : index)}
          >
            <div className="flex items-center justify-between gap-4 text-[0.9rem] font-bold text-white">
              <span>{item.q}</span>
              <span className="text-[rgb(var(--teal-hi))]">{open ? "-" : "+"}</span>
            </div>
            {open && <p className="mt-3 text-[0.8rem] leading-[1.7] text-white/45">{item.a}</p>}
          </button>
        )
      })}
    </div>
  )
}
