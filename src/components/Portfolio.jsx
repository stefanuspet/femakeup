import React from "react";
import bgImage from "../assets/images/bg-img.jpg";

const Portfolio = () => {
  return (
    <div className="w-full h-full bg-[#C48085]">
      <div className="w-full h-[100px] flex overflow-x-auto snap-x snap-mandatory">
        <img
          src={bgImage}
          alt="Gallery 1"
          className="w-1/2 h-full object-cover snap-center"
        />
        <img
          src={bgImage}
          alt="Gallery 2"
          className="w-1/2 h-full object-cover snap-center"
        />
        <img
          src={bgImage}
          alt="Gallery 3"
          className="w-1/2 h-full object-cover snap-center"
        />
      </div>
    </div>
  );
};

export default Portfolio;
