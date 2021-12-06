// TODO: import necessary files from React and Stylesheet file
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
        <p>Helping customer reach their needs is my passion. I am a Project Manager and Full Stack Web Developer committed to deliver successful business solution through timely, measurable, and role-driven projects in fast paced environment.
          I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
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
            <h2 className="text-secondary">2017 - Current</h2>
            <h3>Google</h3>
            <h6>Full Stack Developer</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
          </div>
          <div className="jobs__job">
            <h2 className="text-secondary">2015 - 2017</h2>
            <h3>Microsoft</h3>
            <h6>Front End Developer</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
          </div>
          <div className="jobs__job">
            <h2 className="text-secondary">2012 - 2015</h2>
            <h3>Web Design Co.</h3>
            <h6>Graphic Designer</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
          </div>
        </div>

      </section>
    </main>
  );
}

// TODO: Add other links for Github, LinkedIn...