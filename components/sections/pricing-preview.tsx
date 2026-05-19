"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const plans = [
  {
    icon: "👤",
    name: "Essential",
    price: "$49",
    period: "per month",
    market: "US Market",
    features: [
      "One primary care doctor",
      "Unlimited messaging",
      "Prescription management",
      "Basic health monitoring",
      "Email support",
    ],
    cta: "Get Started",
    variant: "outline" as const,
  },
  {
    icon: "⭐",
    name: "Premium",
    price: "$99",
    period: "per month",
    market: "US Market",
    badge: "Most Popular",
    features: [
      "Two dedicated doctors (Primary + Specialist)",
      "24/7 priority access",
      "Chronic condition management",
      "Lab test coordination",
      "Video consultations",
      "Global prescription support",
    ],
    cta: "Start Free Trial",
    variant: "default" as const,
    featured: true,
  },
  {
    icon: "👨‍👩‍👧‍👦",
    name: "Family",
    price: "$199",
    period: "per month",
    market: "US Market",
    features: [
      "Coverage for up to 5 family members",
      "All Premium features included",
      "Pediatric specialists available",
      "Family health dashboard",
      "Shared medical records",
    ],
    cta: "Get Started",
    variant: "outline" as const,
  },
]

export function PricingPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-[rgb(var(--teal))]" />
            <span className="text-xs font-bold text-[rgb(var(--teal-hi))] uppercase tracking-widest">
              Pricing
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[rgb(var(--dark))] mb-4 leading-tight">
            Simple, <em className="text-[rgb(var(--teal-hi))]">Transparent</em> Pricing
          </h2>
          <p className="text-base text-[rgba(10,20,40,0.55)] leading-relaxed">
            No hidden fees. No insurance hassles. Just premium healthcare at a fair price.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white border rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${
                plan.featured
                  ? "border-[rgba(13,155,136,0.22)] bg-gradient-to-br from-white to-[rgba(13,155,136,0.04)] shadow-lg shadow-[rgba(13,155,136,0.09)] scale-105"
                  : "border-[rgba(10,20,40,0.06)]"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-6 right-6 bg-[rgb(var(--teal))] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {plan.badge}
                </div>
              )}

              <div className="text-4xl mb-4">{plan.icon}</div>
              
              <div className="text-xs font-bold text-[rgba(10,20,40,0.40)] uppercase tracking-wider mb-2">
                {plan.name}
              </div>
              
              <div className="mb-1">
                <span className="font-serif text-5xl font-bold text-[rgb(var(--dark))]">
                  {plan.price}
                </span>
              </div>
              
              <div className="text-xs text-[rgba(10,20,40,0.40)] mb-1">{plan.period}</div>
              <div className="text-xs text-[rgb(var(--teal-hi))] mb-6">{plan.market}</div>

              <div className="h-px bg-[rgba(10,20,40,0.06)] mb-6" />

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[rgba(10,20,40,0.55)]">
                    <Check className="w-4 h-4 text-[rgb(var(--green))] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.variant}
                className="w-full"
                size="lg"
                asChild
              >
                <Link href="/pricing">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="ghost" asChild>
            <Link href="/pricing">
              View All Plans & Markets <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
