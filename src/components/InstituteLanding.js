import Header from "./Header";
import HeroBanner from "./HeroBanner";
import AcademicPrograms from "./AcademicPrograms";
import WhyUs from "./WhyUs";
import ExamTraining from "./ExamTraining";
import SchoolFacilities from "./SchoolFacilities";
import SmartSchool from "./SmartSchool";
import PrincipalProfileSection from "./PrincipalProfileSection";
import Contact from "./Contact";
import Footer from "./Footer";

export default function InstituteLanding() {
  return (
    <>
      <Header />
      <HeroBanner />
      <AcademicPrograms />
      <WhyUs />
      <ExamTraining />
      <SchoolFacilities />
      <SmartSchool />
      <PrincipalProfileSection />

      <Contact />
      <Footer />
    </>
  );
}
