import React, { useState } from "react";
import useFetch, { apiKey } from "../Hooks/useFetch";
import { AnimatePresence, motion as m } from "framer-motion";
import Example from "./Loading";
import PublisherDetails from "./Details Components/PublisherDetails";
import { FaHeart } from "react-icons/fa";
const Publisher = () => {
  const {
    data: gameData,
    err: gameErr,
    loading: gameLoading,
  } = useFetch(
    "https://rawg-video-games-database.p.rapidapi.com/publishers?" + apiKey
  );
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [details, setDetails] = useState<any>({});
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
          className=" w-full h-full"
        >
          <div className="px-2 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-6  ">
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
                onClick={() => {
                  setOpenDetails(true);
                  setDetails(items);
                }}
                className="w-full h-full rounded-md  relative staggergames  bg-lightBlue "
                key={index}
                style={{
                  backgroundColor: `#${items.dominant_color}`,
                }}
              >
                <img
                  src={items?.image_background}
                  className="w-full object-cover aspect-video brightness-[.8] hover:brightness-[1] rounded-md transition-all duration-[.3s]"
                  alt=""
                />

                <div className="w-full absolute top-0 h-full bg-gradient-to-t from-black/90 to-transparent flex items-end  group cursor-pointer">
                  <div className="mx-auto w-[95%]">
                    {" "}
                    <h3
                      className="text-[22px] font-[800]  group-hover:scale-[1.1]
                  group-hover:translate-y-[-10px] transition-all duration-[.2s] origin-left
                  "
                    >
                      {items?.name}
                    </h3>
                    {items?.games
                      .slice(0, 2)
                      .map((game: any, index: number) => (
                        <div
                          className="flex items-center justify-between mb-1 text-[12px] text-gray-300 w-full"
                          key={index}
                        >
                          <p className="underline">{game?.name}</p>
                          <p className="flex gap-[5px] items-center">
                            <FaHeart />
                            {game?.added}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </m.div>
            ))}
          </div>{" "}
          <AnimatePresence mode="wait">
            {openDetails && (
              <PublisherDetails
                details={details}
                setOpenDetails={setOpenDetails}
              />
            )}
          </AnimatePresence>
        </m.div>
      )}
    </>
  );
};

export default Publisher;
