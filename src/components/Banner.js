function Banner() {
  return (
    <section className="banner-section">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="banner-video">
        <source src="./assets/videos/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="banner-content">
        <h1>Your Dream Getaway Starts Here</h1>
        <p>
          From sun-kissed shores to awe-inspiring landscapes, your perfect escape
          awaits. Discover a world of possibilities with an InteleTravel advisor
          and embark on the holiday of your dreams.
        </p>
        <button className="banner-btn-primary">Book Your Next Adventure</button>
      </div>
    </section>
  );
}

export default Banner;
