import HospitalChannel from "@/components/interactive/HospitalChannel"
import { Container, Section, SectionHeader } from "@/components/ui/section"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Hospital Channel | Continuing Care After Discharge",
  description: "Your hospital's personal doctor channel - stay connected with the specialist who treated you, from home.",
})

const journey = [
  ["01", "🏥", "Scan or Visit", "Your discharge nurse gives you a QR code or hospital SureCova link."],
  ["02", "🩺", "Choose Your Specialist", "See the specialist who managed your inpatient care or select from enrolled doctors."],
  ["03", "📋", "Register & Pay", "Enter your details and receive a secure activation PIN instantly."],
  ["04", "📱", "Download & Connect", "Install the app, enter your PIN, and continue care at home."],
]

const adminStats = [
  ["147", "Active subscribers"],
  ["4", "Enrolled doctors"],
  ["₦441k", "Monthly MRR"],
]

export default function HospitalsPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0B3D5C] to-[#0D6B8C] px-6 py-5 text-center md:px-12">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-3">
          <span className="h-5 w-px bg-white/20" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/50">For individuals</span>
          <span className="h-5 w-px bg-white/20" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[rgb(var(--teal-hi))]">🏥 For hospitals - SureCova discharge care channel</span>
          <span className="h-5 w-px bg-white/20" />
        </div>
      </div>

      <HospitalChannel />

      <Section id="hc-how" className="bg-gradient-to-b from-[#F8FAFB] to-white">
        <Container>
          <SectionHeader label="Patient Journey" title={<>From discharge to <em>connected care</em> - in under 3 minutes</>}>
            Your hospital handles the setup. You just download an app and start talking to your doctor.
          </SectionHeader>
          <div className="relative mt-12 grid gap-[18px] md:grid-cols-2 lg:grid-cols-4">
            {journey.map(([num, icon, title, desc], index) => (
              <div
                className={`rounded-[24px] border p-6 text-center transition hover:-translate-y-1 hover:border-[rgba(13,155,136,0.22)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.06)] ${
                  index === 2 ? "border-[rgba(13,155,136,0.2)] bg-[rgba(13,155,136,0.06)]" : "border-[rgba(10,20,40,0.06)] bg-white"
                }`}
                key={num}
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[rgba(13,155,136,0.2)] bg-[rgba(13,155,136,0.1)] font-mono text-[0.78rem] font-bold text-[rgb(var(--teal-hi))]">{num}</div>
                <span className="mb-2 block text-[1.7rem]">{icon}</span>
                <div className="mb-2 font-serif text-[0.93rem] font-bold text-[rgb(var(--dark))]">{title}</div>
                <p className="text-[0.74rem] leading-[1.65] text-[rgba(10,20,40,0.55)]">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="hc-admin" className="bg-[rgb(var(--dark))]">
        <Container>
          <SectionHeader label="Hospital Administration" title={<>Your hospital&apos;s <em>discharge dashboard.</em></>} />
          <p className="max-w-[560px] text-[0.93rem] leading-[1.8] text-white/50">
            See how your post-discharge channel is performing: live subscribers, doctor activity, revenue remittance, and monthly reporting.
          </p>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04]">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.05] px-5 py-4">
                <div><div className="text-[0.78rem] font-bold text-white">St. Mary&apos;s - SureCova Portal</div><div className="text-[0.6rem] text-white/30">stmarys.surecova.com · Admin View</div></div>
                <div className="flex items-center gap-1 rounded-full bg-[rgba(13,155,136,0.12)] px-2.5 py-1 text-[0.62rem] text-[rgb(var(--teal-hi))]"><span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--green))]" />Live</div>
              </div>
              <div className="grid grid-cols-3 gap-px bg-white/10">
                {adminStats.map(([num, label]) => (
                  <div className="bg-white/[0.03] p-4 text-center" key={label}>
                    <div className="font-serif text-[1.6rem] font-bold leading-none text-[rgb(var(--teal-hi))]">{num}</div>
                    <div className="mt-1 text-[0.58rem] uppercase tracking-[0.07em] text-white/30">{label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2 p-5">
                {["Dr. Emeka Okafor", "Dr. Amina Bello", "Dr. Chukwudi Nwosu", "Dr. Ngozi Eze"].map((name, index) => (
                  <div className="flex items-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.03] px-3 py-2.5" key={name}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(13,155,136,0.2)] font-serif text-[0.65rem] font-bold text-white">{name.split(" ").slice(-2).map((word) => word[0]).join("")}</div>
                    <div className="flex-1 text-[0.75rem] font-semibold text-white/70">{name}</div>
                    <div className="text-right text-[0.68rem] font-bold text-[rgb(var(--teal-hi))]">{[52, 41, 32, 22][index]} patients</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              {["Your own hospital subdomain", "You control the doctor roster", "Live subscriber analytics", "Zero payment admin", "QR codes per ward / department", "Compliant data handling"].map((item) => (
                <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-4" key={item}>
                  <div className="mb-1 font-bold text-white">{item}</div>
                  <p className="text-[0.73rem] leading-[1.6] text-white/40">Manage your discharge-care channel without adding operational complexity.</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
