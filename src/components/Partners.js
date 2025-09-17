// Partners.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";

function Partners() {
  const logos = [
    { img: "./assets/images/CEL_Celebrity_Cruises_Logo_Blue-Transparent.webp", alt: "CEL_Celebrity_Cruises_Logo_Blue-Transparent" },
    { img: "./assets/images/contiki-logo-indigo.webp", alt: "contiki-logo-indigo" },
    { img: "./assets/images/costsaver_logo.webp", alt: "costsaver_logo" },
    { img: "./assets/images/croisi.webp", alt: "croisi" },
    { img: "./assets/images/disneyblack.webp", alt: "disneyblack" },
    { img: "./assets/images/etihad_holidays.webp", alt: "etihad_holidays" },
    { img: "./assets/images/holiday-extras.webp", alt: "holiday-extras" },
    { img: "./assets/images/Jet2holidays.webp", alt: "Jet2holidays" },
    { img: "./assets/images/mr-and-mrs-smith.webp", alt: "mr-and-mrs-smith" },
    { img: "./assets/images/msc-cruises-partner-logo.webp", alt: "msc-cruises-partner-logo" },
    { img: "./assets/images/newmarket_logo.webp", alt: "newmarket_logo" },
    { img: "./assets/images/Ocean_Holidays_uk.webp", alt: "Ocean_Holidays_uk" },
    { img: "./assets/images/Riviera_Cruises_US.webp", alt: "Riviera_Cruises_US" },
    { img: "./assets/images/royal-caribbean-partner-logo.webp", alt: "royal-caribbean-partner-logo" },
    { img: "./assets/images/santaslapland.webp", alt: "santaslapland" },
    { img: "./assets/images/trafalgar-partner-logo.webp", alt: "trafalgar-partner-logo" },
    { img: "./assets/images/transun.webp", alt: "transun" },
    { img: "./assets/images/Uniworld_Horz.webp", alt: "Uniworld_Horz" },
    { img: "./assets/images/us-airtours.webp", alt: "us-airtours" },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2>Partners we work with</h2>
        <p>
          Travel with Sarah is recognized by{" "}
          <strong>every major travel supplier</strong>, including every holiday
          resort and hotel brand, cruise line, holiday company, car hire agency
          and tour operator in the world.
        </p>

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={40}
          slidesPerView={5}  // adjust for how many logos you want visible
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 0, // continuous scrolling
            disableOnInteraction: false,
          }}
          speed={4000} // slower = smoother
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="partner-logo">
                <img src={logo.img} alt={logo.alt} title={logo.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partners;
