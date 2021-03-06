// Import necessary files from React and Stylesheet file
import "./portfolioList.scss";
//  Export  PortfolioList function 
export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
