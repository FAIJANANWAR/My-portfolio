import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import TechStack from "@/components/sections/TechStack";
import CertificationsSection from "@/components/certifications/CertificationsSection";
import ProblemSolving from "@/components/sections/ProblemSolving";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CurrentlyBuilding />
      <TechStack />
      <CertificationsSection />
      <ProblemSolving />
      <Contact />
    </>
  );
}
