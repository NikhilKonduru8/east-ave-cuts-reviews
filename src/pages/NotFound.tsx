
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scissors } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-barber-light-gray px-4">
      <div className="text-center">
        <Scissors className="h-16 w-16 text-barber-red mx-auto mb-4" />
        <h1 className="text-6xl font-bold mb-4 text-barber-dark">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Oops! Page not found</p>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to our barber shop.
        </p>
        <Link to="/">
          <Button className="bg-barber-red hover:bg-barber-red/90 text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
