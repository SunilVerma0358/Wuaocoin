import React from "react";
import TokenimicsMain from "../assets/images/Tokenmices.webp";
import tokenimicsRight from "../assets/images/tokenmicesRight.webp";
import tokenimicsleft from "../assets/images/tokenmicesLeft.webp";
import tokenimicsEllipse from "../assets/images/tokenmicesEllips.webp";

const Tokenimics = () => {
  return (
    <div className="relative z-10">
      <div className="absolute bottom-0 right-0 hidden md:block -z-10">
        <img className="w-full" src={tokenimicsRight} alt="logo" />
      </div>
      <div className="absolute top-0 left-0 -z-10">
        <img className="w-full" src={tokenimicsleft} alt="logo" />
      </div>
      <div className="absolute bottom-[06%] md:bottom-[20%] left-[2%] -z-10">
        <img className="w-1/2 md:w-3/4" src={tokenimicsEllipse} alt="logo" />
      </div>
      <div className="container max-w-[1320px] mx-auto px-3 py-[48px] sm:py-[60px] md:py-[80px]">
        <h2 className="text-center font-Montserrat font-bold text-[35px] sm:text-[45px] md:text-[50px] text-[#32352C]">
          Tokenomics
        </h2>
        <div
          className="mx-auto max-w-[768px] text-center  relative
        "
        >
          <img
            className="w-full pb-6 sm:pt-0"
            src={TokenimicsMain}
            alt="logo"
          />
          <p className="font-Montserrat font-bold  text-white rounded-[10px] py-3 sm:text-[#32352C]  sm:bg-transparent sm:py-0 bg-[#D4145A] text-[20px] sm:absolute  sm:top-[22%]  sm:left-[5%] ">
            Team
          </p>
          <p
            className="
          font-Montserrat font-bold text-[20px] sm:bg-transparent sm:py-0 bg-[#8CC63F] mt-3 text-white rounded-[10px] py-3 sm:text-[#32352C]  sm:max-w-[180px] text-center sm:text-end sm:absolute sm:bottom-[15%] lg:bottom-[30%] lg:left-[-15%]"
          >
            Subdivided into 5% Founders
          </p>
          <p className="font-Montserrat font-bold sm:bg-transparent sm:py-0 bg-[#77C4D3]  text-white mt-3 rounded-[10px] py-3 sm:text-[#32352C]  text-[20px] sm:absolute sm:bottom-[2%] sm:left-[28%] ">
            Workers
          </p>{" "}
          <p
            className="
          font-Montserrat font-bold text-[20px] sm:bg-transparent sm:py-0 bg-[#F7931E]  text-white mt-3 rounded-[10px] py-3 sm:text-[#32352C]  sm:max-w-[180px] text-center sm:text-start sm:absolute sm:top-[5%] md:top-[10%]  sm:right-[0%] lg:top-[38%] lg:right-[-10%]"
          >
            Buyers/holders/ community
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenimics;
