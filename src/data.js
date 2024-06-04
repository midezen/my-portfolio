import css from "./img/CSS3.png";
import Express from "./img/Express.png";
import Firebase from "./img/Firebase.png";
import html from "./img/html.png";
import javascript from "./img/JavaScript.png";
import MaterialUi from "./img/Material UI.png";
import redux from "./img/Redux.png";
import Sass from "./img/Sass.png";
import Socket from "./img/Socket.io.png";
import React from "./img/React.png";
import node from "./img/Node.js.png";
import mongoDb from "./img/MongoDB.png";
import git from "./img/Git.png";
import Music from "./img/Music.png";
import Netflix from "./img/Netflix.png";
import Crypto from "./img/Crypto.png";
import Task from "./img/Task.png";
import Google from "./img/Google.png";
import Social from "./img/Social.png";
import Midetube from "./img/Midetube.png";

export const skillsData = [
  {
    id: 1,
    img: html,
    name: "Html",
  },
  {
    id: 2,
    img: css,
    name: "CSS",
  },
  {
    id: 3,
    img: javascript,
    name: "JavaScript",
  },
  {
    id: 4,
    img: React,
    name: "React",
  },
  {
    id: 5,
    img: mongoDb,
    name: "MongoDB",
  },
  {
    id: 6,
    img: Express,
    name: "Express",
  },
  {
    id: 7,
    img: node,
    name: "Node.js",
  },
  {
    id: 8,
    img: redux,
    name: "Redux",
  },
  {
    id: 9,
    img: MaterialUi,
    name: "Material UI",
  },
  {
    id: 10,
    img: Sass,
    name: "Sass",
  },
  {
    id: 11,
    img: Firebase,
    name: "Firebase",
  },
  {
    id: 12,
    img: git,
    name: "Git",
  },
  {
    id: 13,
    img: Socket,
    name: "Socket.io",
  },
];

export const projectsData = [
  {
    id: 1,
    image: Netflix,
    name: "Netflix User Interface",
    status: "completed",
    desc: "This is a front-end project built with React and TMDB API, the User Interface displays a list of movies (from TMDB API) dividing them into different categories. On clicking a particular movie, users can watch the trailer of that movie",
    link: "https://flamboyant-goldstine-31d321.netlify.app/",
    github: "https://github.com/midezen/Netflix-clone",
  },
  {
    id: 2,
    image: Music,
    name: "Animated Music Landing Page",
    status: "completed",
    desc: "This is a front-end design project built with React, Tailwind Css and Framer motion (for animation). It is a music website landing page",
    link: "https://animated-music-app-landing-page.netlify.app/",
    github: "https://github.com/midezen/Animated-Music-App-Landing-Page",
  },
  // {
  //   id: 3,
  //   image: Netflix,
  //   name: "React Admin Dashboard",
  //   status: "completed",
  //   desc: "This is a front-end project built with React and styled-components, it is an admin dashboard for an e-commerce store",
  //   link: "",
  //   github: "https://github.com/midezen/React-Admin-Dashboard",
  // },

  {
    id: 4,
    image: Google,
    name: "Google Search",
    status: "completed",
    desc: "This is Google Search built with React and Google Custom Search API, React Context API was used for global State management in this project, Material UI for the Icons and Design, React Router for switching between pages, and Firebase for hosting",
    link: "https://react--clone-2e8e1.web.app",
    github: "https://github.com/midezen/React-google-clone",
  },
  {
    id: 5,
    image: Crypto,
    name: "Crypto Coins Display",
    status: "completed",
    desc: "This is a front-end project built with React and coingecko API, it displays a list crypto currencies and their description when clicked on",
    link: "https://cryptoapiapp.netlify.app/",
    github: "https://github.com/midezen/Crypto-API",
  },

  {
    id: 6,
    image: Midetube,
    name: "Youtube UI Clone",
    status: "completed",
    desc: "This is a front-end design project built with React, styled components and Material-UI, theme feature (lightmode/darkmode) was also implemented in this project. It is a Youtube UI clone",
    link: "https://midetube.netlify.app/",
    github: "https://github.com/midezen/videoshare",
  },

  {
    id: 7,
    image: Task,
    name: "Task Tracker",
    status: "in progress",
    desc: "This is a task management system my friend and I built for a collegue's final year project. Technologies used in this project are React + Typscript for the front-end, and NodeJs, Express, and MongoDB for the backend. I handled only the backend for this project. Json Web Token (JWT) and Cookies were also used in the backend for authentication and verification.",
    link: "https://dazzling-praline-5c3ff0.netlify.app/auth",
    github: "https://github.com/LordCodex164/Yabatech-task-tracker",
  },

  {
    id: 8,
    image: Social,
    name: "Connectiverse (Social Media App)",
    status: "in progress",
    desc: "This is a full stack project still in progress, it is being built with MERN stack technologies (MongoDB, Express, React and Nodejs), Redux is also being used for global state management in this project, styled-components for styling, react-router for pages, Material UI for Icons, firebase for file storage, and socket.io for real time messaging, there is also lightmode/darkmode feature",
    link: "This project is still in progress, the link will be dropped on completion, kindly check out the github repo below to see how far I've gone",
    github: "https://github.com/midezen/social-media",
  },
  {
    id: 9,
    image: Netflix,
    name: "Mide Store (E-commerce App)",
    status: "in progress",
    desc: "This is a full stack project still in progress, it is being built with MERN stack technologies (MongoDB, Express, React and Nodejs), Redux is also being used for global state management in this project, styled-components for styling, react-router for pages, and Material UI for Icons. Stripe is also integrated into this project to handle payment transactions, and also an admin dashboard to track store and business activities.",
    link: "This project is still in progress, the link will be dropped on completion, kindly check out the github repo below to see how far I've gone",
    github: "https://github.com/midezen/MideStore",
  },
];
