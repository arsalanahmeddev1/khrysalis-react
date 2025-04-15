import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import playIcon from "../assets/icons/play.png";
import profileBlips from "../assets/icons/blips-profile.png";
import profile from "../assets/icons/profile.png";
import adminIcon from "../assets/icons/icon _user_admin.png";
import calendarImg from "../assets/icons/icon _calendar.png";

import "swiper/css";
import "swiper/css/pagination";

export default function Slider(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (props?.data && props.data.length > 0) {
        setData(props.data);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [props.data]);


  const skeletonSlides = Array(4).fill(0);

  return (
    <>
      <Swiper
        slidesPerView={props?.blips ? 4 : 4}
        spaceBetween={30}
        className="mySwiper relative !w-full flex justify-start mt-4"
        breakpoints={{
          0: {
              slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {loading
          ? skeletonSlides.map((_, index) => (
            <SwiperSlide key={index} className="!bg-transparent relative">
              <div className="flex flex-col gap-y-2">
                <Skeleton
                  className={`${props.blips ? "w-full max-w-[332px] h-[450px]" : "w-full max-w-[232px] h-[135px]"}`}
                  borderRadius={12}
                />
                {!props?.blips && (
                  <div className="flex flex-col gap-y-1">
                    
                    <Skeleton
                    className={"w-full max-w-[372px] h-[16px]"}
                    />
                    {props?.details && (
                      <>
                        <Skeleton width={100} height={14}
                         />
                        <Skeleton width={80} height={14} />
                      </>
                    )}
                  </div>
                )}
                {props?.blips && (
                  <div className="flex items-start gap-x-2">
                    <Skeleton circle height={48} width={48} />
                    <div className="flex flex-col gap-y-1">
                      <Skeleton width={270} height={16} />
                      <Skeleton width={100} height={14} />
                      <Skeleton width={80} height={14} />
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))
          : data?.map((val, index) => (
            <SwiperSlide className="!bg-transparent relative" key={index}>
              <a href={val?.link} className="flex flex-col gap-y-1">
                <div className="relative">
                  {!props?.liveNews && (
                    <div className="w-full h-full flex justify-center items-center absolute">
                      <img src={playIcon} alt="" className="z-10" />
                    </div>
                  )}
                  {!props?.blips && !props?.liveNews && (
                    <div className="absolute w-full h-full">
                      <span className="bg-black-false text-white-false block rounded-full float-right py-1 px-3 text-xs mr-3 mt-3">
                        {val?.duration}
                      </span>
                      <div className="absolute bottom-2 flex flex-col ml-3">
                        <span className="bg-black-false w-fit text-white-false block rounded-full float-right py-1 px-3 text-xs mr-3 mt-3">
                          {val?.category}
                        </span>
                        <h1 className="text-white-false font-semibold pl-2">
                          The best game of all time
                        </h1>
                        <div className="flex items-center gap-x-1 pl-2">
                          <img src={profile} alt="" />
                          <span className="text-xs">{val?.userName}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <img
                    src={val?.img}
                    className={` ${props.blips
                      ? "!w-[270px] !h-[450px] !shadow-xl z-0 drop-shadow-2xl opacity-80"
                      : "!w-[232px] !h-[135px]"
                      } !w-[332px] !h-[190px] rounded-lg`}
                    alt=""
                  />
                </div>
                {!props?.blips && (
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-2">
                      <span className="text-[13px] font-bold text-black dark:text-white">
                        {val?.title}
                      </span>
                    </div>
                    {props?.details && (
                      <div className="flex flex-col gap-y-1">
                        <div className="flex items-center text-sm ml-6 gap-x-1">
                          <img src={adminIcon} alt="" className="w-3" />
                          <span className="text-[10px] font-normal">
                            {val?.userName}
                          </span>
                        </div>
                        <div className="flex items-center text-sm ml-6 gap-x-1">
                          <img
                            src={calendarImg}
                            alt=""
                            className="relative bottom-[1px]"
                          />
                          <span className="text-[10px] font-normal">
                            {val?.timeAgo}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {props?.blips && (
                  <div className="flex items-start gap-x-2">
                    <img src={profileBlips} alt="" className="w-12" />
                    <div className="flex gap-y-2 flex-col">
                      <span className="text-[13px] font-bold text-black dark:text-white max-w-[270px]">
                        {val?.title}
                      </span>
                      <div>
                        <span className="block font-thin text-xs text-black dark:text-white">
                          {val?.userName}
                        </span>
                        <span className="block font-thin text-xs text-black dark:text-white">
                          {val?.timeAgo}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </a>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
