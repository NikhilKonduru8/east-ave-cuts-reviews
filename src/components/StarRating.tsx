
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-barber-gold fill-barber-gold' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
