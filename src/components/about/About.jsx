// TODO: import necessary files from React and Stylesheet file
import "./about.scss";
import Shake from "../../assets/shake.svg";

export default function About() {
  
  return (
    <div className="about" id="about">
      <div className="left">
        <img src={Shake} alt="" />
      </div>
      <div className="right">
        <h2>About Me.</h2>
        <div className="container">
        <p className= "body" id="font">
          Helping customer reach their needs is my passion. I am a Project Manager and training supervisor committed to deliver successful business solution through timely, measurable, and role-driven training programs in fast paced environment.
        
        </p>
      </div>
      </div>
    </div>
  );
}
// TODO: Add other links for Github, LinkedIn...