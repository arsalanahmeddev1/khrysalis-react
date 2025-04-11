import React, { useState } from "react";
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

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
  

  return (
    <div className="bg-black-false pb-20">
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

              <Slider {...settings} className="text-white mt-4 options-slider">
                {categories.map((item, index) => (
                  <div key={index} className=" text-center px-2">
                    <div className="category-item cursor-pointer bg-gray-700 rounded text-xs md:text-sm lg:text-base 
 px-0 md:px-0 lg:px-0 py-1 md:py-1 lg:py-1 text-center">{item}</div>
                  </div>
                ))}
              </Slider>

                  <div className="flex flex-col md:flex-row md:max-h-[333px] mt-3 gap-3">
      {/* Large Video */}
      <div className="md:w-[55%] w-full relative">
        <img src={video1} className="h-full w-full object-cover rounded-lg" alt="videos" />
        <span className="absolute text-white right-2 top-2 bg-gray-800 px-2 py-1 rounded-lg text-sm">
          {"3"}
        </span>
        <div className="  mt-2 text-white">
          {/* <p className="font-semibold">{"Tittle"}</p> */}
          <div className="flex items-center gap-x-2 mt-2">
            <img src={video2} className="h-16 w-16 rounded-full" alt="Profile" />
            <span className="text-sm">{"mk"}</span>
          </div>
        </div>
      </div>

      {/* Smaller Videos */}
      <div className="md:w-[45%] w-full flex flex-col gap-3">
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
            <img src={video3} className="h-full w-full object-cover rounded-lg" alt="video"/>
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
    </div>

              <div className="mt-32">
                <h1 className="font-semibold border-b-2 text-white-false relative top-[1px] w-fit border-blue-600 z-10">Live</h1>
                <LiveSlider />
              </div>

              <div className="text-white-false mt-5">
                <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">Blips</h1>
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
