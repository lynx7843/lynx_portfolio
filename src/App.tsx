import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Other from "@/components/Other";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="h-16" />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Education />
        <Other />
      </main>
    </>
  );
}
