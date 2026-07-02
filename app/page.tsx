import Navbar from "@/components/layout/navbar";
import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import Skills from "../components/section/SkillsComonent";
import Education from "@/components/section/educationComponent";
import Projects from "@/components/section/projectsComponent";
import Services from "@/components/section/servicesComponent";
import Contact from "@/components/section/contactComponent";
import Footer from "@/components/layout/footer";



export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Education/>
        <Projects/>
        <Services/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}