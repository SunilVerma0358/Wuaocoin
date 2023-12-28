import React from "react";
import BenefitFirst from "../assets/images/benefitsFirst.webp";
import BenefitMain from "../assets/images/BenefitsMain.webp";
import BenefitLast from "../assets/images/Benefits-last-img.webp";
import BottomImg from "../assets/images/Benefits_ellipse.webp";

const Benefits = () => {
  const Benefit = [
    {
      id: 1,
      Src: BenefitFirst,
      phara: "Services, Products and Community All in one place!",
    },
    {
      id: 2,
      Src: BenefitMain,
      phara:
        "Selling in crypto will no longer be complicated, it will be safe and reliable.",
    },
    {
      id: 3,
      Src: BenefitLast,
      phara:
        "Buying and getting a real discount is possible? Join and check it out.",
    },
  ];
  const MyBenefitCard = Benefit.map((props) => {
    return (
      <div className="sm:w-6/12 w-full md:w-4/12 px-3 pt-6">
        <div
          className={`bg-[#FBF3E5] rounded-borderrounded overflow-hidden animate-borderrounded `}
        >
          <img
            className=" w-full pt-4 h-[330px] object-cover"
            src={props.Src}
            alt="Benefits"
          />
        </div>
        <p className="text-center pt-5 text-base sm:text-[18px] text-black opacity-[0.7] font-Montserrat font-normal leading-[174%] max-w-[288px] mx-auto">
          {props.phara}
        </p>
      </div>
    );
  });

  return (
    <div className="relative z-20">
      <div className="absolute bottom-0 md:bottom-[10%] left-[2%] -z-10">
        <img src={BottomImg} alt="img" />
      </div>
      <div className=" container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto pt-[40px] sm:pt-[50px] md:pt-[60px] pb-[60px] md:pb-[80px]">
        <h2 className="text-center font-Montserrat font-bold text-[35px] sm:text-[45px] md:text-[50px] text-[#32352C]">
          Benefits
        </h2>
        <div className="flex flex-row flex-wrap -mx-3 py-6 sm:py-[40px] md:py-[60px] justify-center  ">
          {MyBenefitCard}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
