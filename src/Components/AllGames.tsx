import useFetch, { apiKey } from "../Hooks/useFetch";
import { FaStar } from "react-icons/fa";
import { motion as m } from "framer-motion";
import xbox from "../Assets/icon _platform xbox_.svg";
import ps from "../Assets/icon _logo playstation_w.png";
import switchp from "../Assets/icon _nintendo switch_w.png";
import SliderConponent from "./SliderConponent";
import Example from "./Loading";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
const AllGames = () => {
  const {
    data: gameData,
    err: gameErr,
    loading: gameLoading,
  } = useFetch(
    "https://rawg-video-games-database.p.rapidapi.com/games?" + apiKey
  );

  const platforms = [switchp, ps, xbox];
  const navigate = useNavigate();
  const { key } = useLocation();

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
              type: "linear",
            },
          }}
          exit={{
            y: 100,
          }}
          key={key}
        >
          <SliderConponent result={gameData?.results} />
          <h3 className="text-[22px] font-[600] mt-10 mb-4 px-2">
            Popular Games
          </h3>
          <div className="px-2 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-6  ">
            {gameData?.results?.map((items: any, index: number) => (
              <div
                onClick={() =>
                  navigate("/gamedetails/" + items?.id, {
                    state: {
                      screenshorts: items?.short_screenshots,
                    },
                  })
                }
              >
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
                >
                  <img
                    src={items?.background_image}
                    className="w-full object-cover aspect-video brightness-[.8] hover:brightness-[1] rounded-md transition-all duration-[.3s]"
                    alt=""
                  />
                  <div className="flex items-center gap-2 px-2 pt-2">
                    {platforms.map((plat: any, index: number) => {
                      return (
                        <img
                          src={plat}
                          alt=""
                          key={index}
                          className="w-[13px] aspect-square"
                        />
                      );
                    })}
                  </div>
                  <div className="w-full flex items-start justify-between py-2 px-2">
                    <div className="flex flex-col gap-[10px] flex-grow">
                      <h3 className="text-[18px] font-[600]">{items?.name}</h3>
                      <div className="flex gap-2 flex-wrap">
                        {items.genres.map((genre: any, index: number) => (
                          <p
                            className=" px-2 py-1 bg-darkBlue rounded-md text-[13px]"
                            key={index}
                          >
                            {genre.name}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center  gap-[5px] text-[14px] w-max mt-1 mr-1">
                      <FaStar />
                      <span className="text-gray-400"> {items?.rating}</span>
                    </div>
                  </div>
                </m.div>{" "}
              </div>
            ))}
          </div>{" "}
        </m.div>
      )}
    </>
  );
};

const PopUpGames = () => {};

export default AllGames;
