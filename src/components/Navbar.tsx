
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-barber-red" />
            <span className="font-playfair text-xl font-bold text-barber-dark">East Avenue <span className="text-barber-red">Barber Shop</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-barber-dark hover:text-barber-red font-medium transition duration-300">Home</Link>
            <Link to="/services" className="text-barber-dark hover:text-barber-red font-medium transition duration-300">Services</Link>
            <Link to="/reviews" className="text-barber-dark hover:text-barber-red font-medium transition duration-300">Reviews</Link>
            <Link to="/contact" className="text-barber-dark hover:text-barber-red font-medium transition duration-300">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-barber-dark hover:text-barber-red">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block text-barber-dark hover:text-barber-red font-medium py-2 transition duration-300" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="block text-barber-dark hover:text-barber-red font-medium py-2 transition duration-300" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/reviews" className="block text-barber-dark hover:text-barber-red font-medium py-2 transition duration-300" onClick={toggleMenu}>
              Reviews
            </Link>
            <Link to="/contact" className="block text-barber-dark hover:text-barber-red font-medium py-2 transition duration-300" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
