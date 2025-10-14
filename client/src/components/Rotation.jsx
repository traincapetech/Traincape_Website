// import React, { useState } from "react";

// const items = [
//   {
//     imgSrc:
//       "https://omsoftsolution.com/wp-content/uploads/2023/07/hm02-1-e1689741567859.webp",
//     title: "WEB DESIGN",
//   },
//   {
//     imgSrc:
//       "https://omsoftsolution.com/wp-content/uploads/2023/07/hm03-1-e1689741602280.webp",
//     title: "WEB DEVELOPMENT",
//   },
//   {
//     imgSrc:
//       "https://omsoftsolution.com/wp-content/uploads/2023/07/hm04-e1686026304907-1.webp",
//     title: "SEO SERVICES",
//   },
//   {
//     imgSrc:
//       "https://omsoftsolution.com//wp-content/uploads/2023/05/hm05-e1686026365357.webp",
//     title: "APP DEVELOPMENT",
//   },
//   {
//     imgSrc:
//       "https://omsoftsolution.com//wp-content/uploads/2023/05/hm06-e1686026415227.webp",
//     title: "DIGITAL MARKETING",
//   },
//   {
//     imgSrc:
//       "https://omsoftsolution.com//wp-content/uploads/2023/05/hm07-e1686026451998.webp",
//     title: "SOFTWARE SERVICES",
//   },
// ];

// const Rotation = () => {
//   const [rotation, setRotation] = useState(0);
//   const [perspective, setPerspective] = useState("4000px");

//   const updateGallery = (delta) => {
//     setRotation((prev) => prev + delta);
//   };

//   return (
//     <div className="flex flex-col relative items-center justify-between pt-4 h-[30vh]  mx-auto bg-gray-900">
//       <div
//         className="relative w-[110px] h-[80px] perspective"
//         style={{
//           perspective: "4000px", 
//         }}
//         // sm:4000px
//         // lg:1000px
//       >
//         <div
//           className="absolute w-full h-full transition-transform duration-700"
//           style={{
//             transform: `rotateY(${rotation}deg)`,
//             transformStyle: "preserve-3d",
//           }}
//         >
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="absolute inset-0 w-[160px] h-[118px] flex flex-col items-center  bg-white text-black justify-center border-2 border-blue-500 rounded-lg"
//               style={{
//                 transform: `rotateY(${index * 60}deg) translateZ(150px)`, // Adjust angle for better spacing
//               }}
//               // lg:450px 
//             >
//               <img
//                 src={item.imgSrc}
//                 alt={item.title}
//                 className="w-16 h-16 object-cover mb-2 "
//               />
//               <h3 className="text-black text-sm font-bold">{item.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex space-x-4 absolute bottom-2">
//         <button
//           onClick={() => updateGallery(60)}
//           className="btn bg-white text-black border py-0.5 px-1 rounded-md shadow-full hover:bg-blue-600 hover:text-white"
//         >
//           &lt;
//         </button>
//         <button
//           onClick={() => updateGallery(-60)}
//           className="btn bg-white text-black border py-0.5 px-1 rounded-md shadow-md hover:bg-blue-600 hover:text-white"
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Rotation;
import React, { useState, useEffect } from "react";

const items = [
  {
    imgSrc:
      "https://omsoftsolution.com/wp-content/uploads/2023/07/hm02-1-e1689741567859.webp",
    title: "WEB DESIGN",
    link: "", 
  },
  {
    imgSrc:
      "https://omsoftsolution.com/wp-content/uploads/2023/07/hm03-1-e1689741602280.webp",
    title: "SOFTWARE DESIGN",
    link: "", 
  },
  {
    imgSrc:
      "https://omsoftsolution.com/wp-content/uploads/2023/07/hm04-e1686026304907-1.webp",
    title: "TRAINING",
    link: "", 
  },
  {
    imgSrc:
      "https://omsoftsolution.com//wp-content/uploads/2023/05/hm05-e1686026365357.webp",
    title: "INTERNSHIP",
    link: "", 
  },
  {
    imgSrc:
      "https://omsoftsolution.com//wp-content/uploads/2023/05/hm06-e1686026415227.webp",
    title: "CYBER SECURITY SERVICES",
    link: "", 
  },
  {
    imgSrc:
      "https://omsoftsolution.com//wp-content/uploads/2023/05/hm07-e1686026451998.webp",
    title: "SOFTWARE DEVELOPMENT",
    link: "", 
  },
  {
    imgSrc:
      "https://omsoftsolution.com//wp-content/uploads/2023/05/hm06-e1686026415227.webp",
    title: "PROJECT DELIVERY",
    link: "", 
  },
];

const Rotation = () => {
  const [rotation, setRotation] = useState(0);
  const [translateZ, setTranslateZ] = useState(150); // Default translateZ for medium screens
  const [perspective, setPerspective] = useState("3000px"); // Default perspective for medium screens

  // Function to handle screen resizing
  const handleResize = () => {
    const width = window.innerWidth;
    // Adjust translateZ and perspective based on screen size
    if (width >= 600 && width < 1024) {
      setTranslateZ(250); // Medium screens (e.g., tablets)
      setPerspective("900px"); // Perspective for medium screens
    } else if (width >= 1024) {
      setTranslateZ(450); // Large screens (e.g., desktops)
      setPerspective("1000px"); // Perspective for large screens
    }
  };

  // Set up event listener for window resizing
  useEffect(() => {
    handleResize(); // Initialize translateZ and perspective based on current screen size
    window.addEventListener("resize", handleResize); // Add event listener for resizing

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update rotation
  const updateGallery = (delta) => {
    setRotation((prev) => prev + delta);
  };

  return (
    <div className="flex flex-col relative items-center justify-evenly h-[75vh] bg-gray-900">
      {/* <h1 className="text-white">Our Services</h1> */}
      <div
        className="relative w-[210px] h-[158px] perspective"
        style={{
          perspective: perspective, // Dynamic perspective value based on screen size
        }}
      >
        <div
          className="absolute w-full h-full transition-transform duration-700"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, index) => (
            <a
              key={index}
              // href={item.link} // Add the link to each card
              // target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // For security reasons
              className="absolute inset-0 w-[210px] h-[158px] flex flex-col items-center hover:bg-blue-600 hover:text-white bg-white text-black justify-center border-2 border-blue-500 rounded-lg"
              style={{
                transform: `rotateY(${index * 60}deg) translateZ(${translateZ}px)`, // Dynamic translateZ value based on screen size
              }}
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-16 h-16 object-cover mb-2"
              />
              <h3 className=" text-sm font-bold">{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
      <div className="flex space-x-8 absolute bottom-2">
        <button
          onClick={() => updateGallery(60)}
          className="btn bg-white text-2xl text-black px-4 py-2 rounded-2xl shadow-md hover:text-blac hover:bg-blue-500 hover:text-white"
        >
          &lt;
        </button>
        <button
          onClick={() => updateGallery(-60)}
          className="btn bg-white text-2xl text-black px-4 py-2 rounded-2xl shadow-md hover:text-blac hover:bg-blue-500 hover:text-white"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Rotation;