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
    <div className="about" id="about">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <div className="wrapper">
        <article>
          <p className="user" id="font">
            Helping customer reach their needs is my passion. I am a Project Manager and Full Stack Web Developer committed to deliver successful business solution through timely, measurable, and role-driven projects in fast paced environment.
            I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
          </p>
        </article>
      </div>
      <br />
      <h2>Programming Languages</h2>
      <div className="user">
        <article>
          <img className="user" src={CSS} title="CSS" />
          <img className="user" src={Html} title="HTML" />
          <img className="user" src={JS} title="JavaScript" />
          <img className="user" src={Mongodb} title="MongoDb" />
          <img className="user" src={MUI} title="Material UI" />
          <img className="user" src={Node} title="NodeJs" />
          <img className="user" src={NPM} title="NPM" />
          <img className="user" src={ReactI} title="React" />
          <img className="user" src={SASS} title="SASS" />
          <img className="user" src={SQL} title="MySql" />
        </article>
      </div>
      <h2 className="right"><span>Work Flow</span></h2>
      <div className="user">
        <article>
          <p className="user right" id="font">
            Helping customer reach their needs is my passion. I am a Project Manager and Full Stack Web Developer committed to deliver successful business solution through timely, measurable, and role-driven projects in fast paced environment.
            I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
          </p>
        </article>

      </div>

    </div>
  );
}

// TODO: Add other links for Github, LinkedIn...