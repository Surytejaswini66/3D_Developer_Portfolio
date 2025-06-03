import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nxtwave,
  docker,
  wikipedia,
  jobbyapp,
  nxttrendz,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Specialist",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D & Creative Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
{
  title: "Frontend Developer",
  company_name: "NxtWave — Wikipedia Search Application",
  icon: nxtwave,       // Replace with your actual icon import or path
  iconBg: "#F0DB4F",
  date: "December 2023 - January 2024",
  points: [
    "Developed a Wikipedia Search Application using HTML, CSS, and vanilla JavaScript.",
    "Integrated Wikipedia's API to fetch and display search results dynamically.",
    "Implemented responsive design for usability across devices.",
    "Gained hands-on experience with DOM manipulation and asynchronous JavaScript (AJAX)."
  ],
},
{
  title: "MERN Stack Developer",
  company_name: "NxtWave — Jobby App",
  icon: nxtwave,       // Replace with your actual icon import or path
  iconBg: "#61DBFB",
  date: "April 2024 - May 2024",
  points: [
    "Developed a full-stack job listing application using React, Node.js, Express, and MongoDB.",
    "Created RESTful APIs and integrated frontend with backend services.",
    "Implemented user authentication and authorization features.",
    "Worked on improving performance and responsiveness across devices."
  ],
},
{
  title: "Full Stack Developer",
  company_name: "NxtWave — Nxt Trendz Project",
  icon: nxtwave,      // Replace with your actual icon import or path
  iconBg: "#4CAF50",
  date: "August 2024 - September 2024",
  points: [
    "Designed and developed a full-stack e-commerce platform with MERN stack.",
    "Implemented dynamic product listing, shopping cart, and payment integration.",
    "Collaborated with team members to enhance UI and fix bugs.",
    "Ensured cross-browser compatibility and mobile responsiveness."
  ],
},
  {
    title: "React.js Developer",
    company_name: "Personal Project — 3D Developer Portfolio",
    icon: nxtwave,
    iconBg: "#383E56",
    date: "January 2025 - February 2025",
    points: [
      "Developed and maintained a 3D interactive portfolio website using React.js, Three.js, and Tailwind CSS.",
      "Collaborated with designers and incorporated animations to enhance user experience and engagement.",
      "Implemented responsive design for seamless performance across devices and browsers.",
      "Utilized best practices in code organization and performance optimization.",
      "Utilized best practices in code organization and performance optimization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
{
  name: "Wikipedia Search Application",
  description:
    "A responsive web application built using HTML, CSS, and JavaScript that allows users to search Wikipedia articles in real-time using the Wikipedia API.",
  tags: [
    {
      name: "html",
      color: "orange-text-gradient",
    },
    {
      name: "css",
      color: "blue-text-gradient",
    },
    {
      name: "javascript",
      color: "yellow-text-gradient",
    },
  ],
  image: wikipedia, // Replace with your actual image import or asset
  source_code_link: "https://github.com/your-username/wikipedia-search-app", // Replace with your real GitHub repo link
},
 {
  name: "Jobby App",
  description:
    "A full-stack job listing application built with the MERN stack, featuring job search, company details, login/authentication, and detailed job descriptions.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
  ],
  image: jobbyapp, // Replace with actual image import or asset
  source_code_link: "https://github.com/Surytejaswini66/Jobby-App.git", // Replace with your GitHub repo link
},
{
  name: "Nxt Trendz",
  description:
    "An e-commerce platform clone inspired by Amazon and Flipkart, developed using React and Node.js, with features like product listing, cart functionality, and JWT authentication.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "express",
      color: "yellow-text-gradient",
    },
  ],
  image: nxttrendz, // Replace with actual image import or asset
  source_code_link: "https://github.com/Surytejaswini66/Nxt-Trendz-Specific-Product-Details.git", // Replace with your GitHub repo link
},

];

export { services, technologies, experiences, testimonials, projects };
