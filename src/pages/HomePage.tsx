import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Scissors, Clock, Star, Users } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';

const HomePage = () => {
  const featuredServices = [
    {
      title: "Regular Haircut",
      price: "25",
      description: "Classic haircut with precision scissor or clipper cut, includes neck shave and styling."
    },
    {
      title: "Beard Trim",
      price: "15",
      description: "Professional beard shaping and trimming to keep your facial hair looking its best."
    },
    {
      title: "Kid's Haircut",
      price: "20",
      description: "Haircuts for children under 12 years old, with extra patience and care."
    }
  ];

  const featuredReviews = [
    {
      name: "Nancy F.",
      location: "Livermore, CA",
      date: "Feb 22, 2025",
      rating: 5,
      reviewText: "We love Bertha. All the ladies are wonderful. Bertha cuts my son's hair and nails it each time. We are so grateful to have East Ave. Barbers in our neighborhood. Thank you ladies"
    },
    {
      name: "Jeff F.",
      location: "San Ramon, CA",
      date: "May 28, 2024",
      rating: 5,
      reviewText: "Better than all the franchise locations. They don't rush and try to complete a basic haircut in 10 minutes but do it right, usually twice as long, with a better, noticeable difference."
    },
    {
      name: "You Would Like To Know S.",
      location: "East Bay, CA",
      date: "Mar 15, 2022",
      rating: 5,
      reviewText: "This place is amazing!!! I have taken my toddler to so many places in Livermore and Pleasanton. Everyone has always butchered my sons hair which made me so frustrated. I took him to Bertha here and she was amazing!!!"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Info Bar */}
      <div className="bg-barber-dark text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="h-6 w-6 text-barber-gold mb-2" />
              <h3 className="font-bold text-lg">Location</h3>
              <p>862 Hillcrest Ave, Livermore, CA</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-6 w-6 text-barber-gold mb-2" />
              <h3 className="font-bold text-lg">Opening Hours</h3>
              <p>Mon-Fri: 9am-6pm | Sat: 8am-5pm</p>
            </div>
            <div className="flex flex-col items-center">
              <Scissors className="h-6 w-6 text-barber-gold mb-2" />
              <h3 className="font-bold text-lg">Walk-ins Welcome</h3>
              <p>Cash Only</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to East Avenue Barber Shop</h2>
            <p className="text-gray-700 mb-6">
              Established in the heart of Livermore, East Avenue Barber Shop has been providing top-notch haircuts and grooming services to the community for years. Our team of skilled barbers is dedicated to delivering quality service and ensuring you leave looking your best.
            </p>
            <p className="text-gray-700 mb-8">
              We pride ourselves on creating a welcoming environment where customers of all ages can enjoy professional haircuts at affordable prices. No appointments necessary - just walk in!
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="outline" className="border-barber-red text-barber-red hover:bg-barber-red/10">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a variety of professional haircuts and grooming services to keep you looking sharp.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                price={service.price}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services">
              <Button className="bg-barber-red hover:bg-barber-red/90 text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Customer Reviews</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="h-5 w-5 text-barber-gold fill-barber-gold" />
              <Star className="h-5 w-5 text-barber-gold fill-barber-gold" />
              <Star className="h-5 w-5 text-barber-gold fill-barber-gold" />
              <Star className="h-5 w-5 text-barber-gold fill-barber-gold" />
              <Star className="h-5 w-5 text-barber-gold fill-barber-gold" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's what our satisfied customers have to say about their experience at East Avenue Barber Shop.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {featuredReviews.map((review, index) => (
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
          
          <div className="text-center">
            <Link to="/reviews">
              <Button className="bg-barber-red hover:bg-barber-red/90 text-white">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-barber-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-12 w-12 text-barber-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the best haircuts in Livermore. Walk-ins welcome!
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-barber-red hover:bg-barber-red/90 text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
