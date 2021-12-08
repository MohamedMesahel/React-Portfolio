import { useEffect, useRef } from "react"

// TODO: import necessary files from sass stylesheets
import "./menu.scss";
// TODO: Set up menu optins and onclick events
export default function Menu({ menuOpen, setMenuOpen }) {
  const ref = useRef()
  // Use Effect to control clicking in/out side menu
  useEffect(() => {
      // const [menuOpen, setMenuOpen] = useState(false)

    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menuOpen && ref.current && !ref.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    // Add event listeners to click outside the menu
    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", checkIfClickedOutside)
    }
  })
  return (
    <div className={"menu " + (menuOpen && "active")} ref={ref}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">About Me</a>
        </li>
      </ul>
    </div>
  );
}
