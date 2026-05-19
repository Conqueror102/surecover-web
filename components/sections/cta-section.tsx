"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#053D35_0%,#065448_40%,#053D35_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(13,155,136,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(13,155,136,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[rgba(17,196,173,0.12)] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[rgba(4,30,24,0.5)] rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />

      <div className="relative z-10 w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[rgba(13,155,136,0.12)] border border-[rgba(13,155,136,0.25)] rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[rgb(var(--teal-hi))]" />
            <span className="text-xs font-bold text-[rgb(var(--teal-hi))] uppercase tracking-wider">
              Start Your Journey
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Experience <em className="text-[rgb(var(--teal-hi))]">Better Healthcare?</em>
          </h2>

          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Join 50,000+ patients who have already made the switch to premium, accessible healthcare. 
            Get started in under 2 minutes.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="default" asChild>
              <Link href="/get-started">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white/20 text-white/75 hover:border-white/50 hover:text-white hover:bg-transparent"
              asChild
            >
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </div>

          <p className="text-sm text-white/40 mt-8">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  )
}
