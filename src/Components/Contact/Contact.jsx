import { Clock, Mail, MapPin, Phone, User, MessageSquare, Edit } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-main'>
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum maiores eveniet optio quibusdam veniam adipisci. Totam deleniti vero consequatur!</p>
      </div>

      <div className="contact-us">
        <form className="contact">
          <div className="input-group">
            <User size={20} className="input-icon" />
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <Mail size={20} className="input-icon" />
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <Edit size={20} className="input-icon" />
            <input type="text" id="subject" placeholder="Enter your subject" required />
          </div>

          <div className="input-group textarea-group">
            <MessageSquare size={20} className="input-icon" />
            <textarea id="message" cols="30" rows="5" placeholder="Enter description" required />
          </div>

          <button type="submit" title="Submit the form">Submit</button>
        </form>
      </div>
      
      {/* Contact Details */}
      <div className="contact-details">
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p><Phone size={18} /> (+91) 8114227222</p>
          <p><Mail size={18} /> info@om-enterprises.com</p>
          <p><MapPin size={18} /> Alambagh Lucknow, Uttar-Pradesh</p>
        </div>

        <div className="contact-card">
          <h2><Clock size={20} /> Business Hours</h2>
          <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
        </div>
      </div>

    </div>
  );
};

export default Contact;
