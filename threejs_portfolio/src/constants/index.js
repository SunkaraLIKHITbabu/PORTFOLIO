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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    
    title: "Bachelor of Technology in Computer Science",
    subtitle: "Vasireddy Venkatadri Institute of Technology",
    subtitle1: "Guntur",
    subtitle2: "2021 - 2025"
  },
  {
    title: " Intermediate ",
    subtitle: "NRI Junior College",
    subtitle1: "Tenali",
    subtitle2: "2019 - 2021"
  },
  {
    title: " SSC ",
    subtitle: "Bhashyam High School",
    subtitle1:"Tenali",
    subtitle2: "2019"
  },
  
];

const certi = [
  {
    
    title1: "C",
  },
  {
    title1: "Python",
  },
  {
    title1: "Java",
  },
  {
    
    title1: "HTML",
  },
  {
    title1: "CSS",
  },
  {
    title1: "MongoDB",
  },
  {
    
    title1: "GenerativeAI",
  },
  {
    title1: "Havard  CS50",
  },
  {
    title1: "UiPathAutomation",
  },
  
];
const  intern= [
  {
    
    title2: "Salesforce Developer",
  },
  {
    title2: " Google AI-ML",
  },
  {
    title2: "Paloalto Cybersecurity",
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
    title: "TECHNICAL SKILLS",
    company_name: "Programming Languages",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Programming Languages -  C, Python, Java.",
      " Web Technologies - HTML,CSS, JavaScript.",
      " Database Management  -  MySQL, MongoDB.",
      "  Tools and Technologies -  Salesforce, VS Code, GitHub.",
      
    ],

  },
  
  {
    title: "SOFT SKILLS",
    company_name: "Life Skills",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      " Effective Communication  .",
      " Creative Thinking .",
      "Adaptability.",
      " Empathy.",
      " Team Work and Collaboration.",
      "Optimistic.",
      "Loyalty.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Likhit proved me wrong.",
    name: "Dr.Sanjay Gandhi",
    designation: "Professor",
    company: "VVIT",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Likhit does.",
    name: "Bhrama Naidu",
    designation: "Professor",
    company: "VVIT",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Likhit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Dr.T K Rao",
    designation: "Professor",
    company: "VVIT",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Word Scramble Game",
    description:
      "English language based game that allows to know english playing game, providing a convenient and efficient solution to learn English in a joyful way .",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SunkaraLIKHITbabu",
  },
  {
    name: "Memory Card Game",
    description:
      "Memory Card Game that enables users to improve the thinking power at particular period of time and it also improves good memory.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SunkaraLIKHITbabu",
  },
  {
    name: "L I K H I T ' s  Know ME",
    description:
      "A comprehensive Portfolio Website that allows users to know about Mr.Sunkara Likhit Babu a Computer Science Undergraduate and know about the works done by him.",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
     
    ],
    image: tripguide,
    source_code_link: "https://github.com/SunkaraLIKHITbabu",
  },
];

export { services, certi, technologies, experiences, testimonials, projects,intern };
