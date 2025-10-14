import React, { useEffect } from "react";
import banner from "../../assets/ibmbanner.jpg";
import banner2 from "../../assets/ciscobanner.webp";
import Card1 from "../../assets/ciscocard1.webp";
import Card2 from "../../assets/ciscocard2.webp";
import Ciscocoursescard from "../../components/Ciscocoursescard";
import { useNavigate } from "react-router-dom";

const CiscoCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ciscocourses = [
    {
      image: Card1,
      title: "CCST Networking",
      description: "Cisco Certified Support Technician – Networking LearnKey",
      price: "₹1149",
      url: "/CCSTNetworking",
      course: "Cisco",
      subCourse: "CCSTNetworking",
    },
    {
      image: Card2,
      title: "CCST Cybersecurity",
      description: "Cisco Certified Support Technician – Cybersecurity LearnKey",
      price: "₹1149",
      url: "/CCSTcybersecurity",
      course: "Cisco",
      subCourse: "CCSTcybersecurity",
    },
  
  ];

  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-gray-100 w-full relative contrast-75 h-[65vh] content-center text-justify"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-5">
          <div className="lg:w-2/3 w-full ">
            <h1 className="text-2xl  md:text-3xl lg:text-4xl font-bold font-serif ">
              Cisco Certifications
            </h1>
            <h5 className="text-sm md:text-lg lg:text-base xl:text-xl mt-4">
              This program includes two certification exams designed to validate
              work-ready skills and knowledge to help learners find a job in the
              field of networking and cybersecurity. Earning a Cisco Certified
              Support Technician certification showcases the learner’s skillset
              to employers, telling them they are ready to roll up their sleeves
              on day one.
              <br /> <br />
              The CCST Networking and CCST Cybersecurity exams were created by a
              team of subject-matter experts from diverse careers and industries
              (including Cisco employees, networking and cybersecurity
              professionals, hiring managers, professors and teachers) to ensure
              these certifications effectively bridge the gap between education
              and the skills and knowledge needed to succeed in the workplace.
            </h5>
          </div>
          <div className="hidden lg:block xl:block  mt-5 p-5">
            <img
              className="w-[28rem] h-64 transition-transform duration-300 ease-in-out hover:scale-110"
              src={banner2}
              alt="IBM Banner"
            />
          </div>
        </div>
      </div>      <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
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
          <span className="ml-4">Cisco Certifications</span>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {ciscocourses.map((course, index) => (
            <Ciscocoursescard
              key={index}
              image={course.image}
              title={course.title}
              price={course.price}
              description={course.description}
              url={course.url}
              course={course.course}
              subCourse={course.subCourse}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CiscoCard;