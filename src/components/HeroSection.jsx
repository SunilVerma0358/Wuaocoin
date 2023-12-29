import React from "react";
import WuaocoinNav from "./WuaocoinNav";
import HeroMain from "../assets/images/hero-main-img.webp";
import OurProject from "./OurProject";
import Img from "../assets/images/bg-stall.webp";
import HeroMainEllipse from "../assets/images/hero_ellipse.webp";
import BottomEllips from "../assets/images/bottomEllips.webp";
import leftElipse from "../assets/images/leftEllips.webp";

const HeroSection = () => {
  return (
    <div>
      <div className=" md:bg-[url(./assets/images/headerimg.webp)] Hero-img    ">
        <div className="bg-heroGradient md:bg-none relative z-20 ">
          <div className="absolute top-[15%] hidden md:block z-10 left-[35%]  ">
            <img src={HeroMainEllipse} alt="heroMain" />
          </div>
          <div className="absolute bottom-[5%] left-[35%] z-10 hidden md:block">
            <img src={BottomEllips} alt="ellipse" />
          </div>
          <div className="absolute bottom-[20%] left-[2%] z-10 hidden lg:block">
            <img src={leftElipse} alt="hero" />
          </div>
          <>
            <WuaocoinNav />
          </>
          <div className="   container max-w-[1160px] 2xl:max-w-[1320px] mx-auto ps-3 pe-5 md:pt-[80px] pb-[30px] lg:pt-[160px] xl:pt-[229px] 2xl:pt-[250px] md:pb-[100px] lg:pb-[150px] xl:pb-[200px] 2xl:pb-[0] ">
            <div className="flex md:flex-row flex-wrap -mx-3 items-center  ">
              <div className="md:w-6/12 w-full px-3">
                <h2 className="text-[20px] leading-normal font-semibold text-white font-Montserrat ">
                  Welcome to
                </h2>
                <h1 className="text-white text-[39px] sm:text-[48px] lg:text-[65px] font-[900] leading-[112%] font-Montserrat">
                  The Future of E-Commerce
                </h1>
                <p className="text-white  font-Montserrat font-medium text-[18px] max-w-[384px] pt-1">
                  A multi-purpose token to improve digital sales and purchases
                </p>
                <div className="flex gap-[15px] pt-[40px]">
                  <button className=" bg-[#fff] text-orange-400 sm:text-base text-[14px] font-Montserrat font-semibold leading-normal border border-transparent  rounded-[40px] px-[12px] sm:px-[21px] py-[10px] hover:bg-transparent hover:border hover:border-white hover:text-white transition-all ease-linear duration-300">
                    How To Buy
                  </button>
                  <button className="text-white font-Montserrat sm:text-base text-[14px] leading-normal font-semibold  bg-transparent border border-[#fff] py-[10px] px-[12px] sm:px-[21px] rounded-[40px] hover:bg-transparent hover:border hover:border-transparent hover:bg-white hover:text-orange-400 transition-all ease-linear duration-300">
                    Read Whitepaper
                  </button>
                </div>
              </div>
              <div className="md:w-6/12 w-full px-3 pt-14 sm:py-8 md:pt-0">
                <img
                  className="w-full animate-whitePaper "
                  src={HeroMain}
                  alt="hero"
                />
                <div className="absolute md:hidden  bottom-0 sm:bottom-[0%] right-0 -z-10 ">
                  <img className="w-full " src={Img} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <>
          <OurProject />
        </>
      </div>
    </div>
  );
};

export default HeroSection;
