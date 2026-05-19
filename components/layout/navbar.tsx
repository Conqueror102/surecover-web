"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"

const navLinks = [
  { href: "/find-doctors", label: "Find Doctors" },
  { href: "/for-doctors", label: "For Doctors" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobile = () => setIsMobileMenuOpen(false)

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-[1000] flex h-16 items-center justify-between border-b border-[rgba(10,20,40,0.06)] bg-white/95 px-6 backdrop-blur-xl transition-shadow md:px-12",
          isScrolled && "border-[rgba(13,155,136,0.15)] shadow-[0_2px_20px_rgba(0,0,0,0.07)]"
        )}
      >
        <Logo />

        <ul className="hidden items-center gap-[22px] lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.8rem] font-semibold text-[rgba(10,20,40,0.85)] transition hover:text-[rgb(var(--teal-hi))]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="text-[0.8rem] font-semibold text-[rgba(10,20,40,0.85)] transition hover:text-[rgb(var(--teal-hi))]"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="rounded-full bg-[rgb(var(--teal))] px-4 py-[7px] text-[0.8rem] font-semibold text-white shadow-[0_3px_12px_rgba(13,155,136,0.25)] transition hover:-translate-y-px hover:bg-[rgb(var(--teal-hi))]"
            >
              Get Started
            </Link>
          </li>
        </ul>

        <button
          className="flex flex-col gap-1 bg-transparent p-1.5 lg:hidden"
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span className="block h-0.5 w-5 rounded bg-[rgba(10,20,40,0.85)] transition" />
          <span className="block h-0.5 w-5 rounded bg-[rgba(10,20,40,0.85)] transition" />
          <span className="block h-0.5 w-5 rounded bg-[rgba(10,20,40,0.85)] transition" />
        </button>
      </nav>

      <nav
        className={cn(
          "fixed inset-x-0 top-16 z-[999] hidden flex-col border-b border-[rgba(10,20,40,0.06)] bg-white px-6 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:px-12 lg:hidden",
          isMobileMenuOpen && "flex"
        )}
      >
        {[...navLinks, { href: "/login", label: "Sign In" }].map((link) => (
          <Link
            href={link.href}
            onClick={closeMobile}
            className="block border-b border-[rgba(10,20,40,0.06)] py-3.5 text-[0.95rem] font-medium text-[rgba(10,20,40,0.55)]"
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/register"
          onClick={closeMobile}
          className="mt-2.5 block rounded-[16px] bg-[rgb(var(--teal))] p-3.5 text-center text-[0.95rem] font-semibold text-white"
        >
          Get Started →
        </Link>
      </nav>
    </>
  )
}
