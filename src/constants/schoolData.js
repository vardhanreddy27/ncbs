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
  name: "Nava Chaithanya Bharathi School",
  shortName: "NCBS",
  tagline: "Shaping Learning Minds through Individual Empowerment.",
  logoTagline: "English Medium School",
  logoSubtagline: "Playgroup to Grade VIII",
  established: "Est. 2023",
  location: "Door No. 2-422-3-2/B, P and T Colony, Near Hanuman Temple, Madanapalle, Andhra Pradesh 517325",
  addressShort: "P and T Colony, Madanapalle",
  phones: ["+91 74161 43373", "+91 91604 37152"],
  phoneLinks: ["tel:+917416143373", "tel:+919160437152"],
  email: "navachaithanyabharathischool@gmail.com",
  emailLink: "mailto:navachaithanyabharathischool@gmail.com",
  hours: "Monday – Saturday: 9:00 AM – 5:00 PM",
  principal: "Principal Manasa Padmanabhuni",
  principalVision: "Fostering holistic development and creative schooling approaches.",
  whatsappLink: "https://wa.me/917416143373",
};

export const brand = {
  primary: "#0d567f",
  secondary: "#74a6bf",
  accent: "#1f6f99",
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
    title: "STEM Labs",
    color: "bg-[#74a6bf]/20",
  },
  {
    title: "Guided Learning",
    color: "bg-[#0d567f]/12",
  },
  {
    title: "Campus Culture",
    color: "bg-[#1f6f99]/12",
  },
];

export const programs = [
  {
    title: "Playgroup & Nursery",
    subtitle: "Early years",
    description:
      "Activity-led classrooms that build literacy, numeracy, confidence, and joyful discovery.",
    icon: FaBookOpen,
  },
  {
    title: "Primary Grades",
    subtitle: "Grade I to V",
    description:
      "Multiple Intelligence and activity-based learning that supports individual attention and strong basics.",
    icon: FaFlask,
  },
  {
    title: "Middle School",
    subtitle: "Grade VI to VIII",
    description:
      "Concept clarity, regular evaluation, and progress tracking with a parent-friendly learning environment.",
    icon: FaUserGraduate,
  },
];

export const highlights = [
  {
    title: "Individual Learning Attention",
    text: "We focus on individual learning speeds and avoid rote memorisation.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Activity-Based Learning",
    text: "Multiple Intelligence learning through movement, observation, practice, and creativity.",
    icon: FaBullseye,
  },
  {
    title: "Holistic Development",
    text: "Creative schooling approaches that support confidence, curiosity, and overall growth.",
    icon: FaTrophy,
  },
  {
    title: "Progress Tracking",
    text: "Regular evaluation and child progress tracking help families stay informed.",
    icon: MdAutoGraph,
  },
];

export const examTraining = [
  {
    title: "Brain Gym",
    detail:
      "Exercises designed to improve attention, memory, coordination, and learning readiness for children aged 3–9.",
  },
  {
    title: "Map Pointing & State Symbols",
    detail:
      "Interactive geography activities using puzzles, maps, landmarks, and state symbols to make learning visual and playful.",
  },
  {
    title: "TaRL Approach",
    detail:
      "Teaching at the Right Level helps children strengthen Math basics and learn according to their current understanding.",
  },
];

export const stats = [
  { value: "2023", label: "Established" },
  { value: "VIII", label: "Highest Grade" },
  { value: "2", label: "Contact Numbers" },
  { value: "1", label: "Focused Campus" },
];

export const testimonials = [
  {
    name: "Parent Feedback",
    role: "NCBS Families",
    quote: "The school balances individual attention, creativity, and steady progress in a reassuring way.",
  },
  {
    name: "Student Growth",
    role: "NCBS Learners",
    quote: "Children learn through activities, movement, and observation rather than memorising blindly.",
  },
  {
    name: "Holistic Schooling",
    role: "NCBS Community",
    quote: "Creative schooling approaches and regular communication make the admissions journey easy for parents.",
  },
];

export const trustLogos = [
  { src: "/standford.png", alt: "Stanford" },
  { src: "/cambridge.png", alt: "Cambridge" },
  { src: "/mit.png", alt: "MIT" },
  { src: "/harvard.png", alt: "Harvard" },
];
