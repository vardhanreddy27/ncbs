import Image from "next/image";
import { schoolInfo, examTraining } from "@/constants/schoolData";
import { Brain, MapPinned, Sigma, Mic2, Wind, Bus } from "lucide-react";

const featureIcons = {
  "Brain Gym": Brain,
  "Map Pointing & State Symbols": MapPinned,
  "Sensorial Training": Mic2,
  "TaRL Approach": Sigma,
  "AC Classrooms": Wind,
  "Safe Transport Facility": Bus,
};

export default function WhyChooseNCBS() {
  return (
    <section className="bg-[#fafdfff7] py-20" id="programs">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-primary)]">NCBS Learning Approach</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">Why parents choose NCBS</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {schoolInfo.name} serves Playgroup, Nursery to Grade VIII with Multiple Intelligence learning, Brain Gym, Sensorial Training, TaRL support, and a child-friendly campus.
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
              <h3 className="text-3xl font-extrabold sm:text-4xl">Admissions Open at NCBS</h3>
              <p className="mt-3 text-base text-white/90 sm:text-lg">
                Give your child a joyful, activity-based learning environment where individual growth, confidence, and creativity are valued.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href={schoolInfo.phoneLinks[0]} className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--brand-primary)] shadow-sm transition hover:scale-[1.02]">
                Call {schoolInfo.phones[0]}
              </a>
              <a href={schoolInfo.phoneLinks[1]} className="rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/25 transition hover:scale-[1.02]">
                Call {schoolInfo.phones[1]}
              </a>
              <a href={schoolInfo.emailLink} className="rounded-full bg-[var(--brand-secondary)] px-5 py-3 text-sm font-bold text-slate-900 transition hover:scale-[1.02]">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
