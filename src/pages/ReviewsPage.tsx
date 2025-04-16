
import { Star } from 'lucide-react';
import ReviewCard from '@/components/ReviewCard';

const ReviewsPage = () => {
  const allReviews = [
    {
      name: "Nancy F.",
      location: "Livermore, CA",
      date: "Feb 22, 2025",
      rating: 5,
      reviewText: "We love Bertha. All the ladies are wonderful. Bertha cuts my son's hair and nails it each time. We are so grateful to have East Ave. Barbers in our neighborhood. Thank you ladies"
    },
    {
      name: "R T.",
      location: "Livermore, CA",
      date: "Dec 23, 2024",
      rating: 1,
      reviewText: "Place doesnt have enough barbers ...always a list thats full up for the day. Dont waste your time going there. I hear they give bad haircuts anyway"
    },
    {
      name: "Jeff F.",
      location: "San Ramon, CA",
      date: "May 28, 2024",
      rating: 5,
      reviewText: "Better than all the franchise locations. They don't rush and try to complete a basic haircut in 10 minutes but do it right, usually twice as long, with a better, noticeable difference."
    },
    {
      name: "Funn O.",
      location: "Mountain View, CA",
      date: "Jun 4, 2022",
      rating: 5,
      reviewText: "Love these ladies. So patient and precise with their work. Very friendly and an all around good place with good people"
    },
    {
      name: "Steven M.",
      location: "Livermore, CA",
      date: "Apr 5, 2022",
      rating: 3,
      reviewText: "They give excellent haircuts but with no appointments and very long wait times I will not be returning. Time is just too valuable."
    },
    {
      name: "You Would Like To Know S.",
      location: "East Bay, CA",
      date: "Mar 15, 2022",
      rating: 5,
      reviewText: "This place is amazing!!! I have taken my toddler to so many places in Livermore and Pleasanton. Everyone has always butchered my sons hair which made me so frustrated. I took him to Bertha here and she was amazing!!! She took so much time to make sure it was perfect. Honestly, it was the best haircut he has ever received. Thank you so much!"
    },
    {
      name: "JR M.",
      location: "Fremont, CA",
      date: "Jan 19, 2022",
      rating: 2,
      reviewText: "They seemed nice but I waited for almost 2 hours and didn't even get acknowledged, no sense of urgency unfortunately and even more crappy is when people share life stories of themself selfishly without realizing it slows them down even more... I think the people are great just not very services oriented... wish I had a better experience"
    },
    {
      name: "Joey T.",
      location: "Newark, CA",
      date: "Oct 23, 2021",
      rating: 5,
      reviewText: "New to Livermore and got my first haircut here today. I can definitely say I'm a new regular. Great experience overall. Cash only so keep that in mind."
    },
    {
      name: "Kyle T.",
      location: "Livermore, CA",
      date: "Jan 7, 2023",
      rating: 5,
      reviewText: "First time going to a Livermore barber shop outside of sport clips and great clips. Got a clean cut from Versailles and will be going back in the future."
    },
    {
      name: "Mary F.",
      location: "Livermore, CA",
      date: "Feb 21, 2020",
      rating: 5,
      reviewText: "Today was my youngest sons first trip to the Barber! He loved it! They were wonderful. It was all around the best experience. My husband and oldest son have been going here for the past year or more. I highly recommend East Ave. Barber Shop! Warm and welcoming. Amazing skills! Wish I could give them a higher rating then 5 stars!"
    }
  ];

  // Calculate average rating
  const averageRating = allReviews.reduce((acc, review) => acc + review.rating, 0) / allReviews.length;
  const roundedAverage = Math.round(averageRating * 10) / 10;

  // Count ratings by star
  const ratingCounts = allReviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <div>
      {/* Reviews Hero */}
      <div className="bg-barber-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Customer Reviews</h1>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="text-3xl font-bold">{roundedAverage.toFixed(1)}</div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= Math.round(averageRating)
                      ? "text-barber-gold fill-barber-gold"
                      : "text-gray-400"
                  }`}
                />
              ))}
            </div>
            <div className="text-lg">({allReviews.length} reviews)</div>
          </div>
          <p className="text-xl max-w-2xl mx-auto">
            Read what our customers have to say about their experience at East Avenue Barber Shop.
          </p>
        </div>
      </div>
      
      {/* Rating Distribution */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Rating Distribution</h2>
            
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = ratingCounts[rating] || 0;
                const percentage = Math.round((count / allReviews.length) * 100);
                
                return (
                  <div key={rating} className="flex items-center gap-2">
                    <div className="w-16 text-sm font-medium">{rating} stars</div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-barber-gold"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-12 text-sm text-right">{percentage}%</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">All Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                location={review.location}
                date={review.date}
                rating={review.rating}
                reviewText={review.reviewText}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
