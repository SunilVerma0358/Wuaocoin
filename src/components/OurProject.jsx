import React from "react";
import OurProjectImg from "../assets/images/our-projects.webp";
import ourProjectLogo from "../assets/images/our-project-logo.webp";
import ourProjectRight from "../assets/images/our-Project-right.webp";
const OurProject = () => {
  return (
    <div className="relative z-10">
      <div className="absolute top-[5%] right-0 -z-10 overflow-hidden">
        <img className="h-full" src={ourProjectRight} alt="right" />
      </div>
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 pt-5 md:pt-[100px] lg:pt-[80px] xl:pt-[160px] 2xl:pt-[240px] mx-auto ">
        <div className="flex flex-row flex-wrap -mx-3 items-center pb-12 ">
          <div className="md:w-6/12 w-full px-3">
            <div className="relative -z-30">
              <img
                className="w-full hover:scale-105 transition-all ease-linear duration-300 "
                src={OurProjectImg}
                alt="ourproject"
              />
              <img
                className="absolute w-1/3 top-[33%] left-[33%] rounded-[50px] animate-footerLogo"
                src={ourProjectLogo}
                alt="logo"
              />
            </div>
          </div>
          <div className="md:w-6/12 w-full px-3">
            <h2 className="text-[#32352C] font-Montserrat font-bold leading-normal text-[35px] sm:text-[45px] md:text-[50px] text-center md:text-start">
              Our Project
            </h2>
            <p className="text-black opacity-[0.7] font-Montserrat leading-[174%] font-normal text-base sm:text-[18px] max-w-[447px] pt-[14px] mx-auto md:mx-0 ">
              Wuaocoin is the first project in the TechFi category that allows
              users multiple options to have utility and usability in the
              ecosystem, its time to change the way of seeing the purchases and
              sales of products and services within an multilateral electronic
              commerce platform using crypto technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
