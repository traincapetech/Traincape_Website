import React, { useEffect } from "react";
import Slider from "../../components/slider/Slider";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Slider height="500px" />
    </div>
  );
};

export default LandingPage;
