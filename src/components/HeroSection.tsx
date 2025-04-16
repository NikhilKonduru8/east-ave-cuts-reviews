import { Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-pattern bg-cover bg-center py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <Scissors className="h-8 w-8 text-barber-red" />
            <h1 className="text-3xl md:text-5xl font-bold">East Avenue Barber Shop</h1>
          </div>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-700">
            Quality haircuts and grooming services at 862 Hillcrest Ave, Livermore, CA.
          </p>
          <p className="text-lg mb-8 text-gray-600 max-w-2xl">
            Welcome to East Avenue Barber Shop, where we provide exceptional haircuts and grooming services. 
            Our skilled barbers are dedicated to helping you look your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services">
              <Button size="lg" className="bg-barber-red hover:bg-barber-red/90 text-white">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
