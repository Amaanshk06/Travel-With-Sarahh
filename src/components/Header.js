import { useState, useEffect, useRef } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  // Close menu on resize > 768px
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!menuOpen) return;
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [menuOpen]);

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="./assets/images/travel-logo.png" alt="Travel with Sarah" />
        </div>

        {/* Burger (mobile) */}
        <button
          ref={burgerRef}
          className={`burger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation */}
        <nav
          ref={navRef}
          className={menuOpen ? "mobile-show" : "mobile-hidden"}
          aria-hidden={!menuOpen && window.innerWidth <= 768}
        >
          <a href="#">For Travellers</a>
          <a href="#">For Advisors</a>
          <a href="#">About Us</a>

          {/* Optional: put mobile buttons inside nav (visible on mobile) */}
          <div className="mobile-buttons">
            <button className="btn-primary">Book Travel</button>
            <button className="btn-outline">Login</button>
          </div>
        </nav>

        {/* Desktop buttons */}
        <div className="header-buttons">
          <button className="btn-primary">Book Travel</button>
          <button className="btn-outline">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
