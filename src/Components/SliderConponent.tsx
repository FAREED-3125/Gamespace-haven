import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import useDimension from "../Hooks/useDimension";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

type Props = {
  result: any;
};
const SliderConponent = ({ result }: Props) => {
  const innerWidth: number = useDimension();
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Swiper
        className="w-[100%] mt-10"
        effect="coverflow"
        modules={[EffectCoverflow, Navigation]}
        coverflowEffect={{
          rotate: 0, // Set the rotation angle of the slides
          stretch: 0, // Distance between slides (in px)
          depth: 100, // Depth of the 3D effect
          modifier: 1, // Effect multiplier to reduce the intensity
          slideShadows: false,
        }}
        spaceBetween={20}
        style={{
          padding:
            innerWidth >= 1024
              ? "0px 30% 0px 30%"
              : innerWidth >= 740
              ? "0px 75px 0px 75px"
              : "0px 0px 0px 0px",
        }}
        grabCursor={true}
        navigation={{
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
        }}
      >
        {result?.slice(9, 19)?.map((items: any, index: number) => (
          <SwiperSlide key={index} className="h-full rounded-md relative">
            <div
              onClick={() =>
                navigate("/gamedetails/" + items?.id, {
                  state: {
                    screenshorts: items?.short_screenshots,
                  },
                })
              }
            >
              <>
                <img
                  src={items?.background_image}
                  className="w-full h-full aspect-video object-cover rounded-md "
                />
                <div className="w-full h-full absolute top-0 bg-gradient-to-t from-black/90 to-transparent flex items-end ">
                  <div className="w-full flex items-end justify-between py-5 px-5">
                    <div className="flex flex-col gap-[10px] flex-grow">
                      <h3 className="text-[18px] font-[600]">{items?.name}</h3>
                      <div className="flex gap-2 flex-wrap">
                        {items?.genres?.map((genre: any, index: number) => (
                          <p
                            className=" px-2 py-1 bg-darkBlue rounded-md text-[13px]"
                            key={index}
                          >
                            {genre?.name}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center  gap-[5px] text-[14px] w-max mt-1 mr-1">
                      <FaStar />
                      <span className="text-gray-400"> {items?.rating}</span>
                    </div>
                  </div>
                </div>{" "}
              </>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-3 items-center justify-end lg:justify-center px-2 pt-4">
        <div className="rounded-full bg-darkBlue p-4 prev-slide cursor-pointer">
          <FaAngleLeft />
        </div>
        <div className="rounded-full bg-darkBlue p-4 next-slide cursor-pointer">
          <FaAngleRight />
        </div>
      </div>
    </>
  );
};

export default SliderConponent;
