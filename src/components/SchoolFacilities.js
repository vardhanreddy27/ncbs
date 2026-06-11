import Image from "next/image";
import {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  Bot,
  Monitor,
  Volleyball,
  BookOpen,
  Gamepad2,
  Bus,
  Presentation
} from "lucide-react";

const facilities = [
  {
    title: "AI Smart Classes",
    img: "https://www.lalalajpatraischool.com/img/LabMaths1.jpeg",
    desc: "AI-powered learning methods and smart classroom tools.",
    icon: Calculator
  },
  {
    title: "State & CBSE Curriculum Readiness",
    img: "https://www.afshebbal.ac.in/userfiles/file/Ph%201.JPG",
    desc: "State Syllabus with CBSE affiliation currently in process.",
    icon: Atom
  },
  {
    title: "JEE & NEET Foundation",
    img: "https://vspkinternational.edu.in/content/IMG-20240930-WA0077.jpg",
    desc: "Specialized coaching from VI Standard onwards.",
    icon: FlaskConical
  },
  {
    title: "Separate Boys Hostel",
    img: "https://www.edufab.in/wp-content/uploads/2024/07/Biology-lab.jpg",
    desc: "Premium residential care and personal attention.",
    icon: Dna
  },
  {
    title: "Separate Girls Hostel",
    img: "https://cloud9.shauryasoft.com/media/contentpage_178_115_2.jpg?638041330024674109?spPDV",
    desc: "Safe residential facility with attentive care.",
    icon: Bot
  },
  {
    title: "Computer & Innovation Lab",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUCGIeePH-W-vq2j11yMKY8kLKL-HgFx_4Q&s",
    desc: "Digital confidence, creativity, and future skills.",
    icon: Monitor
  },
  {
    title: "Sports Development",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtafjeZMs2ERC0G3ovoBil-t0ARP7WT5URQ&s",
    desc: "Strong emphasis on fitness, teamwork, and confidence.",
    icon: Volleyball
  },
  {
    title: "Library & Reading Culture",
    img: "https://www.al.com/resizer/v2/4SU5I25YWNABLOEM43OPS63UK4.JPG?auth=fe2efbcd118d7f8f895c4e63d773888906f577035af9fda73a8569ce487adffe&width=1280&smart=true&quality=90",
    desc: "Reading habits that support curiosity and expression.",
    icon: BookOpen
  },
  {
    title: "Cultural Activities",
    img: "https://dpsbopal-ahd.edu.in/Uploads/vollyball_201511020512378937.jpg",
    desc: "Stage confidence, creativity, and holistic development.",
    icon: Volleyball
  },
  {
    title: "Hesitant Learner Care",
    img: "https://strawberryfieldshighschool.com/wp-content/uploads/2019/07/IMG-20190718-WA0035.jpg",
    desc: "Dedicated personal support for children who need extra confidence.",
    icon: Gamepad2
  },
  {
    title: "Transport Support",
    img: "https://swarajya.gumlet.io/swarajya/2025-11-05/5g1ji9ar/schooltransport.jpg?w=610&q=75&compress=true&format=auto",
    desc: "Convenient support for safe student movement.",
    icon: Bus
  },
  {
    title: "Free Education Initiative",
    img: "https://twss.edu.in/wp-content/uploads/2024/12/Conference-Hall-Banner-1024x683.webp",
    desc: "Free education program for students who are orphan children.",
    icon: Presentation
  }
];

export default function SchoolFacilities() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-20 py-8 text-3xl font-extrabold text-[var(--brand-primary)] sm:text-4xl text-center">
        Facilities & Student Support
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {facilities.map((f, i) => {
          const Icon = f.icon;

          return (
            <div
              key={f.title}
              className="group rounded-2xl bg-white shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i < 3}
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {f.desc}
                  </p>
                </div>

                {/* ICON AREA */}
                <div className="flex justify-end">
                  <div className="p-2 rounded-full bg-[var(--brand-primary)]/10 group-hover:bg-[var(--brand-primary)] transition">
                    <Icon className="w-5 h-5 text-[var(--brand-primary)] group-hover:text-white" />
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
