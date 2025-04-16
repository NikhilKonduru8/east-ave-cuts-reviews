
import { Scissors, MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-barber-dark text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="h-6 w-6 text-barber-gold" />
              <span className="font-playfair text-xl font-bold">East Avenue Barber Shop</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing quality haircuts and grooming services since 2010. Our skilled barbers take pride in their work and deliver excellent results.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-barber-gold transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-barber-gold transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-barber-gold mt-0.5" />
                <p>1234 East Avenue, Livermore, CA 94550</p>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-barber-gold mt-0.5" />
                <p>(925) 456-7890</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-barber-gold mt-0.5" />
                <div>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-barber-gold transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-barber-gold transition duration-300">Services</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-barber-gold transition duration-300">Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-barber-gold transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} East Avenue Barber Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
