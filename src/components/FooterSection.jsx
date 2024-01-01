import React from "react";
import LogoFooter from "../assets/images/footerLogo2.webp";
import wuaocion from "../assets/images/footerW.webp";
import footerBottom from "../assets/images/footerBottom.webp";
import footertop from "../assets/images/footerTop.webp";
import footerEllipse from "../assets/images/footerEllipse.webp";
import discord from "../assets/Svg/footer-discord.svg";
import twitter from "../assets/Svg/telegram-footer.svg";
import teligram from "../assets/Svg/footer-twitter.svg";
import india from "../assets/Svg/footer-in.svg";

const FooterSection = () => {
  return (
    <div className="relative z-10">
      <div className="absolute bottom-0 right-0 -z-20">
        <img className=" w-full" src={footerBottom} alt="bottom" />
      </div>
      <div className="absolute top-[-20%] left-0 -z-10">
        <img className="w-3/4 sm:w-full" src={footertop} alt="top" />
      </div>
      <div className="absolute bottom-[4%] md:left-[12%] lg:left-[19%] xl:left-[24%] hidden sm:block -z-10">
        <img
          className="md:w-3/4 lg:w-full "
          src={footerEllipse}
          alt="ellipse"
        />
      </div>
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 pt-[50px] sm:pt-[60px] md:pt-[100px] pb-[45px] ">
        <div className="flex flex-row flex-wrap -mx-3 ">
          <div className="w-full md:w-6/12 px-3">
            <div className="logo flex gap-2 items-center max-w-[262px] ">
              <img
                className="w-1/4 animate-footerLogo"
                src={LogoFooter}
                alt="logo"
              />
              <img className="w-3/4" src={wuaocion} alt="name" />
            </div>
            <p className="text-[16px] text-black opacity-[0.7] font-Montserrat font-normal max-w-[252px] py-[22px]">
              Welcome to The Future of the Market. The world's first Global
              TechFi Platform
            </p>
            <ul className="flex items-center gap-3">
              <li>
                <a
                  href="https://discord.com/channels/984345847628181504/999268522427437086"
                  target="blank"
                  className=" cursor-pointer "
                >
                  {" "}
                  <img
                    className="hover:-translate-y-1 transition-all ease-linear duration-300"
                    src={discord}
                    alt="discord"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2Fradialcode"
                  target="blank"
                  className=" cursor-pointer "
                >
                  <img
                    className="hover:-translate-y-1 transition-all ease-linear duration-300"
                    src={twitter}
                    alt="discord"
                  />
                </a>
              </li>
              <li>
                <a href="!#" className=" cursor-pointer ">
                  <img
                    className="hover:-translate-y-1 transition-all ease-linear duration-300"
                    src={teligram}
                    alt="discord"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.radialcode.com/"
                  target="blank"
                  className=" cursor-pointer "
                >
                  <img
                    className="hover:-translate-y-1 transition-all ease-linear duration-300"
                    src={india}
                    alt="india"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-6/12 px-3 pt-6 md:pt-0">
            <div className="flex flex-row flex-wrap -mx-3 justify-between">
              <div className=" w-6/12 sm:w-4/12 order-1 lg:w-3/12 px-3">
                <p className=" text-[#32352C] text-[16px] lg:text-[18px] font-Montserrat font-semibold leading-[150%]">
                  Documents
                </p>
                <ul className="pt-[14px]">
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      WhitePaper
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      Customers
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      Business
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" w-6/12 sm:w-4/12 lg:w-3/12 order-3 sm:order-2 px-3  pt-6 sm:pt-0">
                <p className=" text-[#32352C] text-[16px] lg:text-[18px] font-Montserrat font-semibold leading-[150%]">
                  Quick Links
                </p>
                <ul className="pt-[14px]">
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      ICO
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      RoadMap
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      Partnership
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" w-6/12 sm:w-4/12 order-2 sm:order-3 lg:w-3/12 px-3 ">
                <p className=" text-[#32352C] text-[16px] lg:text-[18px] font-Montserrat font-semibold leading-[150%]  ">
                  Company
                </p>
                <ul className="pt-[14px]">
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      WUAOCOIN
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="text-[#32352C] text-[16px] font-Montserrat font-normal leading-[215%] relative before:absolute before:bottom-0 before:w-0 before:bg-[#32352C] before:h-[2px] before:rounded-[2px] before:right-[100%]  before:transition-all before:ease-linear before:duration-600 hover:before:w-full hover:before:right-0 "
                    >
                      WUAOSHOP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border border-[#E2E2E2]">
        <p className="text-[#848680] text-base font-Montserrat font-normal leading-[150%] py-4 sm:py-[25px] text-center">
          © Copyright 2022 - Wuaocoin
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
