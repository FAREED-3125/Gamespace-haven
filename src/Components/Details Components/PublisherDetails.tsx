import React from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion as m } from "framer-motion";
import useFetch, { apiKey } from "../../Hooks/useFetch";
import Example from "../Loading";
interface pubDetailsProps {
  details: any;
  setOpenDetails: any;
}
const PublisherDetails = ({ details, setOpenDetails }: pubDetailsProps) => {
  const {
    data: gameData,
    err: gameErr,
    loading: gameLoading,
  } = useFetch(
    `https://rawg-video-games-database.p.rapidapi.com/publishers/${details?.id}?` +
      apiKey
  );

  console.log(details);
  console.log(gameData);
  return (
    <m.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          type: "linear",
        },
      }}
      exit={{
        y: 100,
        opacity: 0,

        transition: {
          type: "linear",
        },
      }}
      className="bg-black/60 backdrop:blur-[2px] w-full h-full absolute top-0 left-0 z-[9999999] flex items-end lg:items-center justify-center"
    >
      <div className="w-full lg:w-[80%]   h-[80%] lg:h-[80%] rounded-md flex items-center flex-col gap-2">
        <div
          className="p-2 bg-white text-black text-[24px] rounded-full cursor-pointer"
          onClick={() => setOpenDetails(false)}
        >
          <IoClose />
        </div>
        <div className="w-full h-full bg-[#1e1e1e] overflow-x-hidden overflow-y-auto rounded-md  lg:p-8 lg:flex gap-2">
          {gameLoading ? (
            <Example
              height={"15px"}
              height2={"100%"}
              width2="100%"
              width="15px"
              color="white"
            />
          ) : (
            <>
              <img
                src={gameData?.image_background}
                className="aspect-video lg:w-[50%] object-cover w-full mt- rounded-md brightness-[.8]"
              />
              <div className="px-3 lg:h-full lg:w-full overflow-auto">
                <h3 className="text-[25px] font-[800] mt-3 mb-2">
                  {gameData?.name}
                </h3>
                <div className="px-3 py-2 bg-darkBlue font-[600] rounded-md w-max mb-3">
                  Game count: {gameData?.games_count}
                </div>
                <h1 className="text-[15px] font-[600]">Description:</h1>
                <p
                  dangerouslySetInnerHTML={{ __html: gameData?.description }}
                  className="text-gray-400 text-[14px] pb-[50px] "
                />
              </div>
            </>
          )}
        </div>
      </div>
    </m.div>
  );
};

export default PublisherDetails;
