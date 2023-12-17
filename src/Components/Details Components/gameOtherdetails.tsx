import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useDimension from "../../Hooks/useDimension";

const GameOtherdetails = ({ details }: { details: any }) => {
  const location = useLocation();
  const innerWidth = useDimension();

  return (
    <div className="w-full">
      <h3 className="text-[20px] font-[600] mt-4 mb-1">Description</h3>
      <p
        dangerouslySetInnerHTML={{ __html: details?.description }}
        className="text-gray-400 text-[15px]"
      />
      <h3 className="text-[20px] font-[600] my-4 mb-2">Tags</h3>
      <div className="flex gap-2 items-center flex-wrap">
        {details?.tags?.map((tag: any, index: number) => (
          <div>
            <p className="px-3 py-2 bg-yellow-900 text-yellow-400 rounded-md text-[14px]">
              {tag?.name}
            </p>
          </div>
        ))}
      </div>
      <h3 className="text-[20px] font-[600] mt-5 mb-2">Screenshots:</h3>
      <Swiper
        style={{
          width: "100%",
        }}
        slidesPerView={innerWidth <= 740 ? 1 : 2}
        spaceBetween={10}
        navigation={{
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
        }}
        modules={[Navigation]}
      >
        {location?.state?.screenshorts.map((shots: any, index: number) => (
          <SwiperSlide key={index} className="aspect-video">
            <img src={shots?.image} className="aspect-video rounded-md" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-3 items-center justify-end  px-2 pt-4">
        <div className="rounded-full bg-darkBlue p-4 prev-slide cursor-pointer">
          <FaAngleLeft />
        </div>
        <div className="rounded-full bg-darkBlue p-4 next-slide cursor-pointer">
          <FaAngleRight />
        </div>
      </div>
     
       
    
    </div>
  );
};

export default GameOtherdetails;
