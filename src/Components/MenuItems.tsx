import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion as m } from "framer-motion";
import useDimension from "../Hooks/useDimension";
interface menus {
  title: string;
  route: string;
  index: number;
  isfullMenu: boolean;
  image: string;
  setisFullMenu: any;
}
const MenuItems = ({
  title,
  route,
  index,
  isfullMenu,
  image,
  setisFullMenu,
}: menus) => {
  const innerwidth: number = useDimension();
  return (
    <NavLink to={route} key={index}>
      <m.div
        className={`flex items-center md:gap-2  px-3 py-3 rounded-md hover:bg-mediumBlue flex-col md:flex-row`}
        animate={{
          justifyContent: isfullMenu ? "start" : "center",
        }}
        onClick={() => {
          if (innerwidth <= 740) setisFullMenu(false);
        }}
      >
        <img src={image} alt="" className="w-[25px] h-[30px] md:w-[20px] " />

        {isfullMenu && (
          <m.div
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
          >
            {" "}
            <p
              className={
                "whitespace-nowrap text-[15px] md:text-[13px] text-gray-400 hidden md:block"
              }
            >
              {title}
            </p>
          </m.div>
        )}
        <p
          className={
            "whitespace-nowrap text-[12px] md:text-[13px] text-gray-400 block md:hidden"
          }
        >
          {title}
        </p>
      </m.div>{" "}
    </NavLink>
  );
};

export default MenuItems;
