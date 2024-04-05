import React from "react";
// png images
import account from "../assets/account.png";
import getting from "../assets/getting1.png";
import integrations from "../assets/integrations.png";
import video from "../assets/video.png";
import using from "../assets/using_calendly.png";
import mobile from "../assets/mobile.png";

export const Categories = () => {
  return (
    <div className="bg-white 2xl:px-[150px]   mx-auto  flex md:items-center md:justify-center">
      <div className="p-12 ">
        <div className="text-center md:text-[45px] p-4 text-secondary text-[35px] font-bold ">
          Categories
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center  grid xl:grid-cols-3 md:grid-cols-2 place-content-center gap-6 ">
          <div className="relative w-full">
            <div className="absolute right-0 bg-primary px-4 py-1 text-[13px] rounded-tr-[10px] rounded-bl-[10px] text-[#fff] font-bold">
              New
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-primary rounded-[10px] p-3 w-[330px] hover:shadow-md transition-all duration-300">
              <img src={getting} alt="" className="w-[100px] h-[100px] mb-2" />
              <h1 className="text-[20px] font-bold text-secondary">
                Getting Started
              </h1>
              <p className=" text-[14px] text-center">
                Learn the basics, connect your calendar, and discover features
                that will make scheduling easire.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-[10px] w-[330px] p-3 hover:shadow-md transition-all duration-300">
            <img src={using} alt="" className="w-[100px] h-[100px] mb-2" />
            <h1 className="text-[20px] font-bold text-secondary">
              Using Calendly
            </h1>
            <p className="text-[14px] text-center">
              Availability, Event Type Settings, and Multi-user features.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-[10px] w-[330px] p-3 hover:shadow-md transition-all duration-300">
            <img src={mobile} alt="" className="w-[100px] h-[100px] mb-2" />
            <h1 className="text-[20px] font-bold text-secondary">
              Calendly For Mobile
            </h1>
            <p className="w-[300px] text-[14px] text-center">
              Mobile Apps for iOS & Android.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-[10px]  w-[330px] p-3 hover:shadow-md transition-all duration-300">
            <img
              src={integrations}
              alt=""
              className="w-[100px] h-[100px] mb-2"
            />
            <h1 className="text-[20px] font-bold text-secondary">
              Integrations & Automations
            </h1>
            <p className="w-[300px] text-[14px] text-center">
              Includes Calendar Connections, Calendly Integrations, Workflows,
              and Emded Options.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-[10px] w-[330px] p-3 hover:shadow-md transition-all duration-300">
            <img src={account} alt="" className="w-[100px] h-[100px] mb-2" />
            <h1 className="text-[20px] font-bold text-secondary">
              Account Settings
            </h1>
            <p className="w-[300px] text-[14px] text-center">
              Includes Billing, Security, SAML/SCIM setup, and account options.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-[10px] w-[330px] p-3 hover:shadow-md transition-all duration-300">
            <img src={video} alt="" className="w-[100px] h-[100px] mb-2" />
            <h1 className="text-[20px] font-bold text-secondary">
              Video Tutorials
            </h1>
            <p className="w-[300px] text-[14px] text-center">
              Watch these short videos to learn about getting started with
              Calendly.
            </p>
          </div>
        </div>
        <div className=" border-dotted border-2  border-b-gray-400 mt-10"></div>
      </div>
    </div>
  );
};
