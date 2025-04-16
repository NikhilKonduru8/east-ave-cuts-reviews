
import { MapPin, Phone, Clock, Mail, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div>
      {/* Contact Hero */}
      <div className="bg-barber-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Scissors className="h-12 w-12 text-barber-gold" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Visit us today for a quality haircut or reach out with any questions.
            No appointments necessary - walk-ins welcome!
          </p>
        </div>
      </div>
      
      {/* Contact Info & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-barber-red/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-barber-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-gray-700">1234 East Avenue, Livermore, CA 94550</p>
                    <a 
                      href="https://maps.google.com/?q=East+Avenue+Barber+Shop+Livermore+CA" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-barber-red hover:underline mt-1 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-barber-red/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-barber-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-700">(925) 456-7890</p>
                    <a 
                      href="tel:+19254567890" 
                      className="text-barber-red hover:underline mt-1 inline-block"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-barber-red/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-barber-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <div className="grid grid-cols-2">
                        <div>Monday - Friday:</div>
                        <div>9:00 AM - 6:00 PM</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div>Saturday:</div>
                        <div>8:00 AM - 5:00 PM</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div>Sunday:</div>
                        <div>Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-barber-red/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-barber-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-700">info@eastavebarbers.com</p>
                    <a 
                      href="mailto:info@eastavebarbers.com" 
                      className="text-barber-red hover:underline mt-1 inline-block"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-bold text-lg mb-4">Important Note</h3>
                <div className="bg-barber-red/10 rounded-lg p-4 text-barber-red border border-barber-red/20">
                  <p className="font-medium">Cash Only</p>
                  <p className="text-sm mt-1">We accept cash payments only. There is an ATM located nearby for your convenience.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Location</h2>
              
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50685.72889258854!2d-121.81642245!3d37.6819132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe75127792817%3A0x1e69fcfaab7ff49d!2sLivermore%2C%20CA!5e0!3m2!1sen!2sus!4v1681521418018!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <h3 className="font-bold text-lg mb-3">Visit Us Today</h3>
              <p className="text-gray-700 mb-4">
                We're located in the heart of Livermore, with convenient street parking available nearby.
                No appointments necessary - just walk in during our business hours!
              </p>
              
              <a href="tel:+19254567890">
                <Button size="lg" className="w-full bg-barber-red hover:bg-barber-red/90 text-white">
                  Call Now: (925) 456-7890
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you take appointments?</h3>
              <p className="text-gray-700">No, we operate on a walk-in basis only. We recommend visiting during weekday mornings or early afternoons for shorter wait times.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">What forms of payment do you accept?</h3>
              <p className="text-gray-700">We accept cash only. There is an ATM located nearby for your convenience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you cut women's hair?</h3>
              <p className="text-gray-700">Yes, we offer haircuts for everyone, though we specialize in traditional barber services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">How long is the typical wait time?</h3>
              <p className="text-gray-700">Wait times vary depending on the day and time. Weekday mornings and early afternoons typically have shorter wait times compared to evenings and weekends.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you cut children's hair?</h3>
              <p className="text-gray-700">Yes, we provide haircuts for children of all ages. Our barbers are experienced in working with kids and ensuring they have a positive experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
