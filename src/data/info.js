export const siteConfig = {
  name: "Raktimava Bhattacharyya",
  title: "MERN Stack Developer",
  description: "Portfolio of a MERN Stack Developer building full-stack and real-time web applications",
  accentColor: "#1d4ed8",
  social: {
    email: "raktim.bhatta29@gmail.com",
    linkedin: "https://www.linkedin.com/in/raktimava-bhattacharyyaa",
    github: "https://github.com/raktimava29/",
  },

  aboutMe:
    "I am a MERN Stack Developer with an Electronics and Communication Engineering background. I enjoy building full-stack web applications with clean APIs, scalable backend logic, and intuitive user interfaces. I have hands-on experience with authentication systems, REST APIs, real-time features using Socket.IO, and deploying applications. I focus on writing maintainable code and understanding how things work under the hood.",

  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "JWT Authentication",
    "REST APIs",
    "Git & GitHub",
  ],

  projects: [
    {
      name: "MindTube",
      description:
        "A full-stack video sharing and collaboration platform featuring authentication, role-based access, video streaming integration, notes, and a shared whiteboard. Designed to demonstrate real-world backend architecture and scalable API design.",
      link: "https://github.com/raktimava/mindtube", // repo or live link
      skills: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.IO"],
    },
    {
      name: "Chatify (ConvoDesk)",
      description:
        "A real-time chat application supporting one-to-one and group messaging using WebSockets. Includes user authentication, online status, message persistence, and responsive UI.",
      link: "https://github.com/raktimava/chatify",
      skills: ["React", "Node.js", "Socket.IO", "MongoDB"],
    },
    {
      name: "Developer Portfolio",
      description:
        "Personal portfolio website built using React and Tailwind CSS. Migrated from Astro to React to align with MERN stack best practices and ensure full ownership of architecture.",
      link: "https://github.com/raktimava/portfolio",
      skills: ["React", "Vite", "Tailwind CSS"],
    },
  ],

  experience: [
    {
      company: "Personal Projects",
      title: "MERN Stack Developer",
      dateRange: "2023 – Present",
      bullets: [
        "Designed and built full-stack web applications using React, Node.js, Express, and MongoDB",
        "Implemented secure authentication and authorization using JWT and middleware",
        "Built real-time features using Socket.IO for chat and collaboration use cases",
        "Worked with RESTful APIs, database schema design, and deployment workflows",
      ],
    },
  ],

  education: [
    {
      school: "Bachelor of Technology (ECE)",
      degree: "Electronics and Communication Engineering",
      dateRange: "2019 – 2023",
      achievements: [
        "Strong foundation in data structures, networking, and system fundamentals",
        "Transitioned into full-stack web development through self-learning and projects",
      ],
    },
  ],
};
