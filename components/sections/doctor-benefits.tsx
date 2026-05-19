"use client"

import { Shield, Clock, DollarSign, Heart, Briefcase, Zap } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: DollarSign,
    title: "Higher Earnings",
    description: "Earn 40-60% more than traditional practice. Keep 70% of consultation fees.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work when you want. Set your own hours and availability.",
  },
  {
    icon: Shield,
    title: "Full Malpractice Coverage",
    description: "Comprehensive malpractice insurance included. We've got you covered.",
  },
  {
    icon: Heart,
    title: "Better Patient Care",
    description: "Spend more time with patients. Build meaningful relationships.",
  },
  {
    icon: Briefcase,
    title: "Zero Overhead",
    description: "No office rent, staff, or equipment costs. Just practice medicine.",
  },
  {
    icon: Zap,
    title: "Instant Payments",
    description: "Get paid immediately after each consultation. No waiting 90 days.",
  },
]

export function DoctorBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-[rgb(var(--teal))]" />
            <span className="text-xs font-bold text-[rgb(var(--teal-hi))] uppercase tracking-widest">
              Why Join SureCova
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[rgb(var(--dark))] mb-4 leading-tight">
            Everything You Need to <em className="text-[rgb(var(--teal-hi))]">Thrive</em>
          </h2>
          <p className="text-base text-[rgba(10,20,40,0.55)] leading-relaxed">
            We handle the business so you can focus on medicine
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[rgb(var(--navy-2))] border border-[rgba(10,20,40,0.06)] rounded-3xl p-8 hover:border-[rgba(13,155,136,0.22)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[rgba(13,155,136,0.1)] to-[rgba(13,155,136,0.05)] rounded-2xl flex items-center justify-center mb-5">
                <benefit.icon className="w-7 h-7 text-[rgb(var(--teal))]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[rgb(var(--dark))] mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-[rgba(10,20,40,0.55)] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
