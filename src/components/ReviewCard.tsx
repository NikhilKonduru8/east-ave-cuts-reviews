
import StarRating from './StarRating';

interface ReviewCardProps {
  name: string;
  location: string;
  date: string;
  rating: number;
  reviewText: string;
}

const ReviewCard = ({ name, location, date, rating, reviewText }: ReviewCardProps) => {
  return (
    <div className="review-card bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
      
      <div className="mb-3">
        <StarRating rating={rating} />
      </div>
      
      <p className="text-gray-700">{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
