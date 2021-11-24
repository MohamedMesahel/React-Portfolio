// TODO: import necessary files from React and Stylesheet file
// TODO: import icons files from material-ui icon liberary
import "./topbar.scss";
import { Mail } from "@material-ui/icons";
// import { FaGithubAlt } from 'react-icons/fa';
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Guru.
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span >Contact: mohamed.mesahel@gmail.com</span>
          </div>
        {/*  icon for github and linkdin */}
          <div className="itemContainer">
            <FaGithubAlt className="icon" />
            <a className = "link" href="https://github.com/MohamedMesahel">Github</a>
          </div>
          <div  className="itemContainer">
            <FaLinkedin className="icon" />
            <a className="link" href="https://www.linkedin.com/in/mohamed-mesahel-pmp-570a0423/">LinkedIn</a>
          </div>
          <div className="itemContainer">
            <a className="link" href="https://drive.google.com/file/d/1tY-ocGIT-xOg8WHtihPCz4CeNCPG0z0Q/view?usp=sharing">Resume</a>
          </div>

        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
