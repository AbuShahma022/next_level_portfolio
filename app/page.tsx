import Navbar from "@/components/layout/navbar";
import About from "@/components/section/About";
import Hero from "@/components/section/Hero";



export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <About/>
      </main>
    </>
  );
}