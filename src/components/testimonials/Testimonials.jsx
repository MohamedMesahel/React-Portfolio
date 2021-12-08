import "./testimonials.scss";
import Linkedin from "../../assets/Linkedin1.gif"
export default function Testimonials() {
  const data = [
    {
      id: 2,
      name: "Ahmad Shir Abid",
      title: "Operations Manager, VIP Hospitality LLC",
      desc:
        "We’ve joined our hands on several projects, and Mohamed is one of the best people I had as a partner. I highly recommend his expertise to any person looking for a Project Manager. He is the most profound person I have met, and his ability to tackle any problem is remarkable and with a warm smile.",
      featured: true,
    },
    {
      id: 1,
      name: "Tristan Campbell",
      title: "Airport Duty Manager - Seattle Tacoma Airport",
      desc:
        "I have had the pleasure of working with Mohamed at the Port of Seattle. Mohamed is very driven and a huge asset to any team, He knows when to take command and lead a team and he also knows when to follow someone else’s lead. All in all Mohamed is a very hard working, driven, motivated, all around great team player that would be a tremendous asset to both any organization and team",

      featured: true,
    },

  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="user"
                src={Linkedin}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
