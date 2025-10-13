import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

// Use React.memo for component-level performance optimization
const ReviewPage = () => {
  const navigate = useNavigate();

  // --- Optimization: Load Elfsight Script with delay/on interaction ---
  // Since the Elfsight widget is heavy, we'll only load its script once the component mounts.
  // The data-elfsight-app-lazy attribute is good, but ensuring the script isn't
  // loaded on the initial render of the *entire* app helps.

  useEffect(() => {
    // Check if the script is already present to prevent duplicate loads
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Trusted by Clients Worldwide | Traincape Technology</title>
        <meta
          name="description"
          content="Discover what our clients say about us. Read how we help our clients achieve their goals with our expert IT Certifications."
        />
        <link rel="canonical" href="https://traincapetech.in/review-page" />
      </Helmet>

      {/* Main Container: Added max-w-7xl for better structure on large screens */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 fade-in">
        
        {/* Breadcrumb - Enhanced UI (from previous recommendation) */}
        <div className="flex items-center w-full py-3 bg-white border-b border-gray-200 mb-8">
          {/* Home Link - Clearer clickable color and focus state */}
          <button
            onClick={() => navigate("/")}
            className="text-indigo-600 font-medium text-sm transition-colors duration-150 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Go to Home page"
          >
            Home
          </button>

          {/* Separator and Current Page */}
          <div className="flex items-center ml-3">
            {/* SVG Chevron Separator */}
            <svg className="w-4 h-4 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
            {/* Current Page Text - Non-clickable, strong color */}
            <span className="text-gray-700 font-semibold text-sm">
              Our Reviews
            </span>
          </div>
        </div>

        {/* Heading Section - More impactful design */}
        <div className="text-center pb-10">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Client Success Stories
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            What Our Clients Say
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Real feedback from happy customers on Google, reflecting our commitment to expert IT Certifications.
          </p>
        </div>
        
        {/* Write a Review Button - **Massively improved UI** */}
        <div className="flex justify-center mb-10">
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJwSll3OwFDTkRaLVyrLz7GXQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white text-lg font-bold rounded-full shadow-xl hover:bg-indigo-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            aria-label="Write a Google Review"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 .587l3.668 7.568L24 9.748l-6 5.858L19.335 24 12 20.018 4.665 24 6 15.606 0 9.748l8.332-1.593z" />
            </svg>
            Submit Your Review Today!
          </a>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="mt-6 flex justify-center">
          <div
            className="elfsight-app-aafcccb0-e098-4a07-9371-9a0810de303a w-full"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ReviewPage);