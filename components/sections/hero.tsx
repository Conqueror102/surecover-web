"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(160deg,#F6FDFC_0%,#FAFCFE_60%,#F4F8F7_100%)] pt-24 pb-18">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(13,155,136,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,155,136,0.04)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-[rgba(13,155,136,0.07)] rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] bg-[rgba(11,37,69,0.04)] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-[1] w-full px-6 md:px-12">
        <div className="grid gap-18 items-center lg:grid-cols-2">
          {/* Left Content */}
          <div className="order-1 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-[7px] bg-[rgba(13,155,136,0.08)] border border-[rgba(13,155,136,0.18)] rounded-full px-[13px] py-[5px] mb-5">
              <div className="w-[6px] h-[6px] bg-[#17A85C] rounded-full animate-pulse" />
              <span className="text-[0.67rem] font-bold text-[#11C4AD] uppercase tracking-[0.1em]">
                Now Live · Global Platform
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[clamp(2.6rem,4vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.03em] mb-[18px] text-[#0B2545]">
              A personal doctor for every patient.
              <br />
              <em className="italic text-[#11C4AD]">Anywhere on earth.</em>
            </h1>

            {/* Subheading */}
            <p className="text-[0.97rem] text-[rgba(10,20,40,0.55)] leading-[1.82] max-w-[440px] mb-8">
              SureCova connects patients anywhere in the world to qualified personal doctors anywhere in the world — with legally valid prescriptions delivered across borders. One subscription. One doctor. Continuous, personal care.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap mb-11">
              <Link 
                href="#register-patient" 
                className="inline-flex items-center gap-2 px-6 py-[13px] rounded-full text-[0.88rem] font-semibold bg-[#0D9B88] text-white shadow-[0_4px_18px_rgba(13,155,136,0.28)] hover:bg-[#11C4AD] hover:-translate-y-[2px] transition-all duration-200"
              >
                Start as a Patient →
              </Link>
              <Link 
                href="#for-doctors" 
                className="inline-flex items-center gap-2 px-6 py-[13px] rounded-full text-[0.88rem] font-semibold bg-transparent text-[rgba(10,20,40,0.55)] border-[1.5px] border-[rgba(10,20,40,0.12)] hover:border-[#0D9B88] hover:text-[#11C4AD] transition-all duration-200"
              >
                Join as a Doctor
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              <div>
                <div className="font-serif text-[1rem] font-bold text-[#0B2545] leading-none tracking-[0.04em]">
                  Growing
                  <br />
                  <span className="text-[1.4rem] text-[#11C4AD]">Daily</span>
                </div>
                <div className="text-[0.62rem] text-[rgba(10,20,40,0.40)] uppercase tracking-[0.09em] mt-[3px]">
                  Early access · Join now
                </div>
              </div>
              <div>
                <div className="font-serif text-[1.7rem] font-bold text-[#0B2545] leading-none">
                  <span className="text-[#11C4AD]">2</span>
                </div>
                <div className="text-[0.62rem] text-[rgba(10,20,40,0.40)] uppercase tracking-[0.09em] mt-[3px]">
                  Doctor system
                </div>
              </div>
              <div>
                <div className="font-serif text-[1.7rem] font-bold text-[#0B2545] leading-none">
                  <span className="text-[#11C4AD]">∞</span>
                </div>
                <div className="text-[0.62rem] text-[rgba(10,20,40,0.40)] uppercase tracking-[0.09em] mt-[3px]">
                  Border-free care
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative order-2 flex items-center justify-center lg:order-2">
            <div className="w-[254px] bg-[linear-gradient(155deg,#0A1628,#060F1A)] rounded-[36px] border border-[rgba(13,155,136,0.18)] p-4 shadow-[0_50px_90px_rgba(0,0,0,0.3),0_0_60px_rgba(13,155,136,0.09),inset_0_1px_0_rgba(255,255,255,0.06)] relative z-[2]">
              {/* Notch */}
              <div className="w-[70px] h-[5px] bg-[rgba(255,255,255,0.09)] rounded-[3px] mx-auto mb-3" />
              
              {/* Screen */}
              <div className="bg-[#060D1A] rounded-[24px] overflow-hidden">
                {/* Header */}
                <div className="bg-[linear-gradient(135deg,#072820,#0B4A3C)] p-3 flex items-center gap-[9px]">
                  <div className="w-8 h-8 rounded-full bg-[#0D9B88] flex items-center justify-center font-serif font-bold text-white text-[0.85rem] flex-shrink-0">
                    Dr
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-semibold text-white">Dr. Sarah Chen</div>
                    <div className="text-[0.58rem] text-[#11C4AD] flex items-center gap-[3px]">
                      <div className="w-1 h-1 bg-[#17A85C] rounded-full" />
                      Available Now
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-3 flex flex-col gap-2 min-h-[170px]">
                  <div className="self-start bg-[rgba(255,255,255,0.07)] rounded-[11px] rounded-bl-[3px] p-2 max-w-[85%] text-[0.63rem] text-[rgba(255,255,255,0.72)] leading-[1.55]">
                    Good morning Doctor. BP today was 148/92. Feeling dizzy when I stand up.
                  </div>
                  <div className="self-end bg-[rgba(13,155,136,0.22)] rounded-[11px] rounded-br-[3px] p-2 max-w-[85%] text-[0.63rem] text-[rgba(255,255,255,0.72)] leading-[1.55]">
                    Thanks for the early reading. That dizziness is likely postural hypotension. I want to review your Amlodipine dose. Send me today&apos;s full reading.
                  </div>
                  <div className="self-start bg-[rgba(255,255,255,0.07)] rounded-[11px] rounded-bl-[3px] p-2 max-w-[85%] text-[0.63rem] text-[rgba(255,255,255,0.72)] leading-[1.55]">
                    Sending now 📊
                  </div>
                  <div className="self-end bg-[rgba(13,155,136,0.22)] rounded-[11px] rounded-br-[3px] p-2 max-w-[85%] text-[0.63rem] text-[rgba(255,255,255,0.72)] leading-[1.55]">
                    Reviewed. I&apos;ll have your prescription updated before end of day. Don&apos;t adjust your dose yet.
                  </div>
                </div>

                {/* Input */}
                <div className="flex items-center gap-[7px] p-3 pb-[14px]">
                  <div className="flex-1 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.09)] rounded-2xl px-[11px] py-[7px] text-[0.62rem] text-[rgba(255,255,255,0.28)]">
                    Type a message...
                  </div>
                  <button className="w-[26px] h-[26px] bg-[#0D9B88] rounded-full flex items-center justify-center flex-shrink-0 border-none">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Card - Top Right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-24px] right-[-44px] bg-[rgba(255,255,255,0.97)] backdrop-blur-[16px] border border-[rgba(13,155,136,0.14)] rounded-2xl p-[10px_14px] shadow-[0_6px_24px_rgba(0,0,0,0.09)] flex items-center gap-2"
            >
              <div className="w-7 h-7 bg-[rgba(13,155,136,0.1)] rounded-[7px] flex items-center justify-center text-[0.75rem] flex-shrink-0">
                ✓
              </div>
              <div>
                <div className="text-[0.56rem] text-[rgba(10,20,40,0.40)] uppercase tracking-[0.05em]">Response Time</div>
                <div className="text-[0.74rem] font-semibold text-[#0B2545]">&lt; 2 min</div>
              </div>
            </motion.div>

            {/* Floating Card - Bottom Left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-3 left-[-52px] bg-[rgba(255,255,255,0.97)] backdrop-blur-[16px] border border-[rgba(13,155,136,0.14)] rounded-2xl p-[10px_14px] shadow-[0_6px_24px_rgba(0,0,0,0.09)]"
            >
              <div className="text-[0.56rem] text-[rgba(10,20,40,0.40)] uppercase tracking-[0.05em]">Satisfaction</div>
              <div className="text-[0.74rem] font-semibold text-[#0B2545]">98.5%</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
