function Header() {
  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img
            src="./assets/images/travel-logo.png"
            alt="Travel with Sarah"
          />
        </div>

        {/* Navigation */}
        <nav>
          <a href="#">For Travellers</a>
          <a href="#">For Advisors</a>
          <a href="#">About Us</a>
        </nav>

        {/* Buttons */}
        <div className="header-buttons">
          <button className="btn-primary">Book Travel</button>
          <button className="btn-outline">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
