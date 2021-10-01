// TODO: import necessary files from React and Stylesheet file
// TODO: import icons files from material-ui icon liberary
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Guru.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+555555</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>zizo@mail.com</span>
          </div>
        {/* Find an icon for github and linkdin */}
          <div className="itemContainer">
            <a href="https://github.com/MohamedMesahel">Github</a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/mohamed-mesahel-pmp-570a0423/">LinkedIn</a>
          </div>
          <div className="itemContainer">
            <a href="https://drive.google.com/file/d/12_hqHTFt_PUzIh4GH4xL-2jvjOntGjzR/view?usp=sharing">Resume</a>
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
