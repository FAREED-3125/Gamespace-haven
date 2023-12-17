import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import man from "../Assets/man.png";
import { useLocation } from "react-router-dom";
import logo from "../Assets/logo.svg";
const MainHeader = () => {
  const location = useLocation();
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    if (location.pathname === "/") setTitle("All games");
    else setTitle(location.pathname.replace("/", ""));
  }, [location]);

  const genres = ["shooter", "action", "multiplayer", "Adventure"];
  return (
    <div className="w-full  px-2 flex flex-col gap-3 pt-[20px] md:pt-0">
      <div className=" w-full h-[60px] items-center flex gap-8 lg:gap-0 justify-between">
        <img src={logo} alt="" className="w-[40px]  md:hidden" />

        <div className="h-[75%] relative hidden md:block md:w-[300px] ">
          <input
            type="text"
            className="w-full  md:w-[300px] h-full rounded-full  bg-lightBlue px-5 outline-none"
            placeholder="search games ..."
          />
          <div className="absolute text-[20px] top-[50%] translate-y-[-50%] right-5 z-[99] text-gray-400 cursor-pointer">
            <IoSearch />
          </div>
        </div>

        <div className="text-[24px]  gap-3 items-center h-full ml-auto stroke-[10px] hidden md:flex">
          <div className="relative">
            <CiShoppingCart strokeWidth={".02rem"} />
            <p className="w-[18px] h-[18px] flex items-center justify-center bg-vio text-[10px] rounded-full absolute top-[-7px] right-[-7px]">
              3
            </p>
          </div>
          <div>
            <CiHeart strokeWidth={".02rem"} />
          </div>
        </div>
        <div className="overflow-hidden md:mx-5 flex gap-1 items-center rounded-full pr-2 bg-lightBlue h-[75%]  ">
          <img
            src={man}
            className=" w-[40px] aspect-square object-cover rounded-full "
          />
          <FaAngleDown />
        </div>
      </div>
      <div className="flex-grow  flex items-center  pl-2 justify-between md:justify-start flex-col md:flex-row gap-4">
        <h3 className="font-[800] text-[22px] md:text-[28px] lg:text-[32px] capitalize">
          {title}
        </h3>
        {location.pathname === "/" && (
          <div className=" w-full md:w-max h-[50px] flex items-center gap-3 overflow-auto">
            {genres.map((items, index) => (
              <div
                key={index}
                className="h-[70%] px-3 rounded-md flex items-center justify-center shrink-0 bg-darkBlue text-[13px]"
              >
                {items}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainHeader;
