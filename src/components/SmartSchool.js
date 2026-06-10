import Image from "next/image";
import { schoolInfo } from "@/constants/schoolData";
import { Bus, ClipboardCheck, MonitorSmartphone, ShieldCheck, UserRoundCheck, Waypoints } from "lucide-react";

const smartItems = [
  {
    title: "Academic Checkpoints",
    description: "Clear learning milestones help every child move forward with purpose.",
    icon: ClipboardCheck,
  },
  {
    title: "Parent Partnership",
    description: "Families stay connected to each child's learning, growth, and confidence.",
    icon: UserRoundCheck,
  },
  {
    title: "AI Smart Learning",
    description: "Technology enhances concept clarity, classroom engagement, and future readiness.",
    icon: MonitorSmartphone,
  },
  {
    title: "Safe Campus Support",
    description: "A caring environment keeps student safety and comfort at the center.",
    icon: Bus,
  },
  {
    title: "Values in Action",
    description: "Discipline, responsibility, respect, and empathy are practiced every day.",
    icon: ShieldCheck,
  },
  {
    title: "Growth Pathway",
    description: "Dream, learning, growth, leadership, and success guide the school journey.",
    icon: Waypoints,
  },
];

export default function SmartSchool() {
  return (
    <section id="smart-school" className="bg-[#F8F4EA] py-20 sm:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-primary)]">Future-Ready School Support</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">Connected Growth for Parents and Students</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {schoolInfo.name} combines modern education, value-based guidance, and regular growth focus so families see the path behind every dream.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {smartItems.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[var(--brand-secondary)]/25 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[var(--brand-secondary)]/25 bg-white shadow-md">
            <div className="relative h-full min-h-[380px] w-full">
              <Image
                src="/hero.avif"
                alt="Vaksiddhi smart learning and parent communication"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/80 via-[#0B3D2E]/30 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">Admissions Desk</p>
                <h3 className="mt-2 text-2xl font-extrabold">{schoolInfo.shortName} Parent Support</h3>
                <p className="mt-2 text-sm text-white/90 sm:text-base">For admissions guidance and campus visit planning, connect with our team during {schoolInfo.hours}.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={schoolInfo.phoneLinks[0]} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--brand-primary)]">
                    Admission Inquiry
                  </a>
                  <a href={schoolInfo.emailLink} className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-bold text-white">
                    Plan Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
