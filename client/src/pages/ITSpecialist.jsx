import React, { useEffect } from "react";
import banner from "../assets/ibmbanner.jpg";
import banner2 from "../assets/itbanner.jpg";
import Card1 from "../assets/itcour1.png";
import Card2 from "../assets/itcour2.png";
import Card3 from "../assets/itcour3.png";
import Card4 from "../assets/itcour4.png";
import Card5 from "../assets/itcour5.png";
import ITCourses from "../components/ITCourses";
import { useNavigate } from "react-router-dom";

const ITSpeacialist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ITcourses = [
    {
      image: Card1,
      title: "CERTIFICATION COURSE",
      description: "HTML5 Application Development LearnKey",
      price: "₹1149",
      url: "/ITSpecialistHTML",
    },

    {
      image: Card2,
      title: "CERTIFICATION COURSE",
      description: "IT Specialist – HTML and CSS LearnKey",
      price: "₹1149",
      url: "/ITSpecialistHTML",
    },
    {
      image: Card3,
      title: "CERTIFICATION COURSE",
      description:
        "IT Specialist – Device Configuration and Management LearnKey",
      price: "₹1149",
      url: "/ITSpecialistNetworking",
    },
    {
      image: Card4,
      title: "CERTIFICATION COURSE",
      description: "IT Specialist – Databases LearnKey",
      price: "₹1149",
      url: "/ITSpecialistPython",
    },
    {
      image: Card5,
      title: "CERTIFICATION COURSE",
      description: "IT Specialist – Cybersecurity LearnKey",
      price: "₹1149",
      url: "/ITSpecialistJavaScript",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-gray-100 w-full relative contrast-75 h-[60vh] content-center text-justify"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-5">
          <div className="lg:w-2/3 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold font-serif">
              Information Technology Specialist
            </h1>
            <h5 className="text-sm md:text-xl lg:text-xl mt-4">
              Traincape provides a full pathway solution that educators can
              use to prepare students for the Adobe Certified Professional
              certification.
              <br />
              From tailored learning materials and practice tests to Adobe
              endorsed certification exams, Traincape provides assistance
              every step of the way. <br />
            </h5>
          </div>
          <div className="hidden lg:block  mt-5 p-5">
            <img
              className="w-[28rem] h-64 transition-transform duration-300 ease-in-out hover:scale-110"
              src={banner2}
              alt="IBM Banner"
            />
          </div>
        </div>
      </div>{" "}
      <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
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
          <span className="ml-4">IT Specialist</span>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {ITcourses.map((course, index) => (
            <ITCourses
              key={index}
              title={course.title}
              image={course.image}
              price={course.price}
              description={course.description}
              url={course.url}
            />
          ))}
        </div>
      </div>
      <></>
    </>
  );
};

export default ITSpeacialist;