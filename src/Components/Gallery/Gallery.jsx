import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Gallery.css";

// Import images
import mainimg from "../../Components/Assets/mainimg.jpg";
import img10 from "../../Components/Assets/img10.jpg";
import img5 from "../../Components/Assets/img5.jpg";
import img9 from "../../Components/Assets/img9.jpg";
import img8 from "../../Components/Assets/img8.jpg";
import img2 from "../../Components/Assets/img2.jpg";
import img3 from "../../Components/Assets/img3.jpg";
import img1 from "../../Components/Assets/img1.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndices, setCurrentIndices] = useState({});

  const galleryItems = [
    {
      title: "Project 1",
      description: "Description for Project 1 showcasing our work",
      images: [
        mainimg,
        img10,
        img5,
      ]
    },
    {
      title: "Project 2",
      description: "Description for Project 2 highlighting our expertise",
      images: [
        img9,
        img8,
        img2,
      ]
    },
    {
      title: "Project 3",
      description: "Description for Project 3 demonstrating our capabilities",
      images: [
        img3,
        img1,
      ]
    }
  ];

  const handlePrevImage = (e, itemIndex) => {
    e.stopPropagation();
    setCurrentIndices(prev => ({
      ...prev,
      [itemIndex]: prev[itemIndex] === 0 
        ? galleryItems[itemIndex].images.length - 1 
        : prev[itemIndex] - 1
    }));
  };

  const handleNextImage = (e, itemIndex) => {
    e.stopPropagation();
    setCurrentIndices(prev => ({
      ...prev,
      [itemIndex]: prev[itemIndex] === galleryItems[itemIndex].images.length - 1 
        ? 0 
        : (prev[itemIndex] || 0) + 1
    }));
  };

  return (
    <div className="gallery-container">
      {galleryItems.map((item, itemIndex) => (
        <div className="gallery-card" key={itemIndex}>
          <div className="gallery-card-header">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className="gallery-card-images">
            <div className="image-navigation">
              <button className="nav-button prev" onClick={(e) => handlePrevImage(e, itemIndex)}>
                <ChevronLeft size={24} />
              </button>
              <div className="image-container" onClick={() => setSelectedImage(item.images[currentIndices[itemIndex] || 0])}>
                <img 
                  src={item.images[currentIndices[itemIndex] || 0]} 
                  alt={`${item.title} - Image ${(currentIndices[itemIndex] || 0) + 1}`} 
                  loading="lazy"
                />
                <div className="overlay"></div>
              </div>
              <button className="nav-button next" onClick={(e) => handleNextImage(e, itemIndex)}>
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="image-indicators">
              {item.images.map((_, index) => (
                <span 
                  key={index}
                  className={`indicator ${index === (currentIndices[itemIndex] || 0) ? 'active' : ''}`}
                  onClick={() => setCurrentIndices(prev => ({ ...prev, [itemIndex]: index }))}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full Size" className="modal-img" />
          <span className="close">&times;</span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
