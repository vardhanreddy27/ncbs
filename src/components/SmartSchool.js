import Image from "next/image";
import { schoolInfo } from "@/constants/schoolData";
import { Bus, ClipboardCheck, MonitorSmartphone, ShieldCheck, UserRoundCheck, Waypoints } from "lucide-react";

const smartItems = [
  {
    title: "Regular Evaluation",
    description: "Structured evaluations and clear learning checkpoints for every child.",
    icon: ClipboardCheck,
  },
  {
    title: "Parent Communication",
    description: "Frequent parent updates about classroom learning and student progress.",
    icon: UserRoundCheck,
  },
  {
    title: "Smartboard Support",
    description: "Classroom technology is used where suitable for visual concept clarity.",
    icon: MonitorSmartphone,
  },
  {
    title: "Safe Transport Updates",
    description: "Transport coordination stays simple and parent-friendly.",
    icon: Bus,
  },
  {
    title: "Child-Safe Campus",
    description: "Adequate security and child-safe infrastructure across campus spaces.",
    icon: ShieldCheck,
  },
  {
    title: "TaRL Tracking",
    description: "Math support follows current understanding with step-by-step growth tracking.",
    icon: Waypoints,
  },
];

export default function SmartSchool() {
  return (
    <section id="smart-school" className="bg-[#f4f8fb] py-20 sm:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-primary)]">Smart School Support</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">Connected Learning for Parents and Students</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {schoolInfo.name} combines activity-based teaching with regular progress updates to keep families involved in every stage of learning.
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
                alt="NCBS smart learning and parent communication"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d567f]/80 via-[#0d567f]/30 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">Admissions Desk</p>
                <h3 className="mt-2 text-2xl font-extrabold">{schoolInfo.shortName} Parent Support</h3>
                <p className="mt-2 text-sm text-white/90 sm:text-base">For admissions and child progress updates, connect with our team during {schoolInfo.hours}.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={schoolInfo.phoneLinks[0]} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--brand-primary)]">
                    Call {schoolInfo.phones[0]}
                  </a>
                  <a href={schoolInfo.emailLink} className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-bold text-white">
                    Email Us
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
