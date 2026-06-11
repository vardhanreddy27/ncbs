import SectionHeading from "./SectionHeading";
import { BookOpen, HeartHandshake, Landmark } from "lucide-react";

const programs = [
  {
    title: "SEED Philosophy",
    icon: BookOpen,
    text: "Socratic thinking, experiential learning, excellence, and discipline shape how every child learns and grows.",
    buttonStyle: "bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]",
    iconWrapStyle: "bg-[var(--brand-secondary)]/12 text-[var(--brand-primary)]",
  },
  {
    title: "JEE & NEET Foundation",
    icon: Landmark,
    text: "Specialized JEE and NEET coaching begins from VI Standard onward, without weakening school fundamentals.",
    buttonStyle: "bg-[var(--brand-primary)] text-white", // Highlighted state
    iconWrapStyle: "bg-[var(--brand-secondary)]/14 text-[var(--brand-primary)]",
    highlight: true,
  },
  {
    title: "Care Beyond Classrooms",
    icon: HeartHandshake,
    text: "Separate hostels for boys and girls, personal care for hesitant learners, and free education support for orphan children.",
    buttonStyle: "bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]",
    iconWrapStyle: "bg-[var(--brand-secondary)]/12 text-[var(--brand-primary)]",
  },
];

export default function SpecializedPrograms() {
  return (
    <section id="programs" className="bg-[#fafdfff7] py-20"> {/* For Our Specialized Programs */}
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          eyebrow="Admissions Open 2026-27"
          eyebrowBig
          title=""
          subtitle={
            <>
              State Syllabus with CBSE curriculum readiness, AI Smart Classes, sports, culture, and the SEED philosophy for Pre-School to Grade X.
            </>
          }
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {programs.map((item) => (
            <div
              key={item.title}
              className={`relative flex flex-col items-center rounded-[2.5rem] bg-white p-10 text-center transition-all shadow-sm ${
                item.highlight ? "border-2 border-[var(--brand-primary)]" : "border border-[var(--brand-secondary)]/15"
              }`}
            >
              {/* Icon Container */}
              <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${item.iconWrapStyle}`}>
                <item.icon size={40} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-bold text-slate-900 leading-tight">
                {item.title}
              </h3>
              <p className="mb-10 text-slate-600 text-sm leading-relaxed">
                {item.text}
              </p>

              {/* Read More Button */}
              <button
                className={`mt-auto w-full py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90 ${item.buttonStyle}`}
              >
                Read More
                <span className="text-xs">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
