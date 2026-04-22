export const siteConfig = {
  name: "Raktimava Bhattacharyya",

  title: "Full-Stack Web Developer",

  accentColor: "#dc2626",

  social: {
    email: "raktim.bhatta29@gmail.com",
    github: "https://github.com/raktimava29",
    linkedin: "https://www.linkedin.com/in/raktimava",
  },

  aboutMe:
    `I’m a full-stack developer from IIIT Bhagalpur with a strong focus on backend engineering and building scalable systems. I enjoy working on applications that involve real-time features, performance, and thoughtful system design. I use Node.js and FastAPI to make apps that are ready for production. I have experience designing scalable REST APIs, handling asynchronous workflows with queues (BullMQ + Redis), and using Socket.IO to enable real-time communication. I write code that is easy to read and maintain and I also work with LLM-powered workflows by integrating APIs to build intelligent features such as content generation and structured data processing, applying them where they add real value.`,

  skills: {
    languages: [
      "C++",
      "C",
      "JavaScript",
      "TypeScript",
      "Python",
    ],
    frontendTechnologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Chakra UI",
      "Axios",
    ],
    backendTechnologies: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "JWT",
      "bcrypt",
      "Socket.IO",
      "BullMQ",
    ],
    Databases: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Supabase",
    ],
    Deployment: [
      "Docker",
      "Firebase",
      "Render",
      "Netlify",
      "Vercel",
    ],
    developerTools: [
      "Git",
      "GitHub",
      "Postman",
      "Chrome DevTools",
      "NPM",
    ],
  },

  projects: [
    {
      name: "ChronoMail",
      description:
        "A production-grade email scheduling service and dashboard built using Node.js and Redis, designed to reliably schedule and send emails at scale. The system accepts email requests via REST APIs and queues them using BullMQ with Redis as a persistent job store, avoiding traditional cron-based scheduling. Each email is processed by a dedicated worker that handles delayed execution, retry mechanisms, and failure handling before sending via SMTP (Ethereal for testing). The architecture separates API and worker processes, ensuring reliability, scalability, and crash resilience while maintaining clean backend design principles.",
      techStack: [
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Nodemailer",
        "JWT"
      ],
      repo_link: "https://github.com/raktimava29/emaillscheduler2",
      live_link: "https://emaillscheduler2.vercel.app/"
    },
    {
      name: "AI Flashcard Learning System",
      description:
        "Built a full-stack AI-powered flashcard system that generates, validates, and schedules learning content from PDFs. Implemented a FastAPI backend to extract text, generate structured flashcards using LLM APIs, and apply a spaced repetition algorithm using interval-based scheduling and next-review timestamps. Designed robust data handling with JSON validation, deduplication, and state tracking to ensure consistency in learning flow. The system supports adaptive review based on user feedback, enabling efficient long-term retention.",
      techStack: [
        "Python",
        "FastAPI",
        "Groq",
        "JavaScript",
        "React.js",
        "Tailwind CSS"
      ],
      repo_link: "https://github.com/raktimava29/Flashcard-Engine",
      live_link: "https://flashcard-engine-theta.vercel.app/" 
    },
    {
      name: "MindTube",
      description:
        "A full-stack collaborative learning platform built on the MERN stack, designed to combine video-based learning with real-time collaboration. The platform supports secure authentication using Google OAuth and JWT, role-based access control to manage editing permissions, and interactive notepad and whiteboard features linked to video URLs. The application was structured with scalable backend APIs and optimized deployment by consolidating frontend and backend services on Render, significantly reducing setup and deployment complexity.",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Chakra UI",
        "JWT",
        "Google OAuth",
      ],
      repo_link: "https://github.com/raktimava29/Canvas",
      live_link: "https://mindtube-pied.vercel.app/" 
    },

    {
      name: "ConvoDesk",
      description:
       "A real-time communication platform focused on secure messaging and responsive user experience. The system uses JWT-based authentication to protect application routes and Socket.IO to enable low-latency, real-time message delivery. The backend follows a modular architecture with clearly separated concerns, improving maintainability and reducing code duplication, while the frontend was designed to be fully responsive and tested across multiple device types.",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Chakra UI",
      ],
      repo_link: "https://github.com/raktimava29/ConvoDesk",
      live_link: "https://convodesk.onrender.com/"
    },

    {
      name: "Bookmarker Chrome Extension",
      description:
        "A lightweight Chrome extension that allows users to save, organize, and manage bookmarks through a simple popup interface. Built using vanilla JavaScript and Chrome Extension APIs, the extension stores data locally using LocalStorage to ensure fast access and persistence across browser sessions without relying on external services.",
      techStack: ["HTML", "CSS", "JavaScript", "Chrome Extension APIs"],
      repo_link: "https://github.com/raktimava29/Extension",
    },
  ],

  education: [
    {
      institution: "Indian Institute of Information Technology Bhagalpur",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      period: "2022 – 2026",
      cgpa: "8.00",
    },
  ],

  certifications: [
  {
    name: "ServiceNow Certified Application Developer",
    link: "https://drive.google.com/file/d/1moEp2Yo7eA9KaJKsdPud3fikLRhU2lxr/view", 
  },
  {
    name: "ServiceNow Certified System Administrator",
    link: "https://drive.google.com/file/d/1Bti8JpkjDBvUM7fQGYnGJ_GahM_nA9s2/view",
  },
],

  achievements: [
    "Solved 300+ algorithmic problems on GeeksforGeeks, CodeChef, LeetCode, and HackerRank",
    "Placed 3rd in intra-college Smart India Hackathon 2023 and qualified for SIH 2023",
  ],
};
