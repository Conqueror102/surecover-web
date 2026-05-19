"use client"

import { useState } from "react"

type Doctor = {
  name: string
  spec: string
  price: string
  initials: string
  bg: string
}

type Props = {
  isOpen: boolean
  onClose: () => void
  doctor: Doctor | null
}

export default function DoctorModal({ isOpen, onClose, doctor }: Props) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen || !doctor) return null

  const subscribe = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 900)
  }

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-[rgba(0,0,0,0.45)] p-5 backdrop-blur"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="w-full max-w-[400px] overflow-hidden rounded-[24px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
        {isSuccess ? (
          <div className="px-7 py-12 text-center">
            <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[rgba(23,168,92,0.1)] text-[1.8rem] text-[rgb(var(--green))]">
              ✓
            </div>
            <div className="mb-2 font-serif text-[1.3rem] font-bold text-[rgb(var(--dark))]">You&apos;re all set.</div>
            <p className="mb-6 text-[0.83rem] leading-[1.7] text-[rgba(10,20,40,0.55)]">
              Your subscription is confirmed. Your doctor will be in touch within 24 hours to begin your care.
            </p>
            <button className="w-full rounded-full bg-[rgb(var(--teal))] px-6 py-3 text-[0.88rem] font-semibold text-white" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <div className="px-7 py-8">
            <div className="mb-6 flex items-center gap-3.5">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] font-serif text-[1.3rem] font-bold text-white"
                style={{ background: doctor.bg }}
              >
                {doctor.initials}
              </div>
              <div>
                <div className="mb-0.5 text-[1.1rem] font-bold text-[rgb(var(--dark))]">{doctor.name}</div>
                <div className="text-[0.78rem] text-[rgba(10,20,40,0.4)]">{doctor.spec}</div>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between rounded-[16px] bg-[rgba(13,155,136,0.06)] px-5 py-4">
              <div>
                <div className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[rgb(var(--teal-hi))]">
                  Monthly Subscription
                </div>
                <div className="text-[0.82rem] text-[rgb(var(--dark))]">Continuous access · text & voice</div>
              </div>
              <div className="font-serif text-[1.4rem] font-bold text-[rgb(var(--teal-hi))]">${doctor.price}</div>
            </div>

            <div className="mb-6">
              <div className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[rgba(10,20,40,0.4)]">Payment Method</div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between rounded-[16px] border-[1.5px] border-[rgb(var(--teal))] bg-[rgba(13,155,136,0.04)] px-3.5 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-4 w-4 rounded-full border-4 border-[rgb(var(--teal))]" />
                    <div className="text-[0.82rem] font-semibold text-[rgb(var(--dark))]">Saved Card (•••• 4242)</div>
                  </div>
                  <div className="text-[0.75rem] text-[rgba(10,20,40,0.4)]">Visa</div>
                </div>
                <div className="flex items-center justify-between rounded-[16px] border-[1.5px] border-[rgba(10,20,40,0.06)] bg-white px-3.5 py-3 opacity-60">
                  <div className="flex items-center gap-2.5">
                    <div className="h-4 w-4 rounded-full border-[1.5px] border-[rgba(10,20,40,0.12)]" />
                    <div className="text-[0.82rem] text-[rgb(var(--dark))]">New Card or Bank Transfer</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-6 text-[0.72rem] leading-[1.6] text-[rgba(10,20,40,0.4)]">
              By subscribing, you agree to SureCova&apos;s Terms of Service and Privacy Policy. Your subscription will renew automatically every month.
            </p>

            <button
              className="w-full rounded-full bg-[rgb(var(--teal))] px-6 py-3 text-[0.88rem] font-semibold text-white transition hover:bg-[rgb(var(--teal-hi))] disabled:opacity-70"
              disabled={isProcessing}
              onClick={subscribe}
            >
              {isProcessing ? "Processing..." : `Subscribe for $${doctor.price}/mo`}
            </button>
            <div className="mt-3.5 text-center">
              <button className="text-[0.7rem] text-[rgba(10,20,40,0.4)]" onClick={onClose}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
