import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaMapMarkerAlt, FaEnvelope, FaUser, FaComment } from "react-icons/fa";
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
      <div className="address-heading">
        <h2>Address & Query</h2>
      </div>

      <div className="address-container">
        <div className="address-box">
          <h3><FaMapMarkerAlt className="icon" /> Head Office</h3>
          <p>B-22, Sharda Complex CHS Ltd</p>
          <p>Birwadi, Mahad-Raigad 402302</p>
          <p><FaEnvelope className="icon" /> omenterprisesvip@gmail.com</p>
        </div>

        <div className="address-box">
          <h3><FaMapMarkerAlt className="icon" /> Branch Office</h3>
          <p>B-22, Mishra Lane, Narsipada, Akruti Road</p>
          <p>Kandivili(E), Mumbai 400101</p>
          <p><FaEnvelope className="icon" /> omenterprisesvip@gmail.com</p>
        </div>
      </div>

      {/* Query Form Section */}
      <div className="query-form">
        <h3>Query</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="input-group textarea-group">
            <FaComment className="input-icon" />
            <textarea placeholder="Your Message" rows="4" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Address;
