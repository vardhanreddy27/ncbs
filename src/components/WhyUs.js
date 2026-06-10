import React from 'react';
import Image from 'next/image';
import { schoolInfo } from '@/constants/schoolData';
import { BrainCircuit, Bus, BookOpen, BarChart3, Languages, ClipboardCheck, Layers3, ShieldCheck } from 'lucide-react';

const ncbsFeatures = [
  {
    title: 'AI-Enabled Smart Classrooms',
    description: 'Modern classroom tools make learning visual, interactive, and ready for tomorrow.',
    icon: BrainCircuit,
    iconColor: 'text-[var(--brand-primary)]',
    bgColor: 'bg-[var(--brand-secondary)]/14',
  },
  {
    title: 'Experiential Learning',
    description: 'Students grow through doing, questioning, observing, discussing, and creating.',
    icon: BookOpen,
    iconColor: 'text-[var(--brand-primary)]',
    bgColor: 'bg-[var(--brand-accent)]/10',
  },
  {
    title: 'Future-Ready Skills',
    description: 'Communication, critical thinking, collaboration, and confidence are shaped from an early age.',
    icon: BarChart3,
    iconColor: 'text-[var(--brand-primary)]',
    bgColor: 'bg-[var(--brand-accent)]/12',
  },
  {
    title: 'Leadership Development',
    description: 'Discipline, responsibility, initiative, and teamwork prepare learners to lead with values.',
    icon: ClipboardCheck,
    iconColor: 'text-[var(--brand-primary)]',
    bgColor: 'bg-[var(--brand-secondary)]/16',
  },
  {
    title: 'Safe and Caring Campus',
    description: 'A calm, secure environment helps children feel supported, respected, and ready to learn.',
    icon: Layers3,
    iconColor: 'text-[var(--brand-primary)]',
    bgColor: 'bg-[var(--brand-secondary)]/16',
  },
  {
    title: 'Child-Centered Growth',
    description: 'Every child is guided to discover strengths, build confidence, and move forward with purpose.',
    icon: ShieldCheck,
    iconColor: 'text-[var(--brand-primary)]',
    bgColor: 'bg-[var(--brand-accent)]/10',
  },
];

export default function WhyChooseNCBS() {
  return (
    <>
      <section id="why-us" className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[var(--brand-secondary)]/15 blur-2xl" />

        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <div className="relative mx-auto w-full">
              <div className="relative overflow-hidden">
                <div className="relative h-[560px] overflow-hidden" style={{ borderRadius: '2rem' }}>
                  <Image
                    src="/uniform.png"
                    alt="Vaksiddhi Public School classroom environment"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -top-3 -left-3 h-5 w-5 rounded-full bg-[var(--brand-primary)]/25" />
            </div>

            <div className="relative z-10">
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--brand-primary)] md:text-4xl">
                Why Choose Vaksiddhi for Your Child?
              </h2>
              <p className="mt-4 text-base text-slate-600 md:text-lg">
                Vaksiddhi Public School creates a clear path from dream to learning, growth, leadership, and success through innovation anchored in strong values.
              </p>

              <div className="mt-3 grid gap-5 sm:grid-cols-2">
                {ncbsFeatures.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.7rem] border border-[var(--brand-secondary)]/20 bg-[#F8F4EA]/70 p-5 shadow-sm"
                  >
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.bgColor}`}>
                      <item.icon className={item.iconColor} size={28} strokeWidth={1.8} />
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

      <section className="relative overflow-hidden bg-[#f9f7f4]">
        <div className="absolute top-0 left-0 h-40 w-64 rounded-br-[100px] bg-[var(--brand-primary)]" />
        <div className="absolute top-10 right-10 grid grid-cols-6 gap-2 opacity-60">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
          ))}
        </div>

        <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-6  pt-10 lg:grid-cols-2 lg:px-8">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] lg:max-w-[520px]">
              <div className="absolute bottom-2 left-0 right-0 mx-auto h-10 w-60 rounded-full bg-black/10 blur-xl" />
              <div className="relative h-[380px] w-full overflow-hidden rounded-xl sm:h-[420px] lg:h-[450px]">
                <Image
                  src="/girl.png"
                  alt="Vaksiddhi Public School student"
                  fill
                  className="object-cover object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex max-w-xl flex-col justify-center lg:ml-auto">
            <h2 className="text-4xl font-extrabold leading-tight text-[#1f2a44] md:text-5xl lg:text-6xl">
              Admissions Open at <span className="text-[var(--brand-primary)]">Vaksiddhi</span>
            </h2>

            <div className="mt-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                📍
                <span className="font-medium">{schoolInfo.location}</span>
              </div>

              <div className="mb-2 flex items-center gap-2">
                📞
                <span className="font-medium">{schoolInfo.phones[0]} | {schoolInfo.phones[1]}</span>
              </div>
            </div>

            <a href={schoolInfo.phoneLinks[0]}>
              <button className="mt-4 mb-2 w-1/2 rounded-lg bg-[var(--brand-primary)] px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg">
                PLAN A VISIT
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
