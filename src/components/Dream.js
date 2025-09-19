import { useEffect } from "react";

function Dream() {
  useEffect(() => {
    const section = document.querySelector(".dream-section");
    const image = document.querySelector(".dream-image img");

    if (!section || !image) return;

    const handleMouseMove = (e) => {
      const { left, width } = section.getBoundingClientRect();
      const x = e.clientX - left; // cursor inside section
      const percent = (x / width - 0.5) * 2; // range -1 to +1

      const rotate = percent * 15;      // tilt angle (-15deg to +15deg)
      const shift = percent * 20;       // move left/right (-20px to +20px)

      image.style.transform = `perspective(800px) rotateY(${rotate}deg) translateX(${shift}px)`;
    };

    const resetTilt = () => {
      image.style.transform = "perspective(800px) rotateY(0deg) translateX(0)";
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", resetTilt);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <section className="dream-section">
      <div className="dream-container">
        {/* Left Content */}
        <div className="dream-text-box">
          <h2>Your dream holiday is<br />just a few clicks away.</h2>
          <button className="dream-btn">Talk to an Advisor</button>
        </div>

        {/* Right Image */}
        <div className="dream-image">
          <img src="./assets/images/people-layer-larger.webp" alt="Happy couple" />
        </div>
      </div>
    </section>
  );
}

export default Dream;
