import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiSpeakerLowBold } from 'react-icons/pi';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiFullscreen } from 'react-icons/bi';
import Clip6 from '../assets/images/Clip6-1.png';
import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './liveSlider.css';
import { streamData } from '../data';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setData(streamData); // simulate data fetch
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: false }}
      navigation={false}
      grabCursor={true}
      className="mySwiper"
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
        ? Array.from({ length: 4 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col max-w-[420px] mt-4">
                <Skeleton height={250} className="rounded-lg max-h-[180px]" />
                <div className="w-full px-1 py-[2px] mt-2">
                  <Skeleton width={150} height={20} />
                  <Skeleton width={100} height={14} className="mt-2" />
                  <div className="flex gap-x-2 gap-y-1 flex-wrap mt-2">
                    <Skeleton width={50} height={20} />
                    <Skeleton width={40} height={20} />
                    <Skeleton width={60} height={20} />
                  </div>
                  <Skeleton count={2} height={12} className="mt-2" />
                </div>
              </div>
            </SwiperSlide>
          ))
        : data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col max-w-[420px] mt-4">
                <div className="relative">
                  <img
                    src={Clip6}
                    className="w-full h-full rounded-lg"
                    alt={item.streamer}
                  />
                  <span className="text-sm absolute top-2 left-2 rounded tracking-wider px-1 bg-red-500 text-white dark:text-black dark:bg-white">
                    LIVE
                  </span>
                  <div className="flex absolute w-full bottom-2 justify-between px-2">
                    <div className="flex gap-x-1 items-center">
                      <PiSpeakerLowBold className="dark:text-white " />
                      <BsFillPlayFill className="dark:text-white" />
                    </div>
                    <div className="flex gap-x-1">
                      <span className="bg-gray-500 text-xs rounded-full px-2 text-white">
                        360p
                      </span>
                      <AiOutlineSetting className="text-white" />
                      <BiFullscreen className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="w-full px-1 py-[2px] mt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="block text-black dark:text-white">
                      {item.streamer}
                    </span>
                    <span className="block text-black dark:text-white">
                      {item.viewers} viewers
                    </span>
                  </div>
                  <span className="block text-black dark:text-white font-thin mb-2">
                    {item.category}
                  </span>
                  <div className="flex gap-x-2 gap-y-1 flex-wrap">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="p-1 bg-gray-500 text-xs rounded text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-black dark:text-white mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
}
