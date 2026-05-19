"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"

export function IncomeCalculator() {
  const [patients, setPatients] = useState(50)
  const [rate, setRate] = useState(100)
  
  const monthlyIncome = patients * rate * 4
  const annualIncome = monthlyIncome * 12

  return (
    <section className="py-16 bg-gradient-to-b from-[rgb(var(--navy-2))] to-white">
      <div className="w-full px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-[rgba(10,20,40,0.06)] rounded-3xl p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Calculator */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-[rgb(var(--teal))]" />
                  <span className="text-xs font-bold text-[rgb(var(--teal-hi))] uppercase tracking-widest">
                    Income Calculator
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-[rgb(var(--dark))] mb-3 leading-tight">
                  Calculate Your Potential Earnings
                </h2>
                <p className="text-sm text-[rgba(10,20,40,0.55)] leading-relaxed mb-8">
                  Adjust the sliders to see how much you could earn on SureCova
                </p>

                {/* Patients Slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold text-[rgba(10,20,40,0.55)] uppercase tracking-wider">
                      Patients per Week
                    </label>
                    <span className="font-serif text-xl font-bold text-[rgb(var(--teal-hi))]">
                      {patients}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={patients}
                    onChange={(e) => setPatients(Number(e.target.value))}
                    className="w-full h-1 bg-[rgba(10,20,40,0.1)] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[rgb(var(--teal))] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                </div>

                {/* Rate Slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold text-[rgba(10,20,40,0.55)] uppercase tracking-wider">
                      Rate per Consultation
                    </label>
                    <span className="font-serif text-xl font-bold text-[rgb(var(--teal-hi))]">
                      ${rate}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-1 bg-[rgba(10,20,40,0.1)] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[rgb(var(--teal))] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                </div>
              </div>

              {/* Right: Results */}
              <div className="text-center">
                <div className="text-xs text-[rgba(10,20,40,0.40)] uppercase tracking-wider mb-3">
                  Your Potential Annual Income
                </div>
                <div className="font-serif text-6xl font-bold text-[rgb(var(--dark))] mb-2">
                  <span className="text-[rgb(var(--teal-hi))]">$</span>
                  {annualIncome.toLocaleString()}
                </div>
                <div className="text-sm text-[rgba(10,20,40,0.40)] mb-8">per year</div>

                {/* Breakdown */}
                <div className="bg-[rgba(13,155,136,0.06)] border border-[rgba(13,155,136,0.14)] rounded-2xl p-6 text-left">
                  <div className="flex justify-between text-sm text-[rgba(10,20,40,0.55)] mb-3">
                    <span>Weekly Income</span>
                    <span className="font-semibold">${(patients * rate).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-[rgba(10,20,40,0.55)] mb-3">
                    <span>Monthly Income</span>
                    <span className="font-semibold">${monthlyIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[rgb(var(--dark))] pt-3 border-t border-[rgba(10,20,40,0.1)]">
                    <span>Annual Income</span>
                    <span>${annualIncome.toLocaleString()}</span>
                  </div>
                </div>

                <p className="text-xs text-[rgba(10,20,40,0.40)] mt-6">
                  * Estimates based on average consultation rates. Actual earnings may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
