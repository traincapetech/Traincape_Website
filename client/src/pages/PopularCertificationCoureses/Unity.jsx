import React, { useEffect } from "react";
import banner from "../../assets/ibmbanner.jpg";
import banner2 from "../../assets/unitybanner.jpg";
import Card1 from "../../assets/unity4.webp";
import Card2 from "../../assets/unity2.webp";
import Card3 from "../../assets/unity3.webp";
import UnityCourses from "../../components/UnityCourses";
import { useNavigate } from "react-router-dom";

const Unity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const unitycourses = [
    {
      image: Card1,
      description: "Unity Certified User – Artist Courseware",
      price: "₹4800",
      url: "/UnityCourse/ArtistCourseware",
    },
    {
      image: Card2,
      description: "Unity Certified User – Programmer Courseware",
      price: "₹4800",
      url: "/UnityCourse/UnityProgrammer",
    },
    {
      image: Card3,
      description:
        "Unity Certified User – VR Developer Courseware",
      price: "₹4800",
      url: "/UnityCourse/DeveloperCourseware",
    },
    
  ];

  const navigate=useNavigate()
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
              <a 
                href="https://unity.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                title="Visit Unity Official Website"
              >
                UNITY
              </a>
            </h1>
            <h5 className="text-sm md:text-lg lg:text-base xl:text-xl mt-4">
              The Unity Certified User (UCU) certification is an entry-level
              credential that allow individuals to get started in interactive
              content creation for industries such as gaming, entertainment,
              automotive, AEC, and XR.
              <br /> <br />
              Unity Certified User certification helps employers and
              institutions verify a candidate’s knowledge and skills using Unity
              technology to succeed in these industries. Whether it’s a desire
              to create games and apps or build new worlds in AR/VR, Unity
              Certified User certification is the place to start.
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
          <span className="ml-4">Unity</span>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {unitycourses.map((course, index) => (
            <UnityCourses
              key={index}
              image={course.image}
              price={course.price}
              description={course.description}
              url={course.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Unity;