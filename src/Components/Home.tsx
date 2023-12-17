import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";
import { AnimatePresence, LayoutGroup } from "framer-motion";

const Home = () => {
  const { key } = useLocation();
  return (
    <LayoutGroup>
      <div className="w-full h-[100dvh] px-[20px] md:p-[20px] flex gap-10 relative">
        <Sidebar />
        <div className="overflow-x-hidden overflow-y-auto flex flex-col flex-1 gap-1 pl-2 md:pl-0">
          <MainHeader />
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </div>
      </div>{" "}
    </LayoutGroup>
  );
};

export default Home;
