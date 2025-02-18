import { link } from "framer-motion/client";
import {
  mobile,
  backend,
  AnimatedPortfolio,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  Traceworks,
  threejs,
} from "../assets";
import { ashwinSir, realEstateApp,pythonTutor } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    link: false,
  },
  {
    id: "work",
    title: "Work",
    link: false,
  },
  {
    id: "contact",
    title: "Contact",
    link: false,
  },
  // {
  //   id: "resume",
  //   title: "My Resume",
  //   link: "../assets/Aditya_Singh_CV_December_2024.pdf",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    title: "MERN Stack Developer",
    company_name: "Traceworks Technologies",
    icon: Traceworks,
    company_url: "https://traceworks.in/",
    iconBg: "white",
    date: "5th June 2024 - 17th August 2024",
    points: [
      "Developing and maintaining web applications like Appispot, Let's Quiz, Ezeluxe using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Throughout your tenure, you consistently demonstrated exemplary skills, dedication, and professionalism in your role. Your expertise in the MERN stack was evident in the exceptional work you delivered on various challenging projects, including Appispot, Lets Quiz, and Ezeluxe. Your ability to navigate complex development tasks and deliver high-quality solutions within tight deadlines was truly impressive.",
    name: "Ashwinkumar Sivakumar",
    designation: "Chief Executive Officer",
    company: "Traceworks Technologies",
    image: ashwinSir,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Real Estate App",
    liveLink: "https://real-estate-app-beta-six.vercel.app/",
    description:
      "The Real Estate App streamlines property transactions by allowing users to browse listings, post properties, and connect with owners via real-time chat, offering a seamless experience powered by modern web technologies like React and Node.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: realEstateApp,
    source_code_link: "https://github.com/Thakur-Aditya/real-estate-app",
  },
  {
    name: "Python Tutor Application",
    liveLink: "https://skc-aditya-singh.vercel.app/",
    description:
      "I built a Python tutor application with beginner, intermediate, and advanced levels. It features an AI assistant that helps users when they get stuck, providing real-time explanations for a smoother learning experience.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pythonTutor,
    source_code_link: "https://github.com/Thakur-Aditya/skc-aditya-singh",
  },
  {
    name: "3D Animated Portfolio",
    liveLink: "https://www.thakuraditya.in/",

    description:
      "My portfolio website is built with React, featuring immersive 3D visuals powered by Three.js and smooth animations using Framer Motion, showcasing modern web development skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-Motion",
        color: "green-text-gradient",
      },
      {
        name: "threeJs",
        color: "pink-text-gradient",
      },
    ],
    image: AnimatedPortfolio,
    source_code_link: "https://github.com/Thakur-Aditya/My_portfolio",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  ,
];
export { services, technologies, experiences, testimonials, projects };
