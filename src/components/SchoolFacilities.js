import Image from "next/image";

const facilities = [
  {
    title: "AI Smart Classes",
    img: "/smartclass.webp",
    desc: "AI-powered learning methods and smart classroom tools."
  },
  {
    title: "State & CBSE Curriculum Readiness",
    img: "/neet.webp",
    desc: "State Syllabus with CBSE affiliation currently in process.",
    imagePosition: "object-[center_42%]"
  },
  {
    title: "JEE & NEET Foundation",
    img: "/iit.png",
    desc: "Specialized coaching from VI Standard onwards."
  },
  {
    title: "Indoor games & Activity Area",
    img: "/indoor.png",
    desc: "Premium residential care and personal attention.",
    imagePosition: "object-[center_72%]"
  },
  {
    title: "Separate Girls Hostel",
    img: "https://girlshostelindehradun.wordpress.com/wp-content/uploads/2015/06/banner3.png",
    desc: "Safe residential facility with attentive care."
  },
  {
    title: "Computer & Innovation Lab",
    img: "https://i0.wp.com/www.education.edu/wp-content/uploads/2016/09/4Y7A7527-scaled.jpg?fit=2560%2C1707&ssl=1",
    desc: "Digital confidence, creativity, and future skills."
  },
  {
    title: "Sports Development",
    img: "/playground.png",
    desc: "Strong emphasis on fitness, teamwork, and confidence."
  },
  {
    title: "Library & Reading Culture",
    img: "https://www.al.com/resizer/v2/4SU5I25YWNABLOEM43OPS63UK4.JPG?auth=fe2efbcd118d7f8f895c4e63d773888906f577035af9fda73a8569ce487adffe&width=1280&smart=true&quality=90",
    desc: "Reading habits that support curiosity and expression."
  },
  {
    title: "Cultural Activities",
    img: "https://dpsbopal-ahd.edu.in/Uploads/vollyball_201511020512378937.jpg",
    desc: "Stage confidence, creativity, and holistic development."
  },
  {
    title: "Hesitant Learner Care",
    img: "/care.png",
    desc: "Dedicated personal support for children who need extra confidence."
  },
  {
    title: "Transport Support",
    img: "https://swarajya.gumlet.io/swarajya/2025-11-05/5g1ji9ar/schooltransport.jpg?w=610&q=75&compress=true&format=auto",
    desc: "Convenient support for safe student movement."
  },
  {
    title: "Free Education Initiative",
    img: "https://twss.edu.in/wp-content/uploads/2024/12/Conference-Hall-Banner-1024x683.webp",
    desc: "Free education program for students who are orphan children."
  }
];

export default function SchoolFacilities() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-10 text-center text-3xl font-extrabold text-[var(--brand-primary)] sm:text-4xl">
        Facilities & Student Support
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {facilities.map((f) => {
          return (
            <div
              key={f.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`relative h-56 w-full sm:h-60 lg:h-64 ${f.imageFit === "object-contain" ? "bg-slate-50" : ""}`}>
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className={`${f.imageFit || "object-cover"} ${f.imagePosition || "object-center"} ${f.imageFit === "object-contain" ? "" : "group-hover:scale-105"} transition-transform duration-300`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-4">
                <h3 className="mb-1 text-base font-bold leading-snug text-slate-900">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {f.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
