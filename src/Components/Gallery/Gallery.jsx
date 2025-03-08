import { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/src/Components/Assets/mainimg.jpg",
  "/src/Components/Assets/img10.jpg",
  "/src/Components/Assets/img5.jpg",
  "/src/Components/Assets/img9.jpg",
  "/src/Components/Assets/img8.jpg",
  "/src/Components/Assets/img2.jpg",
  "/src/Components/Assets/img3.jpg",
  "/src/Components/Assets/img1.jpg",

  ];

  return (
    <div className="gallery-container">
      {images.map((src, index) => (
        <div className="gallery-item" key={index} onClick={() => setSelectedImage(src)}>
          <img src={src} alt="Gallery" loading="lazy" />
          <div className="overlay"></div>
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
