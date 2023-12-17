import React, { useState } from "react";
import useFetch, { apiKey } from "../Hooks/useFetch";
import { AnimatePresence, motion as m } from "framer-motion";
import Example from "./Loading";
import StoreDetails from "./Details Components/StoreDetails";
import { FaHeart } from "react-icons/fa";
const Strore = () => {
  const {
    data: gameData,
    err: gameErr,
    loading: gameLoading,
  } = useFetch(
    "https://rawg-video-games-database.p.rapidapi.com/stores?" + apiKey
  );
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [details, setDetails] = useState();
  console.log(gameData);
  return (
    <>
      {gameLoading ? (
        <Example
          height={"15px"}
          height2={"100%"}
          width2="100%"
          width="15px"
          color="white"
        />
      ) : (
        <m.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "tween",
            },
          }}
        >
          <div className="px-2 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-5  ">
            {gameData?.results?.map((items: any, index: number) => (
              <m.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.2 * index,
                  },
                }}
                className="w-full h-full rounded-md  relative staggergames  bg-lightBlue "
                key={index}
                style={{
                  backgroundColor: `#${items.dominant_color}`,
                }}
                layoutId="gameCard"
                onClick={() => {
                  setOpenDetails(true);
                  setDetails(items);
                }}
              >
                <img
                  src={items?.image_background}
                  className="w-full object-cover aspect-video brightness-[.8] hover:brightness-[1] rounded-md transition-all duration-[.3s]"
                  alt=""
                />

                <div className="w-full absolute top-0 h-full bg-gradient-to-t from-black/90 to-transparent flex items-end  py-2 px-2 group cursor-pointer ">
                  <div className="px-3 w-full">
                    {" "}
                    <h3
                      className="text-[20px] font-[800]  group-hover:scale-[1.1]
                  group-hover:translate-y-[-10px] transition-all duration-[.2s] origin-left
                  "
                    >
                      {items?.name}
                    </h3>
                    <div className="flex items-center justify-between mb-1 text-[13px] text-gray-400 w-full">
                      <p className="underline">game count</p>
                      <p className="flex gap-[5px] items-center">
                        <FaHeart />
                        {items?.games_count}
                      </p>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>{" "}
          <AnimatePresence mode="wait">
            {openDetails && (
              <StoreDetails details={details} setOpenDetails={setOpenDetails} />
            )}
          </AnimatePresence>
        </m.div>
      )}
    </>
  );
};

export default Strore;
