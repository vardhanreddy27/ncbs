import Image from 'next/image';
import { TbSchool } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { FaBook } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-16 text-slate-900">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="mb-4 flex items-center gap-3">
            <Image src="/logo.png" alt="Vaksiddhi Public School logo" width={48} height={48} className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--brand-accent)]/30" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand-primary)]">Vaksiddhi</span>
          </div>
          <h1 className="mb-4 mt-8 text-4xl font-bold">Admissions Open for 2026-27</h1>
          <p className="text-lg text-gray-700 mb-6">
            SEED learning, AI Smart Classes, State Syllabus with CBSE readiness, and caring mentorship for Pre-School to Grade X.
          </p>
       
          <div className="flex flex-wrap gap-3">
            {["AI Smart Classes", "State Syllabus", "CBSE in Process", "Hostel Care"].map((item) => (
              <span key={item} className="rounded-full border border-[var(--brand-secondary)]/25 px-4 py-2 text-sm font-semibold text-[var(--brand-primary)]">
                {item}
              </span>
            ))}
          </div>
            <a href="#contact" className="inline-block mt-6 rounded-lg bg-[var(--brand-primary)] px-6 py-3 text-white shadow-md">
              Enquire Now
            </a>
        </div>

        <div className="md:w-1/2 flex justify-end items-end">
          <Image
            src="/student.webp"
            alt="Learning"
            width={450}
            height={400}
          />
        </div>
      </div>
      <div className="mt-8 rounded-lg bg-[var(--brand-primary)] py-8 ml-5 mr-5 shadow-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="flex flex-col items-center text-center border-r border-white">
            <h2 className="text-xl font-bold flex items-center mb-4">
              <TbSchool className="text-3xl mr-2" />
              SEED Smart Learning
            </h2>
            <p className='p-2 mr-5' >
              Ask why, learn by doing, grow with excellence, and build discipline.
            </p>
          </div>
          <div className="flex flex-col items-center text-center border-r border-white">
            <h2 className="text-xl font-bold flex items-center mb-4">
              <FaBook className="text-3xl mr-2" />
              Strong Basics
            </h2>
            <p className='p-2 mr-4'>
              Build language, numeracy, science, values, and confident communication.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold flex items-center mb-4">
              <BiWorld className="text-3xl mr-2 " />
              Caring Community
            </h2>
            <p className='p-2'>
              Grow with discipline, parent connection, and personal guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
