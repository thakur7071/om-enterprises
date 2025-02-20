import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-title">OM Enterprise</h2>
          <p className="footer-tagline">Quality & Trust in Every Service Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, animi?</p>
        </div>

        

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact Us</h3>
          <p><FaPhone className="footer-icon" /> +123 456 7890</p>
          <p><FaEnvelope className="footer-icon" /> info@om-enterprise.com</p>
        </div>


        
      </div>

      {/* Social Media & Copyright */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} OM Enterprise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
