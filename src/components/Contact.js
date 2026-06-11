import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { schoolInfo } from '@/constants/schoolData';

const SCHOOL_ADDRESS = schoolInfo.location;

const contactDetails = [
  {
    icon: Phone,
    title: "B. Balaramakrishna",
    description: "President - B.Sc., LL.B. Call for admissions guidance, trust information, and campus visit support.",
    meta: `Cell: ${schoolInfo.phones[0]}`,
    bgColor: "bg-[#efe1e3]",
    textColor: "text-slate-800",
    iconColor: "text-[var(--brand-primary)]",
    shadow: "border border-[var(--brand-primary)]/20",
    link: schoolInfo.phoneLinks[0],
  },
  {
    icon: FaWhatsapp,
    title: "C.H. Damodhar Rao",
    description: "Secretary. Connect for admissions open 2026-27, grade details, and school information.",
    meta: `Cell: ${schoolInfo.phones[1]}`,
    bgColor: "bg-[#e8f7ef]",
    textColor: "text-slate-800",
    iconColor: "text-[#1fa855]",
    shadow: "border border-[#1fa855]/25",
    link: schoolInfo.phoneLinks[1],
  },
  {
    icon: MapPin,
    title: "K. Srinivas Rao",
    description: "Trustee. Reach out for parent guidance, hostel information, and campus support.",
    meta: `Cell: ${schoolInfo.phones[2]}`,
    bgColor: "bg-[#fff5db]",
    textColor: "text-slate-800",
    iconColor: "text-[var(--brand-primary)]",
    shadow: "shadow-sm border border-[var(--brand-secondary)]/35",
    // This will open the user's Map app or Google Maps in a new tab
    link: schoolInfo.phoneLinks[2],
  },
];

function Contact() {
  // Free Google Maps Embed URL using search
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(SCHOOL_ADDRESS)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="bg-[#faf8f2] pt-9">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold leading-tight text-[var(--brand-primary)] md:text-4xl">
            Admissions Open 2026-27
          </h2>
          <p className="mb-3 mt-4 text-base text-slate-600 md:text-lg">
            Contact MAATA EDUCATION TRUST (R) for admissions, AI Smart Classes, hostel facilities, JEE & NEET foundation, and campus visits.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-[var(--brand-secondary)]/25 bg-white p-5 text-sm text-slate-700 shadow-sm sm:p-6">
          <p className="font-bold text-[var(--brand-primary)]">{schoolInfo.name}</p>
          <p className="mt-1">{schoolInfo.parentOrganization}</p>
          <p className="mt-1">{schoolInfo.location}</p>
          <a href={schoolInfo.emailLink} className="mt-2 inline-block font-semibold text-[var(--brand-primary)]">
            {schoolInfo.email}
          </a>
        </div>

        <div className="mb-10 mt-7 grid grid-cols-1 gap-5 sm:mt-9 sm:gap-6 md:grid-cols-3">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`
                ${item.bgColor} ${item.textColor} ${item.shadow || ''} 
                flex min-h-[200px] flex-col gap-4 rounded-[2rem] p-6 
                sm:min-h-[220px] sm:rounded-[2.2rem] sm:p-8 
                md:min-h-[230px] md:p-8 
                lg:min-h-[250px] lg:rounded-[2.5rem] lg:p-10
                transition-all duration-300 hover:scale-[1.03] hover:shadow-md active:scale-[0.98] cursor-pointer
              `}
            >
              <div className="flex items-center gap-4">
                <div className={item.iconColor}>
                  <item.icon className="h-8 w-8 sm:h-9 sm:w-9" />
                </div>
                <h3 className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed opacity-90 sm:text-[0.95rem]">
                {item.description}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                  {item.meta}
                </p>
                <span className="text-[10px] font-black opacity-40">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="relative left-1/2 right-1/2 mt-2 h-[300px] w-screen -translate-x-1/2 overflow-hidden border-t border-slate-200 bg-white sm:h-[360px] md:h-[400px] lg:h-[440px]">
          <iframe
            title="Vaksiddhi Public School Manvi Map"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
