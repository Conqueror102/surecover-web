"use client"

import { Heart, Activity, Droplet, Brain, Pill, Thermometer, Eye, Bone, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const conditions = [
  {
    icon: Heart,
    name: "Cardiovascular",
    description: "Heart disease, hypertension, cholesterol management",
  },
  {
    icon: Droplet,
    name: "Diabetes",
    description: "Type 1, Type 2, and gestational diabetes care",
  },
  {
    icon: Activity,
    name: "Respiratory",
    description: "Asthma, COPD, and chronic lung conditions",
  },
  {
    icon: Brain,
    name: "Mental Health",
    description: "Depression, anxiety, and stress management",
  },
  {
    icon: Pill,
    name: "Autoimmune",
    description: "Lupus, rheumatoid arthritis, and more",
  },
  {
    icon: Thermometer,
    name: "Thyroid",
    description: "Hypo/hyperthyroidism and hormone balance",
  },
  {
    icon: Eye,
    name: "Chronic Pain",
    description: "Fibromyalgia, migraines, and pain management",
  },
  {
    icon: Bone,
    name: "Musculoskeletal",
    description: "Osteoporosis, arthritis, and joint conditions",
  },
]

export function ChronicConditions() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left: Header */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-5 h-px bg-[rgb(var(--teal))]" />
              <span className="text-xs font-bold text-[rgb(var(--teal-hi))] uppercase tracking-widest">
                Chronic Conditions
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[rgb(var(--dark))] mb-4 leading-tight">
              Expert Care for <em className="text-[rgb(var(--teal-hi))]">Chronic Conditions</em>
            </h2>
            <p className="text-base text-[rgba(10,20,40,0.55)] leading-relaxed">
              Living with a chronic condition requires ongoing, specialized care. Our two-doctor model 
              ensures you have both a primary care physician and a specialist dedicated to your health.
            </p>
          </div>

          {/* Right: Stats or Quote */}
          <div className="bg-white border border-[rgba(13,155,136,0.14)] rounded-3xl p-8">
            <div className="font-serif text-2xl font-bold text-[rgb(var(--dark))] mb-4 leading-relaxed italic">
              &quot;Having both my primary doctor and endocrinologist on the same platform has been life-changing. 
              They actually talk to each other!&quot;
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0D9B88] rounded-full flex items-center justify-center font-serif font-bold text-white">
                MK
              </div>
              <div>
                <div className="font-semibold text-[rgb(var(--dark))]">Maria K.</div>
                <div className="text-sm text-[rgba(10,20,40,0.40)]">Type 2 Diabetes Patient</div>
              </div>
            </div>
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-[rgba(10,20,40,0.06)] rounded-2xl p-6 hover:border-[rgba(13,155,136,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-3">
                <condition.icon className="w-8 h-8 text-[rgb(var(--teal))]" />
              </div>
              <h3 className="font-semibold text-[rgb(var(--dark))] mb-1.5">
                {condition.name}
              </h3>
              <p className="text-xs text-[rgba(10,20,40,0.55)] leading-relaxed">
                {condition.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* More Conditions CTA */}
        <div className="bg-white border-2 border-dashed border-[rgba(13,155,136,0.2)] rounded-3xl p-8 text-center">
          <Plus className="w-10 h-10 text-[rgb(var(--teal))] mx-auto mb-4" />
          <h3 className="font-serif text-xl font-bold text-[rgb(var(--dark))] mb-2">
            And Many More Conditions
          </h3>
          <p className="text-sm text-[rgba(10,20,40,0.55)] leading-relaxed mb-6 max-w-2xl mx-auto">
            We provide comprehensive care for over 50+ chronic conditions. Our network includes specialists 
            in cardiology, endocrinology, pulmonology, rheumatology, and more.
          </p>
          <Button variant="outline" asChild>
            <Link href="/conditions">View All Conditions</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
