import React from "react";
import WhitePaperMain from "../assets/images/WhitePaper-Main-img.webp";
import WhitePaperLast from "../assets/images/WhitePaper-img.webp";
import BottomWhite from "../assets/images/whitePaperSvg.svg";

const WhitePaper = () => {
  return (
    <div>
      <div className="bg-[url(./assets/images/whitePaper-bg-img.png)]  size bg-no-repeat object-cover  ">
        <div className="flex flex-wrap flex-row  items-center justify-center py-14">
          <div className="sm:w-6/12 md:w-4/12 px-3 relative z-10">
            <div>
              <img
                className=" animate-whitePaper"
                src={WhitePaperMain}
                alt="WhitePaperMain"
              />
            </div>
          </div>
          <div className="sm:w-6/12 md:w-4/12 px-3 relative z-10">
            <div className="absolute bottom-[-30%] left-[-3%] -z-10">
              <img src={BottomWhite} alt="ellipse" />
            </div>
            <div className="text-center">
              <h2 className="text-white font-Montserrat font-bold text-[35px] sm:text-[40px] lg:text-[50px] ">
                Whitepaper
              </h2>
              <p className="text-white font-Montserrat font-semibold text-[14px] sm:text-base pb-[30px] sm:pb-[53px] pt-[12px] max-w-[557px]">
                We want you to know our vision we leave you our whitepaper and
                now be a part of the digital transformation.
              </p>
              <button className=" bg-[#fff] text-orange-400 text-[14px] sm:text-base font-Montserrat font-semibold leading-normal border border-transparent rounded-[40px] px-[21px] py-[10px] hover:bg-transparent hover:border hover:border-white hover:text-white transition-all ease-linear duration-300">
                Read WhitePaper
              </button>
            </div>
          </div>
          <div className="sm:w-6/12 md:w-4/12 px-3">
            <div>
              <img
                className=" animate-whitePaper"
                src={WhitePaperLast}
                alt="WhitePaperMain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
