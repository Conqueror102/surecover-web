"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, LockKeyhole, Mail } from "lucide-react"

import { Logo } from "@/components/ui/logo"
import { formInputClass, labelClass } from "@/components/ui/section"

export default function LoginPage() {
  const [userType, setUserType] = useState<"patient" | "doctor">("patient")

  return (
    <section className="flex min-h-screen items-center bg-[linear-gradient(160deg,#F6FDFC_0%,#FAFCFE_60%,#F4F8F7_100%)] px-6 py-[120px] md:px-12">
      <div className="mx-auto w-full max-w-[480px]">
        <div className="mb-10 text-center">
          <Logo className="inline-flex" markClassName="h-10 w-10" textClassName="text-[1.4rem]" />
        </div>

        <div className="rounded-[32px] border border-[rgba(10,20,40,0.06)] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] md:p-10">
          <h1 className="mb-2 text-center font-serif text-[1.8rem] font-bold text-[rgb(var(--dark))]">Welcome back</h1>
          <p className="mb-8 text-center text-[0.88rem] text-[rgba(10,20,40,0.55)]">Sign in to your SureCova account</p>

          <div className="mb-7 flex gap-2 rounded-[16px] bg-[rgb(var(--navy-2))] p-1">
            {(["patient", "doctor"] as const).map((type) => (
              <button
                type="button"
                onClick={() => setUserType(type)}
                className={`flex-1 rounded-[10px] px-4 py-2.5 text-[0.85rem] font-semibold capitalize transition ${
                  userType === type
                    ? "bg-white text-[rgb(var(--dark))] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                    : "text-[rgba(10,20,40,0.4)]"
                }`}
                key={type}
              >
                {type}
              </button>
            ))}
          </div>

          <form className="space-y-[18px]">
            <label className="block">
              <span className={`${labelClass} mb-2 block text-[0.75rem] uppercase tracking-[0.08em] text-[rgba(10,20,40,0.4)]`}>Email Address</span>
              <span className="relative block">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(10,20,40,0.35)]" />
                <input type="email" placeholder="you@email.com" className={`${formInputClass} pl-10`} />
              </span>
            </label>

            <label className="block">
              <span className={`${labelClass} mb-2 block text-[0.75rem] uppercase tracking-[0.08em] text-[rgba(10,20,40,0.4)]`}>Password</span>
              <span className="relative block">
                <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgba(10,20,40,0.35)]" />
                <input type="password" placeholder="••••••••" className={`${formInputClass} pl-10`} />
              </span>
            </label>

            <div className="flex items-center justify-between pb-1 pt-0.5">
              <label className="flex cursor-pointer items-center gap-2 text-[0.8rem] text-[rgba(10,20,40,0.55)]">
                <input type="checkbox" className="h-4 w-4 accent-[rgb(var(--teal))]" />
                Remember me
              </label>
              <a href="#" className="text-[0.8rem] font-semibold text-[rgb(var(--teal-hi))]">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[rgb(var(--teal))] px-6 py-3.5 text-[0.88rem] font-semibold text-white shadow-[0_4px_18px_rgba(13,155,136,0.28)] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--teal-hi))]"
            >
              Sign In →
            </button>
          </form>

          <div className="my-7 flex items-center gap-3.5">
            <div className="h-px flex-1 bg-[rgba(10,20,40,0.06)]" />
            <span className="text-[0.75rem] uppercase tracking-[0.08em] text-[rgba(10,20,40,0.4)]">Or</span>
            <div className="h-px flex-1 bg-[rgba(10,20,40,0.06)]" />
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(10,20,40,0.12)] px-6 py-3 text-[0.88rem] font-semibold text-[rgba(10,20,40,0.65)] transition hover:border-[rgb(var(--teal))] hover:text-[rgb(var(--teal-hi))]">
            <Heart size={17} />
            Continue with Google
          </button>

          <div className="mt-6 text-center text-[0.85rem] text-[rgba(10,20,40,0.55)]">
            Don&apos;t have an account? <Link href="/register" className="font-semibold text-[rgb(var(--teal))]">Create one</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
