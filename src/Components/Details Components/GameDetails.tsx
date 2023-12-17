import React from "react";
import useFetch, { apiKey } from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import GameOtherdetails from "./gameOtherdetails";
import Example from "../Loading";
import { motion as m } from "framer-motion";

const GameDetails = () => {
  const { id } = useParams();
  const {
    data: gameData,
    err: gameErr,
    loading: gameLoading,
  } = useFetch(
    "https://rawg-video-games-database.p.rapidapi.com/games/" +
      id +
      "?" +
      apiKey
  );
  console.log(gameData);
  return (
    <>
      {gameLoading ? (
        <Example
          height={"15px"}
          height2={"100dvh"}
          width2="100vw"
          width="15px"
          color="white"
        />
      ) : (
        <m.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
            },
          }}
          className=" w-screen md:w-[85%] mx-auto lg:w-screen lg:h-[100dvh] flex flex-col lg:flex-row"
        >
          <div className="lg:w-[25%] shrink-0 overflow-x-hidden  overflow-y-auto  order-2 lg:order-1 mt-5 lg:mt-0 lg:py-[50px] p-2">
            <div className="lg:w-[90%] lg:mx-auto md:w-[50%]  md:m-0 bg-darkBlue rounded-md py-4 px-3">
              <h3 className="mb-4 text-[18px] font-[600]">
                Ratings by reviews
              </h3>
              {gameData?.ratings?.map((items: any, index: number) => (
                <div className="text-[15px] text-gray-400 flex items-center justify-between mb-1">
                  <p>{items?.title}</p>
                  <p>{items?.percent} %</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-[20px] font-[600] mt-8">Publisher:</h3>
              <div className="flex  gap-3 flex-wrap gap-y-8 mt-1">
                {gameData?.publishers?.map((items: any, index: number) => (
                  <div
                    className="w-[45%] aspect-video rounded-md  relative staggergames  bg-lightBlue "
                    key={index}
                  >
                    <img
                      src={items?.image_background}
                      className="w-full object-cover aspect-video brightness-[.9] hover:brightness-[1] rounded-md transition-all duration-[.3s]"
                      alt=""
                    />

                    <div className="w-full absolute top-0 h-full bg-gradient-to-t from-black/90 to-transparent flex items-end  py-2 px-2 group cursor-pointer">
                      <div className="px-3 w-full">
                        {" "}
                        <h3
                          className="text-[18px] font-[800]  group-hover:scale-[1.1]
                  group-hover:translate-y-[-10px] transition-all duration-[.2s] origin-left
                  "
                        >
                          {items?.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[20px] font-[600] mt-8 ">Genres:</h3>
              <div className="flex  gap-3 gap-y-8 flex-wrap mt-1">
                {gameData?.genres?.map((items: any, index: number) => (
                  <div
                    className="w-[45%] aspect-video rounded-md  relative staggergames  bg-lightBlue "
                    key={index}
                  >
                    <img
                      src={items?.image_background}
                      className="w-full object-cover aspect-video brightness-[.9] hover:brightness-[1] rounded-md transition-all duration-[.3s]"
                      alt=""
                    />

                    <div className="w-full absolute top-0 h-full bg-gradient-to-t from-black/90 to-transparent flex items-end  py-2 px-2 group cursor-pointer">
                      <div className="px-3 w-full">
                        {" "}
                        <h3
                          className="text-[18px] font-[800]  group-hover:scale-[1.1]
                  group-hover:translate-y-[-10px] transition-all duration-[.2s] origin-left
                  "
                        >
                          {items?.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-grow   order-1 lg:order-2 px-5 lg:border border-gray-800 overflow-auto">
            <h3 className="text-[30px] md:text-[40px] font-[800] pt-5">
              {gameData?.name}
            </h3>
            <div className="flex gap-2 items-center px-3 py-2 bg-[#333] w-max rounded-md my-2 text-[14px] text-gray-300">
              <p>rating</p>
              <p className="flex gap-[5px] items-center ">
                <FaStar />
                {gameData?.ratings_count}
              </p>
            </div>
            <img
              src={gameData?.background_image}
              className="w-full aspect-video rounded-md brightness-[.8] my-3"
              alt=""
            />
            <GameOtherdetails details={gameData} />
          </div>

          {/* //////////////////////////////////////// */}
          <div className="lg:w-[25%] shrink-0 overflow-x-hidden  overflow-y-auto  order-2 lg:order-3 mt-5 lg:mt-0 lg:py-[50px] p-2">
            <div>
              <h3 className="text-[20px] font-[600] ">Developers:</h3>
              <div className="flex  gap-3 flex-wrap gap-y-8 mt-1">
                {gameData?.developers?.map((items: any, index: number) => (
                  <div
                    className="w-[45%] aspect-video rounded-md  relative staggergames  bg-lightBlue "
                    key={index}
                  >
                    <img
                      src={items?.image_background}
                      className="w-full object-cover aspect-video brightness-[.9] hover:brightness-[1] rounded-md transition-all duration-[.3s]"
                      alt=""
                    />

                    <div className="w-full absolute top-0 h-full bg-gradient-to-t from-black/90 to-transparent flex items-end  py-2 px-2 group cursor-pointer">
                      <div className="px-3 w-full">
                        {" "}
                        <h3
                          className="text-[18px] font-[800]  group-hover:scale-[1.1]
                  group-hover:translate-y-[-10px] transition-all duration-[.2s] origin-left
                  "
                        >
                          {items?.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[20px] font-[600] mt-8 ">Stores:</h3>
              <div className="flex  gap-3 gap-y-8 flex-wrap mt-1">
                {gameData?.stores?.map((items: any, index: number) => (
                  <div
                    className="w-[45%] aspect-video rounded-md  relative staggergames  bg-lightBlue "
                    key={index}
                  >
                    <img
                      src={items?.store?.image_background}
                      className="w-full object-cover aspect-video brightness-[.9] hover:brightness-[1] rounded-md transition-all duration-[.3s]"
                      alt=""
                    />

                    <div className="w-full absolute top-0 h-full bg-gradient-to-t from-black/90 to-transparent flex items-end  py-2 px-2 group cursor-pointer">
                      <div className="px-3 w-full">
                        {" "}
                        <h3
                          className="text-[18px] font-[800]  group-hover:scale-[1.1]
                  group-hover:translate-y-[-10px] transition-all duration-[.2s] origin-left
                  "
                        >
                          {items?.store?.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-[20px] font-[600] mt-10 mb-2">
              Available for Platforms
            </h3>
            <div className="w-full flex flex-wrap gap-3 ">
              {gameData?.parent_platforms?.map((items: any, index: number) => (
                <div className="bg-[#1e1e1e] px-3 py-2 rounded-full font-[600]">
                  {items?.platform?.name}
                </div>
              ))}
            </div>
          </div>
        </m.div>
      )}
    </>
  );
};

export default GameDetails;
