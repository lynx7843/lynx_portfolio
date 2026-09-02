export interface NavLink {
  label: string;
  path: string;
  comingSoon?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  bio: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

export interface SiteData {
  navLinks: NavLink[];
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
}

export const siteData: SiteData = {
  navLinks: [
    { label: "Tech Stack", path: "#tech-stack" },
    { label: "Projects", path: "#projects" },
    { label: "Education", path: "#education" },
    { label: "Blog", path: "#blog", comingSoon: true },
  ],
  personalInfo: {
    name: "Dilan Amantha",
    title: "Software Engineer | Full-Stack Developer",
    location: "Kirindiwela, Sri Lanka",
    bio: "Third-year software engineering undergraduate building full-stack web, mobile and Windows applications with React, Flutter and ASP.NET Core, backed by AWS serverless services and relational databases. I work across IoT-driven products, real-time data and dashboard interfaces, with a focus on maintainable code and clean, minimal interfaces.",
  },
  contactInfo: {
    email: "eadaedirisingha@gmail.com",
    github: "https://github.com/lynx7843",
    linkedin: "https://www.linkedin.com/in/dilan-edirisingha-amantha",
  },
};
