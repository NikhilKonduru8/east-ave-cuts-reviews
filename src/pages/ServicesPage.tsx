
import { Scissors } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const ServicesPage = () => {
  const allServices = [
    {
      title: "Regular Haircut",
      price: "25",
      description: "Classic haircut with precision scissor or clipper cut, includes neck shave and styling."
    },
    {
      title: "Senior Haircut",
      price: "20",
      description: "Haircut service for senior citizens (65+), includes precision cut and styling."
    },
    {
      title: "Kid's Haircut",
      price: "20",
      description: "Haircuts for children under 12 years old, with extra patience and care."
    },
    {
      title: "Beard Trim",
      price: "15",
      description: "Professional beard shaping and trimming to keep your facial hair looking its best."
    },
    {
      title: "Hot Towel Shave",
      price: "30",
      description: "Traditional straight razor shave with hot towel treatment and moisturizing aftershave."
    },
    {
      title: "Haircut & Beard Trim Combo",
      price: "35",
      description: "Get both a haircut and beard trim at a discounted combo price."
    },
    {
      title: "Head Shave",
      price: "25",
      description: "Clean head shave with razor or clippers, includes hot towel treatment."
    },
    {
      title: "Buzz Cut",
      price: "20",
      description: "Quick and simple all-over clipper cut at your desired length."
    },
    {
      title: "Facial",
      price: "35",
      description: "Refreshing facial treatment, includes cleansing, exfoliation, and moisturizing."
    }
  ];

  return (
    <div>
      {/* Services Hero */}
      <div className="bg-barber-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Scissors className="h-12 w-12 text-barber-gold" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We offer a variety of professional haircuts and grooming services to meet your needs.
            Walk-ins welcome. Cash only.
          </p>
        </div>
      </div>
      
      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                price={service.price}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Additional Information</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Payment Methods</h3>
              <p className="text-gray-700 mb-3">East Avenue Barber Shop accepts cash payments only. Please ensure you bring sufficient cash for your service.</p>
              <p className="text-gray-700">There is an ATM located conveniently nearby for your convenience.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Walk-ins & Waiting Times</h3>
              <p className="text-gray-700 mb-3">We operate on a walk-in basis only and do not take appointments. Wait times vary depending on the day and time.</p>
              <p className="text-gray-700">We recommend visiting during weekday mornings or early afternoons for shorter wait times.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Special Requests</h3>
              <p className="text-gray-700 mb-3">Our skilled barbers can accommodate most special haircut requests. Please bring a reference photo if you have a specific style in mind.</p>
              <p className="text-gray-700">For first-time clients, we recommend discussing your preferences in detail with your barber before starting the service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
