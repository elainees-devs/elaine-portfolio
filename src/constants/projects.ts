// src/constants/projects.ts
export interface Project {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  route?: string;
  techStack?: string[];
  status?: "live" | "coming-soon";
  role?: string;
  image?: string; 
}

export const projects: Project[] = [
  {
    title: "Edusynx - School Management System",
    description:
      "A MERN stack application that modernizes school operations by automating tasks like enrollment, attendance, and performance tracking.",
    github:
      "https://github.com/elamuhombe/gomycode-mern-edusynx-school-management-system.git",
    demo: "https://edusynx.elainees.dev/",
    route: "/projects/edusynx",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    status: "live",
    role: "Full-Stack Developer",
    image: "/images/edusynx.png", 
  },
  {
    title: "AgriNext Africa - Agricultural Platform",
    description:
      "A MERN stack platform aimed at transforming agricultural operations and connecting farmers with smart analytics.",
    demo: "https://www.youtube.com/watch?v=8JM5nqSkUbg",
    route:
      "https://www.canva.com/design/DAGlpIHLoeg/rrDYcP0ebZ8OgGc2qqshXA/edit",
    status: "coming-soon",
    role: "Full Stack Developer",
    image: "",
  },
  {
    title: "MerExpress - E-commerce",
    description:
      "A MERN stack application providing a robust e-commerce platform with user authentication, product management, and cart functionality.",
    github: "https://github.com/Kyalo460/Merxpress_Frontend.git",
    demo: "https://drive.google.com/file/d/1v8kkQiY4aN57Mrrme4YUSDWqinno0Xpf/view?usp=sharing",
    route: "/projects/merexpress",
    techStack: ["NextJS", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    role: "Front-End Developer",
    image:
      "/images/merxpress.png", //
  },
  {
    title: "Elaine - Portfolio Website",
    description:
      "A personal portfolio website built with React and TypeScript to showcase my skills, projects, and experience as a full-stack web developer. It features interactive sections for project highlights, a contact details, and a responsive design for optimal viewing on all devices.",
    github: "https://github.com/elaine-mern-dev/elaine-portfolio.git",
    demo: "https://edusynx.elainees.dev/",
    techStack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    status: "live",
    role: "Front End Developer",
    image: "/images/portfolio.png",
  },
];
