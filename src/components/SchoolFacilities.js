import Image from "next/image";
import { Brain, Map, Hand, Sigma, Wind, Bus, Languages } from "lucide-react";

const facilities = [
  {
    title: "Brain Gym",
    img: "/activity.jpg",
    desc: "Exercises designed to improve attention, memory, coordination, and learning readiness for children aged 3–9.",
    icon: Brain,
  },
  {
    title: "Map Pointing & State Symbols",
    img: "/map.jpg",
    desc: "Interactive geography activities using puzzles, maps, landmarks, and state symbols to make learning visual and playful.",
    icon: Map,
  },
  {
    title: "Sensorial Training",
    img: "/sec.jpg",
    desc: "Hands-on pre-primary activities that help children learn through touch, sight, sound, movement, and observation.",
    icon: Hand,
  },
  {
    title: "TaRL Approach",
    img: "/ncbs/fundamental-duties.jpg",
    desc: "Teaching at the Right Level helps children strengthen Math basics and learn according to their current understanding.",
    icon: Sigma,
  },
  {
    title: "AC Classrooms",
    img: "/class.avif",
    desc: "Comfortable air-conditioned classrooms that support focused learning throughout the school day.",
    icon: Wind,
  },
  {
    title: "Safe Transport Facility",
    img: "/transport.png",
    desc: "A safe and convenient transport facility for students with parent-friendly communication.",
    icon: Bus,
  },
  {
    title: "English Medium Environment",
    img: "/pl.webp",
    desc: "English medium learning environment with regular evaluation and child progress tracking.",
    icon: Languages,
  },
];

export default function SchoolFacilities() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-20 py-8 text-center text-3xl font-extrabold text-[var(--brand-primary)] sm:text-4xl">
        NCBS Features
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {facilities.map((f, i) => {
          const Icon = f.icon;

          return (
            <div key={f.title} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-40 w-full">
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i < 3}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <h3 className="mb-1 text-lg font-bold text-slate-900">{f.title}</h3>
                  <p className="mb-3 text-sm text-slate-600">{f.desc}</p>
                </div>

                <div className="flex justify-end">
                  <div className="rounded-full bg-[var(--brand-primary)]/10 p-2 transition group-hover:bg-[var(--brand-primary)]">
                    <Icon className="h-5 w-5 text-[var(--brand-primary)] transition group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
