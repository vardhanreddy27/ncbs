import {
  FaArrowRight,
  FaBookOpen,
  FaBullseye,
  FaChalkboardTeacher,
  FaFacebookF,
  FaFlask,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";
import { MdAutoGraph, MdEmail } from "react-icons/md";

export const schoolInfo = {
  name: "Vaksiddhi Public School (R), Manvi",
  shortName: "Vaksiddhi",
  parentOrganization: "A Venture of MAATA EDUCATION TRUST (R)",
  tagline: "Admissions Open for the Academic Year 2026-27",
  logoTagline: "NURTURING MINDS. ★ PLANTING KNOWLEDGE. ★ GROWING EXCELLENCE.",
  logoSubtagline: "Pre-School to Grade X",
  established: "Pre-School to Grade X",
  currentGrades: "Currently expanding from Pre-School to Grade VIII",
  location: "Behind Amruth Colony, Cheekalparvi Road, MANVI-584123, Dist: Raichur",
  addressShort: "Manvi-584123, Dist: Raichur",
  phones: ["9449484004", "7019000361", "9845296777"],
  phoneLinks: ["tel:+919449484004", "tel:+917019000361", "tel:+919845296777"],
  email: "maatavaksiddhiedu@gmail.com",
  emailLink: "mailto:maatavaksiddhiedu@gmail.com",
  hours: "Monday - Saturday: 9:00 AM - 5:00 PM",
  principal: "Vaksiddhi Public School (R), Manvi",
  principalVision: "Nurturing minds, planting knowledge, and growing excellence through the SEED philosophy.",
  whatsappLink: "https://wa.me/919449484004",
  admissions: "Admissions Open 2026-27",
  people: [
    { name: "B. Balaramakrishna", role: "President", qualification: "B.Sc., LL.B", phone: "9449484004", link: "tel:+919449484004" },
    { name: "C.H. Damodhar Rao", role: "Secretary", phone: "7019000361", link: "tel:+917019000361" },
    { name: "K. Srinivas Rao", role: "Trustee", phone: "9845296777", link: "tel:+919845296777" },
  ],
};

export const brand = {
  primary: "#0B3D2E",
  secondary: "#145A32",
  accent: "#D4A64A",
};

export const navLinks = [
  { label: "Home", href: "#Home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Programs", href: "#programs" }, // Our Specialized Programs
  { label: "About", href: "#academics" }, // New Way of Learning
  { label: "Smart School", href: "#smart-school" }, // Smart School ERP
  { label: "Contact", href: "#contact" }, // Get in Touch
];

export const heroCards = [
  {
    title: "AI Smart Classes",
    color: "bg-[#145A32]/20",
  },
  {
    title: "SEED Learning",
    color: "bg-[#0B3D2E]/12",
  },
  {
    title: "Hostel Care",
    color: "bg-[#D4A64A]/18",
  },
];

export const programs = [
  {
    title: "Pre-School Foundation",
    subtitle: "Pre-School to U.K.G",
    description:
      "A joyful start with language, numbers, stories, play, discipline, and gentle confidence-building.",
    icon: FaBookOpen,
  },
  {
    title: "Primary & Middle School",
    subtitle: "Grade I to VIII",
    description:
      "State Syllabus with CBSE curriculum readiness, AI smart classes, sports, culture, and personal care.",
    icon: FaFlask,
  },
  {
    title: "High School Edge",
    subtitle: "Grade VI to X",
    description:
      "JEE and NEET coaching from VI Standard onward, strong basics, discipline, and future-focused mentoring.",
    icon: FaUserGraduate,
  },
];

export const highlights = [
  {
    title: "Socratic Thinking",
    text: "Students are encouraged to ask why, think critically, reason clearly, and discover knowledge.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Experiential Learning",
    text: "Children learn by doing through exploration, hands-on experiences, and real-world connections.",
    icon: FaBullseye,
  },
  {
    title: "Excellence",
    text: "Every child is nurtured to achieve personal best with confidence, mastery, and pride.",
    icon: FaTrophy,
  },
  {
    title: "Discipline",
    text: "Strong values, responsibility, focus, character, and resilience are cultivated every day.",
    icon: MdAutoGraph,
  },
];

export const examTraining = [
  {
    title: "SEED Smart Learning",
    detail:
      "AI-powered learning methods and AI Smart Classes make concepts visual, interactive, and easier to understand.",
  },
  {
    title: "JEE & NEET Foundation",
    detail:
      "Specialized coaching begins from VI Standard onward with strong fundamentals and steady academic mentoring.",
  },
  {
    title: "Residential & Personal Care",
    detail:
      "Premium separate hostel facilities for boys and girls include personal care and support for hesitant learners.",
  },
];

export const stats = [
  { value: "2026-27", label: "Admissions Open" },
  { value: "VI+", label: "JEE & NEET Coaching" },
  { value: "Boys/Girls", label: "Separate Hostels" },
  { value: "CBSE", label: "Affiliation in Process" },
];

export const testimonials = [
  {
    name: "Parent Trust",
    role: "Vaksiddhi Families",
    quote: "A school where children are guided with care, discipline, AI smart learning, and a clear path for growth.",
  },
  {
    name: "Student Growth",
    role: "Vaksiddhi Learners",
    quote: "Students learn to ask better questions, think clearly, communicate confidently, and grow responsibly.",
  },
  {
    name: "Future-Ready Schooling",
    role: "Vaksiddhi Community",
    quote: "State Syllabus, CBSE readiness, residential care, sports, culture, and personal guidance come together.",
  },
];

export const trustLogos = [
  { src: "/standford.png", alt: "Stanford" },
  { src: "/cambridge.png", alt: "Cambridge" },
  { src: "/mit.png", alt: "MIT" },
  { src: "/harvard.png", alt: "Harvard" },
];
