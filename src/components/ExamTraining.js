import Image from "next/image";
import { schoolInfo, examTraining } from "@/constants/schoolData";
import { Brain, MapPinned, Sigma, Mic2, Wind, Bus } from "lucide-react";

const featureIcons = {
  "AI-Enabled Smart Classrooms": Brain,
  "Experiential Learning": MapPinned,
  "Leadership With Values": Mic2,
  "Future-Ready Skills": Sigma,
  "Safe and Caring Campus": Wind,
  "Child-Centered Education": Bus,
};

export default function WhyChooseNCBS() {
  return (
    <section className="bg-[#F8F4EA] py-20" id="programs">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-primary)]">Vaksiddhi Learning Approach</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">Why parents choose Vaksiddhi</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {schoolInfo.name} serves Nursery to Grade 10 with child-centered education, experiential learning, AI-enabled smart classrooms, discipline, and leadership development.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {examTraining.map((item) => {
            const Icon = featureIcons[item.title] || Brain;
            return (
              <div key={item.title} className="rounded-[2.5rem] border border-[var(--brand-secondary)]/15 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--brand-secondary)]/12 text-[var(--brand-primary)]">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900 leading-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] bg-[var(--brand-primary)] px-6 py-8 text-white shadow-md sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-extrabold sm:text-4xl">Admissions Open at Vaksiddhi</h3>
              <p className="mt-3 text-base text-white/90 sm:text-lg">
                Give your child a path where dreams are guided through learning, growth, leadership, and future-ready confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href={schoolInfo.phoneLinks[0]} className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--brand-primary)] shadow-sm transition hover:scale-[1.02]">
                Start Admission Inquiry
              </a>
              <a href={schoolInfo.phoneLinks[1]} className="rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/25 transition hover:scale-[1.02]">
                Plan Campus Visit
              </a>
              <a href={schoolInfo.emailLink} className="rounded-full bg-[var(--brand-secondary)] px-5 py-3 text-sm font-bold text-slate-900 transition hover:scale-[1.02]">
                Get Guidance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
