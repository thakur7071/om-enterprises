import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content" ref={contentRef}>
        <h1>OM ENTERPRISES</h1>
        <p>
          At <strong>OM-ENTERPRISES</strong>, we specialize in crafting sophisticated interiors that seamlessly blend 
          functionality with aesthetics. Our expert craftsmanship
        </p>
        <div className="hero-buttons">
          <Link to="/service" className="btn">
            Discover Our Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
