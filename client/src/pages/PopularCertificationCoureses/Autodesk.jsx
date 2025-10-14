import React, { useEffect } from "react";
import banner from "../../assets/ibmbanner.jpg";
import banner2 from "../../assets/autodeskbanner.webp";
import Card1 from "../../assets/autodesk1.webp";
import Card2 from "../../assets/autodesk2.webp";
import Card3 from "../../assets/autodesk3.webp";
import Card4 from "../../assets/autodesk4.webp";
import MicrosoftOffCourses from "../../components/MicrosoftOffCourses";
import { useNavigate } from "react-router-dom";

const Autodesk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()
  const autodeskcourses = [
    {
      image: Card1,
      description: "Autodesk Certified User - AutoCAD",
      price: "₹1499",
      url: "/AutodeskCourse/AutodeskAutoCAD",
    },
    {
      image: Card2,
      description: "Autodesk Certified User - Revit Architecture",
      price: "₹1499",
      url: "/AutodeskCourse/AutodeskRevit",
    },
    {
      image: Card3,
      description: "Autodesk Certified User - 3ds Max",
      price: "₹1499",
      url: "/AutodeskCourse/Autodesk3dsMax",
    },
    {
      image: Card4,
      description: "Autodesk Certified User - Fusion 360",
      price: "₹1499",
      url: "/AutodeskCourse/AutodeskFusion360",
    },
    {
      image: Card4,
      description: "Autodesk Certified User - Maya",
      price: "₹2499",
      url: "/AutodeskCourse/AutodeskMaya",
    },
  ];

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
                href="https://www.autodesk.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                title="Visit Autodesk Official Website"
              >
                Autodesk
              </a> Certified User (ACU)
            </h1>
            <h5 className="text-sm md:text-lg lg:text-base xl:text-xl mt-4">
              Career and technical education programs across India equip
              students with marketable 2D and 3D design skills by teaching them
              to use state of the art Autodesk® design software.
              <br />    <br />
              Autodesk Certified User certification confirms students have the
              skills necessary to continue their design careers whether they
              attend college, enter the workforce or work toward additional
              levels of industry certification after graduation.{" "}
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
      </div>     <div className="flex items-center w-full py-4 px-6 bg-white rounded shadow-md border border-gray-200">
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
          <span className="ml-4">Autodesk Certified User (ACU)</span>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {autodeskcourses.map((course, index) => (
            <MicrosoftOffCourses
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

export default Autodesk;