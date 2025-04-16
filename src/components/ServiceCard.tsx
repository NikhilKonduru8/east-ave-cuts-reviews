
import { Scissors } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
}

const ServiceCard = ({ title, price, description }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <Scissors className="h-5 w-5 text-barber-red" />
          {title}
        </h3>
        <span className="text-barber-red font-bold text-xl">${price}</span>
      </div>
      
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
