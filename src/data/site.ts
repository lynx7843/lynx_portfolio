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
  description: string;
  tech: string[];
  githubUrl: string;
}

export interface Education {
  institution: string;
  qualification: string;
  period: string;
  details?: string[];
}

export interface OtherActivity {
  organization: string;
  activity: string;
  period: string;
  details?: string[];
}

export interface SiteData {
  navLinks: NavLink[];
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  techStack: TechCategory[];
  projects: Project[];
  education: Education[];
  other: OtherActivity[];
}

export const siteData: SiteData = {
  navLinks: [
    { label: "Tech Stack", path: "#tech-stack" },
    { label: "Projects", path: "#projects" },
    { label: "Education", path: "#education" },
    { label: "Other", path: "#other" },
    { label: "Blog", path: "#blog", comingSoon: true },
  ],
  personalInfo: {
    name: "Dilan Amantha",
    title: "Software Engineer | Full-Stack Developer",
    location: "Kirindiwela, Sri Lanka",
    bio: "Third-year undergraduate with practical experience developing scalable web, mobile and Windows applications. I build full-stack applications with React, SvelteKit, Flutter and ASP.NET Core, backed by AWS serverless services and relational databases. Experienced in cross-platform products involving IoT devices, real-time data and dashboard interfaces, with a focus on maintainable code and clean, minimal user interfaces. Recently interested in machine learning, networking, server-side operations and developing deep learning algorithms.",
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
      description:
        "Cross-platform shuttle management for university students: two Flutter apps, a React dashboard and Arduino GPS and fingerprint hardware for live tracking, backed by 18 AWS Lambda functions with DynamoDB and API Gateway.",
      tech: ["React", "Flutter", "AWS Lambda", "DynamoDB", "Arduino", "JavaScript"],
      githubUrl: "https://github.com/lynx7843/UniRide",
    },
    {
      title: "Quickart — Responsive E-commerce Mobile Application",
      role: "Mobile App Developer",
      description:
        "E-commerce app using AI and AR so buyers can make better purchase decisions, with a virtual fit-on room built on 3D models. I built the Flutter client with REST API integration and S3-backed media storage.",
      tech: ["Flutter", "Dart", "MongoDB Atlas", "AWS S3", "REST APIs"],
      githubUrl: "https://github.com/lynx7843/Quickart-mobile",
    },
    {
      title: "Inventria — Warehouse Management System",
      role: "Full Stack Developer",
      description:
        "Warehouse system for managing products, stock levels and daily inventory operations. I built the SvelteKit frontend, with authentication plus employee and admin dashboards, against an ASP.NET Core 9 API and SQL Server.",
      tech: ["SvelteKit", "TypeScript", "ASP.NET Core 9", "C#", "Microsoft SQL Server"],
      githubUrl: "https://github.com/lynx7843/Inventria",
    },
    {
      title: "HireSync — Applicant Tracking System",
      role: "Full Stack Developer",
      description:
        "Applicant tracking system that moves candidates through each stage of the hiring pipeline, using a Fastify REST API with Zod validation over PostgreSQL and a multi-page React interface.",
      tech: ["React", "Tailwind CSS", "Node.js", "Fastify", "Zod", "PostgreSQL"],
      githubUrl: "https://github.com/lynx7843/HireSync",
    },
  ],
  education: [
    {
      institution: "National School of Business Management (NSBM) / Plymouth University Sri Lanka (PUSL)",
      qualification: "BSc (Hons) in Software Engineering",
      period: "2024 - 2027",
    },
    {
      institution: "Association of Accounting Technicians (AAT) Sri Lanka",
      qualification: "Level I and Level II completed",
      period: "2023 - 2024",
    },
    {
      institution: "Wycherley International School",
      qualification: "GCE Advanced Level (Commerce)",
      period: "2022 - 2023",
    },
    {
      institution: "Wycherley International School",
      qualification: "GCE Ordinary Level",
      period: "2020 - 2021",
    },
  ],
  other: [
    {
      organization: "Wycherley International School",
      activity: "Chess Club",
      period: "6+ years",
    },
    {
      organization: "Wycherley International School",
      activity: "Scrabble Club",
      period: "4+ years",
    },
    {
      organization: "Wycherley International School",
      activity: "Robotics Club",
      period: "2 years",
    },
    {
      organization: "Wycherley International School",
      activity: "Art Society",
      period: "During GCE Ordinary Level",
    },
    {
      organization: "Self-Taught",
      activity: "Independent Study",
      period: "Ongoing",
      details: ["Electronics", "Networking", "3D Modeling"],
    },
  ],
};
