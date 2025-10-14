import React, { useEffect } from "react";
import {Link} from 'react-router-dom';

const MicrosoftOffCourses = ({image,title, description, price,url}) => {
    useEffect(() => {
        window.scrollTo(0,0);

    },[]);

    return (
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg border border-[#212146] hover:shadow-xl transition-shadow">
              {/* Title */}
              <h1 className="text-lg md:text-xl font-bold text-black mb-4 text-center">{title}</h1>
        
              {/* Image */}
              <Link to={url}>
              <img className="w-20 h-20 md:w-[15rem] md:h-[9rem] mb-4 object-cover" src={image} />
              </Link>

              {/*Description */}
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-4 text-center">{description}</h3>

              {/*Price */}
              <h5 className="text-xl  font-bold mr-auto">{price} </h5>
        </div>
    );
};
export default MicrosoftOffCourses;