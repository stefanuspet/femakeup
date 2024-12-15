import React from "react";
import MainLayout from "../layouts/MainLayout";
import bgImage from "../assets/images/bg-img.jpg";
import OurService from "../components/OurService";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <MainLayout>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="grid place-content-center h-full text-center text-white px-10">
          <h1 className="text-4xl font-black">Chic Beauté</h1>
          <p className="italic text-xs">
            Transform Your Beauty, Elevate Your Confidence
          </p>
        </div>
      </div>
      <OurService />
      <About />
      {/* <Portfolio /> */}
    </MainLayout>
  );
};

export default Home;
