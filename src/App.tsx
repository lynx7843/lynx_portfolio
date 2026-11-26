import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Other from "@/components/Other";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { siteData } from "@/data/site";
import { ShaderBackground } from "@/components/ui/shader-background";

const socials = [
  { label: "GitHub", href: siteData.contactInfo.github },
  { label: "LinkedIn", href: siteData.contactInfo.linkedin },
  { label: "Email", href: `mailto:${siteData.contactInfo.email}` },
  // TODO: replace "#" with your profile URLs; "#" links do nothing.
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Threads", href: "#" },
  { label: "Reddit", href: "#" },
  { label: "Patreon", href: "#" },
  { label: "X", href: "#" },
];

export default function App() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <div className="h-16" />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Education />
        <Other />
      </main>
      <Footer
        socials={socials}
        copyright={`© 2024—${new Date().getFullYear()} ${siteData.personalInfo.name}`}
      >
        <ContactForm />
      </Footer>
    </>
  );
}
