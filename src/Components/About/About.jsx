import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import img10 from '../Assets/img10.jpg';

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={img10} alt="About OM-ENTERPRISES" />
        </div>
        <div className="about-content">
          <h2>About OM-ENTERPRISES</h2>
          <p>
            At <strong>OM-ENTERPRISES</strong>, we are committed to redefining interiors with precision, 
            quality, and innovation. With years of expertise in designing and crafting spaces, 
            we seamlessly blend functionality with elegance. Our dedicated team ensures that every 
            project reflects your vision while maintaining the highest standards of craftsmanship.
          </p>
          <p>
            From residential makeovers to commercial transformations, we take pride in delivering 
            exceptional results that leave a lasting impression. Let us bring your dream space to life.
          </p>
          <Link to="/company" className="btn" onClick={scrollToTop}>Read More</Link> 
        </div>
      </div>
    </section>
  );
};

export default About;
