// TODO: Setting up my main data and adding some domy data samples
import Horiseonwebsite from "./assets/Horiseonwebsite.png";
import Cardio from "./assets/cardio2.png";
import Book from "./assets/book.png";
import Scheduler from "./assets/scheduler.png";
import Calender from "./assets/Main.png";
import Tutorade from "./assets/Tutorade.png";
import Portfolio from "./assets/Portfolio.png";
import Weather from "./assets/WeatherDashboard.png";
import Backend from "./assets/employeetracker3.png";
import Ecommerce from "./assets/Categories.png";
import Quiz from "./assets/Quizgame.png";
import Historian from "./assets/Historian.png";
import Blog from "./assets/Blog.png";
import PGenerator from "./assets/PGenerator.png";


export const featuredPortfolio = [
  
  {
    id: 1,
    title: "Book Search Engine",
    img: Book,
    summary: "Fully functioning Google Books API search engine built with GraphQL API and Apollo Server. The app was built using the MERN stack with a React frontend.",
    tech: "React, Node.js, Bootstrap liberary, Apollo server, GraphQL and Mongodb",
    link1: "https://book-search-enginem.herokuapp.com/",
    link2: "https://github.com/MohamedMesahel/Book-Search-Engine",
  },
  {
    id: 2,
    title: "Workout-Tracker",
    img: Cardio,
    summary: "This is a fitness app that will allow user to view, create, and track daily workouts.",
    tech: "Node.js, HTML, Express, Mongoose and Mongodb",
    link1: "https://workout-trackermm.herokuapp.com/",
    link2: "https://github.com/MohamedMesahel/Workout-Tracker"
  },
  
  {
    id: 3,
    title: "Work Day Scheduler",
    img: Scheduler,
    summary: "This Day-Scheduler consists of a main page with function displaying date of today, and allows the user to save events for each hour of a working day.",
    tech: "HTML, CSS, JavaScript, JQuery and Momentjs",
    link1: "https://mohamedmesahel.github.io/Work-Day-Scheduler/",
    link2: "https://github.com/MohamedMesahel/Work-Day-Scheduler",
  },
  {
    id: 4,
    title: "Tech Blog",
    img: Blog,
    summary: "CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
    tech: "Node.js, Handlebard, Express, Sequelize and MySQL",
    link1: "https://techblog-mm.herokuapp.com/",
    link2: "https://github.com/MohamedMesahel/Tech-Blog",

  },

];

export const collaborativePortfolio = [
  {
    id: 1,
    title: "Squirrels Calender",
    img: Calender,
    summary: "This project aims to provide an easier way to track tasks and local events to help a lot of neurodivergent patients.",
    tech: "HTML, CSS, Javascript and JQuery.",
    link1: "https://mohamedmesahel.github.io/Calendar/index.html",
    link2: "https://github.com/MohamedMesahel/Calendar",

  },
  {
    id: 2,
    title: "Tutorade",
    img: Tutorade,
    summary: "A service that allows the user to sign in as a tutor, and provide the option to choose a programming language and search for students and Tutors, sending email to them.",
    tech: "MySQL, Sequelize, Handlebars, Bootstrap Framework, HTML5 validation, Node.js, Bcrypt",
    link1: "https://new-tutor.herokuapp.com/login",
    link2: "https://github.com/MohamedMesahel/Tutorade",

  },
  {
    id: 3,
    title: "Historian",
    img: Historian,
    summary: "This application will host and describe various conflicts that occurred during the 20th. We hope to inform later generations of little-known wars.",
    tech: "MongoDB / Mongoose, Wikipedia API, NY Times API, Material UI Framework, React, Node.js, Bcrypt",
    link1: "https://historian-timeline.herokuapp.com/",
    link2: "https://github.com/MohamedMesahel/Historian",
  },
  // Domy Data for later goes here
];

export const personnelPortfolio = [
  {
    id: 1,
    title: "GitHub Portfolio",
    img: Portfolio,
    summary: "A Start up Portfolio built with flexbox, media queries, and CSS variables.",
    tech: "HTML Framework and CSS styling",
    link1: "https://mohamedmesahel.github.io/My-Portfolio/",
    link2: "https://github.com/MohamedMesahel/My-Portfolio",
  },
  {
    id: 2,
    title: "Weather-Dashboard",
    img: Weather,
    summary: "Weather dashboard that will run in the browser and feature dynamically built to display the current weather in a city of user choice within (5) days forecast using open source Weather API",
    tech: "HTML, CSS and JavaScript by using OpenWeather API",
    link1: "https://mohamedmesahel.github.io/Weather-Dashboard/?",
    link2: "https://github.com/MohamedMesahel/Weather-Dashboard",
  },
  {
    id: 3,
    title: "Employee Tracker",
    img: Backend,
    summary: "Application that uses command-line to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
    tech: "Node.js, Inquirer, and MySQL.",
    link1: "https://drive.google.com/file/d/1Bp2-PiET6MkcygB7sebiF7CQ_ODZKgwc/view",
    link2: "https://github.com/MohamedMesahel/Employee-Tracker",
  },
  {
    id: 4,
    title: "Horiseon Optmization",
    img: Horiseonwebsite,
    tech: "HTML and CSS",
    summary: "Refactor an existing site to make it more accessible",
    link1: "https://mohamedmesahel.github.io/Horiseon-website/",
    link2: "https://github.com/MohamedMesahel/Horiseon-website"

  },
  
];
// Domy Data for extra project lists
// export const designPortfolio = [
//   {
//     id: 1,
//     title: "Coming Soon",
//     img:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
//   },

export const contentPortfolio = [
  {
    id: 1,
    title: "E-commerce Backend",
    img: Ecommerce,
    summary: "This app is the backend portion of an E-Commerce website. Express.js was used for the server and MySQL for the database along with Sequelize as the ORM to run SQL models and queries.",
    tech: "Node.js, Inquirer, and MySQL",
    link1: "https://drive.google.com/file/d/14VkoAjSs1qs_8mhaWnAIzUNo0RylE4M0/view",
    link2: "https://github.com/MohamedMesahel/E-Commerce-Back-End",
  },
  
  {
    id: 2,
    title: "Quiz Game",
    img: Quiz,
    summary: "A multiple choice quiz game about coding using JavaScript.",
    tech: "HTML and CSS, JavaScript",
    link1: "https://mohamedmesahel.github.io/Quiz-Game/",
    link2: "https://github.com/MohamedMesahel/Quiz-Game",

  },
  {
    id: 3,
    title: "Password-Generator",
    img: PGenerator,
    summary: "This is a simple passowrd generator application, that enables employees to generate random passwords based on criteria that they’ve selected.",
    tech: "HTML and CSS, JavaScript",
    link1: "https://mohamedmesahel.github.io/Password-Generator/",
    link2: "https://github.com/MohamedMesahel/Password-Generator",

  },
  // Domy Data for future use
  

];
