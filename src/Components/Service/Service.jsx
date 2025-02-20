import img1 from '../Assets/img2.jpg';
import img2 from '../Assets/img4.jpg';
import img3 from '../Assets/img6.jpg';
import img4 from '../Assets/img8.jpg';
import img5 from '../Assets/img9.jpg';
import img6 from '../Assets/img5.jpg';
import img7 from '../Assets/img7.jpg';
import './Service.css';

const services = [
  { id: 1, title: 'Interior Design', description: 'Transform your space with modern and elegant designs tailored to your style.', image: img1 },
  { id: 2, title: 'Exterior Design', description: 'Make a lasting impression with high-quality exterior design solutions.', image: img2 },
  { id: 3, title: 'Furniture Design', description: 'Custom furniture pieces to match your aesthetics and functionality.', image: img3 },
  { id: 4, title: 'Landscape Design', description: 'Create beautiful and sustainable outdoor spaces.', image: img4 },
  { id: 5, title: 'Aluminium Doors', description: 'Enhance productivity with ergonomic and stylish office spaces.', image: img5 },
  { id: 6, title: 'Home Renovation', description: 'Revamp your home with our expert renovation services.', image: img6 },
  { id: 7, title: '3D Modeling', description: 'Visualize your ideas with realistic 3D modeling services.', image: img7 }
];

const Service = () => {
  return (
    <div className="service-container">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
