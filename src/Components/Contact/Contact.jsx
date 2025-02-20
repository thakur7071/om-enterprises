import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-us">
      <form className="contact">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" placeholder="Enter your subject" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" cols="30" rows="5" placeholder="Enter description" required />

        <button type="submit" title="Submit the form">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
