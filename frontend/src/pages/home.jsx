import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Header from "../components/header";
import blipsIcon from "../assets/icons/blips.png";
import Dashboard from "../components/dashboard";
import video1 from "../assets/images/video-1.png";
import video2 from "../assets/images/video-2.png";
import video3 from "../assets/images/video-3.png";
import video4 from "../assets/images/video-4.png";
import profileIcon from "../assets/icons/profile.png";
import LiveSlider from "../components/liveslider";
import SlidersBlips from "../components/slidersBlips";
import CustomSlider from "../components/sliders";
import { blipLinks, recommendedLinks } from "../components/videoLinks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "../components/CustomArrow";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import VideoCard from "../components/VideoCard";
const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
    prevArrow: <CustomArrow direction="prev" darkMode={isDarkMode} />,
    nextArrow: <CustomArrow direction="next" darkMode={isDarkMode} />,

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
    // Simulating a delay to show the skeleton loader
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 200000);
  }, []);

  return (
    <div className="pb-20">
      <div className="w-full m-auto">
        <Header />
        <div className="px-4">
          <div className="flex justify-between relative top-[72px]">
            <div className="lg:!w-[14%] sm:w-0 hidden xl:block">
              <Dashboard />
            </div>
            <div className="md:w-[86%] w-full px-4">
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
                        className="category-item cursor-pointer bg-gray-700 rounded 
          text-xs md:text-sm lg:text-base 
          py-1 text-center"
                      >
                        {item}
                      </div>
                    </div>
                  ))}
                </Slider>
              )}


              {/* <div className="flex flex-col md:flex-row md:max-h-[333px] mt-3 gap-3">
                <div className="md:w-3/5 w-full relative">
                  <img src={video1} className="h-full w-full object-cover rounded-lg" alt="videos" />
                  <span className="absolute text-white right-2 top-2 bg-gray-800 px-2 py-1 rounded-lg text-sm">
                    {"3"}
                  </span>
                  <div className="  mt-2 text-white">
                    <div className="flex items-center gap-x-2 mt-2">
                      <img src={video2} className="h-16 w-16 rounded-full" alt="Profile" />
                      <span className="text-sm">{"mk"}</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/5 w-full flex flex-col gap-3">
                  <div className="relative">
                    <img src={video2} className="h-full w-full object-cover rounded-lg" alt="video2" />
                    <span className="absolute text-white right-2 top-2 bg-gray-800 px-2 py-1 rounded-lg text-sm">
                      {"4"}
                    </span>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">{"Gaming"}</p>
                      <div className="flex items-center gap-x-2 mt-1">
                        <img src={video3} className="h-6 w-6 rounded-full" alt="Profile" />
                        <span className="text-sm">{"Author Three"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1/2 relative">
                      <img src={video3} className="h-full w-full object-cover rounded-lg" alt="video" />
                      <span className="absolute text-white right-2 top-2 bg-gray-800 px-2 py-1 rounded-lg text-sm">
                        {3}
                      </span>
                    </div>
                    <div className="w-1/2 relative">
                      <img src={video4} className="h-full w-full object-cover rounded-lg" alt="mkmk" />
                      <span className="absolute text-white right-2 top-2 bg-gray-800 px-2 py-1 rounded-lg text-sm">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}

              {loading ? (
                <div className="flex flex-col md:flex-row mt-3 gap-3">
                  <div className="md:w-3/5 w-full">
                    <Skeleton height={333} width="100%" borderRadius={12} />
                  </div>
                  <div className="md:w-2/5 w-full flex flex-col gap-3">
                    <Skeleton height={166.5} width="100%" borderRadius={12} />
                    <div className="flex gap-3">
                      <Skeleton height={166.5} width="50%" borderRadius={12} />
                      <Skeleton height={166.5} width="50%" borderRadius={12} />
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
                <h1 className="font-semibold border-b-2 text-white-false relative top-[1px] w-fit border-blue-600 z-10 dark:text-white">Live</h1>
                <LiveSlider />
              </div>

              <div className="text-white-false mt-5">
                <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10 text-black dark:text-white">Blips</h1>
                <SlidersBlips data={blipLinks} blips={true} />
              </div>

              <div className="text-white-false mt-5">
                <h1 className="font-semibold border-b-2 uppercase relative top-[1px] w-fit border-blue-600 z-10">Recommended</h1>
                <CustomSlider details={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
