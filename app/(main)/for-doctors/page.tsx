import { DoctorBenefits } from "@/components/sections/doctor-benefits"
import { DoctorCTA } from "@/components/sections/doctor-cta"
import { DoctorHero } from "@/components/sections/doctor-hero"
import { IncomeCalculator } from "@/components/sections/income-calculator"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "For Doctors | Your Private Practice Without Overhead",
  description:
    "SureCova lets you build a panel of patients who pay you monthly - like a private practice you run on your own schedule, from anywhere in the world.",
})

export default function ForDoctorsPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[rgb(var(--teal-lo))] to-[rgb(var(--teal-mid))] px-6 py-5 text-center md:px-12">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-3">
          <span className="h-5 w-px bg-white/20" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/50">
            Everything above is for patients
          </span>
          <span className="h-5 w-px bg-white/20" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[rgb(var(--teal-hi))]">
            Everything below is for doctors
          </span>
          <span className="h-5 w-px bg-white/20" />
        </div>
      </div>
      <DoctorHero />
      <DoctorBenefits />
      <IncomeCalculator />
      <DoctorCTA />
    </>
  )
}
