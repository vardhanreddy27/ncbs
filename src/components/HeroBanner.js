import Image from "next/image";
import { useRef } from "react";
import { schoolInfo } from "@/constants/schoolData";

export default function HeroBanner() {
  const videoRefs = useRef({});

  return (
    <section className="relative overflow-hidden  bg-[#f8fbff] ">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,61,46,0.1),transparent_40%),radial-gradient(circle_at_top_right,rgba(212,166,74,0.15),transparent_45%)]" />

      <div className="relative mx-auto ">
        <div className="overflow-hidden  ">
          <div className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-screen">
            <Image
              src="/hero.avif"
              alt="Vaksiddhi Public School students learning"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_14%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(248,251,255,0.96)_8%,rgba(248,251,255,0.88)_46%,rgba(248,251,255,0.22)_74%,rgba(248,251,255,0)_100%)] sm:bg-[linear-gradient(100deg,rgba(248,251,255,0.95)_0%,rgba(248,251,255,0.9)_40%,rgba(248,251,255,0.2)_68%,rgba(248,251,255,0)_100%)]" />

            <div className="relative z-10 flex items-end px-4 pb-12 sm:min-h-[520px] sm:items-center sm:px-8 sm:pb-0 md:px-10 lg:px-12">
              <div className="mt-64 max-w-xl sm:mt-0">
                <span className="inline-flex rounded-full border border-[var(--brand-secondary)]/40 bg-white/90 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-primary)]">
                  {schoolInfo.name}
                </span>

                <h1 className="mt-5 text-3xl font-black leading-tight text-[var(--brand-primary)] sm:text-4xl lg:text-5xl">
                  {schoolInfo.tagline}
                </h1>

                <p className="mt-4 text-base text-slate-900 sm:hidden">
                  A future-ready school in Manvi for Nursery to Grade 10.
                </p>
                <p className="mt-4 hidden text-base text-slate-900 sm:block sm:text-lg">
                  At Vaksiddhi, dreams become direction through academic excellence, strong values, discipline, leadership development, experiential learning, and AI-enabled smart classrooms.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:flex sm:flex-row sm:flex-wrap sm:gap-3">
                  <a
                    href="#academics"
                    className="w-full rounded-full border border-[var(--brand-accent)]/30 bg-white px-3 py-3 text-center text-xs font-bold text-[var(--brand-accent)] sm:w-auto sm:px-6 sm:text-sm"
                  >
                    Discover Vaksiddhi
                  </a>
                  <a
                    href="#contact"
                    className="w-full rounded-full bg-[var(--brand-primary)] px-3 py-3 text-center text-xs font-bold text-white shadow-[0_10px_24px_rgba(13,86,127,0.25)] sm:w-auto sm:px-6 sm:text-sm"

                  >
                    Plan Admission Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-4 mt-4 grid gap-4 pb-8 sm:mx-6 sm:-mt-40 md:grid-cols-2 md:gap-5 lg:mx-8 lg:-mt-56 lg:grid-cols-3">
          {[
            {
                title: "Nursery Foundation",
                subtitle: "Curiosity to confidence",
              tone: "bg-[linear-gradient(180deg,#145A32_0%,#0B3D2E_100%)]",
              img: "/englishlab.jpg",
              video: "/englishlabvideo.mov",
                alt: "Nursery learning activity",
              objPos: "object-top",
              mediaShift: "mt-2",
            },
            {
                title: "Primary Learning",
                subtitle: "Dreams begin with basics",
              tone: "bg-[linear-gradient(180deg,#D4A64A_0%,#145A32_100%)]",
              img: "/pl.webp",
              video: "/mathslab.mp4",
                alt: "Primary students learning with confidence",
              objPos: "object-center",
              mediaShift: "",
            },
            {
                title: "Future Leaders",
                subtitle: "Grades VI to X",
              tone: "bg-[linear-gradient(180deg,#E7C979_0%,#D4A64A_100%)]",
              img: "/studentsinclass.jpg",
              video: "/studentsinclassvideo.mov",
                alt: "Students preparing for future leadership",
              objPos: "object-center",
              mediaShift: "",
            },
          ].map((item) => (
            <article
              key={item.title}
              className={`${item.tone} group flex flex-col overflow-hidden rounded-[1.8rem]`}
              onMouseEnter={() => {
                const video = videoRefs.current[item.title];
                if (video) {
                  video.currentTime = 0.01;
                  video.play().catch(() => {});
                }
              }}
              onMouseLeave={() => {
                const video = videoRefs.current[item.title];
                if (video) {
                  video.pause();
                  video.currentTime = 0.01;
                }
              }}
            >
              <div className="flex-1 px-5 pt-2 text-center text-white">
                <p className="text-base font-extrabold uppercase tracking-wide sm:text-lg">{item.title}</p>
              </div>

              <div className="relative overflow-hidden" style={{clipPath: "polygon(0 4%, 2% 3%, 4% 4%, 6% 3%, 8% 4%, 10% 3%, 12% 4%, 14% 3%, 16% 4%, 18% 3%, 20% 4%, 22% 3%, 24% 4%, 26% 3%, 28% 4%, 30% 3%, 32% 4%, 34% 3%, 36% 4%, 38% 3%, 40% 4%, 42% 3%, 44% 4%, 46% 3%, 48% 4%, 50% 3%, 52% 4%, 54% 3%, 56% 4%, 58% 3%, 60% 4%, 62% 3%, 64% 4%, 66% 3%, 68% 4%, 70% 3%, 72% 4%, 74% 3%, 76% 4%, 78% 3%, 80% 4%, 82% 3%, 84% 4%, 86% 3%, 88% 4%, 90% 3%, 92% 4%, 94% 3%, 96% 4%, 98% 3%, 100% 4%, 100% 96%, 98% 97%, 96% 96%, 94% 97%, 92% 96%, 90% 97%, 88% 96%, 86% 97%, 84% 96%, 82% 97%, 80% 96%, 78% 97%, 76% 96%, 74% 97%, 72% 96%, 70% 97%, 68% 96%, 66% 97%, 64% 96%, 62% 97%, 60% 96%, 58% 97%, 56% 96%, 54% 97%, 52% 96%, 50% 97%, 48% 96%, 46% 97%, 44% 96%, 42% 97%, 40% 96%, 38% 97%, 36% 96%, 34% 97%, 32% 96%, 30% 97%, 28% 96%, 26% 97%, 24% 96%, 22% 97%, 20% 96%, 18% 97%, 16% 96%, 14% 97%, 12% 96%, 10% 97%, 8% 96%, 6% 97%, 4% 96%, 2% 97%, 0 96%"}}>
                <div className="relative h-[15rem] sm:h-[16rem]">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    priority={item.title === "Nursery Foundation"}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className={`pointer-events-none object-cover ${item.objPos} ${item.mediaShift}`}
                  />

                  {item.video ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[item.title] = el;
                      }}
                      onLoadedData={(event) => {
                        const video = event.currentTarget;
                        video.currentTime = 0.01;
                        video.pause();
                      }}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block"
                    >
                      <source src={item.video} />
                    </video>
                  ) : null}
                </div>
              </div>

              <div className="px-5 pb-2 text-center text-white">
                <p className="text-sm font-medium text-white/95 sm:text-base">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
