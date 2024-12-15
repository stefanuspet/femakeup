import React from "react";
import img from "../assets/images/about1.avif";
import img2 from "../assets/images/about2.avif";

const About = () => {
  return (
    <div id="about" className="w-full h-full bg-[#C48085]">
      <h1 className="text-xl text-center font-bold text-white py-2">About</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 justify-items-center bg-white py-10 lg:py-0">
        <div className="px-4 lg:px-10 lg:pt-10">
          <h1 className="text-center text-lg font-semibold text-[#C48085] lg:text-4xl">
            Chic Beauté
          </h1>
          <p className="text-justify text-[#C48085] lg:text-xl lg:pt-10">
            Chic Beautee, a makeup artist service since 2022, is dedicated to
            transforming your special moments into unforgettable memories. We do
            more than just apply makeup; we reveal your true essence through
            professional and heartfelt touches. Each of our makeup designs is
            crafted with care, uncovering the hidden beauty and confidence
            within you, ensuring you shine radiantly in every significant moment
            of your life.
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div className="px-4 lg:px-10 lg:pt-10">
          <h1 className="text-center text-lg font-semibold text-[#C48085] lg:text-4xl">
            BOOK US!
          </h1>
          <p className="text-justify text-[#C48085] lg:text-xl lg:pt-10">
            Chic Beautee, we offer professional makeup services that include
            wedding makeup, photo shoot makeup, event makeup, and prewedding &
            graduation makeup, designed to bring out your best charm in every
            special moment with a professional and personal touch.
          </p>
          <div className="pt-5 flex justify-center">
            <a
              href="#service"
              className="bg-[#C48085] text-white px-2 py-1 rounded-md"
            >
              Book Now !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
