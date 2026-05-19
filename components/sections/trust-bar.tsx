import { Shield, Lock, Award, Globe } from "lucide-react"

const trustItems = [
  { icon: Shield, label: "HIPAA Compliant" },
  { icon: Lock, label: "End-to-End Encrypted" },
  { icon: Award, label: "Board-Certified Doctors" },
  { icon: Globe, label: "150+ Countries" },
]

export function TrustBar() {
  return (
    <section className="border-y border-[rgba(10,20,40,0.06)] bg-[rgb(var(--navy-2))] py-6">
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[rgba(13,155,136,0.1)] border border-[rgba(13,155,136,0.14)] rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[rgb(var(--teal))]" />
              </div>
              <span className="text-sm font-medium text-[rgba(10,20,40,0.55)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
