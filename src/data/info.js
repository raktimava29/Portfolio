export const siteConfig = {
  name: "Raktimava Bhattacharyya",

  title: "MERN Stack Developer | Full-Stack Web Developer",

  accentColor: "#dc2626",

  social: {
    email: "raktim.bhatta29@gmail.com",
    github: "https://github.com/raktimava29",
    linkedin: "https://www.linkedin.com/in/raktimava",
  },

  aboutMe:
    "I am a MERN Stack Developer and an Electronics and Communication Engineering undergraduate at IIIT Bhagalpur. I enjoy building full-stack web applications with clean architecture, secure authentication, and real-time features. My experience includes designing REST APIs, implementing JWT and OAuth-based authentication, building real-time systems with Socket.IO, and deploying scalable applications. I focus on writing maintainable code while strengthening my understanding of core computer science fundamentals.",

  skills: {
    languages: [
      "C++",
      "C",
      "JavaScript",
      "TypeScript",
      "Python",
    ],
    frameworksAndLibraries: [
      "React.js",
      "Node.js",
      "Express.js",
      "Vite",
      "Tailwind CSS",
      "Chakra UI",
      "Socket.IO",
      "Axios",
      "JWT",
      "bcrypt",
    ],
    databasesAndDeployment: [
      "MongoDB (Mongoose)",
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
    csFundamentals: [
      "Data Structures & Algorithms",
      "DBMS (SQL & NoSQL)",
      "Operating Systems",
      "Object Oriented Programming System",
    ],
  },

  projects: [
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

    {
      name: "Tic-Tac-Toe Game",
      description:
      "A browser-based Tic-Tac-Toe game developed using HTML, CSS, and JavaScript, focusing on clean game logic and user interaction. The project implements proper game state management, win-condition evaluation, and responsive styling with visual feedback to enhance usability across different screen sizes.",
      techStack: ["HTML", "CSS", "JavaScript"],
      repo_link: "https://github.com/raktimava29/Tic-Tac-Toe",
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
