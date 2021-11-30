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
        <h1>About Me</h1>
      <div className="wrapper">
        <h3 className="user" id="font">
          Helping customer reach their needs is my passion. I am a Project Manager and Full Stack Web Developer committed to deliver successful business solution through timely, measurable, and role-driven projects in fast paced environment.
          I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
        </h3>
      </div>
      <br />
      <h2>Programming Languages</h2>
      <div className="wrapper">
        <article>
          <img className="user" src={CSS} title="CSS" alt="" />
          <img className="user" src={Html} title="HTML" alt="" />
          <img className="user" src={JS} title="JavaScript" alt="" />
          <img className="user" src={Mongodb} title="MongoDb" alt="" />
          <img className="user" src={MUI} title="Material UI" alt="" />
          <img className="user" src={Node} title="NodeJs" alt="" />
          <img className="user" src={NPM} title="NPM" alt="" />
          <img className="user" src={ReactI} title="React" alt="" />
          <img className="user" src={SASS} title="SASS" alt="" />
          <img className="user" src={SQL} title="MySql" alt="" />
        </article>
      </div>
      <br />
      <br />
      <h2 className="right"><span>Recent Work Experinece</span></h2>
      <div className="user">
        <article>
          <ul>
            <li>
              <h3 >Project Manager/Training Supervisor, November 2016 – Present
                VIP Hospitality, LLC, SeaTac Airport, WA, USA</h3>
            </li>
            <br />
            <li>
              <h4>
                Key Accomplishments:
              </h4>
            </li>
            <br />
            <li>
              <h4>
                Trained 200+ junior and senior employees on development and implementation of training and operation programs.
              </h4>
            </li>
            <br />
            <li>
              <h4>
                Developed and implemented 10+ training projects and 5+ operation projects.
              </h4>
            </li>
            <br />
            <li>
              <h4>
                Conducted training risk assessment on 3+ programs and prepared related operation and training strategies.
              </h4>
            </li>
            <br />
            <li>
              <h4>
                Scheduled projects and ensured its compliance with airport SLA programs development that led to winning WORLD AIRPORT SKYTRAX AWARDS 2019 – BEST AIRPORT STAFF IN NORTH AMERICA 2019 (International Arrivals).
              </h4>
            </li>
            <br />
            <li>
              <h4>
                Assist management in evaluation of training and operation programs and measure their effectiveness.
              </h4>
              <br />
            </li>
            <li>
              <h4>
                Uphold strict compliance with airport procedures and provide timely reports to Port of Seattle and Customs and Border Protection officers for the safety of passengers and employees.
              </h4>
            </li>
            <br />
            <li>
              <h4>
                Monitored all complex projects and implemented development plans, training programs, and strategies to win over new contracts with Port of Seattle and renew exciting ones.
              </h4>
            </li>
          </ul>
        </article>

      </div>

    </div>
  );
}

// TODO: Add other links for Github, LinkedIn...