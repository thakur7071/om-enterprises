import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Gallery.css";
import { img, img1, img10, img11, img12, img13, img14, img15, img16, img17, img18, img2, img3, img4, img5, img6, img7, img8, img9 } from "../Assets";




const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndices, setCurrentIndices] = useState({});

  const galleryItems = [
    {
      title: "Child CARE CENTRE",
      description: "Description for Project 1 showcasing our work",
      images: [
      img,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13
      ]
    },
    {
      title: "OFFICE PROJECT",
      description: "Description for Project 1 showcasing our work",
      images: [
    img14,img15,img16,img17,img18
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
