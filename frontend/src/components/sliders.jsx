import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import playIcon from "../assets/icons/play.png";
import profileBlips from "../assets/icons/blips-profile.png";
import profile from "../assets/icons/profile.png";
import adminIcon from "../assets/icons/icon _user_admin.png";
import calendarImg from "../assets/icons/icon _calendar.png";
import { useAllVideosQuery } from "../redux/features/video";
import moment from "moment";

import "swiper/css";
import "swiper/css/pagination";

const upload_url = process.env.REACT_APP_ASSET_URL;

export default function Slider(props) {
  const { data: videos, isLoading } = useAllVideosQuery();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(props?.data);
  }, [props.data]);

  if (!videos?.video || videos.video.length === 0) {
    return <div className="text-black dark:text-white">No videos available</div>;
  }

  

  return (
    <>
      {(isLoading && <div>Loading...</div>) || (
        <Swiper
          slidesPerView={props?.blips ? 4 : 4}
          spaceBetween={30}
          className="mySwiper relative !w-full flex justify-start mt-4"
        >
          {videos.video.map((val, index) => {
            const timeAgo = moment(val.createdAt).fromNow();

            return (
              <SwiperSlide className="!bg-transparent relative" key={index}>
                <Link
                  to={`/video/${val?._id}`}
                  className="flex flex-col gap-y-1"
                >
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
                        <div className="absolute bottom-2 flex flex-col ml-3    ">
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
                      src={upload_url + val?.thumbnail}
                      className={` ${
                        props.blips
                          ? "!w-[270px] !h-[450px] !shadow-xl z-0 drop-shadow-2xl opacity-80"
                          : "!w-[232px] !h-[135px]"
                      } !w-[332px] !h-[190px] rounded-lg`}
                      alt=""
                    />
                  </div>
                  {!props?.blips && (
                    <div className="flex flex-col gap-y-2">
                      <div className="flex items-center gap-x-2">
                        <span className="text-[13px] font-bold">
                          {val?.title}
                        </span>
                      </div>
                      {props?.details && (
                        <div className="flex flex-col gap-y-1">
                          <div className="flex items-center text-sm ml-6 gap-x-1">
                            <img src={adminIcon} alt="" className="w-3" />
                            <span className="text-[10px] font-normal">
                              {val?.channel?.title}
                            </span>
                          </div>
                          <div className="flex items-center text-sm ml-6 gap-x-1">
                            <img
                              src={calendarImg}
                              alt=""
                              className="relative bottom-[1px]"
                            />
                            <span className="text-[10px] font-normal">
                              {timeAgo}
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
                        <span className="text-[13px] font-bold">
                          {val?.title}
                        </span>
                        <div>
                          <span className="block font-thin text-xs">
                            {val?.userName}
                          </span>
                          <span className="block font-thin text-xs">
                            {val?.timeAgo}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
}
