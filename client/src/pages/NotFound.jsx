import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import notFoundAnimation from '../assets/404.json';
import SEOHeader from '../components/SEOHeader';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <SEOHeader 
        title="Page Not Found | Traincape Technology"
        description="The page you're looking for doesn't exist. Return to Traincape Technology's homepage."
      />
      
      <div className="w-full max-w-lg">
        <Lottie
          animationData={notFoundAnimation} 
          loop={true}
          className="w-full h-64 md:h-80"
          onError={(error) => {
            console.warn('Lottie animation error:', error);
          }}
        />
      </div>
      
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        <h2 className="text-xl text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</h2>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="bg-[#152B54] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition duration-300"
          >
            Back to Home
          </Link>
          
          <Link 
            to="/Courses-details"
            className="bg-white text-[#152B54] border border-[#152B54] py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            View Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 