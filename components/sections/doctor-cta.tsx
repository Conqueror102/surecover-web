"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  "Submit your application (5 minutes)",
  "Complete credential verification",
  "Attend onboarding session",
  "Start seeing patients",
]

export function DoctorCTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[rgb(var(--navy-2))]">
      <div className="w-full px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[rgb(var(--dark))] mb-6 leading-tight">
            Ready to <em className="text-[rgb(var(--teal-hi))]">Transform</em> Your Practice?
          </h2>
          <p className="text-lg text-[rgba(10,20,40,0.55)] leading-relaxed mb-12 max-w-2xl mx-auto">
            Join thousands of doctors who have already made the switch. The application process 
            takes less than 5 minutes.
          </p>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {steps.map((step, index) => (
              <div
                key={step}
                className="bg-white border border-[rgba(10,20,40,0.06)] rounded-2xl p-6 text-left"
              >
                <div className="w-8 h-8 bg-[rgba(13,155,136,0.1)] rounded-lg flex items-center justify-center mb-3">
                  <span className="font-mono text-sm font-bold text-[rgb(var(--teal))]">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm text-[rgba(10,20,40,0.55)] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <Button size="lg" asChild>
            <Link href="/doctor-register">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <p className="text-sm text-[rgba(10,20,40,0.40)] mt-6">
            Questions? <Link href="/contact" className="text-[rgb(var(--teal-hi))] hover:underline">Contact our team</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
