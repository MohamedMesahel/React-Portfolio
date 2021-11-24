// TODO: import necessary files from React and Stylesheet file
// // TODO: import domy data
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
// TODO: import Data from the domy data
import {
  featuredPortfolio,
  collaborativePortfolio,
  personnelPortfolio,
  // designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "personnel",
      title: "Personnel App",
    },
    {
      id: "collaborative",
      title: "Collaborative App",
    },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    {
      id: "content",
      title: "Content",
    },
  ];
  // TODO: UseEffect to switch between list titles
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "personnel":
        setData(personnelPortfolio);
        break;
      case "collaborative":
        setData(collaborativePortfolio);
        break;
      // case "design":
      //   setData(designPortfolio);
      //   break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>

        {list.map((item) => (
          <PortfolioList key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div key={d.id} className="card">
            <figure className="card__thumb">
              <img className="card__image"
                src={d.img}
                alt=""
              />
              <figcaption className="card__caption">
                <h3 className="title">{d.title}</h3>
                <p className="card__snippet">{d.summary}</p>
                <a href={d.link1} className="card__button">Live Demo</a>
                <a href={d.link2} className="card__button">Source Code</a>

              </figcaption>

            </figure>

          </div>
        ))}
      </div>
    </div>
  );
}
