// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from  "./assets/images/Skills/html.png";
import css from  "./assets/images/Skills/css.png";
import bootstrap from  "./assets/images/Skills/bootstrap.png";
import js from  "./assets/images/Skills/js.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import mongo from  "./assets/images/Skills/mongo.png";

import spkc from "./assets/images/Education/spkc.png";
import unom from "./assets/images/Education/unom.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";
import project5 from "./assets/images/Projects/img5.png";
import project6 from "./assets/images/Projects/img6.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaGraduationCap } from 'react-icons/fa';

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#education",
      icon:FaGraduationCap,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SUBU",
    LastName: "GS",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Months of Experience in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Skeleton of the Website",
        logo: html,
      },
      {
        name: "CSS",
        para: "Used to Style the web pages",
        logo: css,
      },
      {
        name: "Bootstrap",
        para: "This is framework of CSS",
        logo: bootstrap,
      },
      {
        name: "Java Script",
        para: "Scripting language",
        logo: js,
      },
      {
        name: "React js",
        para: "Frontend javascript Library",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Backend javascript Library ",
        logo: nodejs,
      },
      {
        name: "Python",
        para: "Programming Language",
        logo: python,
      },
      {
        name: "Mongo DB",
        para: "NoSql Data Base",
        logo: mongo,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Experiences",
    subtitle: "WHAT I DID",
    service_content: [
      {
        title: "Backend Developer Intern",
        para: "Completed a one-month internship at Naso Tech Pvt Ltd as a Backend Developer.Developed a Video Streaming app backend using Node.js, Express.js, and MongoDB.",
        logo: services_logo2,
      },
      {
        title: "Fullstack Developer Intern",
        para: "Completed a four-month internship at Aristostech Pvt Ltd as a Fullstack Developer.Engineered a robust Job Portal application utilizing React.js and Node.js with MongoDB backend.",
        logo: services_logo1,
      },
      
    ],
  },
  education: {
    title: "Education",
    subtitle: "WHAT I COMPLETED",
    education_content: [
      {
        title: "Bsc Mathematics",
        para: "I graduated from Sri Paramakalyani College with a Bachelor of Science degree in Mathematics(Bsc), achieving a CGPA of 9.1",
        logo: spkc,
      },
      {
        title: "Master of Computer Applications",
        para: "I graduated from University of Madras with a Masters degree in Computer Applications(MCA), achieving a CGPA of 7.8",
        logo: unom,
      },
    ],
  },
  Projects :{
   project_content : [
    {
      img: project1,
      name: "Video Streaming App",
      github_link: "https://github.com/SubramaniyanGS/Video-Streaming-Platform",
      live_link: "",
    },
    {
      img: project3,
      name: "Job Portal",
      github_link: "https://github.com/SubramaniyanGS/Job-Portal",
      live_link: "",
    },
    {
      img: project6,
      name: "House Rental App",
      github_link:
        "https://github.com/SubramaniyanGS/House-Rental-and-Buying",
      live_link: "https://myrentifypresidio.netlify.app/",
    },
    {
      img: project4,
      name: "Portfolio",
      github_link:
        "https://github.com/SubramaniyanGS/Personal-Portfolio",
      live_link: "https://subramaniyangs.github.io/Portfolio/#",
    },
   
    {
      img: project2,
      name: "Twitter Sentiment Analysis",
      github_link: "https://github.com/SubramaniyanGS/TwitterSentimentAnalysis",
      live_link: "",
    },
    {
      img: project5,
      name: "Login Signup in React",
      github_link: "https://github.com/SubramaniyanGS/Login-and-Signup",
      live_link: "",
    },
   ],
},
  
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hire me because of my dedication, expertise, and commitment to delivering exceptional results.I bring valuable skills, experience, and a strong work ethic to every project. Let's collaborate and achieve success together",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "subugksd2002@gmail.com",
        icon: GrMail,
        link: "mailto:subugksd2002@gmail.com",
      },
      {
        text: "+91 93602 03190",
        icon: MdCall,
      },
      {
        text: "Subramaniyan G",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/subramaniyan-g-696ab922b/",
      },
      {
        text: "SubramaniyanGS",
        icon: FaGithub,
        link: "https://github.com/SubramaniyanGS",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
