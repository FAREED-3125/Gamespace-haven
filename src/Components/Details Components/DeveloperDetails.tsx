import React from "react";

import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion as m } from "framer-motion";
import useFetch, { apiKey } from "../../Hooks/useFetch";
import Example from "../Loading";
interface DevDetailsProps {
  details: any;
  setOpenDetails: any;
}
const DeveloperDetails = ({ details, setOpenDetails }: DevDetailsProps) => {
  const {
    data: gameData,
    err: gameErr,
    loading: gameLoading,
  } = useFetch(
    `https://rawg-video-games-database.p.rapidapi.com/developers/${details?.id}?` +
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
              <div className="px-3 lg:h-full lg:w-full overflow-auto scroll-d">
                <h3 className="text-[25px] font-[800] mt-3 mb-2">
                  {gameData?.name}
                </h3>
                <div className="px-3 py-2 bg-darkBlue font-[600] rounded-md w-max mb-3">
                  Game count: {gameData?.games_count}
                </div>
                <h1 className="text-[15px] font-[600]">Description:</h1>
                <p className="text-[14px] text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi, aperiam ut? Atque suscipit qui, velit corrupti tempora
                  consequuntur, unde fugit est, vel quisquam soluta dolorem
                  doloremque molestiae harum ab illo libero itaque laborum nulla
                  sequi possimus facere. Molestiae ad porro quos excepturi dolor
                  in ea quis nulla molestias temporibus iste, provident nam illo
                  pariatur architecto sapiente inventore vel beatae nobis autem
                  a, animi iure vero. Aut consequatur optio hic repellendus ut
                  reprehenderit provident, sunt delectus laboriosam cupiditate
                  nihil, natus praesentium temporibus, ipsa aspernatur sapiente
                  facere odit magnam blanditiis neque exercitationem obcaecati?
                  Maxime cum neque rem perspiciatis quia quas inventore qui,
                  eius minus aliquam animi culpa? Debitis labore magnam quos
                  dolorum exercitationem quam minima earum possimus ab! Mollitia
                  quibusdam cupiditate sequi quo, corporis veniam, excepturi
                  fugiat omnis perspiciatis voluptate eaque dicta officia, ullam
                  deleniti laudantium qui! Neque quo iure nobis, optio eos
                  labore alias ea, illum quisquam nulla placeat sit dolorum
                  eaque voluptatem temporibus. Ut cumque quos animi expedita,
                  tempore odio maxime itaque similique consectetur quas
                  voluptate, ad possimus soluta mollitia corporis officia.
                  Vitae, consectetur perferendis. Incidunt, veritatis! At soluta
                  recusandae error quos maiores, in, aperiam libero assumenda
                  doloremque cupiditate possimus quibusdam. Quo reprehenderit
                  dolorem neque at, aliquid molestiae iusto! Voluptatum possimus
                  rerum impedit ullam ipsum dolores asperiores! Deserunt ipsa a
                  quibusdam modi fugiat iusto quos, ea amet minima praesentium
                  iure impedit magnam voluptatibus eos odio voluptas aperiam
                  numquam sit illum perspiciatis quasi tenetur! Veritatis hic
                  pariatur velit doloribus harum nesciunt animi sint impedit
                  maiores modi fugit laborum amet rem unde dolores aperiam nihil
                  architecto neque, iusto, ea voluptatibus illum necessitatibus.
                  Qui harum natus, maxime illo voluptates itaque eligendi
                  dignissimos est, rerum in voluptatibus quis voluptatum
                  perspiciatis a amet iure eos atque rem dolore quibusdam
                  impedit quidem ex, deleniti mollitia? Officia molestias
                  perferendis velit nisi temporibus odit blanditiis veritatis
                  ullam numquam?
                </p>
                <div className="w-full">
                  <h3 className="font-[600] text-[18px] my-3">
                    Games by {details?.name}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap ">
                    {" "}
                    {details?.games.map((items: any, index: number) => (
                      <div className="px-3 py-2 font-[600] rounded-md bg-darkBlue ">
                        {items.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </m.div>
  );
};

export default DeveloperDetails;
