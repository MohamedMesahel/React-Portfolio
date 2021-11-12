import "./testimonials.scss";
import Linkedin from "../../assets/Linkedin1.gif"
export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ahmad Shir Abid",
      title: "Operations Manager, VIP Hospitality LLC",
      // img: src("../../assets/linkedin1.gif"),
      // icon: "assets/twitter.png",
      desc:
        "We’ve joined our hands on several projects, and Mohamed is one of the best people I had as a partner. I highly recommend his expertise to any person looking for a Project Manager. He is the most profound person I have met, and his ability to tackle any problem is remarkable and with a warm smile. Mohamed would become an appreciated member of any team.",
    },
    {
      id: 2,
      name: "Tristan Campbell",
      title: "Airport Duty Manager - Seattle Tacoma International Airport",
      // img:
      //   // "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // // icon: "assets/youtube.png",
      desc:
        "I have had the pleasure of working with Mohamed at the Port of Seattle during my time in the FIS. Mohamed is very driven and a huge asset to any team. He knows when to take command and lead a team and he also knows when to follow someone else’s lead. I could always trust that any task I would assign Mohamed would be accomplished while working together and know that the job would be well done. All in all Mohamed is a very hard working, driven, motivated, all around great team player that would be a tremendous asset to both any organization and team",
 
      featured: true,
    },
    // you can add third Testimonials in the future
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img:
    //     "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   // icon: "assets/linkedin.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
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
