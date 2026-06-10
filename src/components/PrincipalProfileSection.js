import Image from "next/image";
import { BookOpen, GraduationCap, HeartHandshake, Lightbulb, UserRound } from "lucide-react";

const profileCards = [
  {
    title: "Child-Centered Leadership",
    description:
      "Caring, child-centered learning that builds confidence, curiosity, discipline, responsibility, and strong values.",
    icon: UserRound,
  },
  {
    title: "Future-Ready Vision",
    description:
      "AI-enabled smart classrooms, experiential learning, and technology integration make learning modern and meaningful.",
    icon: Lightbulb,
  },
  {
    title: "Every Dream Has A Path",
    description:
      "Every child is guided to discover strengths, develop confidence, and prepare for life's opportunities.",
    icon: BookOpen,
  },
  {
    title: "Holistic Development",
    description:
      "Students grow through academics, values, leadership, discipline, creativity, and meaningful classroom experiences.",
    icon: GraduationCap,
  },
];

export default function PrincipalProfileSection() {
  return (
    <section className="principal-profile-section bg-[#f8f7f4] py-12 sm:py-14">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-[2.65rem] md:text-[3.15rem]">From the Principal&apos;s Desk</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Vaksiddhi Public School is guided by a child-centered vision focused on confident learners, strong values, and future-ready growth.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-3 lg:grid-cols-[0.95fr_1.05fr_0.95fr] lg:gap-3 xl:gap-4">
          <div className="order-2 grid gap-3 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
            {profileCards.slice(0, 2).map((item) => (
              <article key={item.title} className="min-h-[158px] rounded-[1.45rem] bg-[#f0efec] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-primary)] text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <article className="overflow-hidden rounded-[1.55rem] bg-[#fdfaf3] shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <div className="relative h-[320px] w-full bg-[#ff9a26e4] sm:h-[390px] lg:h-[430px] xl:h-[450px]">
                <Image
                  src="/principal.jpg"
                  alt="Principal - Vaksiddhi Public School"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 34vw"
                />
              </div>
              <div className="space-y-2.5 p-4 sm:p-5 lg:p-6">
                <h3 className="text-xl font-extrabold text-slate-900 sm:text-[1.7rem]">Principal&apos;s Vision</h3>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-accent)] sm:text-xs">
                  Vaksiddhi Public School
                </p>
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  Creating the path for every dream through academic excellence, discipline, leadership, technology, and character.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#E7C979]/30 px-3 py-1 text-[10px] font-semibold text-[var(--brand-primary)] sm:text-[11px]">
                    <HeartHandshake className="h-3.5 w-3.5" />
                    Dream to leadership
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#E7C979]/30 px-3 py-1 text-[10px] font-semibold text-[var(--brand-primary)] sm:text-[11px]">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Holistic development
                  </span>
                </div>
              </div>
            </article>
          </div>

          <div className="order-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {profileCards.slice(2, 4).map((item) => (
              <article key={item.title} className="min-h-[158px] rounded-[1.45rem] bg-[#f0efec] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:p-5">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-primary)] text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
