import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import Image from "next/image";
import Footer from "@/components/Footer";
export default function Home() {
  return (
  <div>
    <Hero />
    <SkillsSection />
    <Projects />
    <Footer /> 
  </div>
  );
}
