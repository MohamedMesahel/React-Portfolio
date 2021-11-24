// TODO: import necessary files from React and Stylesheet file
import "./about.scss";
import { JavaScript } from 'iconsax-react';

export default function About() {
  
  return (
    <div className="about" id="about">
      
      <div className="title">
        <h2>About Me.</h2>
        <div className="container">
        <p className= "body" id="font">
          Helping customer reach their needs is my passion. I am a Project Manager and Full Stack Web Developer committed to deliver successful business solution through timely, measurable, and role-driven projects in fast paced environment.
          I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
        </p>
          <JavaScript
            size="32"
            color="#FF8A65"
          />
                </div>
      </div>
    </div>
  );
}

// TODO: Add other links for Github, LinkedIn...