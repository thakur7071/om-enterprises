import img1 from '../Assets/img2.jpg';
import img2 from '../Assets/img4.jpg';
import img3 from '../Assets/img6.jpg';
import img4 from '../Assets/img8.jpg';
import img5 from '../Assets/img9.jpg';
import img6 from '../Assets/img5.jpg';
import img7 from '../Assets/img7.jpg';
import './Service.css';

const services = [
  { id: 1, title: 'Civil Contractors', description: 'Transform your space with modern and elegant designs tailored to your style.', image: img1 },
  { id: 2, title: 'Aluminium Doors', description: 'Make a lasting impression with high-quality exterior design solutions.', image: img2 },
  { id: 3, title: 'Windows', description: 'Custom furniture pieces to match your aesthetics and functionality.', image: img3 },
  { id: 4, title: 'Partitions', description: 'Create beautiful and sustainable outdoor spaces.', image: img4 },
  { id: 5, title: 'False Ceiling', description: 'Enhance productivity with ergonomic and stylish office spaces.', image: img5 },
  { id: 6, title: 'Carpentry Jobs', description: 'Revamp your home with our expert renovation services.', image: img6 },
  { id: 7, title: 'Paintings', description: 'Visualize your ideas with realistic 3D modeling services.', image: img7 },
  { id: 8, title: 'Blinds', description: 'Visualize your ideas with realistic 3D modeling services.', image: img7 },
  { id: 9, title: 'Flooring', description: 'Visualize your ideas with realistic 3D modeling services.', image: img7 },
  { id: 10, title: 'P.U. Coating', description: 'Visualize your ideas with realistic 3D modeling services.', image: img7 }
];

const whatsappNumber = '9422095123'; // Replace with your WhatsApp number
const message = 'Hi, I have a query about your services.'; // Message you want to prefill

const Service = () => {

  const handleQueryClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="service-container">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button 
              className="query-button" 
              onClick={handleQueryClick} // Handle button click to open WhatsApp
            >
              Get In Touch
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
