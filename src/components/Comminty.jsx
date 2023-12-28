import React, { useEffect, useState } from "react";

const Comminty = () => {
  const [time, setTime] = useState({});

  function dateDifference(date1, date2) {
    const difference = {};
    let tmp = date2 - date1;
    difference.days = Math.floor(tmp / 86400000);
    tmp -= difference.days * 86400000;
    difference.hours = Math.floor(tmp / 3600000);
    tmp -= difference.hours * 3600000;
    difference.minutes = Math.floor(tmp / 60000);
    tmp -= difference.minutes * 60000;
    difference.seconds = Math.floor(tmp / 1000);
    return difference;
  }

  useEffect(() => {
    setInterval(() => {
      let timeTaken = dateDifference(
        new Date(Date.now()),
        new Date(`2024-03-22T02:00:00.000Z`)
      );
      timeTaken.seconds =
        timeTaken.seconds < 10 ? `0${timeTaken.seconds}` : timeTaken.seconds;
      setTime(timeTaken);
    }, 0);
  }, []);
  return (
    <div>
      <div className="bg-[url(./assets/images/public-sale-bg.webp)] size bg-no-repeat">
        <div className="max-w-[609px] mx-auto px-3 pt-[45px] sm:pt-[60px] md:pt-[85px] pb-[30px]">
          <p className="text-white font-Montserrat font-bold leading-[174%] text-[25px] sm:text-[30px] text-center ">
            Public Sale 5% in ERC20 & BEP20, 100% for the Community
          </p>
          <div className="flex gap-[11px] justify-center py-6 sm:py-9 md:py-[50px]">
            <div className="flex items-start gap-2 sm:gap-[14px] ">
              <div>
                <p className="   text-white rounded-[10px] border font-bold font-Montserrat text-[35px] sm:text-[50px]  border-white sm:w-[80px] md:w-[106px] w-[50px] h-[60px] sm:h-[80px] md:h-[106px] flex justify-center items-center">
                  {time.days}
                </p>
                <p className=" font-Montserrat text-white text-center text-[16px] sm:text-[18px]  font-medium leading-[174%] ">
                  Days
                </p>
              </div>
              <p className="  text-white text-[35px] sm:text-[50px]  pt-[5px] font-Montserrat font-normal leading-[174%]">
                :
              </p>{" "}
            </div>
            <div className="flex items-start gap-2 sm:gap-[14px] ">
              <div>
                <p className="   text-white rounded-[10px] border font-bold font-Montserrat text-[35px] sm:text-[50px]  border-white sm:w-[80px] md:w-[106px] w-[50px] h-[60px] sm:h-[80px] md:h-[106px] flex justify-center items-center">
                  {time.hours}
                </p>
                <p className=" font-Montserrat text-white text-center text-[16px] sm:text-[18px]  font-medium leading-[174%] ">
                  Hours
                </p>
              </div>
              <p className="  text-white text-[35px] sm:text-[50px]  pt-[5px] font-Montserrat font-normal leading-[174%]">
                :
              </p>{" "}
            </div>
            <div className="flex items-start gap-2 sm:gap-[14px] ">
              <div>
                <p className="   text-white rounded-[10px] border font-bold font-Montserrat text-[35px] sm:text-[50px]  border-white sm:w-[80px] md:w-[106px] w-[50px] h-[60px] sm:h-[80px] md:h-[106px] flex justify-center items-center">
                  {time.minutes}
                </p>
                <p className=" font-Montserrat text-white text-center text-[16px] sm:text-[18px]  font-medium leading-[174%] ">
                  Minute
                </p>
              </div>
              <p className="  text-white text-[35px] sm:text-[50px]  pt-[5px] font-Montserrat font-normal leading-[174%]">
                :
              </p>{" "}
            </div>{" "}
            <div>
              <p className="   text-white rounded-[10px] border font-bold font-Montserrat text-[35px] sm:text-[50px]  border-white sm:w-[80px] md:w-[106px] w-[50px] h-[60px] sm:h-[80px] md:h-[106px] flex justify-center items-center">
                {time.seconds}
              </p>
              <p className=" font-Montserrat text-white text-center text-[16px] sm:text-[18px]  font-medium leading-[174%] ">
                Second
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className=" bg-[#fff] text-orange-400 text-[14px] sm:text-base font-Montserrat font-semibold leading-normal border border-transparent rounded-[40px] px-[21px] py-[10px] hover:bg-transparent hover:border hover:border-white hover:text-white transition-all ease-linear duration-300">
              How To Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comminty;
