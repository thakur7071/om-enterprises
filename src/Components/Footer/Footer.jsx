import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Replace with actual links
  const whatsappNumber = "919422095123"; // Use country code without '+' for WhatsApp
  const linkedinURL = "https://www.linkedin.com/in/yourprofile"; // Replace with actual LinkedIn profile
  const instagramURL = "https://www.instagram.com/yourprofile"; // Replace with actual Instagram profile

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-title">OM Enterprise</h2>
          <p className="footer-tagline">
            Quality & Trust in Every Service. Delivering excellence since inception.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/company" onClick={scrollToTop}>Company</Link></li>
            <li><Link to="/service" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/gallery" onClick={scrollToTop}>Gallery</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact Us</h3>
          <p><FaPhone className="footer-icon" /> <a href="tel:+919422095123">+91 9422095123</a></p>
          <p><FaEnvelope className="footer-icon" /> <a href="mailto:omenterprisesvip@gmail.com">omenterprisesvip@gmail.com</a></p>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={instagramURL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} OM Enterprise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
