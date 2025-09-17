import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>For Travellers</h3>
          <ul>
            <li><a href="#">Verify Advisor</a></li>
            <li><a href="#">Hot Deals</a></li>
            <li><a href="#">Group Getaways</a></li>
            <li><a href="#">Request A Travel Advisor</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>For Advisors</h3>
          <ul>
            <li><a href="#">Advisor Benefits</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Become an Advisor</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>About Travel with Sarah</h3>
          <ul>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Our Guarantee</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Media Resources</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Side (Buttons + Socials) */}
        <div className="footer-column footer-right">
          <a href="#" className="btn-book">Book Travel</a>
          <button className="btn-login">Login</button>
          <div className="footer-socials">
            <a href="#"><img src="./assets/images/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="./assets/images/twitter.png" alt="X" /></a>
            <a href="#"><img src="./assets/images/youtube.png" alt="YouTube" /></a>
            <a href="#"><img src="./assets/images/instagram.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-logos">
          <img src="./assets/images/InT_FooterLogos_Color_UK-ABTA.webp" alt="InT_FooterLogos_Color_UK-ABTA" />
          <img src="./assets/images/InT_FooterLogos_Color_CLIA.webp" alt="InT_FooterLogos_Color_CLIA Secured" />
          <img src="./assets/images/InT_FooterLogos_Color_NortonSecured.webp" alt="InT_FooterLogos_Color_NortonSecured Logo" />
          <img src="./assets/images/InT_FooterLogos_Color_ATOL.webp" alt="InT_FooterLogos_Color_ATOL" />
        </div>

        {/* Inline copyright + developer */}
        <div className="footer-inline">
          <p>
            © Copyright 2025 InteleTravel. All rights reserved.
            <a href="#"> Privacy</a> | 
            <a href="#"> Terms of Use</a> | 
            <a href="#"> Agency Terms of Business</a>
          </p>
          <span className="developer-credit">
            Developed by <a href="https://cashlesskarma.in" target="_blank" rel="noopener noreferrer">Cashless Karma</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
