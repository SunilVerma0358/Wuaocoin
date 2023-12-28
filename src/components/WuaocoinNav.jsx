import React, { useState } from "react";
import Logo from "../assets/images/logo.webp";
import wuaocion from "../assets/images/wuaoicon.webp";
import Discord from "../assets/Svg/discord.svg";
import Telegram from "../assets/Svg/telgram.svg";
import Twitter from "../assets/Svg/twitter.svg";
import In from "../assets/Svg/in-svg.svg";
import Lauguage from "../assets/Svg/laugauge.svg";

const WuaocoinNav = () => {
  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <div>
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <div className="flex justify-between items-center  pt-[23px] pb-[23px]  ">
          <div className="max-w-[140px] sm:max-w-[179px] max-h-[55px] flex gap-2 items-center ">
            <img
              className="animate-footerLogo cursor-pointer"
              src={Logo}
              alt="logo"
            />
            <img className="w-2/4 cursor-pointer" src={wuaocion} alt="name" />
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`${
                first ? "right-0" : "right-100"
              } flex gap-3 md:gap-[22px] w-full h-full fixed right-[-100%] bg-yellowGradient top-0 items-center justify-center sm:w-unset lg:h-unset sm:static sm:right-0 sm:bg-none sm:justify-end flex-col sm:flex-row z-40 transition-all ease-linear duration-300 `}
            >
              <ul className="flex items-center gap-3 md:gap-[31px] flex-col sm:flex-row  ">
                <li>
                  <a
                    href="!#"
                    className="font-semibold text-[16px] text-[#fff] font-Montserrat relative before:absolute before:bottom-0 before:w-0 before:bg-white before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                  >
                    {" "}
                    ICO
                  </a>
                </li>
                <li>
                  <a
                    href="!#"
                    className="font-semibold text-[16px] text-[#fff] font-Montserrat relative before:absolute before:bottom-0 before:w-0 before:bg-white before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                  >
                    {" "}
                    WHITEPAPER
                  </a>
                </li>
              </ul>
              <ul className="flex gap-2 md:gap-3 items-center ">
                <li>
                  <a
                    href="https://discord.com/channels/984345847628181504/999268522427437086"
                    target="blank"
                  >
                    <img
                      className="hover:-translate-y-1 transition-all ease-linear duration-300"
                      src={Discord}
                      alt="link"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Fradialcode"
                    target="blank"
                  >
                    <img
                      className="hover:-translate-y-1 transition-all ease-linear duration-300"
                      src={Twitter}
                      alt="link"
                    />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <img
                      className="hover:-translate-y-1 transition-all ease-linear duration-300"
                      src={Telegram}
                      alt="link"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.radialcode.com/" target="blank">
                    <img
                      className="hover:-translate-y-1 transition-all ease-linear duration-300 rounded-[35px]"
                      src={In}
                      alt="link"
                    />
                  </a>
                </li>
              </ul>
              <div className="border border-white rounded-[165px] sm:flex py-[4px] ps-[5px] pe-[7.5px] items-center gap-[7.5px] hidden cursor-pointer ">
                <img
                  className=" animate-footerLogo"
                  src={Lauguage}
                  alt="lauguage"
                />
                <select className="rounded-[50px] bg-transparent outline-none text-[#fff]">
                  <option value="someOption " className="text-[#fff] bg-black">
                    Eng
                  </option>
                  <option value="otherOption " className="text-[#fff] bg-black">
                    Hin
                  </option>
                </select>
              </div>
            </div>
            <div className="border border-white rounded-[165px] flex py-[4px] ps-[5px] pe-[7.5px] items-center gap-[7.5px] sm:hidden cursor-pointer ">
              <img src={Lauguage} alt="lauguage" />
              <select className="rounded-[50px] bg-transparent outline-none text-[#fff]">
                <option value="someOption " className="text-[#fff] bg-black">
                  Eng
                </option>
                <option value="otherOption " className="text-[#fff] bg-black">
                  Hin
                </option>
              </select>
            </div>
            <input type="checkbox" id="mobileview" hidden />

            <div onClick={setopen}>
              {first ? (
                <div className="flex sm:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer  ">
                  {" "}
                  <span className="bg-white w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
                  <span className="bg-white w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-45 bottom-2"></span>
                </div>
              ) : (
                <div className=" flex sm:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer ">
                  {" "}
                  <span className="bg-white w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-white w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  <span className="bg-white w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WuaocoinNav;
