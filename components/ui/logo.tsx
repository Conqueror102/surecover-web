import Link from "next/link"

import { cn } from "@/lib/utils"

type LogoProps = {
  href?: string
  light?: boolean
  className?: string
  markClassName?: string
  textClassName?: string
}

export function Logo({
  href = "/",
  light = false,
  className,
  markClassName,
  textClassName,
}: LogoProps) {
  return (
    <Link href={href} className={cn("flex shrink-0 items-center gap-[9px]", className)}>
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[rgb(var(--teal))] to-[rgb(var(--teal-lo))]",
          markClassName
        )}
      >
        <svg viewBox="0 0 26 26" fill="none" className="h-[17px] w-[17px]" aria-hidden="true">
          <path
            d="M13 3C7.477 3 3 7.477 3 13s4.477 10 10 10 10-4.477 10-10S18.523 3 13 3z"
            fill="rgba(255,255,255,0.15)"
          />
          <path d="M13 7v6M10 10h6" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M8.5 17c1-1.5 2.5-2.2 4.5-2.2s3.5.7 4.5 2.2"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          "font-serif text-[1.15rem] font-bold leading-none tracking-[-0.02em]",
          light ? "text-white/80" : "text-[rgb(var(--dark))]",
          textClassName
        )}
      >
        Sure<span className="text-[rgb(var(--teal-hi))]">Cova</span>
      </span>
    </Link>
  )
}
