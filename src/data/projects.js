// Create a new file: src/data/projects.js
import molog from "../assets/projectAssets/molog.png";
import avtar from "../assets/avtar.jpg";
import html from "../assets/projectAssets/html.png";
import css from "../assets/projectAssets/css.png";
import js from "../assets/projectAssets/javascript.png";
import react from "../assets/projectAssets/react.png";
import nodejs from "../assets/projectAssets/nodejs.png";
import typescript from "../assets/projectAssets/typescript.png";
import aws from "../assets/projectAssets/aws.png";
import angular from "../assets/projectAssets/angular.png";
import pscp from "../assets/projectAssets/pscp.png";
import rscl from "../assets/projectAssets/rscl.png";
import kpsc from "../assets/projectAssets/kpsc.png";
import nscd from "../assets/projectAssets/nscd.png";
import everidoor from "../assets/projectAssets/everidoor.png";
import horcl from "../assets/projectAssets/horcl.png";
import hridc from "../assets/projectAssets/hridc.png";
import uber from "../assets/projectAssets/uber.png";
import devin from "../assets/projectAssets/devinai.png";
export const projects = [
  {
    id: 1,
    title: "DevinAi",
    description: "ai powered project management tool",
    image: devin,
    link: "https://github.com/DevHimanshu63/DevinAI",
    client: {
      name: "Himanshu Singh",
      role: "Developer",
      avatar: devin,
    },
    about: `

In the *DevinAi* project, I developed a comprehensive platform that allows users to create and manage projects while enabling seamless collaboration with team members, similar to how GitHub facilitates code sharing. Users can easily invite collaborators to work on specific projects, and integrated chat functionality allows team members to communicate directly within the project environment.

A standout feature of this project is the AI-powered assistant, which enhances productivity by helping users automate development tasks. For instance, users can interact with the AI using commands like "@ai create an express server," and the AI will generate the necessary code, streamlining the development process.

Additionally, I integrated web containers to facilitate live code execution within the platform. This feature allows users to run and test their code in real-time, making it a powerful tool for collaborative development and enhancing the overall user experience.

This project showcases my ability to combine AI with collaborative development tools, providing a unique and efficient solution for teams working together on software projects.`,
  },
  {
    id: 2,
    title: "Texi booking Apps",
    description: "(Microservices) Taxi booking application",
    image: uber,
    link: "https://github.com/DevHimanshu63/UberRide_clone",
    client: {
      name: "Himanshu Singh",
      role: "Developer",
      avatar: uber,
    },
    about: `I developed an Uber clone application that mimics the core features of the popular ride-sharing service. In this app, riders can easily request a ride, and drivers have the option to accept or decline ride requests based on their availability.

The application incorporates multiple pricing strategies, offering flexibility in how fares are calculated based on factors like distance, demand, and time. Additionally, users can search for locations on an interactive map to set their pickup or drop-off points, similar to how the Uber app functions.

This project demonstrates my ability to design and implement core ride-sharing functionalities, including real-time ride requests, driver availability management, and dynamic pricing, offering an experience similar to that of Uber’s user interface and service model.


`,
  },
  {
    id: 3,
    title: "everidoor",
    description: "Website for everidoor",
    image: everidoor,
    link: "https://everidoor.com",
    client: {
      name: "Shweta Sharma",
      role: "CEO",
      avatar: everidoor,
    },
    about: `Everidoor unveils a realm of opulence that exceeds every anticipation.
Our Luxury Display Network seamlessly merges sophistication with innovation, offering a captivating stage where your brand's story elegantly unfurls on digital screens that epitomize extravagance.`,
  },
 
  {
    id: 4,
    title: "MOLOG",
    description: "Website for MOLOG",
    image: molog,
    link: "https://molog.in",
    client: {
      name: "Abhishek Sharma",
      role: "Founder and CEO",
      avatar: molog,
    },
    about: `MOLOG is a creative agency that provides a wide range of services to help you grow your business. We offer a variety of services, including web development, digital marketing, and branding. Our team of experts will work with you to create a customized plan that meets your needs and helps you achieve your goals.`,
  },
  {
    id: 5,
    title: "everidoor webApp",
    description: "Digital Signage Software",
    image: everidoor,
    link: "https://github.com/DevHimanshu630/EveridoorFrontend2.0",
    client: {
      name: "Himanshu Singh",
      role: "Developer",
      avatar: everidoor,
    },
    about: `
In this team project, I contributed to the development of a digital signage software by handling the frontend, including the API and user interface design. Additionally, I took responsibility for the backend by managing server deployment and creating a scheduling engine to efficiently manage and display content across multiple screens, ensuring seamless operation and timely updates for users.`
},
{
    id: 6,
    title: "National Science Centre New Delhi",
    description: "Managing this website and server",
    image: nscd,
    link: "https://nscd.gov.in",
    client: {
      name: "MOLOG",
      role: "Creative Agency",
      avatar: nscd,
    },
    about: `
I have been managing this website for an extended period, where my role involves making daily updates and changes based on the client's evolving needs. I ensure that the website remains functional, user-friendly, and up-to-date by implementing necessary modifications, content updates, and addressing any issues as they arise. My responsibility includes coordinating with the client to prioritize tasks, optimize site performance, and ensure timely delivery of changes that align with their requirements.`
},
{
    id: 7,
    title: "Regional Science Centre Lucknow",
    description: "Managing this website and server",
    image: rscl,
    link: "https://rscl.nscd.gov.in",
    client: {
      name: "MOLOG",
      role: "Creative Agency",
      avatar: rscl,
    },
    about: `
I have been managing this website for an extended period, where my role involves making daily updates and changes based on the client's evolving needs. I ensure that the website remains functional, user-friendly, and up-to-date by implementing necessary modifications, content updates, and addressing any issues as they arise. My responsibility includes coordinating with the client to prioritize tasks, optimize site performance, and ensure timely delivery of changes that align with their requirements.`
},
{
    id: 8,
    title: "KURUKSHETRA PANORAMA & SCIENCE CENTRE",
    description: "Managing this website and server",
    image: kpsc,
    link: "https://kpsc.nscd.gov.in",
    client: {
      name: "MOLOG",
      role: "Creative Agency",
      avatar: kpsc,
    },
    about: `
I have been managing this website for an extended period, where my role involves making daily updates and changes based on the client's evolving needs. I ensure that the website remains functional, user-friendly, and up-to-date by implementing necessary modifications, content updates, and addressing any issues as they arise. My responsibility includes coordinating with the client to prioritize tasks, optimize site performance, and ensure timely delivery of changes that align with their requirements.`
},
{
    id: 8,
    title: "Palampur Science Centre, Palampur",
    description: "Managing this website and server",
    image: pscp,
    link: "https://pscp.nscd.gov.in",
    client: {
      name: "MOLOG",
      role: "Creative Agency",
      avatar: pscp,
    },
    about: `
I have been managing this website for an extended period, where my role involves making daily updates and changes based on the client's evolving needs. I ensure that the website remains functional, user-friendly, and up-to-date by implementing necessary modifications, content updates, and addressing any issues as they arise. My responsibility includes coordinating with the client to prioritize tasks, optimize site performance, and ensure timely delivery of changes that align with their requirements.`
},
{
    id: 9,
    title: "Haryana Rail Infrastructure Development Corporation",
    description: "Managing this website and server",
    image: hridc,
    link: "https://hridc.co.in",
    client: {
      name: "HRIDC",
      role: "Haryana Rail Infrastructure Development Corporation",
      avatar: hridc,
    },
    about: `
I have been managing this website for an extended period, where my role involves making daily updates and changes based on the client's evolving needs. I ensure that the website remains functional, user-friendly, and up-to-date by implementing necessary modifications, content updates, and addressing any issues as they arise. My responsibility includes coordinating with the client to prioritize tasks, optimize site performance, and ensure timely delivery of changes that align with their requirements.`
},
{
    id: 10,
    title: "Haryana Orbital Rail Corporation",
    description: "Managing this website and server",
    image: horcl,
    link: "https://horcl.co.in",
    client: {
      name: "Horcl",
      role: "Haryana Orbital Rail Corporation",
      avatar: horcl,
    },
    about: `
I have been managing this website for an extended period, where my role involves making daily updates and changes based on the client's evolving needs. I ensure that the website remains functional, user-friendly, and up-to-date by implementing necessary modifications, content updates, and addressing any issues as they arise. My responsibility includes coordinating with the client to prioritize tasks, optimize site performance, and ensure timely delivery of changes that align with their requirements.`
},

];

export const skills = [
  {
    id: 1,
    name: "Html",
    img: html,
    exp: "4y",
  },
  {
    id: 2,
    name: "Css",
    img: css,
    exp: "4y",
  },
  {
    id: 3,
    name: "Javascript",
    img: js,
    exp: "3y",
  },
  {
    id: 4,
    name: "ReactJs",
    img: react,
    exp: "3y",
  },
  {
    id: 5,
    name: "NodeJs",
    img: nodejs,
    exp: "3y",
  },
  {
    id: 6,
    name: "Typescript",
    img: typescript,
    exp: "2y",
  },
  {
    id: 7,
    name: "Angular",
    img: angular,
    exp: "1y",
  },
  {
    id: 8,
    name: "AWS",
    img: aws,
    exp: "2y",
  },
  {
    id: 8,
    name: "mongodb",
    img: "https://imgs.search.brave.com/bPlUSFWO6yno8zmHgYmQkn2hzJTkh-6CjPOTZWNsbwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjQxNS9Q/TkcvOTYvbW9uZ29k/Yl9wbGFpbl93b3Jk/bWFya19sb2dvX2lj/b25fMTQ2NDIzLnBu/Zw",
    exp: "3y",
  },
  {
    id: 9,
    name: "SQL",
    img: "https://imgs.search.brave.com/10VTdpgH4kBGuzFcmSdXF6L5U_WT_3KfNNqR5RZH8lQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNTk2OC81OTY4/MzY0LnBuZw",
    exp: "3y",
  },

  {
    id: 10,
    name: "ExpressJs",
    img: "https://raw.githubusercontent.com/openjs-foundation/artwork/main/openjs_foundation/openjs_foundation-logo-horizontal-white.svg",
    exp: "3y",
  },

  {
    id: 11,
    name: "Git",
    img: "https://img.icons8.com/ios11/512/FFFFFF/github.png",
    exp: "4y",
  },
  {
    id: 11,
    name: "Tailwind",
    img: "https://play-lh.googleusercontent.com/YN4OEsoWsU1QrZFcwWlI8uuGhDKc4RAlP56FFyL03VFegD5tWjZ5cNWHocC_QRE_TvA",
    exp: "3y",
  },
  {
    id: 12,
    name: "SocketIo",
    img: "https://static-00.iconduck.com/assets.00/socket-io-icon-512x511-xjp7kzx6.png",
    exp: "2y",
  },
  
  
];
