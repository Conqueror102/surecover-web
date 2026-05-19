"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Building2, Check, ChevronLeft, ChevronRight, Pill, Stethoscope, UserRound } from "lucide-react"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"
import { formInputClass, labelClass } from "@/components/ui/section"

type UserType = "patient" | "doctor" | "pharmacy" | "hospital"

type Field =
  | { type: "input"; label: string; inputType?: string; placeholder?: string }
  | { type: "select"; label: string; options: string[] }
  | { type: "chips"; label: string; options: string[] }
  | { type: "terms"; id: string; label: string }

type Step = {
  title: string
  fields: Field[]
}

const roleCopy = {
  patient: {
    label: "Patient",
    title: "Your personal doctor, always available",
    subtitle: "Join thousands of patients getting continuous, personalized care from qualified doctors worldwide.",
    Icon: UserRound,
    features: ["24/7 messaging", "Legal prescriptions", "Global doctor access"],
  },
  doctor: {
    label: "Doctor",
    title: "Build your practice, your way",
    subtitle: "Join a global platform where you set your rates, work on your schedule, and focus on medicine.",
    Icon: Stethoscope,
    features: ["Set your rates", "Choose your schedule", "Licence-aware compliance"],
  },
  pharmacy: {
    label: "Pharmacy",
    title: "Earn recurring referral income",
    subtitle: "Partner with us to help patients find ongoing care while earning monthly commissions.",
    Icon: Pill,
    features: ["Referral tracking", "Monthly commissions", "Simple partner setup"],
  },
  hospital: {
    label: "Hospital",
    title: "Keep patients connected after discharge",
    subtitle: "Extend your care beyond discharge with a white-label telemedicine channel.",
    Icon: Building2,
    features: ["Revenue share", "White-label setup", "Performance analytics"],
  },
}

const countries = ["Nigeria", "Ghana", "Kenya", "South Africa", "India", "United Kingdom", "Other"]
const languages = ["English", "Hausa", "Yoruba", "Igbo", "French", "Arabic", "Hindi", "Swahili"]

const steps: Record<UserType, Step[]> = {
  patient: [
    {
      title: "Basic information",
      fields: [
        { type: "input", label: "First Name", placeholder: "First name" },
        { type: "input", label: "Last Name", placeholder: "Last name" },
        { type: "input", label: "Date of Birth", inputType: "date" },
        { type: "select", label: "Gender", options: ["Female", "Male", "Prefer not to say"] },
        { type: "input", label: "Email Address", inputType: "email", placeholder: "you@email.com" },
        { type: "input", label: "Phone (with country code)", inputType: "tel", placeholder: "+234 080 0000 0000" },
      ],
    },
    {
      title: "Location and preferences",
      fields: [
        { type: "select", label: "Country", options: countries },
        { type: "input", label: "City", placeholder: "Your city" },
        { type: "chips", label: "Languages You Speak", options: languages },
      ],
    },
    {
      title: "Secure your account",
      fields: [
        { type: "input", label: "Password", inputType: "password", placeholder: "Create a password" },
        { type: "input", label: "Confirm Password", inputType: "password", placeholder: "Confirm password" },
        { type: "terms", id: "terms-patient", label: "I agree to the Terms and Privacy Policy" },
      ],
    },
  ],
  doctor: [
    {
      title: "Professional identity",
      fields: [
        { type: "input", label: "Full Name (as on your medical certificate)", placeholder: "Dr. " },
        { type: "input", label: "Date of Birth", inputType: "date" },
        { type: "select", label: "Gender", options: ["Female", "Male", "Prefer not to say"] },
        { type: "input", label: "Email Address", inputType: "email", placeholder: "your@email.com" },
        { type: "input", label: "Phone (with country code)", inputType: "tel", placeholder: "+44 7700 000000" },
      ],
    },
    {
      title: "Licence and practice",
      fields: [
        { type: "select", label: "Current Country", options: countries },
        { type: "input", label: "City", placeholder: "Your city" },
        { type: "chips", label: "Languages You Speak", options: [...languages, "Twi"] },
        { type: "input", label: "Medical Degree", placeholder: "e.g. MBBCh, University of Lagos, 2012" },
        { type: "input", label: "Licensing Body", placeholder: "e.g. MDCN, GMC, MCI" },
        { type: "input", label: "Registration Number", placeholder: "Your licence number" },
        {
          type: "select",
          label: "Primary Specialty",
          options: ["General Practice / Family Medicine", "Internal Medicine", "Cardiology", "Endocrinology", "Psychiatry / Mental Health", "Dermatology", "Paediatrics", "Other"],
        },
        { type: "select", label: "Years in Clinical Practice", options: ["1-3 years", "4-7 years", "8-14 years", "15+ years"] },
      ],
    },
    {
      title: "Secure your account",
      fields: [
        { type: "input", label: "Password", inputType: "password", placeholder: "Create a password" },
        { type: "input", label: "Confirm Password", inputType: "password", placeholder: "Confirm password" },
        { type: "terms", id: "terms-doctor", label: "I agree to the Terms and Privacy Policy" },
      ],
    },
  ],
  pharmacy: [
    {
      title: "Contact and pharmacy",
      fields: [
        { type: "input", label: "First Name", placeholder: "First name" },
        { type: "input", label: "Last Name", placeholder: "Last name" },
        { type: "input", label: "Email Address", inputType: "email", placeholder: "you@pharmacy.com" },
        { type: "input", label: "Phone Number", inputType: "tel", placeholder: "+234 080 0000 0000" },
        { type: "chips", label: "Role", options: ["Pharmacist", "Pharmacy Technician"] },
        { type: "input", label: "Pharmacy Name", placeholder: "Name of pharmacy where you work" },
      ],
    },
    {
      title: "Referral setup",
      fields: [
        { type: "select", label: "Country", options: countries },
        { type: "input", label: "City", placeholder: "City" },
        { type: "input", label: "Pharmacy Council Registration Number", placeholder: "e.g. PCN-XXXX" },
        { type: "input", label: "Password", inputType: "password", placeholder: "Create a password" },
        { type: "input", label: "Confirm Password", inputType: "password", placeholder: "Confirm password" },
        { type: "terms", id: "terms-pharmacy", label: "I agree to the Terms and Privacy Policy" },
      ],
    },
  ],
  hospital: [
    {
      title: "Institution details",
      fields: [
        { type: "input", label: "Hospital Name", placeholder: "Enter hospital name" },
        { type: "input", label: "Contact Person Name", placeholder: "Full name" },
        { type: "input", label: "Email Address", inputType: "email", placeholder: "hospital@email.com" },
        { type: "input", label: "Phone Number", inputType: "tel", placeholder: "+234 080 0000 0000" },
      ],
    },
    {
      title: "Hospital setup",
      fields: [
        { type: "select", label: "Country", options: countries },
        { type: "input", label: "City", placeholder: "Your city" },
        { type: "input", label: "Number of Beds", inputType: "number", placeholder: "0" },
        { type: "input", label: "Password", inputType: "password", placeholder: "Create a password" },
        { type: "input", label: "Confirm Password", inputType: "password", placeholder: "Confirm password" },
        { type: "terms", id: "terms-hospital", label: "I agree to the Terms and Privacy Policy" },
      ],
    },
  ],
}

const hashToRole: Record<string, UserType> = {
  "register-patient": "patient",
  "register-doctor": "doctor",
  "register-pharmacy": "pharmacy",
  "register-hospital": "hospital",
}

const getInitialRole = (): UserType | null => {
  if (typeof window === "undefined") {
    return null
  }

  return hashToRole[window.location.hash.replace("#", "")] ?? null
}

export default function RegisterPage() {
  const [userType, setUserType] = useState<UserType | null>(() => getInitialRole())
  const [currentStep, setCurrentStep] = useState(1)

  const totalSteps = userType ? steps[userType].length : 2
  const role = userType ? roleCopy[userType] : null
  const ActiveIcon = role?.Icon ?? UserRound
  const activeStep = useMemo(() => (userType ? steps[userType][currentStep - 1] : null), [currentStep, userType])

  const selectRole = (nextRole: UserType) => {
    setUserType(nextRole)
    setCurrentStep(1)
    window.history.replaceState(null, "", `#register-${nextRole}`)
  }

  const nextStep = () => setCurrentStep((step) => Math.min(step + 1, totalSteps))
  const prevStep = () => setCurrentStep((step) => Math.max(step - 1, 1))

  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-[45%_55%]">
      <section className="relative hidden overflow-hidden bg-[linear-gradient(135deg,#053D35_0%,#065448_50%,#0B9B88_100%)] p-12 lg:flex">
        <div className="absolute -right-36 -top-48 h-[600px] w-[600px] animate-[float_20s_ease-in-out_infinite] rounded-full bg-[rgba(17,196,173,0.4)] opacity-30 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] animate-[float_15s_ease-in-out_infinite_5s] rounded-full bg-[rgba(7,46,40,0.6)] opacity-30 blur-[120px]" />

        <div className="relative z-10 flex max-w-[480px] flex-col gap-12">
          <Logo light markClassName="h-10 w-10" textClassName="text-[1.35rem] text-white" />

          {!role ? (
            <div className="mt-14">
              <h1 className="mb-4 font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold leading-[1.12] text-white">
                Your personal doctor, always available
              </h1>
              <p className="text-[0.95rem] leading-[1.7] text-white/70">
                Join thousands getting continuous, personalized care from qualified doctors worldwide.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["24/7 Access", "500+ Doctors", "6 Countries"].map((item) => {
                  const [value, label] = item.split(" ")
                  return (
                    <div className="rounded-xl border border-white/15 bg-white/10 p-4" key={item}>
                      <div className="font-serif text-2xl font-bold text-white">{value}</div>
                      <div className="text-[0.68rem] uppercase tracking-[0.08em] text-white/50">{label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-4">
              <h1 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-[1.12] text-white">{role.title}</h1>
              <p className="text-[0.95rem] leading-[1.7] text-white/70">{role.subtitle}</p>
              <div className="mt-2 flex flex-col gap-5">
                {role.features.map((feature) => (
                  <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:translate-x-1 hover:bg-white/15" key={feature}>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-[rgb(var(--teal-hi))]">
                      <Check size={22} />
                    </div>
                    <div>
                      <div className="text-[0.9rem] font-bold text-white">{feature}</div>
                      <div className="text-[0.8rem] text-white/60">Built into your SureCova account</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center overflow-y-auto p-6 md:p-12">
        <div className="w-full max-w-[540px]">
          {!userType ? (
            <>
              <div className="mb-8 text-center">
                <h2 className="mb-2 font-serif text-[2rem] font-bold text-[rgb(var(--dark))]">Join SureCova</h2>
                <p className="text-[0.9rem] text-[rgba(10,20,40,0.55)]">Choose your role to get started</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {(Object.keys(roleCopy) as UserType[]).map((roleId) => {
                  const item = roleCopy[roleId]
                  const Icon = item.Icon

                  return (
                    <button
                      type="button"
                      className="group relative rounded-2xl border border-[rgba(10,20,40,0.06)] bg-white p-6 text-left transition hover:-translate-y-1 hover:border-[rgba(13,155,136,0.28)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.09)]"
                      onClick={() => selectRole(roleId)}
                      key={roleId}
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(13,155,136,0.1)] text-[rgb(var(--teal))]">
                        <Icon size={25} />
                      </div>
                      <h3 className="mb-2 font-serif text-xl font-bold text-[rgb(var(--dark))]">{item.label}</h3>
                      <p className="pr-8 text-[0.82rem] leading-[1.65] text-[rgba(10,20,40,0.55)]">{item.subtitle}</p>
                      <ChevronRight className="absolute bottom-6 right-6 text-[rgb(var(--teal-hi))] transition group-hover:translate-x-1" size={20} />
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 text-center text-[0.85rem] text-[rgba(10,20,40,0.55)]">
                Already have an account? <Link href="/login" className="font-semibold text-[rgb(var(--teal))] hover:text-[rgb(var(--teal-hi))]">Sign in</Link>
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                className="mb-6 inline-flex items-center gap-2 text-[0.82rem] font-semibold text-[rgba(10,20,40,0.55)] transition hover:text-[rgb(var(--dark))]"
                onClick={() => {
                  setUserType(null)
                  setCurrentStep(1)
                }}
              >
                <ChevronLeft size={17} />
                Back to role selection
              </button>

              <div className="mb-8">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(13,155,136,0.1)] text-[rgb(var(--teal))]">
                    <ActiveIcon size={21} />
                  </div>
                  <div>
                    <h2 className="font-serif text-[1.65rem] font-bold text-[rgb(var(--dark))]">{role?.label} signup</h2>
                    <p className="text-[0.8rem] text-[rgba(10,20,40,0.4)]">Step {currentStep} of {totalSteps}</p>
                  </div>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-[rgba(10,20,40,0.06)]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[rgb(var(--teal))] to-[rgb(var(--teal-hi))] transition-all"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              <form className="flex flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
                {activeStep && <h3 className="font-serif text-xl font-bold text-[rgb(var(--dark))]">{activeStep.title}</h3>}
                <div className="grid gap-4 sm:grid-cols-2">
                  {activeStep?.fields.map((field, index) => <FieldRenderer field={field} key={`${field.label}-${index}`} />)}
                </div>

                <div className="mt-4 flex gap-3">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      className="flex-1 rounded-[10px] border-[1.5px] border-[rgba(10,20,40,0.12)] bg-white px-6 py-3.5 text-[0.9rem] font-semibold text-[rgba(10,20,40,0.55)] transition hover:border-[rgba(10,20,40,0.4)] hover:text-[rgb(var(--dark))]"
                      onClick={prevStep}
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="button"
                    className="flex-[2] rounded-[10px] bg-[rgb(var(--teal))] px-6 py-3.5 text-[0.9rem] font-semibold text-white shadow-[0_4px_16px_rgba(13,155,136,0.2)] transition hover:-translate-y-px hover:bg-[rgb(var(--teal-hi))]"
                    onClick={currentStep < totalSteps ? nextStep : undefined}
                  >
                    {currentStep < totalSteps ? "Continue →" : "Create Account"}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center text-[0.85rem] text-[rgba(10,20,40,0.55)]">
                Already have an account? <Link href="/login" className="font-semibold text-[rgb(var(--teal))] hover:text-[rgb(var(--teal-hi))]">Sign in</Link>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

function FieldRenderer({ field }: { field: Field }) {
  if (field.type === "chips") {
    return (
      <div className="col-span-full flex flex-col gap-2">
        <span className={labelClass}>{field.label}</span>
        <div className="flex flex-wrap gap-2">
          {field.options.map((option, index) => (
            <button
              type="button"
              className={cn(
                "rounded-full border-[1.5px] px-4 py-2 text-[0.8rem] font-medium transition",
                index === 0
                  ? "border-[rgb(var(--teal))] bg-[rgba(13,155,136,0.08)] text-[rgb(var(--teal))]"
                  : "border-[rgba(10,20,40,0.06)] bg-white text-[rgba(10,20,40,0.55)] hover:border-[rgba(10,20,40,0.4)] hover:text-[rgb(var(--dark))]"
              )}
              key={option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (field.type === "terms") {
    return (
      <label className="col-span-full flex items-start gap-2.5 rounded-[10px] bg-[rgb(var(--navy-2))] p-4 text-[0.82rem] leading-[1.6] text-[rgba(10,20,40,0.55)]">
        <input id={field.id} type="checkbox" className="mt-0.5 h-[18px] w-[18px] accent-[rgb(var(--teal))]" />
        <span>
          {field.label.split("Terms")[0]}
          <a href="/terms" className="font-semibold text-[rgb(var(--teal))]">Terms</a>
          {field.label.includes("Privacy") && <> and <a href="/privacy" className="font-semibold text-[rgb(var(--teal))]">Privacy Policy</a></>}
        </span>
      </label>
    )
  }

  return (
    <label className={cn("flex flex-col gap-2", field.label.length > 28 && "col-span-full")}>
      <span className={labelClass}>{field.label}</span>
      {field.type === "select" ? (
        <select className={formInputClass} defaultValue="">
          <option value="" disabled>Select...</option>
          {field.options.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : (
        <input type={field.inputType ?? "text"} className={formInputClass} placeholder={field.placeholder} />
      )}
    </label>
  )
}
