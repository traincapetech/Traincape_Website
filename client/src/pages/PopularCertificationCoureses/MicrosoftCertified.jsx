import React, { useEffect } from "react";
import banner from "../../assets/ibmbanner.jpg";
import banner2 from "../../assets/microbanner.webp";
import Card1 from "../../assets/micro1.png";
import MicrosoftCertifiedC from "../../components/MicrosoftCertifiedC";
import { useNavigate } from "react-router-dom";

const MicrosoftCertified = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    {
      image: Card1,
      description: "Microsoft 365 Fundamentals (MS-900) Certification",
      price: "₹2,199",
      url: "/MicrosoftCourse/Microsoft365Fundamentals",
    },
    {
      image: Card1,
      description: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)",
      price: "₹2,199",
      url: "/MicrosoftCourse/MicrosoftSecurityFundamentals",
    },
    {
      image: Card1,
      description: "Microsoft Dynamics 365 Fundamentals Customer Engagement Apps (CRM) – MB-910",
      price: "₹2,199",
      url: "/MicrosoftCourse/MicrosoftDynamics365CRMFundamentals",
    },
    {
      image: Card1,
      description: "Microsoft Dynamics 365 Fundamentals Finance and Operations Apps (ERP) – MB-920",
      price: "₹2,199",
      url: "/MicrosoftCourse/MicrosoftDynamics365ERP",
    },
    {
      image: Card1,
      description: "Microsoft Power Platform Fundamentals Certification (PL-900)",
      price: "₹2,199",
      url: "/MicrosoftCourse/MicrosoftPowerPlatformFundamentals",
    },
    {
      image: Card1,
      description: "Microsoft Azure Data Fundamentals Certification (DP-900)",
      price: "₹2,199",
      url: "/MicrosoftCourse/MicrosoftAzureDataFundamentals",
    },
    {
      image: Card1,
      description: "Microsoft Azure Fundamentals Certification (AZ-900)",
      price: "₹2,199",
      url: "/MicrosoftCourse/MicrosoftAzureFundamentals",
    },
    {
      image: Card1,
      description: "Microsoft Azure AI Fundamentals Certification (AI-900)",
      price: "₹2,199",
      url: "/MicrosoftCourse/MicrosoftAi",
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
            <h1 className="text-3xl  md:text-4xl lg:text-4xl font-bold font-serif ">
              Microsoft Certified Fundamentals
            </h1>
            <h5 className="text-sm md:text-lg lg:text-base xl:text-xl mt-4">
              The Microsoft Certified Fundamentals exams are the pathway to
              fully understanding what cloud computing is, what options are
              available from Microsoft, and which options make sense for
              businesses to invest in.
              <br />
              This set of exams is for candidates who are exploring a career in
              artificial intelligence, data science, and cloud computing. With
              the usage of big data and artificial intelligence on the rise, the
              demand for data scientists is not being met – and the gap is
              widening.
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
          <span className="ml-4">Microsoft Certified Fundamentals</span>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {courses.map((course, index) => (
            <MicrosoftCertifiedC
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

export default MicrosoftCertified;