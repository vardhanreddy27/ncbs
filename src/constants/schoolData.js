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
  name: "Vaksiddhi Public School ",
  shortName: "Vaksiddhi",
  tagline: "Every Dream Deserves A Path.",
  logoTagline: "Nurturing Minds. Planting Knowledge.",
  logoSubtagline: "Nursery to Grade 10",
  established: "Nursery to Grade 10",
  location: "Behind Amruth Colony, Cheekalparvi Road, Manvi - 584123, Raichur District, Karnataka",
  addressShort: "Manvi, Raichur District",
  phones: ["Admissions Guidance", "Campus Visit Desk"],
  phoneLinks: ["#contact", "#contact"],
  email: "Visit the campus for admissions support",
  emailLink: "#contact",
  hours: "Monday – Saturday: 9:00 AM – 5:00 PM",
  principal: "Principal, Vaksiddhi Public School",
  principalVision: "Creating the path for every dream through values, discipline, and future-ready learning.",
  whatsappLink: "#contact",
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
    title: "Smart Classrooms",
    color: "bg-[#145A32]/20",
  },
  {
    title: "Guided Growth",
    color: "bg-[#0B3D2E]/12",
  },
  {
    title: "Values & Leadership",
    color: "bg-[#D4A64A]/18",
  },
];

export const programs = [
  {
    title: "Nursery Foundation",
    subtitle: "Early years",
    description:
      "Gentle, child-centered learning that turns curiosity into language, confidence, and joyful discovery.",
    icon: FaBookOpen,
  },
  {
    title: "Primary Learning",
    subtitle: "Grade I to V",
    description:
      "Experiential classrooms that build strong basics, clear thinking, discipline, and confident communication.",
    icon: FaFlask,
  },
  {
    title: "High School Readiness",
    subtitle: "Grade VI to X",
    description:
      "Academic depth, leadership habits, future-ready skills, and values that prepare learners for opportunity.",
    icon: FaUserGraduate,
  },
];

export const highlights = [
  {
    title: "Child-Centered Education",
    text: "Every learner is guided to discover strengths, ask better questions, and grow with confidence.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Experiential Learning",
    text: "Learning moves beyond textbooks through observation, practice, discussion, creativity, and reflection.",
    icon: FaBullseye,
  },
  {
    title: "Values & Character",
    text: "Discipline, responsibility, empathy, and leadership are built into everyday school life.",
    icon: FaTrophy,
  },
  {
    title: "Future-Ready Progress",
    text: "Technology integration and regular feedback keep families connected to each child's growth path.",
    icon: MdAutoGraph,
  },
];

export const examTraining = [
  {
    title: "AI-Enabled Smart Classrooms",
    detail:
      "Modern classroom tools help teachers make concepts visual, interactive, and easier for every learner to understand.",
  },
  {
    title: "Experiential Learning",
    detail:
      "Students learn by doing, exploring, questioning, and connecting lessons to real-life understanding.",
  },
  {
    title: "Leadership With Values",
    detail:
      "Discipline, responsibility, teamwork, and confident communication prepare students to become future leaders.",
  },
];

export const stats = [
  { value: "X", label: "Highest Grade" },
  { value: "Nursery", label: "Starting Grade" },
  { value: "1", label: "Focused Campus" },
  { value: "5", label: "Growth Pathways" },
];

export const testimonials = [
  {
    name: "Parent Trust",
    role: "Vaksiddhi Families",
    quote: "A school where children are guided with care, discipline, and a clear path for growth.",
  },
  {
    name: "Student Growth",
    role: "Vaksiddhi Learners",
    quote: "Students learn to think clearly, communicate confidently, and take responsibility for their dreams.",
  },
  {
    name: "Future-Ready Schooling",
    role: "Vaksiddhi Community",
    quote: "Innovation, strong values, and personal guidance come together to prepare children for tomorrow.",
  },
];

export const trustLogos = [
  { src: "/standford.png", alt: "Stanford" },
  { src: "/cambridge.png", alt: "Cambridge" },
  { src: "/mit.png", alt: "MIT" },
  { src: "/harvard.png", alt: "Harvard" },
];
