import Navbar from "@/components/layout/navbar";
import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import Skills from "../components/section/SkillsComonent";
import Education from "@/components/section/educationComponent";



export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Education/>
      </main>
    </>
  );
}