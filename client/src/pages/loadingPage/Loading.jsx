import React, { memo, useState } from 'react';
import Lottie from "lottie-react";
import loader from "../../assets/loader.json";

// Optimized options for light-weight rendering
const lottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
    progressiveLoad: true // Enable progressive loading
  }
};

// Simplified skeleton loader for book cards - optimized for performance
const BookCardSkeleton = memo(() => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col shimmer-effect">
    {/* Book cover skeleton */}
    <div className="relative pb-[130%] overflow-hidden bg-gray-200"></div>
    
    {/* Book info skeleton - simplified for better performance */}
    <div className="p-4 flex-grow flex flex-col">
      <div className="h-5 bg-gray-200 rounded mb-2 w-full"></div>
      <div className="h-5 bg-gray-200 rounded mb-3 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded mb-4 w-2/3"></div>
      <div className="mt-auto flex justify-between items-center">
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  </div>
));

// Simplified skeleton loader for review cards - optimized for performance
const ReviewCardSkeleton = memo(() => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col shimmer-effect">
    <div className="p-4 flex-grow">
      {/* Avatar and username area - simplified */}
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Review content skeleton - simplified */}
      <div className="mb-3">
        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
      </div>
      
      {/* Date skeleton */}
      <div className="mt-auto">
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  </div>
));

// Optimized loading component with memoization for better performance
const Loading = memo(({ type = "default" }) => {
  // Move useState to the top - before any conditional returns
  const [lottieError, setLottieError] = useState(false);

  // If it's specifically for the review page, show skeleton loaders
  if (type === "reviews") {
    return (
      <div className="w-full my-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 lg:gap-6 gap-2">
          {[...Array(8)].map((_, index) => (
            <ReviewCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  // If it's specifically for the books page, show book skeleton loaders
  if (type === "books") {
    return (
      <div className="w-full my-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-6 gap-2">
          {[...Array(12)].map((_, index) => (
            <BookCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  // Lightweight default loader with error handling
  if (lottieError) {
    return (
      <div className='flex justify-center items-center min-h-[40vh]'>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-500">Loading content...</div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center min-h-[40vh]'>
      <div className="relative w-64 md:w-80 mx-auto">
        <Lottie 
          animationData={loader} 
          loop={true} 
          className='w-full h-full' 
          style={{ maxHeight: '200px' }}
          {...lottieOptions}
          onError={() => setLottieError(true)}
        />
      </div>
      <div className="absolute mt-48 text-gray-500">Loading content...</div>
    </div>
  );
});

// More efficient shimmer animation with will-change for GPU acceleration
if (!document.getElementById('loading-styles')) {
  const style = document.createElement('style');
  style.id = 'loading-styles';
  style.textContent = `
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }
    
    .shimmer-effect {
      background: linear-gradient(to right, #f6f6f6 8%, #e0e0e0 18%, #f6f6f6 33%);
      background-size: 1000px 100%;
      will-change: background-position;
      animation: shimmer 1.5s infinite linear;
    }
  `;
  document.head.appendChild(style);
}

export default Loading;