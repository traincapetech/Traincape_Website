import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Img1 from "../assets/B1.png";
import Img2 from "../assets/B2.png";
import Img3 from "../assets/B3.png";
import Img4 from "../assets/B4.png";
import Img5 from "../assets/B5.png";
import Img6 from "../assets/img6Course.webp";
import Phoneimg1 from "../assets/CISCO1.jpg";
import Phoneimg2 from "../assets/AWS1.jpg";
import Phoneimg3 from "../assets/AWSTraincapetech.jpg";
import Phoneimg4 from "../assets/Cybersecurity.jpg";
import Phoneimg5 from "../assets/MicrosoftBanner.jpg";
import Phoneimg6 from "../assets/PMI1.jpg";

function AutoPlay() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getImage = (imgMobile, imgDesktop) => {
        return windowWidth < 768 ? imgDesktop : imgMobile;
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        ltr: true,
    };

    return (
        <div className="bg-gray-50 h-60 ">
            <Slider {...settings}>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img
                        src={getImage(Img1, Phoneimg1)}
                        alt="Course Image 1"
                        className="w-full h-auto object-contain max-w-full max-h-full"
                    />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img src={getImage(Img2, Phoneimg2)} alt="Course Image 2" className="w-full h-auto object-contain max-w-full max-h-full" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img src={getImage(Img3, Phoneimg3)} alt="Course Image 3" className="w-full h-auto object-contain max-w-full max-h-full" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img src={getImage(Img4, Phoneimg4)} alt="Course Banner" className="w-full h-auto object-contain max-w-full max-h-full" />
                </div>
                <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img src={getImage(Img5, Phoneimg5)} alt="Course Image 4" className="w-full h-auto object-contain max-w-full max-h-full" />
                </div>
                {/* <div className="flex justify-center items-center p-1 pr-4 pl-4 pt-3 min-h-[400px]">
                    <img src={getImage(Img6, Phoneimg6)} alt="Course Image 5" className="w-full h-auto object-contain max-w-full max-h-full" />
                </div> */}
            </Slider>
        </div>
    );
}

export default AutoPlay;