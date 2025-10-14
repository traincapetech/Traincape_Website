import React, { useEffect, useState } from "react";
import banner from "../../assets/ibmbanner.jpg";
import banner2 from "../../assets/adobebanner.png";
import Card1 from "../../assets/adobe1.webp";
import Card2 from "../../assets/adobe2.webp";
import Card3 from "../../assets/adobe3.webp";
import Card4 from "../../assets/adobe4.webp";
import Card5 from "../../assets/adobe5.webp";
import Card6 from "../../assets/adobe6.webp";
import AdobeCourses from "../../components/AdobeCourses";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../../components/AddToCartButton";
import { useCartContext } from "../../components/CartContext";

const Adobe = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    const product = {
      id: "adobe-photoshop-certified-professional",
      title: "Adobe Photoshop Certified Professional",
      price: 2499,
      image: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/photoshop.svg",
      quantity: 1,
    };
    addToCart(product);
    setShowConfirmation(true);

    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const adobecourses = [
    {
      image: Card1,
      description: "Adobe Certified Professional – Photoshop Certification",
      price: "₹1149",
      url: "/AdobeCourse/AdobePhotoshop",
    },
    {
      image: Card2,
      description: "Adobe Certified Professional – InDesign Certification",
      price: "₹1149",
      url: "/AdobeCourse/AdobeInDesign",
    },
    {
      image: Card3,
      description: "Adobe Certified Professional – Illustrator Certification",
      price: "₹1149",
      url: "/AdobeCourse/AdobeIllustrator",
    },
    {
      image: Card4,
      description: "Adobe Certified Professional – Premiere Pro Certification",
      price: "₹1149",
      url: "/AdobeCourse/AdobePremiere",
    },
    {
      image: Card5,
      description: "Adobe Certified Professional – Lightroom Certification",
      price: "₹1149",
      url: "/AdobeCourse/AdobeLightroom",
    },
    {
      image: Card6,
      description: "Adobe Certified Professional – After Effects Certification",
      price: "₹1149",
      url: "/AdobeCourse/AdobeAfterEffects",
    },
  ];

  const navigate=useNavigate()
  return (
    <>
      <AddToCartButton />
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
                href="https://www.adobe.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors cursor-pointer"
                title="Visit Adobe Official Website"
              >
                Adobe
              </a> Certified Professional (ACP)
            </h1>
            <h5 className="text-sm md:text-lg lg:text-base xl:text-xl mt-4">
              Adobe Certified Professional is the industry-recognized
              certification that demonstrates mastery of Adobe Creative Cloud
              software and must-have knowledge for digital media careers. Each
              exam is integrated with an Adobe application and designed by
              experts, allowing for an authentic assessment of job-ready skills.
              <br /> <br />
              Traincape provides a full pathway solution that students can use
              to prepare for the Adobe Certified Professional certification.
              From tailored learning materials and practice tests to Adobe
              endorsed certification exams, Traincape provides assistance every step of the way.
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
          <span className="ml-4">Adobe</span>
        </div>
      </div>
      <div className="bg-teal-50 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mx-auto">
          {adobecourses.map((course, index) => (
            <AdobeCourses
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

export default Adobe;