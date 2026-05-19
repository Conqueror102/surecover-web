"use client"

import { Globe, Plane, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const markets = [
  { flag: "🇺🇸", city: "New York", status: "Live", isLive: true },
  { flag: "🇬🇧", city: "London", status: "Live", isLive: true },
  { flag: "🇦🇪", city: "Dubai", status: "Live", isLive: true },
  { flag: "🇸🇬", city: "Singapore", status: "Live", isLive: true },
  { flag: "🇦🇺", city: "Sydney", status: "Live", isLive: true },
  { flag: "🇨🇦", city: "Toronto", status: "Live", isLive: true },
  { flag: "🇩🇪", city: "Berlin", status: "Live", isLive: true },
  { flag: "🇯🇵", city: "Tokyo", status: "Live", isLive: true },
]

const features = [
  "Prescriptions valid in 150+ countries",
  "Local pharmacy partnerships worldwide",
  "24/7 access regardless of timezone",
  "Medical records travel with you",
  "Multi-language support",
  "International health insurance coordination",
]

export function GlobalHealthcare() {
  return (
    <section className="bg-gradient-to-b from-white to-[rgb(var(--navy-2))] py-12 md:py-14">
      <div className="w-full px-6 md:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-5 h-px bg-[rgb(var(--teal))]" />
              <span className="text-xs font-bold text-[rgb(var(--teal-hi))] uppercase tracking-widest">
                Global Healthcare
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[rgb(var(--dark))] mb-4 leading-tight">
              Healthcare That <em className="text-[rgb(var(--teal-hi))]">Travels</em> With You
            </h2>
            <p className="mb-6 text-base leading-relaxed text-[rgba(10,20,40,0.55)]">
              Whether you&apos;re in New York, Dubai, or Tokyo—your doctors and medical records are always 
              accessible. True global healthcare without borders.
            </p>

            <div className="mb-6 space-y-2.5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[rgb(var(--green))] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[rgba(10,20,40,0.55)]">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="rounded-2xl border border-[rgba(13,155,136,0.14)] bg-[rgba(13,155,136,0.04)] p-5">
              <p className="font-serif text-base italic text-[rgba(10,20,40,0.55)] leading-relaxed mb-3">
                &quot;I travel constantly for work. Having my doctors available no matter where I am has been 
                invaluable. They even coordinated with a local specialist in Singapore when I needed urgent care.&quot;
              </p>
              <div className="text-xs text-[rgba(10,20,40,0.40)]">
                — James R., International Consultant
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="rounded-3xl border border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))] p-5 md:p-6">
              {/* Route Visualization */}
              <div className="mb-5 rounded-2xl border border-[rgba(10,20,40,0.06)] bg-white p-4 md:p-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="text-xs text-[rgba(10,20,40,0.40)] uppercase tracking-wide mb-1">
                      From
                    </div>
                    <div className="font-semibold text-[rgb(var(--dark))]">San Francisco</div>
                  </div>
                  <Plane className="w-5 h-5 text-[rgb(var(--teal-hi))] rotate-45" />
                  <div className="flex-1">
                    <div className="text-xs text-[rgba(10,20,40,0.40)] uppercase tracking-wide mb-1">
                      To
                    </div>
                    <div className="font-semibold text-[rgb(var(--dark))]">London</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-[rgba(13,155,136,0.14)] bg-[rgba(13,155,136,0.06)] p-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[rgb(var(--teal-hi))] flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-[rgba(10,20,40,0.55)] leading-relaxed">
                    <strong className="text-[rgb(var(--teal-hi))]">Prescription transferred</strong> to 
                    Boots Pharmacy, Heathrow Terminal 5. Ready for pickup on arrival.
                  </div>
                </div>
              </div>

              {/* Markets Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {markets.map((market, index) => (
                  <motion.div
                    key={market.city}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border border-[rgba(10,20,40,0.06)] bg-white p-3"
                  >
                    <span className="text-2xl">{market.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-[rgb(var(--dark))] truncate">
                        {market.city}
                      </div>
                      <div className={`text-xs ${market.isLive ? 'text-[rgb(var(--green))]' : 'text-[rgba(10,20,40,0.40)]'}`}>
                        {market.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 rounded-2xl border border-[rgba(13,155,136,0.14)] bg-white/70 p-4 shadow-xl backdrop-blur-[20px]"
            >
              <Globe className="w-8 h-8 text-[rgb(var(--teal))] mb-2" />
              <div className="text-xs text-[rgba(10,20,40,0.40)] uppercase tracking-wide">Coverage</div>
              <div className="text-2xl font-bold text-[rgb(var(--dark))]">150+</div>
              <div className="text-xs text-[rgba(10,20,40,0.40)]">Countries</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
