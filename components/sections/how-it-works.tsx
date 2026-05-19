"use client"

import { UserPlus, Search, MessageCircle, Heart } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in under 2 minutes. No insurance needed.",
  },
  {
    number: "02",
    icon: Search,
    title: "Choose Your Doctors",
    description: "Select two dedicated doctors from our network of specialists.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Start Chatting",
    description: "Message your doctors anytime. Get responses in under 2 minutes.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Stay Healthy",
    description: "Ongoing care, prescriptions, and health monitoring—all included.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-b from-[rgb(var(--navy-2))] to-white">
      <div className="w-full px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-[rgb(var(--teal))]" />
            <span className="text-xs font-bold text-[rgb(var(--teal-hi))] uppercase tracking-widest">
              How It Works
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[rgb(var(--dark))] mb-4 leading-tight">
            Healthcare Made <em className="text-[rgb(var(--teal-hi))]">Simple</em>
          </h2>
          <p className="text-base text-[rgba(10,20,40,0.55)] leading-relaxed">
            Get started with premium healthcare in four easy steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white border border-[rgba(10,20,40,0.06)] rounded-3xl p-8 hover:border-[rgba(13,155,136,0.22)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-[rgba(10,20,40,0.06)]" />
                <span className="font-mono text-xs text-[rgb(var(--teal-hi))] tracking-wider">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[rgba(13,155,136,0.1)] to-[rgba(13,155,136,0.05)] rounded-2xl flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-[rgb(var(--teal))]" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-[rgb(var(--dark))] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[rgba(10,20,40,0.55)] leading-relaxed">
                {step.description}
              </p>

              {/* Arrow (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[rgba(13,155,136,0.22)] z-10">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[rgb(var(--teal))] text-sm">
                    ›
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
