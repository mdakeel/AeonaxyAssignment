import React from "react";


// react icons
import { MdOutlineSearch } from "react-icons/md";
import { MdSettingsSuggest } from "react-icons/md";
import { MdScheduleSend } from "react-icons/md";
import { FcParallelTasks } from "react-icons/fc";
import { LuLampWallDown } from "react-icons/lu";
import { GrChatOption } from "react-icons/gr";
import { PiGoogleChromeLogoFill } from "react-icons/pi";
import { SiChatwoot } from "react-icons/si";

export const Home = () => {
  return (
    <div className="bg-white 2xl:px-[150px] w-full max-w-s  mx-auto  flex items-center justify-center">
      <div className="p-10 mt-[100px]">
        <div className="space-y-4">
          <div>
            <h1 className="text-secondary md:text-[50px] text-[40px] font-extrabold">
              What can we help you with?
            </h1>
          </div>
          <div className=" flex justify-center items-center   ">
            <form className="">
              <div className="relative w-full">
                <div className="absolute top-5 left-5 ">
                  <MdOutlineSearch className="w-6 h-6 text-gray-500 cursor-pointer" />
                </div>

                <input
                  type="search"
                  id="search"
                  className="xl:w-[600px] md:w-[500px] p-6 sm:w-[400px] w-[350px] h-[60px] ps-14 text-sm border-[#8d9399] border focus:border-none rounded-full shadow-md "
                  placeholder="Search "
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-3 justify-center xl:space-x-10 md:space-x-6 space-x-0 mt-10">
          <div className="space-y-3">
            <div className="event">
              <MdSettingsSuggest className="w-6 h-6 text-blue-900" />
              <h3>Setting up your first event</h3>
            </div>
            <div className="event">
              <MdScheduleSend className="w-6 h-6 text-[#EE9AE5]" />
              <h3>Schedule with video conferencing</h3>
            </div>
            <div className="event">
              <FcParallelTasks className="w-6 h-6 " />
              <h3>Automate tasks with Workflows</h3>
            </div>
          </div>
          <div className="space-y-3">
            <div className="event">
              <LuLampWallDown className="w-6 h-6 text-yellow-600" />
              <h3>Troubleshoting availabilty</h3>
            </div>
            <div className="event">
              <GrChatOption className="w-6 h-6 text-green-300" />
              <h3>Embed options overview</h3>
            </div>
            <div className="event">
              <PiGoogleChromeLogoFill className="w-6 h-6 text-red-500" />
              <h3>Using Calendly for Chrome</h3>
            </div>
          </div>
        </div>
      </div>
      <div><SiChatwoot className="fixed w-10 h-10 bottom-10 right-10 cursor-pointer  text-primary" /></div>
    </div>
  );
};
