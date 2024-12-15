import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#161616] mx-auto w-full text-white">
      <div className="p-2">
        <h1 className="text-xl font-bold">Chic Beauté</h1>
        <div className="py-2 pl-2">
          <div className="flex justify-content-center gap-x-2 pt-2">
            <FaInstagram className="text-lg" />
            <p className="text-sm">Chic_Beautee</p>
          </div>
          <div className="flex justify-content-center gap-x-2 pt-2">
            <FaTiktok className="text-lg" />
            <p className="text-sm">Chic_Beautee</p>
          </div>
          <div className="flex justify-content-center gap-x-2 pt-2">
            <IoLocationSharp className="text-lg" />
            <p className="text-sm">Surabaya</p>
          </div>
          <div className="flex justify-content-center gap-x-2 pt-2">
            <MdEmail className="text-lg" />
            <p className="text-sm">Chicbeatueee@gmail.com</p>
          </div>
          <div className="flex justify-content-center gap-x-2 pt-2">
            <FaPhoneSquareAlt className="text-lg" />
            <p className="text-sm">+6281234534461</p>
          </div>
        </div>
      </div>
      <div className="bg-[#222222]">
        <p className="text-sm text-center py-1">
          &copy; 2024 Chic Beauté. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
