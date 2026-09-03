import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="h-16" />
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
    </>
  );
}
