import { useEffect, useState } from 'react';
import './App.css';
import Info from './components/Info.js';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Featured from './components/Featured.js';
import Client from './components/Client.js';
import Footer from './components/Footer.js';
import Partners from './components/Partners.js';
import Testimonials from './components/Testimonials.js';
import Dream from './components/Dream.js';

function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [showScrollBtn, setShowScrollBtn] = useState(false); // 👈 new state

    // Function to scroll to the top
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const togglePopup = () => {
        setShowPopup(prev => !prev);
    };

    // Show/hide scroll-to-top button on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Attach event listener to "Contact" link in Header after mount
    useEffect(() => {
        const contactLinks = document.querySelectorAll('nav a');
        contactLinks.forEach(link => {
            if (link.textContent.trim().toLowerCase() === 'contact') {
                link.addEventListener('click', handleContactClick);
            }
        });

        return () => {
            contactLinks.forEach(link => {
                if (link.textContent.trim().toLowerCase() === 'contact') {
                    link.removeEventListener('click', handleContactClick);
                }
            });
        };
    }, []);

    const handleContactClick = (e) => {
        e.preventDefault();
        togglePopup();
    };

    return (
        <>
            {/* 👇 Only show button when scrolled */}
            {showScrollBtn && (
                <a className="floating-btn" href="#" onClick={scrollToTop}>
                    <img
                        src="./assets/images/up-arrow.png"
                        alt="Scroll to top"
                    />
                </a>
            )}

            <Header />

            <main>
                <Banner onContactClick={togglePopup} />

                <div className="custom-container">
                    <Info />
                    <Featured />
                    <Client />
                    <Partners />
                    <Testimonials />
                    <Dream/>
                </div>
            </main>

            <Footer />

            {/* Popup Contact Form */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-form">
                        <button className="close-btn" onClick={togglePopup}>×</button>
                        <h2>Contact Us</h2>
                        <form>
                            <label>Name:</label>
                            <input type="text" placeholder="Your Name" required />

                            <label>Email:</label>
                            <input type="email" placeholder="Your Email" required />

                            <label>Message:</label>
                            <textarea placeholder="Your message here..." required></textarea>

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
