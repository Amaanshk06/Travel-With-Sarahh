import { FaUserTie, FaMapMarkedAlt, FaMap } from "react-icons/fa"; // example icons
import { BsDash } from "react-icons/bs"; // for red accent

function Info() {
  const info = [
    {
      icon: <FaUserTie className="info-icon" />,
      accent: true,
      title: "Your Personal Travel Concierge",
      desc: "Our advisors are not just experts—they're your trusted guides and advocates. With genuine care and deep understanding of your preferences, they'll curate a seamless travel experience that exceeds your wildest dreams.",
    },
    {
      icon: <FaMapMarkedAlt className="info-icon" />,
      accent: false,
      title: "Crafted Just for You",
      desc: "Your Travel with Sarah Advisor will weave together the perfect tapestry of destinations, accommodations, and activities. From lavish upgrades to hidden gem experiences, every detail will be thoughtfully designed around you.",
    },
    {
      icon: <FaMap className="info-icon" />,
      accent: false,
      title: "Your Partner in Adventure",
      desc: "Your Travel with Sarah Advisor is by your side every step of the way. With their extensive knowledge, exclusive connections, and dedication to your journey, you can relax knowing you're in the best hands in the business.",
    },
  ];

  return (
    <section className="info-section">
      <div className="container">
        <h2 className="info-heading">Discover the Travel with Sarah Difference</h2>
        <div className="row">
          {info.map((i, index) => (
            <div className="col-md-4" key={index}>
              <div className="info-card">
                <div className="icon-wrapper">
                  {i.icon}
                  {i.accent && <BsDash className="accent-icon" />}
                </div>
                <h3 className="info-title">{i.title}</h3>
                <p className="info-desc">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;
