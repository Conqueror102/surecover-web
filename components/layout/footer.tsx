import { Logo } from "@/components/ui/logo"

const footerGroups = [
  {
    title: "Platform",
    links: [
      ["Find a Doctor", "/find-doctors"],
      ["Conditions", "/#chronic"],
      ["Two-Doctor System", "/#model"],
      ["Hospital Channel", "/hospitals"],
      ["Pharmacy Program", "/pharmacies"],
      ["Pricing", "/pricing"],
    ],
  },
  {
    title: "Register",
    links: [
      ["For Patients", "/register#register-patient"],
      ["For Doctors", "/for-doctors"],
      ["For Pharmacists", "/pharmacies"],
      ["For Hospitals", "/hospitals"],
      ["Global Markets", "/#global"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About SureCova", "/about"],
      ["Contact Us", "/about#contact"],
      ["Privacy Policy", "#"],
      ["Terms of Service", "#"],
      ["surecova.com", "https://surecova.com"],
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[rgb(var(--teal-lo))] px-6 py-14 text-white md:px-12">
      <div className="w-full">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-[280px] text-[0.78rem] leading-[1.7] text-white/45">
              Connecting patients and doctors across the world. Chronic care, done right — from anywhere.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[rgb(var(--teal-hi))]">
                {group.title}
              </div>
              <div className="flex flex-col gap-2">
                {group.links.map(([label, href]) => (
                  <a
                    href={href}
                    className="text-[0.78rem] text-white/50 transition hover:text-[rgb(var(--teal-hi))]"
                    key={href}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.7rem] text-white/35 md:flex-row md:items-start md:justify-between">
          <div>© 2026 SureCova Inc. · Delaware C-Corp · All rights reserved.</div>
          <div className="max-w-[560px] md:text-right">
            SureCova is a technology platform connecting patients and doctors. It is not a medical provider, does not
            provide emergency services, and does not replace in-person care where physically required.
          </div>
        </div>
      </div>
    </footer>
  )
}
