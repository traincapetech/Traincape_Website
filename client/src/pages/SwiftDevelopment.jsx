import React, { useEffect } from "react";
import banner from "../assets/ibmbanner.jpg";
import banner2 from "../assets/applelogo.png";
import Card1 from "../assets/applecard1.jpg";
import SwiftCourses from "../components/SwiftCourses";
import { useNavigate } from "react-router-dom";

const SwiftDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const AppDevlomentcourses = [
    {
      image: Card1,
      title: "CERTIFICATION COURSE",
      description: "Swift Development Basics",
      price: "₹1,499",
      url: "/SwiftDevelopmentBasics",
    },
    {
      image: Card1,
      title: "CERTIFICATION COURSE",
      description: "Swift Development Advanced",
      price: "₹1,999",
      url: "/SwiftDevelopmentAdvanced",
    },
  ];

  const navigate=useNavigate()
  return (
    <>
      <div
        className="bg-gray-100 w-full relative contrast-75 h-[65vh] md:h-[75vh] content-center text-justify"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-5">
          <div className="lg:w-2/3 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold font-serif">
              <a 
                href="https://www.apple.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                title="Visit Apple Official Website"
              >
                Apple
              </a> Certifications
            </h1>
            <h5 className="text-sm md:text-lg lg:text-xl mt-4">
            Swift is a robust and intuitive programming language created by Apple. It's easy to learn, simple to use, and super powerful — which makes it a great language for first time coders and full time developers.        
            <br />
            App Development with Swift certifications recognize students for their knowledge of Swift, Xcode, and app development tools.              <br />
              <br />
              Students are expected to have completed at least 150 hours of instructional time before taking the certification exam.
              
              Students who pass the certification exam will earn a digital badge they can share in a resume, portfolio, email, or in online professional networks.
            </h5>
          </div>
          <div className="hidden lg:block mt-5 p-5">
            <img
              className="w-[22rem] h-64 transition-transform duration-300 ease-in-out hover:scale-110"
              src={banner2}
              alt="IBM Banner"
            />
          </div>
        </div>
      </div>   <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-gray-600 font-bold py-2 px-4 rounded"
        >
          <span className="hover:text-gray-800">Home</span>
        </button>
        <div className="flex items-center text-gray-500 font-bold">
          <span>{" > "}</span>
          <button
            onClick={() => {
              navigate("/Courses-details");
            }}
            className="text-gray-600 font-bold py-2 px-4 rounded"
          >
            <span className="hover:text-gray-800">Course Details</span>
          </button>
          <span>{" > "}</span>
          <span className="ml-4">Swift Development</span>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {AppDevlomentcourses.map((course, index) => (
            <SwiftCourses
              key={index}
              title={course.title}
              image={course.image}
              price={course.price}
              description={course.description}
              url={course.url}
            />
          ))}
        </div>
        <br />
      <br />  <br />  <br />  <br />  <br />
      </div>
      
    </>
  );
};


export default SwiftDevelopment;