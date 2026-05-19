"use client"

import { ArrowRight, TrendingUp, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const stats = [
  { value: "$180K+", label: "Avg Annual Income" },
  { value: "2,000+", label: "Doctors in Network" },
  { value: "150+", label: "Countries Served" },
]

export function DoctorHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(160deg,#053D35_0%,#065448_40%,#053D35_100%)]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(13,155,136,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(13,155,136,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[rgba(17,196,173,0.12)] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[rgba(4,30,24,0.5)] rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />

      <div className="relative z-10 w-full px-6 py-16 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(13,155,136,0.12)] border border-[rgba(13,155,136,0.25)] rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-[rgb(var(--teal-hi))]" />
              <span className="text-xs font-bold text-[rgb(var(--teal-hi))] uppercase tracking-wider">
                Join Our Growing Network
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
              Practice Medicine <em className="text-[rgb(var(--teal-hi))]">Your Way</em>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-8">
              Join 2,000+ doctors earning more while helping more patients. Work from anywhere, 
              set your own hours, and focus on what you do best—caring for patients.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" asChild>
                <Link href="/doctor-register">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white/20 text-white/75 hover:border-white/50 hover:text-white hover:bg-transparent"
                asChild
              >
                <Link href="/doctor-info">Learn More</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="font-serif text-3xl font-bold text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {[
              {
                icon: Users,
                title: "Build Lasting Relationships",
                description: "Work with the same patients long-term. No more 15-minute appointments.",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Treat patients across 150+ countries. Expand your impact worldwide.",
              },
              {
                icon: TrendingUp,
                title: "Earn More",
                description: "Average $180K+ annually. Set your own rates and schedule.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgba(13,155,136,0.2)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-[rgb(var(--teal-hi))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
