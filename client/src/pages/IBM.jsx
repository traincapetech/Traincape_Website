import React, { useEffect } from "react";
// import { useCart } from "../components/c"; // Import the useCart hook
import banner from "../assets/ibmbanner.jpg";
import banner2 from "../assets/ibmbanner2.jpg";
import IBMCourses from "../components/IBMCourses";
import html from "../assets/htmllogo.jpeg";
import c from "../assets/clogo.png";
import foundationc from "../assets/c++logo.png";
import rdbms from "../assets/rdbmslogo.jpeg";
import sql from "../assets/sqllogo.png";
import tensorlow from "../assets/tensorlogo.jpeg";
import datasci from "../assets/datascimethologo.png";
import pydatasci from "../assets/pylogo.jpeg";
import Api from "../assets/apilogo.png";
import scala101 from "../assets/ibmlogo.jpeg";
import aglie from "../assets/aglielogo.png";
import devops from "../assets/devopslogo.jpeg";
import pydataanalis from "../assets/DAwithpylogo.jpeg";
import cloudfunda from "../assets/cloudfundalogo.png";
import container from "../assets/containerlogo.jpeg";
import bigdata from "../assets/bigdatahandlogo.jpeg";
import nodejs from "../assets/nodelogo.png";
import mangodb from "../assets/mongodblogo.png";
import Machine from "../assets/machinelogo.png";
import js from "../assets/jslogo.png";
import AddToCartButton from "../components/AddToCartButton";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const IBM = () => {

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ibmcourses = [
    {
      id: 1,
      image: html,
      title: "CERTIFICATION COURSE",
      description: "IBM Web Development using HTML",
      price: "3000",
      url: "/htmlcourse",
    },

    {
      id: 2,
      image: c,
      title: "CERTIFICATION COURSE",
      description: "IBM Software Foundation Course C",
      price: "3000",
      url: "/C-course",
    },

    {
      id: 3,
      image: foundationc,
      title: "CERTIFICATION COURSE",
      description: "IBM Software Foundation Course C++ Certification Course",
      price: "3000",
      url: "/IBMSoftwareFoundation",
    },
    {
      id: 3,
      image: rdbms,
      title: "CERTIFICATION COURSE",
      description: "IBM RDBMS - Database Fundamentals Certification Course",
      price: "3000",
      url: "/IBMRDBMS",
    },
    {
      id: 4,
      image: sql,
      title: "CERTIFICATION COURSE",
      description: "IBM SQL and Relational Database 101 Certification Course",
      price: "3000",
      url: "/IBMSQL",
    },
    {
      id: 5,
      image: tensorlow,
      title: "CERTIFICATION COURSE",
      description: "IBM Deep Learning with TensorFlow Certification Course",
      price: "3000",
      url: "/IBMDeepLearning",
    },
    {
      id: 6,
      image: datasci,
      title: "CERTIFICATION COURSE",
      description: "IBM Data Science Methodology Certification Course",
      price: "3000",
      url: "/IBMMethodology",
    },
    {
      id: 7,
      image: pydatasci,
      title: "CERTIFICATION COURSE",
      description: "IBM Python for Data Science Certification Course",
      price: "3000",
      url: "/IBMPython",
    },
    {
      id: 8,
      image: Api,
      title: "CERTIFICATION COURSE",
      description: "IBM Rest API Certification Course",
      price: "3000",
      url: "/IBMRestAPI",
    },
    {
      id: 9,
      image: scala101,
      title: "CERTIFICATION COURSE",
      description: "IBM Scala 101 Certification Course",
      price: "3000",
      url: "/IBMScala",
    },
    {
      id: 10,
      image: aglie,
      title: "CERTIFICATION COURSE",
      description: "IBM Agile Methodologies Certification Course",
      price: "3000",
      url: "/IBMAgileMethodologies",
    },
    {
      id: 11,
      image: devops,
      title: "CERTIFICATION COURSE",
      description: "IBM DevOps Fundamentals Certification Course",
      price: "3000",
      url: "/IBMDevopsFundamentals",
    },
    {
      id: 12,
      image: pydataanalis,
      title: "CERTIFICATION COURSE",
      description: "IBM Data Analysis with Python Certification Course",
      price: "3000",
      url: "/IBMDataAnalysis",
    },
    {
      id: 13,
      image: cloudfunda,
      title: "CERTIFICATION COURSE",
      description: "IBM Cloud Fundamental Certification Course",
      price: "3000",
      url: "/IBMCloudFundamental",
    },
    {
      id: 14,
      image: container,
      title: "CERTIFICATION COURSE",
      description:
        "IBM Introduction to Containers, Kubernetes and OpenShift V2 Certification Course",
      price: "3000",
      url: "/IBMKubernetes",
    },
    {
      id: 15,
      image: bigdata,
      title: "CERTIFICATION COURSE",
      description:
        "IBM Introduction to Big Data, Hadoop and the Ecosystems Certification Course",
      price: "3000",
      url: "/IBMBigData",
    },
    {
      id: 16,
      image: nodejs,
      title: "CERTIFICATION COURSE",
      description: "IBM Node JS Certification Course",
      price: "3000",
      url: "/IBMNodeJs",
    },
    {
      id: 17,
      image: mangodb,
      title: "CERTIFICATION COURSE",
      description: "IBM NoSQL – MongoDB Certification Course",
      price: "3000",
      url: "/IBMNoSQL",
    },
    {
      id: 18,
      image: Machine,
      title: "CERTIFICATION COURSE",
      description: "IBM Machine Learning with Python Certification Course",
      price: "3000",
      url: "/IBMMachineLearning",
    },
    {
      id: 19,
      image: js,
      title: "CERTIFICATION COURSE",
      description: "IBM JavaScript Certification Course",
      price: "3000",
      url: "/IBMJavaScript",
    },
  ];

  return (
    <>

      <Helmet>
        <title>IBM Certification Course | IT Training & Certification</title>
        <meta
          name="description"
          content="Get industry recognized IBM Certification and advance in your career. Our IBM Certification will offer you Cloud Computing, AI and Data Science,Cyber Security Certifications."
        />
        <link rel="canonical" href="https://traincapetech.in/IBM" />
      </Helmet>



      <AddToCartButton />

      <div
        className="bg-gray-100 w-full relative contrast-75 h-[55vh] content-center text-justify"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-5">
          <div className="lg:w-2/3 w-full ">
            <h1 className="text-2xl  md:text-4xl lg:text-4xl font-bold font-serif ">
              <a
                href="https://www.ibm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                title="Visit IBM Official Website"
              >
                IBM
              </a> Certification Courses
            </h1>
            <h5 className="text-xs md:text-xl lg:text-base xl:text-xl mt-4">
              IBM Certification Courses helps learners gain skills in the latest
              emerging technologies
              <br />
              including AI/ML, Analytics, Blockchain, Cloud, Cybersecurity, Data
              Science, and more.
            </h5>
          </div>
          <div className="hidden lg:block p-10  mt-5 ">
            <img
              className="w-[28rem] h-auto transition-transform duration-300 ease-in-out hover:scale-110"
              src={banner2}
              alt="IBM Certification"
            />
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
              navigate("/Courses-details");
            }}
            className="text-gray-600 font-bold py-2 px-4 rounded"
          >
            <span className="hover:text-gray-800">Course Details</span>
          </button>
          <span>{" > "}</span>
          <span className="ml-4">IBM</span>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {ibmcourses.map((course) => (
            <IBMCourses key={course.id} {...course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IBM;