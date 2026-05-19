"use client"

import { Users, Stethoscope, Brain, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const doctors = [
  {
    badge: "Primary Care",
    icon: Stethoscope,
    title: "Your Primary Doctor",
    description: "Handles day-to-day health, prescriptions, and general wellness. Your first point of contact for all medical needs.",
    features: [
      "Daily health monitoring",
      "Prescription management",
      "Preventive care",
      "Routine check-ups",
    ],
  },
  {
    badge: "Specialist",
    icon: Brain,
    title: "Your Specialist",
    description: "Expert in your specific chronic condition. Provides advanced care and treatment optimization.",
    features: [
      "Condition-specific expertise",
      "Treatment optimization",
      "Advanced diagnostics",
      "Coordinated care plans",
    ],
    accent: true,
  },
]

const benefits = [
  {
    number: "01",
    title: "Seamless Coordination",
    description: "Both doctors work together, sharing your complete medical history for truly integrated care.",
  },
  {
    number: "02",
    title: "No Referral Delays",
    description: "Instant access to specialist care without waiting weeks for referrals or appointments.",
  },
  {
    number: "03",
    title: "Continuity of Care",
    description: "Your doctors know you, your history, and your goals. No more repeating your story.",
  },
]

export function TwoDoctorModel() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#F2F8F7] to-white">
      <div className="w-full px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-[rgb(var(--teal))]" />
            <span className="text-xs font-bold text-[rgb(var(--teal-hi))] uppercase tracking-widest">
              Two-Doctor Model
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[rgb(var(--dark))] mb-4 leading-tight">
            Two Doctors. <em className="text-[rgb(var(--teal-hi))]">One Team.</em>
          </h2>
          <p className="text-base text-[rgba(10,20,40,0.55)] leading-relaxed">
            Unlike traditional healthcare, you get two dedicated doctors working together for your health. 
            No more fragmented care or lost medical records.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Doctor Cards */}
          <div className="space-y-4">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 ${
                  doctor.accent
                    ? "border-[rgba(13,155,136,0.18)] bg-gradient-to-br from-[rgba(13,155,136,0.06)] to-[rgba(11,37,69,0.03)]"
                    : "border-[rgba(10,20,40,0.06)]"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[rgba(13,155,136,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <doctor.icon className="w-6 h-6 text-[rgb(var(--teal))]" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-[rgba(13,155,136,0.1)] text-[rgb(var(--teal-hi))] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2">
                      {doctor.badge}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[rgb(var(--dark))] mb-2">
                      {doctor.title}
                    </h3>
                    <p className="text-sm text-[rgba(10,20,40,0.55)] leading-relaxed mb-4">
                      {doctor.description}
                    </p>
                    <ul className="space-y-2">
                      {doctor.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[rgba(10,20,40,0.55)]">
                          <div className="w-1.5 h-1.5 bg-[rgb(var(--teal))] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Connection Arrow */}
            <div className="flex items-center justify-center py-2">
              <div className="flex items-center gap-2 text-[rgb(var(--teal))] opacity-50">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Coordinated Care</span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[rgb(var(--navy-2))] border border-[rgba(10,20,40,0.06)] rounded-2xl p-6"
              >
                <div className="font-mono text-xs text-[rgb(var(--teal-hi))] mb-2">
                  {benefit.number}
                </div>
                <h3 className="font-serif text-lg font-bold text-[rgb(var(--dark))] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[rgba(10,20,40,0.55)] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}

            <div className="pt-4">
              <Button size="lg" asChild>
                <Link href="/how-it-works">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
