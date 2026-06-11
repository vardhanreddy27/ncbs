import SectionHeading from "./SectionHeading";
import { BookOpen, Stethoscope, Landmark } from "lucide-react";

const programs = [
  {
    title: "SEEP Smart Learning",
    icon: BookOpen,
    text: "Smart Experiential Education Program classrooms help children learn concepts through activity, visuals, and guided discovery.",
    buttonStyle: "bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]",
    iconWrapStyle: "bg-[var(--brand-secondary)]/12 text-[var(--brand-primary)]",
  },
  {
    title: "Values & Leadership",
    icon: Landmark,
    text: "Daily routines build discipline, responsibility, communication, teamwork, and respect for others.",
    buttonStyle: "bg-[var(--brand-primary)] text-white", // Highlighted state
    iconWrapStyle: "bg-[var(--brand-secondary)]/14 text-[var(--brand-primary)]",
    highlight: true,
  },
  {
    title: "Academic Excellence",
    icon: Stethoscope,
    text: "Strong basics, regular feedback, and caring mentorship help learners grow with confidence from Nursery to Grade 10.",
    buttonStyle: "bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]",
    iconWrapStyle: "bg-[var(--brand-secondary)]/12 text-[var(--brand-primary)]",
  },
];

export default function SpecializedPrograms() {
  return (
    <section id="programs" className="bg-[#fafdfff7] py-20"> {/* For Our Specialized Programs */}
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          eyebrow="Our Specialized Programs"
          eyebrowBig
          title=""
          subtitle={
            <>
              SEEP smart learning, value-based education, and focused mentorship designed to help every child grow with confidence.
              Creating the path for every dream.
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
