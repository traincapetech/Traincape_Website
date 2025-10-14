"use client";

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Import course images
import AWS from "../assets/aws-kartikey.png";
import Cisco from "../assets/Cisco/CiscoIcon.png";
import comptia from "../assets/comptia-2.webp";
import microsoft from "../assets/microsoft-kartikey.png";
import PECB from "../assets/PECB1.png";
import Traincape from "../assets/Traincape logo.jpeg";



// Reusable component for a single course card
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  
  const handleViewCourse = () => {
    navigate(course.url);
  };

  return (
    <div
      onClick={handleViewCourse}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col border border-gray-200 group relative"
    >
      <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <img src={course.image} alt={course.title} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-2xl font-bold text-blue-600">{course.price}</span>
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
};

// Component for the animated background
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Base gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600"></div>
    
    {/* Animated elements - using inline styles for guaranteed visibility */}
    <div className="absolute top-20 left-20 w-32 h-32 bg-red-500 rounded-full animate-pulse" style={{opacity: 0.8}}></div>
    <div className="absolute top-40 right-40 w-24 h-24 bg-yellow-400 rounded-lg animate-bounce" style={{opacity: 0.9}}></div>
    <div className="absolute bottom-40 left-40 w-40 h-40 bg-green-500 rounded-full animate-ping" style={{opacity: 0.7}}></div>
    <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-purple-500 rounded-xl animate-spin" style={{opacity: 0.8, animationDuration: '6s'}}></div>
    <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-cyan-400 rounded-full animate-pulse" style={{opacity: 0.9}}></div>
    <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-orange-400 rounded-lg animate-bounce" style={{opacity: 0.8}}></div>
    <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-pink-500 rounded-full animate-ping" style={{opacity: 0.9}}></div>
    <div className="absolute top-3/4 left-1/4 w-18 h-18 bg-blue-400 rounded-lg animate-pulse" style={{opacity: 0.8}}></div>
  </div>
);

// Component for the floating "Add to Cart" button
const FloatingButton = () => {
  const handleAddToCart = () => {
    alert('Add to Cart clicked!');
  };

  return (
    <div
      onClick={handleAddToCart}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110 cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </div>
  );
};

const Training = () => {
  const courseData = [
    {
      image: AWS,
      title: "AWS",
      description: "Master cloud computing with Amazon Web Services. Learn scalable IT solutions and cloud architecture.",
      price: "Free",
      url: "/aws",
    },
    {
      image: Cisco,
      title: "CISCO",
      description: "Master networking fundamentals with Cisco. Learn routing, switching, and network security.",
      price: "Free",
      url: "/ciscocard",
    },
    {
      image: comptia,
      title: "COMPTIA",
      description: "Comprehensive IT certifications covering A+, Network+, Security+, and more.",
      price: "Free",
      url: "/comptia",
    },
    {
      image: microsoft,
      title: "Microsoft",
      description: "Learn Microsoft technologies including Azure, Office 365, and Windows administration.",
      price: "Free",
      url: "/microsoft",
    },
    {
      image: PECB,
      title: "PECB",
      description: "Professional certifications in ISO standards, cybersecurity, and management systems.",
      price: "Free",
      url: "/PECB",
    },
    {
      image: Traincape,
      title: "Internal Employees Exams",
      description: "Traincape internal assessments for employees only.",
      price: "Free",
      url: "/internal-exams",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* Floating button */}
      <FloatingButton />

      {/* Hero section with background animations */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 w-full h-full flex items-center justify-center p-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Unlock your tech potential with our free comprehensive IT assessments
          </h1>
        </div>
      </div>

      {/* Courses section */}
      <div className="bg-white py-16 px-6">
        <h1 className="text-blue-600 text-center text-3xl font-extrabold mb-4">Choose Now</h1>
        <h2 className="text-black text-4xl font-extrabold text-center mb-8">Our Popular Courses</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through the course data to create CourseCard components */}
          {courseData.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
