

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import Partner Logos
import Logo1 from "../assets/SBS.png";
import Logo2 from "../assets/ThreatMatrix.png";

import Logo4 from "../assets/Gruslabs.svg";
import Logo5 from "../assets/MSA.png";
import Logo6 from "../assets/spectre.webp";

import Product1 from "../assets/hexnode.svg";
import Product2 from "../assets/symclogo.png";
import Product3 from "../assets/sumo.png";
import Product4 from "../assets/scalefusion.svg";
import Product5 from "../assets/qradar.png";
import Product6 from "../assets/AT&T.png";
import Product7 from "../assets/AlienVault.png";
import Product8 from "../assets/Rapid7_logo.svg";
import Product9 from "../assets/salesforce.svg";
// import Product10 from "../assets/Product10.png";

const PartnerSection = () => {
  const navigate = useNavigate();

  const partners = [
    { logo: Logo1, url: "https://sbs-mea.com/" },
    { logo: Logo2, url: "https://threatmatrix.co.uk/" },
    
    { logo: Logo4, url: "https://www.gruslabs.com/" },
    { logo: Logo5, url: "https://msasoftware.in/" },
    { logo: Logo6, url: "https://spectreme.ai/" },
  ];

  const products = [
    {
      logo: Product1,
      url: "https://www.hexnode.com/unified-endpoint-management/?utm_device=c&utm_source=google&utm_medium=cpc&utm_term=hexnode&utm_campaign=India-Search-Brand-Hexnode&hsa_cam=14880559867&hsa_grp=126022139177&hsa_mt=b&hsa_src=g&hsa_ad=550476363565&hsa_acc=6098326672&hsa_net=adwords&hsa_kw=hexnode&hsa_tgt=kwd-310840536220&hsa_ver=3&gad_source=1&gclid=CjwKCAiAw5W-BhAhEiwApv4goEPmzwqadRjctBYiVDcMrtcjEo010RJMgzJ7OiL_Y6mq0ucQPNTUmxoCstkQAvD_BwE",
    },
    { logo: Product2, url: "https://vip.symantec.com/" },
    { logo: Product3, url: "https://www.sumologic.com/" },
    { logo: Product4, url: "https://scalefusion.com/" },
    { logo: Product5, url: "https://www.ibm.com/qradar" },
    { logo: Product6, url: "https://www.att.com/" },
    { logo: Product7, url: "https://levelblue.com/" },
    { logo: Product8, url: "https://www.rapid7.com/" },
    { logo: Product9, url: "https://www.salesforce.com/in/" },
    // { logo: Product10, url: "https://product10.com" },
  ];

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="bg-gradient-to-r from-blue-200 to-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg flex flex-col md:flex-col lg:flex-row justify-between items-center w-full mx-auto">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-10">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Partners & Team
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Collaborative Excellence: Building Bridges, Driving Success
        </h2>
        <div className="container mx-auto p-2 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-6 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded shadow-md p-4 group">
                <a href={product.url}>
                  <img
                    src={product.logo}
                    alt={product.name}
                    className={`group-hover:scale-110 w-full h-36 sm:h-40 md:h-44 object-contain rounded-t-md ${
                      product.logo === Product8 ? "rapid7-logo" : ""
                    }`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 text-center md:text-left mt-6 sm:mt-8 md:mt-0 p-4 sm:p-6 md:p-10">
        <p className="text-lg sm:text-xl font-medium text-gray-600 mb-6">
          Empowering partnerships and fostering teamwork to achieve unparalleled
          excellence. Our dedicated approach and shared vision create a synergy
          that fuels innovation and drives sustainable success for all.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 mb-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="hover:scale-110 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-full overflow-hidden flex items-center justify-center bg-white"
            >
              <a
                href={partner.url}
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-[85%] h-[85%] object-contain"
                  style={{ filter: "invert(1)" }}
                />
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            navigate("/contact-us");
          }}
          className="mt-4 bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all"
        >
          Become a partner →
        </button>
      </div>
    </div>
  );
};

export default PartnerSection;