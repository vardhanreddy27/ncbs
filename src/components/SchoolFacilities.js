import Image from "next/image";
import { Brain, Map, Hand, Sigma, Wind, Bus, Languages } from "lucide-react";

const facilities = [
  {
    title: "AI-Enabled Smart Classrooms",
    img: "/activity.jpg",
    desc: "Technology-supported classrooms help students see, understand, and apply concepts with confidence.",
    icon: Brain,
  },
  {
    title: "Experiential Learning",
    img: "/map.jpg",
    desc: "Hands-on activities turn curiosity into understanding beyond textbooks.",
    icon: Map,
  },
  {
    title: "Child-Centered Learning",
    img: "/sec.jpg",
    desc: "Every child is encouraged to learn, question, communicate, and grow at a confident pace.",
    icon: Hand,
  },
  {
    title: "Strong Academic Foundation",
    img: "/ncbs/fundamental-duties.jpg",
    desc: "Clear concepts, regular practice, and thoughtful evaluation support steady academic growth.",
    icon: Sigma,
  },
  {
    title: "Discipline and Values",
    img: "/class.avif",
    desc: "Respect, responsibility, discipline, and character building shape daily learning.",
    icon: Wind,
  },
  {
    title: "Safe and Caring Campus",
    img: "/transport.png",
    desc: "A secure, caring campus helps students feel supported and ready to learn.",
    icon: Bus,
  },
  {
    title: "Future-Ready Environment",
    img: "/pl.webp",
    desc: "Students build communication, leadership, digital awareness, and lifelong learning habits.",
    icon: Languages,
  },
];

export default function SchoolFacilities() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-20 py-8 text-center text-3xl font-extrabold text-[var(--brand-primary)] sm:text-4xl">
        Vaksiddhi Features
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
