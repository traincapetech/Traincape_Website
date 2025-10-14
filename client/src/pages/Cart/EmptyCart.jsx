import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaShoppingBag, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Cards } from "./courses.js";

const EmptyCart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const sliderRef = useRef(null);

  // Update number of visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 768) {
        setVisibleCards(2); // Tablet: 2 cards
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3); // Small desktop: 3 cards
      } else {
        setVisibleCards(4); // Large desktop: 4 cards
      }
    };

    // Set initial value
    updateVisibleCards();
    
    // Update on resize
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Calculate max index based on cards length and visible cards
  const maxIndex = Math.max(0, Cards.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => {
      const next = prevIndex + visibleCards;
      return next > maxIndex ? maxIndex : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => {
      const prev = prevIndex - visibleCards;
      return prev < 0 ? 0 : prev;
    });
  };

  // Check if buttons should be disabled
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  const displayedCards = Cards.slice(currentIndex, currentIndex + visibleCards);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Empty Cart Section */}
      <section className="py-16 px-4 md:px-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <FaShoppingBag className="text-gray-400" size={40} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Your Cart Is Empty
          </h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link 
            to="/Courses-details" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Continue Learning...
          </Link>
        </div>
      </section>

      {/* Explore Courses Section with Slider */}
      <section className="py-12 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Courses</h2>
          
          <div className="relative py-4">
            {/* Slider Navigation */}
            <div className="flex justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-700">Featured Certifications</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={prevSlide}
                  disabled={isPrevDisabled}
                  className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                  aria-label="Previous courses"
                >
                  <FaChevronLeft className="text-gray-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  disabled={isNextDisabled}
                  className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                  aria-label="Next courses"
                >
                  <FaChevronRight className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Cards Grid */}
            <div 
              ref={sliderRef}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {displayedCards.map((card, index) => (
                <Link to={card.url} key={index} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="max-h-full max-w-full object-contain" 
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(Cards.length / visibleCards) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * visibleCards)}
                  className={`w-2 h-2 rounded-full ${
                    Math.floor(currentIndex / visibleCards) === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmptyCart;