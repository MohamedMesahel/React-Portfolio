// Import necessary files from React and Stylesheet file
import CSS from "../../assets/css.png"
import Html from "../../assets/html.png"
import JS from "../../assets/js.png"
import Mongodb from "../../assets/mongodb.png"
import MUI from "../../assets/mui.png"
import Node from "../../assets/node.png"
import NPM from "../../assets/npm.png"
import ReactI from "../../assets/reacti.png"
import SASS from "../../assets/sass.png"
import SQL from "../../assets/sql.png"

import "./about.scss";
export default function About() {

  return (
    <main>
      <section className="about" id="about">
        <h1 className="title">About Me</h1>
        <p>Helping customer reach their needs is my passion. I am a A Project Manager and Full Stack Web Developer, with a background in Hospitality and Customer Service that can provide unique insights into how end-users interact with websites and software platforms. Strengths include being a creative problem-solver who enjoys seeing projects and programs through from start to finish. Experience with traditional, agile, and waterfall approaches and frameworks, as well as the ability to communicate with both business and technical stakeholders.
          I have created successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, React and building small and medium web apps with a variety of custom plugins, features, animations, and coding interactive layouts.</p>
        <h2>Programming Languages</h2>
        <div className="image-grid">
          <img src={CSS} title="CSS" alt="" />
          <img src={Html} title="HTML" alt="" />
          <img src={JS} title="JavaScript" alt="" />
          <img src={Mongodb} title="MongoDb" alt="" />
          <img src={Node} title="NodeJs" alt="" />
          <img src={MUI} title="Material UI" alt="" />
          <img src={NPM} title="NPM" alt="" />
          <img src={ReactI} title="React" alt="" />
          <img src={SASS} title="SASS" alt="" />
          <img src={SQL} title="MySql" alt="" />
        </div>

        <div className="jobs">
          <div className="jobs__job">
            <h2 className="text-secondary">2020 - Current</h2>
            <h3>VIP Hospitality</h3>
            <h6>Project Manager</h6>
            <p>Monitored all complex projects and implemented development plans, training programs, and strategies to gain new contracts and renew existing ones with the Port of Seattle.</p>
          </div>
          <div className="jobs__job">
            <h2 className="text-secondary">2016 - 2019</h2>
            <h3>VIP Hospitality</h3>
            <h6>Training Supervisor</h6>
            <p>Trained 150+ employees on modern customer service trends, strategies, and company procedures in addition to developing educational manuals for new hires.</p>
          </div>
          <div className="jobs__job">
            <h2 className="text-secondary">2011 - 2015</h2>
            <h3>Advanced Construction Company.</h3>
            <h6>Project Coordinator </h6>
            <p>Participated in the development of Contracts and Purchase Orders for 20+ projects with varying budgets (from $2,000,000 up to $300,000,000). This comprised methods for formulating, planning, and implementing procedures.</p>
          </div>
        </div>

      </section>
    </main>
  );
}

// You cn add other links for Github, LinkedIn in the future...