import React, { useEffect } from "react";

const WebsiteCounter = () => {
  useEffect(() => {
    // Add the counter script to the DOM
    const img = new Image();
    img.src =
      "https://www.coolseotools.com/website-visitor-counter/count/&style=style1&show=u&num=9&uid=Dr";
    document.body.appendChild(img);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(img);
    };
  }, []);

  return (
    <a
      href="https://www.coolseotools.com/website-visitor-counter"
      target="_blank"
      rel="noopener noreferrer"
      title="Web Counter"
    >
      {/* <img src="https://www.coolseotools.com/website-visitor-counter/count/&style=style1&show=u&num=9&uid=Dr" title="Web Counter" alt="AtoZSEOTools Web Counter" /> */}
    </a>
  );
};

export default WebsiteCounter;