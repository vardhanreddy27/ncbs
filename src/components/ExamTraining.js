import Image from "next/image";
import { TestTube, BarChart3, Users, Zap } from "lucide-react";

const vaksiddhiFeatures = [
  {
    title: "Socratic Thinking",
    description:
      "We ignite the spark of why, helping children question, reason, discuss, and discover knowledge.",
    icon: TestTube,
    iconColor: "text-[var(--brand-primary)]",
    bgColor: "bg-[var(--brand-secondary)]/14",
  },
  {
    title: "Experiential Learning",
    description:
      "Students learn by doing through exploration, projects, hands-on activities, and real-world connections.",
    icon: Zap,
    iconColor: "text-[var(--brand-primary)]",
    bgColor: "bg-[var(--brand-accent)]/10",
  },
  {
    title: "Excellence",
    description:
      "Every learner is guided to achieve personal best with confidence, mastery, and pride in progress.",
    icon: BarChart3,
    iconColor: "text-[var(--brand-primary)]",
    bgColor: "bg-[var(--brand-accent)]/12",
  },
  {
    title: "Discipline",
    description:
      "Strong values, responsibility, focus, character, and resilience are built into daily school life.",
    icon: Users,
    iconColor: "text-[var(--brand-primary)]",
    bgColor: "bg-[var(--brand-secondary)]/16",
  },
];

export default function WhyChooseVaksiddhi() {
  return (
    <>
      {/* MAIN SECTION */}
      <section
        id="why-us"
        className="relative overflow-hidden bg-white py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[var(--brand-secondary)]/15 blur-2xl" />

        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            
            {/* IMAGE */}
            <div className="relative mx-auto w-full">
              <div className="relative overflow-hidden">
                <div
                  className="relative h-[560px] overflow-hidden"
                  style={{ borderRadius: "2rem" }}
                >
                  <Image
                    src="/whyus.png"
                alt="Vaksiddhi Public School classroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -top-3 -left-3 h-5 w-5 rounded-full bg-[var(--brand-primary)]/25" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative z-10">
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--brand-primary)] md:text-4xl">
                Why Choose Vaksiddhi Public School (R), Manvi?
              </h2>
              <p className="mt-4 text-base text-slate-600 md:text-lg">
                A modern, encouraging campus built on the SEED philosophy, AI Smart Classes, State Syllabus,
                CBSE curriculum readiness, and holistic development from Pre-School to Grade X.
              </p>

              <div className="mt-3 grid gap-5 sm:grid-cols-2">
                {vaksiddhiFeatures.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.7rem] border border-[var(--brand-secondary)]/20 bg-[#fafdfff7] p-5 shadow-sm"
                  >
                    <div
                      className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.bgColor}`}
                    >
                      <item.icon
                        className={item.iconColor}
                        size={28}
                        strokeWidth={1.8}
                      />
                    </div>

                    <h4 className="text-xl font-extrabold leading-tight text-slate-900 sm:text-[1.35rem]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 ADMISSION BANNER SECTION */}
   <section className="relative bg-[#f9f7f4] overflow-hidden">

  {/* 🔴 Top Left Shape */}
  <div className="absolute top-0 left-0 w-64 h-40 bg-[var(--brand-primary)] rounded-br-[100px]" />

  {/* 🔴 Small Dots Right */}
  <div className="absolute top-10 right-10 grid grid-cols-6 gap-2 opacity-60">
    {[...Array(24)].map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full"></div>
    ))}
  </div>
<section className="relative bg-[#f9f7f4] pt-10 overflow-hidden">

  {/* 🔴 Top Shape */}
  <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[var(--brand-primary)] rounded-[60%] blur-2xl opacity-80" />

  {/* 🔴 Dots */}
  <div className="absolute top-12 right-16 grid grid-cols-6 gap-2 opacity-50">
    {[...Array(24)].map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full"></div>
    ))}
  </div>

  {/* MAIN CONTAINER */}
  <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 items-end gap-12">

    {/* 👜 LEFT SIDE (BAGS IMAGE) */}
  <div className="flex justify-center lg:justify-start">
  <div className="relative w-full max-w-[500px] lg:max-w-[650px]">

    {/* Shadow */}
    <div className="absolute bottom-0 w-72 h-12 bg-black/10 blur-xl rounded-full mx-auto left-0 right-0"></div>
{/* 👜 LEFT SIDE (IMAGE) */}
<div className="flex justify-center lg:justify-start">
  <div className="relative w-full max-w-[420px] lg:max-w-[520px]">

    {/* Shadow */}
    <div className="absolute bottom-2 w-60 h-10 bg-black/10 blur-xl rounded-full mx-auto left-0 right-0"></div>

    {/* IMAGE CONTAINER (SHORT HEIGHT) */}
    <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden rounded-xl">

      <Image
        src="/girl.png"
        alt="Student"
        fill
        className="
          object-cover 
          object-bottom   /* 🔥 keeps bottom visible */
          scale-125       /* zoom in */
          -translate-y-10 /* 🔥 crops TOP part */
        "
      />

    </div>
  </div>
</div>
  </div>
</div>

    {/* 👉 RIGHT SIDE TEXT */}
    <div className="max-w-xl lg:ml-auto flex flex-col justify-center h-full ">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1f2a44] leading-tight">
        ADMISSIONS <br /> OPEN FOR <br />
        <span className="text-[var(--brand-primary)]">2026-27</span>
      </h2>

      {/* CTA */}    {/* LOCATION + CONTACT */}
      <div className="  text-sm text-gray-700 mt-2">
        <div className="flex items-center gap-2">
          📍
          <span className="font-medium">
            BEHIND AMRUTH COLONY, CHEEKALPARVI ROAD, MANVI-584123
          </span>
        </div>

        <div className="flex items-center mb-2 gap-2">
          📞
          <span className="font-medium ">
            AI SMART CLASSES | HOSTELS | JEE & NEET FROM VI STANDARD
          </span>
        </div>
      </div>
<a href="#contact">
  <button className="mt-4 mb-2 w-1/2 bg-[var(--brand-primary)] text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition">
    ENROLL NOW
  </button>
</a>


  
    </div>

  </div>
</section>
 
</section>
    </>
  );
}
