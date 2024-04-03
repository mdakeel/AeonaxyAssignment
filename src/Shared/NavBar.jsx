import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

//react icon start
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { GrShare } from "react-icons/gr";
// react icon end

export const NavBar = () => {
  // menu icon start
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // menu icon ende

  return (
    <>
      <nav className="bg-white 2xl:px-[150px]   mx-auto fixed top-0 right-0 left-0">
      {/* <div className='text-lg  mx-auto  items-center'> */}
  
        <div className="flex md:space-x-14 p-8 space-x-10 justify-between items-center">
          <div className="flex flex-row items-center xl:space-x-3 md:space-x-2 space-x-1">
            <a href="/" className="text-2xl  flex items-cente">
              <img
                src={logo}
                alt="logo"
                className="w-10 inline-block items-center"
              />
              <span className="text-primary xl:text-[22px] md:text-[19px] font-semibold">Calendly</span>
            </a>
            <hr class="w-[1.5px] md:flex md:h-8 h-6 bg-gray-400 hidden " />

            <span className="font-semibold md:flex text-secondary xl:text-[18px] md:text-[16px] sm:text-[16px] cursor-pointer hover:text-gray-500 hidden">
              Help Center
            </span>
          </div>

          <div className="md:flex flex-row items-center xl:space-x-8 md:space-x-3 sm:space-x-1 hidden">
            <div className="flex md:flex-row  flex-col xl:space-x-8 md:space-x-3 space-x-1">
              <div className="menu">
                <span>Developers</span>
                <GrShare />
              </div>
              <div className="menu">
                <span>Report Abuse</span>
                <GrShare />
              </div>
              <div className="menu">
                <span>Contact Us</span>
                <GrShare />
              </div>
            </div>
            <hr class="w-[1px] h-6  bg-gray-400 " />
            <div className="flex flex-row text-secondary text-[14px] xl:space-x-8 md:space-x-4 sm:space-x-2">
              <p className="text-secondary text-[14px] hover:text-primary cursor-pointer">
                Login
              </p>
              <p className="text-secondary text-[14px] hover:text-primary cursor-pointer">
                Sign Up
              </p>
            </div>
          </div>
        {/* </div> */}

        {/* menu btn. only display on mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-xl focus:outline-none focus:text-gray-300"
          >
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 text-primary" />
            ) : (
              <FaBars className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
        </div>
      </nav>
      {/* menu btn end */}

      {/* navitem for mobile devices start */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 border-b   ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        <div className="flex flex-row  px-10  space-x-10">
          <div className="md:flex ">
            <div className="menu">
              <span>Developers</span>
              <GrShare />
            </div>
            <div className="menu">
              <span>Report Abuse</span>
              <GrShare />
            </div>
            <div className="menu">
              <span>Contact Us</span>
              <GrShare />
            </div>
            <div className="menu">
              <span>Help Center</span>
              <GrShare />
            </div>
          </div>
          <div className="flex space-x-4  ">
          <hr class="w-[1px] h-full  bg-gray-400 " />
          <div className=" mt-2">
            <p className="text-secondary text-[14px] hover:text-primary cursor-pointer ">Login</p>
            <p className="text-secondary text-[14px] hover:text-primary cursor-pointer " >Sign Up</p>
          </div>
          </div>
        </div>
      </div>
      {/* navitem for mobile devices end */}
    </>
  );
};
