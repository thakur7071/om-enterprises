import './Company.css';
import main from '../Assets/companymain.jpg';

const Company = () => {
  return (
    <div className='company-main'>
      <div className="company">
        <img src={main} className='main-img' alt="Company Main" />
        <h2>OM-ENTERPRISES</h2>
        <h2>VIPIN KUMAR SINGH</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id debitis vitae nam animi velit. Optio porro dolorem culpa, officiis aut quod placeat architecto, sed tempora illo ex natus ad esse consequatur sint eos dolor amet illum tempore eum cum! Voluptas corporis saepe sint pariatur mollitia, minima consequatur commodi. Similique est expedita quibusdam voluptatum, quia sint fuga sapiente quasi fugiat autem. Nam, quo maiores et vero modi optio assumenda officia veritatis, dignissimos at neque aspernatur dolor sed quis quos illum ab sapiente omnis eveniet, laborum repudiandae nihil. Eveniet, obcaecati! Voluptatem voluptatibus aspernatur error ad dolorem eveniet excepturi iste laudantium voluptatum maiores? pariatur nobis Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        
        {/* Vision and Goal Section */}
        <div className="vision-goal-container">
          <div className="card">
            <h3>Our Vision</h3>
            <p>To be the leading provider of innovative lorem100 and sustainable solutions, driving growth and excellence.</p>
          </div>
          <div className="card">
            <h3>Our Goal</h3>
            <p>To achieve customer satisfaction through quality products, exceptional service, and continuous improvement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
