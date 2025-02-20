import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./Address.css"; // Add CSS for styling

const Address = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully!", {
      position: "top-right",
      style: {
        background: "#4caf50",
        color: "#fff",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "16px",
      },
    });
  };

  return (
    <div className="address-wrapper">
      {/* Toaster for notifications */}
      <Toaster />

      {/* Address Section */}
      <div className="address-container">
        <div className="address-box">
          <h3><FaMapMarkerAlt className="icon" /> Head Office</h3>
          <p>123 Main Street</p>
          <p>New York, NY 10001</p>
          <p><FaEnvelope className="icon" /> info@company.com</p>
        </div>

        <div className="address-box">
          <h3><FaMapMarkerAlt className="icon" /> Branch Office</h3>
          <p>456 Elm Street</p>
          <p>Los Angeles, CA 90001</p>
          <p><FaEnvelope className="icon" /> branch@company.com</p>
        </div>
      </div>

      {/* Query Form Section */}
      <div className="query-form">
        <h3>Query</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <textarea placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Address;
