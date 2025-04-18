import React, { useContext, useEffect, useState } from "react";
import MyContext from "../router/context";
import Slider from "react-slick";
import {CustomSlider } from "../components";
import { blipsIcon, video1, video2, video3, video4 } from "../assets/images";
import LiveSlider from "../components/liveslider";
import SlidersBlips from "../components/slidersBlips";
import { blipLinks } from "../components/videoLinks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "../components/CustomArrow";
import Skeleton from 'react-loading-skeleton';
import VideoCard from "../components/VideoCard";
import Layout from "../components/Layouts/Layout";

// import Sidebar from "../components/Sidebar";
const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const categories = [
    "All", "Trending", "Live", "Gaming", "Music", "Travel",
    "Sports", "Animation", "Gameplay", "Streaming", "Camping", "Cast",
  ];


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <img src={blipsIcon} className="w-[52px]" alt="Blips Icon" />
      </div>
      {loading ? (
        <div className="flex gap-2 mt-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton
              key={index}
              height={32}
              width={190}
              borderRadius={4}
            />
          ))}
        </div>
      ) : (
        <Slider {...settings} className="text-white mt-4 options-slider">
          {categories.map((item, index) => (
            <div key={index} className="text-center px-2">
              <div
                className="category-item"
              >
                {item}
              </div>
            </div>
          ))}
        </Slider>
      )}
      {loading ? (
        <div className="flex flex-col md:flex-row mt-3 gap-3">
          <div className="md:w-3/5 w-full">
            <Skeleton height={333} width="100%" borderRadius={12} />
          </div>
          <div className="md:w-2/5 w-full flex flex-col gap-3">
            <Skeleton height={166.5} width="100%" borderRadius={12} />
            <div className="flex gap-3">
              <div className="w-1/2">
                <Skeleton height={150} width="100%" borderRadius={12} /> {/* Thumbnail */}
              </div>
              <div className="w-1/2">
                <Skeleton height={150} width="100%" borderRadius={12} /> {/* Thumbnail */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row mt-3 gap-3">
          <div className="md:w-3/5 w-full">
            <VideoCard
              layout="large"
              thumbnail={video1}
              label="3"
              profileImage={video2}
              author="Author Three"
              title="Gaming"
            />
          </div>
          <div className="md:w-2/5 w-full flex flex-col gap-3">
            <VideoCard
              layout="overlay"
              thumbnail={video2}
              label="4"
              profileImage={video3}
              height="166.5"
              author="Author Three"
              title="Gaming"
            />
            <div className="flex gap-3">
              <VideoCard
                layout="simple"
                thumbnail={video3}
                label="3"
                profileImage={video3}
                author="Author Three"
                title="Gaming"
              />
              <VideoCard
                layout="simple"
                thumbnail={video4}
                label="4"
                profileImage={video3}
                author="Author Three"
                title="Gaming"
              />
            </div>
          </div>
        </div>
      )}
      <div className="mt-5">
        <h1 className="font-semibold border-b-2 text-white-false relative top-[1px] w-fit border-blue-600 z-10 text-black dark:text-white">Live</h1>
        <LiveSlider />
      </div>

      <div className="text-white-false mt-5">
        <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10 text-black dark:text-white">Blips</h1>
        <SlidersBlips data={blipLinks} blips={true} />
      </div>

      <div className="text-white-false mt-5">
        <h1 className="font-semibold border-b-2 uppercase relative top-[1px] w-fit border-blue-600 z-10 text-black dark:text-white">Recommended</h1>
        <CustomSlider details={true} />
      </div>
    </Layout>
  );
};

export default HomePage;
