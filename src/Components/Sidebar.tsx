import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import { motion as m } from "framer-motion";
import useDimension from "../Hooks/useDimension";
import allgames from "../Assets/icon _games_.svg";
import platform from "../Assets/icon _platform xbox_.svg";
import stores from "../Assets/icon _Shopping catalog_.svg";
import develpoer from "../Assets/icon _developer mode_.svg";
import publisher from "../Assets/icon _publish_.svg";
import MenuItems from "./MenuItems";
import joystick from "../Assets/joystick.png";
import crown from "../Assets/crown.png";
const Sidebar = () => {
  const [isfullMenu, setisFullMenu] = useState<boolean>(false);
  const screenWidth: number = useDimension();

  const Menus = [
    {
      title: "All games",
      route: "/",
      icons: allgames,
    },

    {
      title: "Platforms",
      route: "/platforms",
      icons: platform,
    },
    {
      title: "Stores",
      route: "/stores",
      icons: stores,
    },
    {
      title: "Developers",
      route: "/developers",
      icons: develpoer,
    },
    {
      title: "Pulisher",
      route: "/publisher",
      icons: publisher,
    },
  ];
  return (
    <m.div className="w-max fixed z-[999] left-0 inset-y-0 md:static  rounded-lg bg-lightBlue flex  h-full overflow-hidden">
      <m.div
        className="w-[250px]  overflow-hidden flex flex-col justify-between py-5"
        animate={{
          width: isfullMenu ? "250px" : screenWidth <= 740 ? "0px" : "60px",
        }}
      >
        {/* Logo container starts here */}
        <div className={`flex items-center gap-2  px-3 py-4`}>
          <img src={logo} alt="" className="w-[40px] h-[40px]" />

          {isfullMenu && (
            <m.h1
              initial={{
                opacity: 0,
                display: "none",
              }}
              animate={{
                display: "block",
                opacity: 1,
                transition: {
                  delay: 0.3,
                },
              }}
              className="text-[18px] font-[700] stretch-text whitespace-nowrap"
            >
              <span className="">Game</span>Space Haven
            </m.h1>
          )}
        </div>

        <div>
          {/* Logo container ends here */}
          {Menus.map((items, index) => (
            <MenuItems
              title={items.title}
              index={index}
              isfullMenu={isfullMenu}
              image={items.icons}
              route={items.route}
              setisFullMenu={setisFullMenu}
            />
          ))}{" "}
        </div>

        <div className="w-[95%] mx-auto rounded-md h-[50px] bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-violet-500 relative overflow-hidden flex items-center justify-center  mt-[100px]">
          <div className="w-[50px] h-[50px] rounded-full bg-fuchsia-500 absolute top-[-20px] right-[-20px]"></div>
          <div className="w-[80px] h-[80px] rounded-full bg-purple-600 absolute bottom-[-20px] left-[-20px]"></div>
          <div className="w-full h-full bg-black/20  backdrop-blur-[1px] absolute rounded-md flex items-center justify-center gap-2">
            <img src={crown} className="w-[30px] aspect-square" alt="" />
            {isfullMenu && (
              <h3 className="text-[22px]  font-[800] text-white ">Subcribe</h3>
            )}
          </div>
          <img src={joystick} alt="" />
        </div>
      </m.div>

      <div
        className="w-[20px] h-full flex items-center justify-center border-l-2 border-darkBlue"
        onClick={() => setisFullMenu((ps) => !ps)}
      >
        <div className="w-[5px] h-[30px] rounded-full bg-white cursor-pointer"></div>
      </div>
    </m.div>
  );
};

export default Sidebar;
