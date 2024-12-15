import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { logout } from "../api/auth";

const Navbar = () => {
  const [isMenu, setMenu] = useState(false);

  const handleOnClick = () => {
    setMenu(!isMenu);
    console.log("clicked");
  };

  const handleClose = () => {
    setMenu(false);
  };

  const handleLogout = () => {
    logout().then((res) => {
      console.log(res);
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.href = "/";
    });
  };

  return (
    <div className="relative">
      <div className="px-4 py-5 bg-[#C48085] flex justify-between items-center text-white fixed w-full drop-shadow-md">
        <div className="flex justify-between w-full">
          <a href="/" className="text-md font-bold">
            Chic Beauté
          </a>
          <div className="lg:flex gap-5 hidden">
            <a href="/#service" className="text-lg ">
              Service
            </a>
            <a href="/#about" className="text-lg ">
              About
            </a>
            {localStorage.getItem("token") ? (
              <a href="payment" className="text-lg ">
                payment
              </a>
            ) : null}
            {localStorage.getItem("token") ? (
              <a
                onClick={() => handleLogout()}
                className="text-lg cursor-pointer"
              >
                Logout
              </a>
            ) : (
              <a href="/login" className="text-lg ">
                Login
              </a>
            )}
          </div>
        </div>
        <div className="lg:hidden">
          <RiMenuFill
            className="text-2xl lg:hidden"
            onClick={() => handleOnClick()}
          />
        </div>
      </div>
      <div
        className={
          isMenu
            ? "w-full h-full bg-[#161616] fixed text-white py-10 transition-all duration-300"
            : "hidden"
        }
      >
        <IoMdClose
          className="mx-auto text-3xl"
          onClick={() => handleOnClick()}
        />
        <div className="w-full h-full py-5 lg:hidden">
          <a
            href="/#service"
            className="text-xl block py-2 font-bold text-center"
            onClick={() => handleClose()}
          >
            Service
          </a>
          <a
            href="/#about"
            className="text-xl block py-2 font-bold text-center"
            onClick={() => handleClose()}
          >
            About
          </a>
          {localStorage.getItem("token") ? (
            <a
              href="payment"
              className="text-xl block py-2 font-bold text-center"
              onClick={() => handleClose()}
            >
              payment
            </a>
          ) : null}
          {localStorage.getItem("token") ? (
            <a
              href="/logout"
              className="text-xl block py-2 font-bold text-center cursor-pointer"
              onClick={() => handleLogout()}
            >
              Logout
            </a>
          ) : (
            <a
              href="/login"
              className="text-xl block py-2 font-bold text-center"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
