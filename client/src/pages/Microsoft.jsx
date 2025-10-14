import React, { useEffect } from "react";
import comptia from "../assets/comptia.json";
import Lottie from "lottie-react";
import MicrosoftCourse from "../components/MicrosoftCourse.jsx";
import mircro from "../assets/Microsoft-Emblem.jpg";
import AddToCartButton from "../components/AddToCartButton.jsx";
import { useNavigate } from "react-router-dom";

const Microsoft = () => {
  const courseData = [
    {
      image: mircro,
      title: "Microsoft Azure Administrator",
      description: "A comprehensive course on network fundamentals.",
      url: "/MicrosoftCourse/MicrosoftAzureAdmin",
      course: "Microsoft",
      subCourse: "MicrosoftAzureAdministrator"
    },
    {
      image: mircro,
      title: "Microsoft Azure AI Fundamentals",
      description: "Learn to secure and protect systems like a pro.",
      url: "/MicrosoftCourse/MicrosoftAi",
      course: "Microsoft",
      subCourse: "MicrosoftAzureAIFundamentals"
    },
    {
      image: mircro,
      title: "Microsoft Azure Developer Associate",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftDeveloper",
      course: "Microsoft",
      subCourse: "MicrosoftAzureDeveloperAssociate"
    },
    // {
    //   image: mircro,
    //   title: "Microsoft Azure Fundamentals",
    //   description: "Master the art of cloud-based technology and services.",
    //   url: "/MicrosoftCourse/MicrosoftAzureFundamentals",
    //   course: "Microsoft",
    //   subCourse: "MicrosoftAzureFundamentals"
    // },
    {
      image: mircro,
      title: "Microsoft Dynamics 365",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftDynamic365",
      course: "Microsoft",
      subCourse: "MicrosoftDynamics365"
    },
    {
      image: mircro,
      title: "Microsoft Azure",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftAzure",
      course: "Microsoft",
      subCourse: "MicrosoftAzure"
    },
    {
      image: mircro,
      title: "Microsoft 365",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/Microsoft365",
      course: "Microsoft",
      subCourse: "Microsoft365"
    },
    // {
    //   image: mircro,
    //   title: "Microsoft 365 Fundamentals",
    //   description: "Master the art of cloud-based technology and services.",
    //   url: "/MicrosoftCourse/Microsoft365Fundamentals",
    //   course: "Microsoft",
    //   subCourse: "Microsoft365Fundamentals"
    // },
    // {
    //   image: mircro,
    //   title: "Microsoft security, compliance and Identity",
    //   description: "Master the art of cloud-based technology and services.",
    //   url: "/MicrosoftCourse/MicrosoftSecurityFundamentals",
    //   course: "Microsoft",
    //   subCourse: "MicrosoftSecurityFundamentals"
    // },
    {
      image: mircro,
      title: "Microsoft Power Platform",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftPowerPlatform",
      course: "Microsoft",
      subCourse: "MicrosoftPowerPlatform"
    },
    {
      image: mircro,
      title: "Microsoft Azure Data Fundamentals",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftAzureData",
      course: "Microsoft",
      subCourse: "MicrosoftAzureDataFundamentals"
    },
    {
      image: mircro,
      title: "Microsoft 365 certified teams administrator associate",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/Microsoft365Associate",
      course: "Microsoft",
      subCourse: "Microsoft365TeamsAdministrator"
    },
    {
      image: mircro,
      title: "Microsoft Power BI",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftPowerBI",
      course: "Microsoft",
      subCourse: "MicrosoftPowerBI"
    },
    {
      image: mircro,
      title: "Microsoft Azure Cosmos DB Developer Specialty",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftAzureCosmos",
      course: "Microsoft",
      subCourse: "MicrosoftAzureCosmosDB"
    },
    {
      image: mircro,
      title: "Microsoft Azure for SAP workloads Specialty",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftAzureSAP",
      course: "Microsoft",
      subCourse: "MicrosoftAzureSAP"
    },
    {
      image: mircro,
      title: "Microsoft Azure Solutions Architect Expert",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftAzureSolutions",
      course: "Microsoft",
      subCourse: "MicrosoftAzureSolutionsArchitect"
    },
    {
      image: mircro,
      title: "Microsoft Azure Virtual Desktop Specialty",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftAzureVirtual",
      course: "Microsoft",
      subCourse: "MicrosoftAzureVirtualDesktop"
    },
    {
      image: mircro,
      title: "Microsoft Dynamics 365 Sales Functional Consultant Associate",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftDynamicFunction",
      course: "Microsoft",
      subCourse: "MicrosoftDynamics365Sales"
    },
    {
      image: mircro,
      title: "Microsoft 365 certifications",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/Microsoft365Certification",
      course: "Microsoft",
      subCourse: "Microsoft365Certifications"
    },
    {
      image: mircro,
      title: "Microsoft Cybersecurity Analyst",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftCyberAnalyst",
      course: "Microsoft",
      subCourse: "MicrosoftCyberAnalyst"
    },
    {
      image: mircro,
      title: "Microsoft Ms-900: Microsoft 365 Fundamentals",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftMS900",
      course: "Microsoft",
      subCourse: "MicrosoftMS900"
    },
    {
      image: mircro,
      title: "Microsoft Pl-300 Microsoft Power Bi Certification Training",
      description: "Master the art of cloud-based technology and services.",
      url: "/MicrosoftCourse/MicrosoftPl300",
      course: "Microsoft",
      subCourse: "MicrosoftPl300"
    },
    // {
    //   image: mircro,
    //   title: "Microsoft PowerPoint Associate",
    //   description:
    //     "Master the art of creating professional presentations. View in Courses section.",
    //   url: "/MicrosoftCourse/MicrosoftPowerPointAssociate",
    //   course: "Microsoft",
    //   subCourse: "MicrosoftPowerPointAssociate"
    // },
    // {
    //   image: mircro,
    //   title:
    //     "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)",
    //   description:
    //     "Learn the fundamental concepts of security, compliance, and identity across cloud-based and related Microsoft services.",
    //   url: "/MicrosoftCourse/MicrosoftSecurityFundamentals",
    //   course: "Microsoft",
    //   subCourse: "MicrosoftSecurityFundamentals"
    // },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AddToCartButton />

      <div className="course-detail text-center bg-blue-100 py-10">
        <div className="info flex flex-col md:flex-row gap-6 items-center px-5">
          <Lottie 
            animationData={comptia} 
            className="w-full md:w-1/2" 
            onError={(error) => {
              console.warn('Lottie animation error:', error);
            }}
          />
          <div className="text w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-7 text-cyan-900">
              <a 
                href="https://www.microsoft.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                title="Visit Microsoft Official Website"
              >
                Microsoft
              </a>
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Microsoft is a globally recognized technology company that
              develops, licenses, and supports a wide range of software,
              hardware, and cloud services. Known for products like Windows,
              Office, and Azure, Microsoft plays a pivotal role in empowering
              individuals and organizations worldwide. Through innovative
              solutions in cloud computing, artificial intelligence, and
              productivity tools, Microsoft enables professionals to enhance
              their capabilities and achieve their goals in diverse industries.
            </p>
          </div>
        </div>
      </div>
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
              navigate("/training");
            }}
            className="text-gray-600 font-bold py-2 px-4 rounded"
          >
            <span className="hover:text-gray-800">Training</span>
          </button>
          <span>{" > "}</span>
          <span className="ml-4">Microsoft</span>
        </div>
      </div>
      {/* Courses Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-10">
        {courseData.map((course, index) => (
          <MicrosoftCourse
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            url={course.url}
            course={course.course}
            subCourse={course.subCourse}
          />
        ))}
      </div>
    </>
  );
};

export default Microsoft;
