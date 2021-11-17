// TODO: import stylesheet and animated typing
import "./intro.scss";
// TODO: import necessary pics
import Seattle from "../../assets/Seattle.jpeg";
import Down from "../../assets/down.png"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Project Manager", "Web Developer", "Web Designer"],
    });
  }, []);
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Seattle} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Mohamed Mesahel</h1>
          <h3>
            I am <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={Down} alt="" />
        </a>
      </div>
    </div>
  );
}
