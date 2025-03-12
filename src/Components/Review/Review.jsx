import "./Review.css";

const reviews = [
  { name: "John Doe", photo: "https://i.pravatar.cc/50?img=1", rating: 5, text: "Amazing product! Highly recommend." },
  { name: "Jane Smith", photo: "https://i.pravatar.cc/50?img=2", rating: 4, text: "Customer service was top-notch." },
  { name: "Alice Brown", photo: "https://i.pravatar.cc/50?img=3", rating: 5, text: "Best purchase I've made this year!" },
];

const Review = () => {
  return (
    <div className="review-container">
      {reviews.map((review) => (
        <div key={review.name} className="review-card">
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
