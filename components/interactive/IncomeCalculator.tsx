"use client"

import { useState } from "react"

export default function IncomeCalculator() {
  const [subs, setSubs] = useState(50)
  const [rate, setRate] = useState(25)
  const gross = subs * rate
  const annual = gross * 12

  return (
    <div id="dr-calc-section" className="my-12 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="mb-2 font-serif text-2xl font-bold text-white">See your earning potential</div>
          <p className="mb-7 text-[0.85rem] leading-[1.7] text-white/45">
            Slide to set your panel size and monthly rate. See what SureCova can mean for your income before you apply.
          </p>

          <Slider label="Number of subscribers" value={`${subs}`} min={5} max={200} current={subs} onChange={setSubs} />
          <Slider label="Your monthly rate" value={`~$${rate} equiv.`} min={8} max={80} current={rate} onChange={setRate} />

          <p className="mt-5 text-[0.72rem] leading-[1.65] text-white/35">
            Shown in USD equivalent for illustration. You set your actual rate in your local currency during onboarding.
          </p>
        </div>

        <div className="rounded-[24px] border border-[rgba(13,155,136,0.25)] bg-[rgba(13,155,136,0.08)] p-6 text-center">
          <div className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-white/45">Your Monthly Gross (equiv.)</div>
          <div className="mb-2 font-serif text-5xl font-bold text-white">~${gross.toLocaleString()}</div>
          <div className="mb-6 text-[0.78rem] text-white/40">per month, recurring · local currency equivalent</div>
          <div className="space-y-2 text-left">
            <Breakdown label="Subscribers" value={`${subs} patients`} />
            <Breakdown label="Monthly rate (equiv.)" value={`~$${rate} / patient`} />
            <Breakdown label="Annual potential" value={`~$${annual.toLocaleString()} / year`} />
            <Breakdown label="Gross monthly" value={`~$${gross.toLocaleString()}`} strong />
          </div>
        </div>
      </div>
    </div>
  )
}

function Slider({
  label,
  value,
  min,
  max,
  current,
  onChange,
}: {
  label: string
  value: string
  min: number
  max: number
  current: number
  onChange: (value: number) => void
}) {
  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center justify-between text-[0.75rem] font-bold uppercase tracking-[0.08em] text-white/45">
        <span>{label}</span>
        <span className="font-serif text-xl normal-case tracking-normal text-[rgb(var(--teal-hi))]">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={current}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[rgb(var(--teal-hi))]"
      />
    </div>
  )
}

function Breakdown({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between gap-3 text-[0.8rem] ${strong ? "border-t border-white/10 pt-3 font-bold text-white" : "text-white/55"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
