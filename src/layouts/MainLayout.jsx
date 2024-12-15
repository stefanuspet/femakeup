import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="font-poppins">
      <Navbar />
      <main className="mx-auto h-full w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
