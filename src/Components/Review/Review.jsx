import { useState, useEffect } from "react";
import "./Review.css";

const reviews = [
  { name: "John Doe", photo: "https://i.pravatar.cc/50?img=1", rating: 5, text: "Amazing product! Highly recommend." },
  { name: "Jane Smith", photo: "https://i.pravatar.cc/50?img=2", rating: 4, text: "Customer service was top-notch." },
  { name: "Alice Brown", photo: "https://i.pravatar.cc/50?img=3", rating: 5, text: "Best purchase I've made this year!" },
  { name: "Bob Johnson", photo: "https://i.pravatar.cc/50?img=4", rating: 4, text: "Exceeded my expectations!" },
  { name: "Charlie Davis", photo: "https://i.pravatar.cc/50?img=5", rating: 5, text: "Very high quality, worth the price." },
  { name: "Emma Wilson", photo: "https://i.pravatar.cc/50?img=6", rating: 4, text: "Fast delivery and great packaging." }
];

const Review = () => {
  const [visibleReviews, setVisibleReviews] = useState(reviews.slice(0, 3));
  const [index, setIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleReviews((prev) => {
        let newReviews = [...prev];
        newReviews.shift();
        newReviews.push(reviews[index]);
        return newReviews;
      });

      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="review-container">
      {visibleReviews.map((review) => (
        <div key={review.name} className="review-card slide-in">
          <div className="review-header">
            <img src={review.photo} alt={review.name} className="review-photo" />
            <div>
              <h4>{review.name}</h4>
              <p className="rating">{"⭐".repeat(review.rating)}</p>
            </div>
          </div>
          <p className="review-text">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
