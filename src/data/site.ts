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

export interface TechCategory {
  label: string;
  items: string[];
}

export interface Project {
  title: string;
  role: string;
  description: string[];
  tech: string[];
  githubUrl: string;
}

export interface SiteData {
  navLinks: NavLink[];
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  techStack: TechCategory[];
  projects: Project[];
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
  techStack: [
    {
      label: "Languages",
      items: ["C", "C#", "C++", "Dart", "Go", "Java", "JavaScript", "Kotlin", "PHP", "Python", "Swift"],
    },
    {
      label: "Frontend",
      items: ["HTML5", "React", "Bootstrap", "Tailwind CSS", "Three.js", "Vite"],
    },
    {
      label: "Backend",
      items: [".NET", "Node.js", "Apache", "Tomcat", "Maven", "JWT", "NPM"],
    },
    {
      label: "Databases",
      items: ["DynamoDB", "SQL Server", "MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      label: "Cloud & Infrastructure",
      items: ["AWS", "Cloudflare", "Firebase", "Docker", "Kubernetes"],
    },
    {
      label: "Tools & DevOps",
      items: ["Git", "GitHub", "Postman", "Arduino"],
    },
  ],
  projects: [
    {
      title: "UniRide — Campus Shuttle Management System",
      role: "Full Stack Developer",
      description: [
        "Cross-platform travel management system for university students, combining two Flutter mobile apps, a React web dashboard and hardware-based GPS tracking.",
        "Developed a serverless backend of 18 AWS Lambda functions with DynamoDB and API Gateway.",
        "Integrated an Arduino NEO-6M GPS module and fingerprint sensor for real-time shuttle tracking on live maps and driver verification.",
      ],
      tech: ["React", "Flutter", "AWS Lambda", "DynamoDB", "Arduino", "JavaScript"],
      githubUrl: "https://github.com/lynx7843/UniRide",
    },
    {
      title: "Quickart — Responsive E-commerce Mobile Application",
      role: "Mobile App Developer",
      description: [
        "E-commerce platform using AI and AR to help buyers make better purchase decisions and give sellers smarter tools to present their products.",
        "Built the cross-platform Flutter client with REST API integration and S3-backed media storage.",
        "3D models power the AR virtual fit-on room experience, with AI used to assist users.",
      ],
      tech: ["Flutter", "Dart", "MongoDB Atlas", "AWS S3", "REST APIs"],
      githubUrl: "https://github.com/lynx7843/Quickart-mobile",
    },
    {
      title: "Inventria — Warehouse Management System",
      role: "Full Stack Developer",
      description: [
        "Warehouse management system for handling products, stock levels and day-to-day inventory operations.",
        "Built the SvelteKit frontend, including authentication, employee dashboard and admin dashboard, against an ASP.NET Core 9 REST API and SQL Server database.",
      ],
      tech: ["SvelteKit", "TypeScript", "ASP.NET Core 9", "C#", "Microsoft SQL Server"],
      githubUrl: "https://github.com/lynx7843/Inventria",
    },
    {
      title: "HireSync — Applicant Tracking System",
      role: "Full Stack Developer",
      description: [
        "Applicant tracking system for managing job candidates and their applications through each stage of the hiring pipeline.",
        "Implemented a Fastify REST API with Zod schema validation over PostgreSQL, paired with a multi-page React interface.",
      ],
      tech: ["React", "Tailwind CSS", "Node.js", "Fastify", "Zod", "PostgreSQL"],
      githubUrl: "https://github.com/lynx7843/HireSync",
    },
  ],
};
