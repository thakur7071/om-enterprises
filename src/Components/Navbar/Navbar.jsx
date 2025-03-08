import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Navbar.css";
import "remixicon/fonts/remixicon.css";
import main from '../../Components/Assets/main-img-removebg-preview.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isMenuOpen) {
      const tl = gsap.timeline();
      tl.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      ).fromTo(
        linksRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" },
        "-=0.3"
      );
    } else {
      gsap.to(menuRef.current, { x: "100%", opacity: 0, duration: 0.4, ease: "power2.in" });
    }
  }, [isMenuOpen]);

  return (
    <div className="main">
      <div className="nav">
        <img src={main} alt="Main Logo" className="main-logo" />
        <i className="ri-menu-3-line mobile-menu" onClick={() => setIsMenuOpen(true)}></i>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/company">Company</Link>
          <Link to="/service">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact" className="contact-button">Contact Us</Link>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <div ref={menuRef} className="full" style={{ display: isMenuOpen ? "flex" : "none" }}>
        <h4>
          <Link to="/" ref={(el) => (linksRef.current[0] = el)} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </h4>
        <h4>
          <Link to="/company" ref={(el) => (linksRef.current[1] = el)} onClick={() => setIsMenuOpen(false)}>
            Company
          </Link>
        </h4>
        <h4>
          <Link to="/service" ref={(el) => (linksRef.current[2] = el)} onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
        </h4>
        <h4>
          <Link to="/gallery" ref={(el) => (linksRef.current[3] = el)} onClick={() => setIsMenuOpen(false)}>
            Gallery
          </Link>
        </h4>
        <h4>
          <Link to="/contact" ref={(el) => (linksRef.current[4] = el)} onClick={() => setIsMenuOpen(false)} className="contact-button">
            Contact Us
          </Link>
        </h4>

        <i className="ri-close-line" onClick={() => setIsMenuOpen(false)}></i>
      </div>
    </div>
  );
};

export default Navbar;
