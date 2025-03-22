// Create a new file: src/data/projects.js
import molog from '../assets/projectAssets/molog.png';
import avtar from '../assets/avtar.jpg'
import html from '../assets/projectAssets/html.png';
import css from '../assets/projectAssets/css.png';
import js from '../assets/projectAssets/javascript.png';
import react from '../assets/projectAssets/react.png';
import nodejs from "../assets/projectAssets/nodejs.png";
import typescript from "../assets/projectAssets/typescript.png";
import aws from "../assets/projectAssets/aws.png";
import angular from "../assets/projectAssets/angular.png";
export const projects = [
    {
      id: 1,
      title: "MOLOG",
      description: "Website for MOLOG",
      image: molog,
      link: "https://molog.in",
      client: {
        name: "Himanshu Singh",
        role: "Founder of a Company",
        avatar: avtar
      },
      about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... lLorem ipsum dolor, sit amet consectetur adipisicing elit... l`
    },
    {
      id: 2,
      title: "Project 2",
      description: "E-commerce Platform",
      image: molog,
      link: "https://project2.example.com",
      client: {
        name: "Jane Smith",
        role: "CEO",
        avatar: avtar
      },
      about: `Description for project 2...`
    },
    {
        id: 3,
        title: "Project 3",
        description: "E-commerce Platform",
        image: molog,
        link: "https://project2.example.com",
        client: {
          name: "Jane Smith",
          role: "CEO",
          avatar: avtar
        },
        about: `Description for project 2...`
      },
    
  ];


export const skills = [
    {
        id: 1,
        name: "Html",
        img: html,
        exp: "4y"
    },
    {
        id: 2,
        name: "Css",
        img: css,
        exp: "4y"
    },
    {
        id: 3,
        name: "Javascript",
        img: js,
        exp: "3y"
    },
    {
        id: 4,
        name: "ReactJs",
        img: react,
        exp: "3y"
    },
    {
        id: 5,
        name: "NodeJs",
        img: nodejs,
        exp: "3y"
    },
    {
        id: 6,
        name: "Typescript",
        img: typescript,
        exp: "2y"
    },
    {
        id: 7,
        name: "Angular",
        img: angular,
        exp: "1y"
    },
    {
        id: 8,
        name: "AWS",
        img: aws,
        exp: "2y"
    },
    {
        id: 8,
        name: "mongodb",
        img: 'https://imgs.search.brave.com/bPlUSFWO6yno8zmHgYmQkn2hzJTkh-6CjPOTZWNsbwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjQxNS9Q/TkcvOTYvbW9uZ29k/Yl9wbGFpbl93b3Jk/bWFya19sb2dvX2lj/b25fMTQ2NDIzLnBu/Zw',
        exp: "3y"
    },
    {
        id: 9,
        name: "SQL",
        img: 'https://imgs.search.brave.com/10VTdpgH4kBGuzFcmSdXF6L5U_WT_3KfNNqR5RZH8lQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNTk2OC81OTY4/MzY0LnBuZw',
        exp: "3y"
    },
    
    {
        id: 10,
        name: "ExpressJs",
        img: 'https://raw.githubusercontent.com/openjs-foundation/artwork/main/openjs_foundation/openjs_foundation-logo-horizontal-white.svg',
        exp: "3y"
    },
    
    {
        id: 11,
        name: "Git",
        img: 'https://img.icons8.com/ios11/512/FFFFFF/github.png',
        exp: "4y"
    },
]