import project1 from "../assets/projects/AI_Assistant.png";
import project2 from "../assets/projects/CollegeEvent.png";
import project3 from "../assets/projects/UniversityLibraryManagement.png";
import project4 from "../assets/projects/project-1.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
export const ABOUT_TEXT = `I am a passionate and dedicated full stack developer with a strong foundation in web development. Proficient in technologies like React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB, I enjoy building user-friendly and efficient applications. During my academic journey and internship experiences, I have developed a problem-solving mindset and a collaborative approach to tackling challenges. I am eager to contribute to dynamic teams, learn from experienced professionals, and grow as a developer. Beyond coding, I enjoy exploring new technologies and contributing to open-source projects.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];
export const EXPERIENCES = [
  {
    year: "June 2022 - July 2022",
    role: "Full Stack .NET Developer Intern",
    company: "e-Pointer Consultancy Services Pvt. Ltd.",
    description: `Contributed to the development of an ERP-based College Management System using .NET technologies. Worked on both frontend and backend modules, assisting in designing user interfaces and implementing business logic. Collaborated with the development team to troubleshoot issues and optimize application performance.`,
    technologies: [".NET", "C#", "SQL Server", "JavaScript"],
  },
  {
    year: "Jan 2025 - March 2025",
    role: "Full Stack Developer Intern",
    company: "Greatstack",
    description: `Developed a full-stack E-Commerce application using the MERN stack. Designed and implemented responsive user interfaces with React, providing seamless shopping experiences. Built secure RESTful APIs using Node.js and Express.js for product management, user authentication, and order processing. Integrated MongoDB for dynamic data storage and optimized database queries for performance. Implemented features such as product search, filtering, shopping cart, and payment gateway integration. Collaborated closely with the team to troubleshoot issues and enhance application scalability.
`,
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "Stripe",
      "JWT",
    ],
  },
];
// export const PROJECTS = [
//   {
//     title: "E-Commerce Website",
//     image: project1,
//     description:
//       "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
//     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Task Management App",
//     image: project2,
//     description:
//       "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
//     technologies: ["HTML", "CSS", "Angular", "Firebase"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description:
//       "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React", "Bootstrap"],
//   },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
// ];
export const PROJECTS = [
  {
    title: "Personal-AI-Assistant",
    image: project1,
    description: `
      Tech Stack: Next.js, React, Convex, Eden AI
      • Developed a full-stack SaaS app with real-time data and advanced AI features.
      • Integrated Convex for seamless backend data handling and real-time updates.
      • Leveraged Eden AI for powerful AI-driven functionalities.
      • Designed an interactive and responsive UI using Next.js and React.
      • Implemented best practices for scalability, performance, and security.
    `,
    technologies: [
      "Typescript",
      "shadcn",
      "React",
      "Node.js",
      "convex",
      "EdenAI",
    ],
    link: "https://personal-ai-assistance-blush.vercel.app",
  },
  {
    title: "College Event Management App",
    image: project2,
    description: `
      Tech Stack: React Native (Expo), Node.js, Express, The Nile Dev, Cloudinary
      • Developed a mobile application for college event management using React Native with Expo.
      • Integrated The Nile Dev for scalable and efficient backend database management.
      • Utilized Cloudinary for seamless image storage and management.
      • Built a responsive and interactive UI for enhanced user experience.
      • Implemented features like event creation, registration, and reminders.
      • Ensured real-time notifications and authentication using Node.js and Express.
      • Applied best practices for performance, scalability, and security.
    `,
    technologies: [
      "Typescript",
      "ReactNative",
      "Node.js",
      "theNileDB",
      "Cloudinary",
    ],
    link: "https://github.com/Aashish909/Campus_Guru-React_Native",
  },
  {
    title: "University Library Management System with Admin Dashboard",
    image: project3,
    description: `
      Tech Stack: Node.js, Next.js, Tailwind CSS, NextAuth.js, PostgreSQL, Neon, TypeScript, shadcn
      • Developed frontend using Next.js for creating interactive, intuitive, and responsive user interfaces.
      • Managed data efficiently using PostgreSQL and Neon for scalability and reliability.
      • Implemented user authentication and authorization using NextAuth.js with Sessions and JWT.
      • Integrated industry-standard best practices, including rate limiting, DDoS protection, caching, and a seamless book borrowing system.
      Credential to log IN:
      loginID-user1@gmail.com/user2@gmail.com
      Password:123456
    `,
    technologies: [
      "Typescript",
      "shadcn",
      "React",
      "Node.js",
      "postgresql",
      "Cloudinary",
    ],
    link: "https://university-library-eight-black.vercel.app",
  },
  {
    title: "ZMart eCommerce App",
    image: project4,
    description: `
      Tech Stack: MongoDB, Express.js, React.js, Node.js
      • Developed a scalable eCommerce application using the MERN stack.
      • Integrated secure payment processing to ensure seamless transactions.
      • Implemented user authentication, product management, and order tracking, enhancing customer experience.
      • Optimized database queries and API responses, improving performance and scalability.
      • Designed a responsive UI with a smooth and intuitive shopping experience.
    `,
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/Aashish909/ZMart-eCommerce-app",
  },
];

export const CONTACT = {
  address: "Dhori staff quarter, Phusro, Bokaro, Jharkhand, IND 825102 ",
  phoneNo: "+91 9572 6718 83 ",
  email: "aashish.kumar.ak2000@gmial.com",
};
