import React from "react";
import svgPartership from "../assets/images/partnerShip.main.png";

const PanterShip = () => {
  return (
    <div>
      <div className="bg-[url(./assets/images/ParterShip.webp)] py-[40px] sm:py-[60px] size bg-no-repeat">
        <h2 className="text-center font-Montserrat font-bold text-[35px] sm:text-[45px] md:text-[50px] text-white">
          Partnership
        </h2>
        <div className="  sm:max-w-[453px] text-center mx-3 sm:mx-auto  mt-6 sm:mt-[48px] mb-3 sm:mb-[20px] ">
          <img className="w-full" src={svgPartership} alt="svg" />
        </div>
      </div>
    </div>
  );
};

export default PanterShip;
