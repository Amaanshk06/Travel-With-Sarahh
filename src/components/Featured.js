
function Advisor() {
  return (
    <section className="advisor-section">
      <div className="advisor-container">
        {/* Left Side Image */}
        <div className="advisor-image">
          <img
            src="./assets/images/featured.webp"
            alt="Travel Planning"
          />
        </div>

        {/* Right Side Content */}
        <div className="advisor-content">
          <h2>Why Travel with Sarah Advisors Beat Booking Sites</h2>
          <p>
            Skip the endless online comparisons—Travel with Sarah Advisors bring you
            personalised expertise, exclusive deals, and 24/7 support, all at no
            extra cost. Enjoy a holiday that’s expertly planned, competitively
            priced, and delivered with a human touch.
          </p>
          <button>
            Learn more about how advisors outperform booking sites
          </button>
        </div>
      </div>
    </section>
  );
}

export default Advisor;
