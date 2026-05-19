import * as React from "react"

import { cn } from "@/lib/utils"

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={cn("w-full px-6 md:px-12", className)}>{children}</div>
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className={cn("relative py-20 md:py-[18px]", className)}>
      {children}
    </section>
  )
}

export function SectionHeader({
  label,
  title,
  children,
  centered = false,
  className,
}: {
  label?: string
  title: React.ReactNode
  children?: React.ReactNode
  centered?: boolean
  className?: string
}) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {label && (
        <div
          className={cn(
            "mb-2.5 flex items-center gap-2 text-[0.67rem] font-bold uppercase tracking-[0.14em] text-[rgb(var(--teal-hi))]",
            centered && "justify-center"
          )}
        >
          <span className="h-px w-[18px] bg-[rgb(var(--teal))]" />
          {label}
        </div>
      )}
      <h2 className="mb-3.5 font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[1.14] tracking-[-0.025em] text-[rgb(var(--dark))] [&_em]:text-[rgb(var(--teal-hi))]">
        {title}
      </h2>
      {children && (
        <p
          className={cn(
            "max-w-[520px] text-[0.93rem] leading-[1.8] text-[rgba(10,20,40,0.55)]",
            centered && "mx-auto"
          )}
        >
          {children}
        </p>
      )}
    </div>
  )
}

export const formInputClass =
  "w-full rounded-[10px] border-[1.5px] border-[rgba(10,20,40,0.06)] bg-white px-4 py-[13px] font-sans text-[0.88rem] text-[rgb(var(--dark))] outline-none transition focus:border-[rgb(var(--teal))] focus:shadow-[0_0_0_3px_rgba(13,155,136,0.08)] placeholder:text-[rgba(10,20,40,0.4)]"

export const labelClass = "text-[0.8rem] font-semibold tracking-[-0.01em] text-[rgb(var(--dark))]"

export const cardClass =
  "rounded-[24px] border border-[rgba(10,20,40,0.06)] bg-white transition hover:-translate-y-1 hover:border-[rgba(13,155,136,0.22)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
