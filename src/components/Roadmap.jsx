import React from "react";
import img from "../assets/images/Roadmap-img.webp";
import LeftEllepse from "../assets/images/Roadmap_ellipse.svg";
import leftroadmap from "../assets/images/roadmap_left.webp";
import RoadmapImg from "../assets/images/roadmapBottom.webp";

const Roadmap = () => {
  const Array = [
    {
      id: 1,
      bg: "bg-yellowGradient",
      heading: "01",
      phara: "Organizational concept (creations)",
    },
    {
      id: 2,
      bg: "bg-redGradient",
      heading: "02",
      phara: "Directional Process (Actions)",
    },
    {
      id: 3,
      bg: "bg-[#4D86DC]",
      heading: "03",
      phara: "Operational Development (technical team)",
    },
    {
      id: 4,
      bg: "bg-[#364EC6]",
      heading: "04",
      phara: "Strategic Opportunities (alliances)",
    },
    {
      id: 5,
      bg: "bg-parpalGradient",
      heading: "05",
      phara: "Stakeholders (benefits)",
    },
    {
      id: 6,
      bg: "bg-pinkGradient",
      heading: "06",
      phara: "Human Identity (social contribution)",
    },
  ];
  const Card = Array.map((props) => {
    return (
      <div className="w-full sm:w-6/12 lg:w-4/12 xl:w-2/12 px-[15.5px] pt-6 xl:pt-0">
        <div
          className={`${props.bg} hover:bg-pinkGradient hover:scale-105  transition-all ease-linear duration-300 rounded-[14.91px] px-3 py-[9px] h-full cursor-pointer`}
        >
          <h2 className="font-bold text-[22px] sm:text-[27.95px] font-Montserrat text-[#fff] opacity-[0.5] leading-normal ">
            {props.heading}
          </h2>
          <p className="font-Montserrat font-bold text-lg sm:text-[20px] max-w-[206px] text-white pb-6 sm:pb-[45px]">
            {props.phara}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="relative z-10 overflow-hidden">
      <div className="absolute top-0 left-0 -z-10">
        <img className="w-full" src={leftroadmap} alt="left" />
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <img src={RoadmapImg} alt="roadmap" />
      </div>
      <div className="absolute hidden sm:block top-[12%] md:top-[10%] lg:top-[10%]  sm:right-[0] md:right-0 lg:right-[5%]">
        <img
          className="sm:w-1/2 md:w-3/4 lg:w-full"
          src={LeftEllepse}
          alt="right"
        />
      </div>
      <div className="container max-w-[1390px] mx-auto px-3 py-[55px] sm:py-[70px] md:py-[100px]">
        <h2 className="text-center text-[#32352C] text-[35px] sm:text-[45px] md:text-[50px] font-bold font-Montserrat leading-normal ">
          RoadMap
        </h2>
        <p className="text-center max-w-[672px] mx-auto text-base sm:text-[18px] font-Montserrat font-normal leading-[174%] pt-[18px]">
          Knowing our values, understanding the business idea and then,
          gradually, presenting the plans to the public is our way of doing
          things.
        </p>
        <div className="max-w-[592px] mx-auto pt-[45px] sm:pt-[60px] md:pt-[75px] pb-[40px] sm:pb-[48px] md:pb-[56px]">
          <img className="w-full animate-Roadmap" src={img} alt="img" />
        </div>
        <div className="flex flex-row flex-wrap -mx-3">{Card}</div>
      </div>
    </div>
  );
};

export default Roadmap;
