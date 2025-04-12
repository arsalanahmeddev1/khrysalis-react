import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import MyContext from "../router/context";
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiSpeakerLowBold } from 'react-icons/pi'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiFullscreen } from 'react-icons/bi';
// import Clip6 from '../assets/images/Clip6.png'
import Clip6 from '../assets/images/Clip6-1.png';
// import { useTheme } from '';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './liveSlider.css';
import { streamData } from '../data';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
    // const { data, updateData } = useContext(MyContext);
    // const [isDarkMode, setIsDarkMode] = useState(data.isDarkMode);
    // const Clip6 = 'https://s3-alpha-sig.figma.com/img/6edf/d028/264737362a21f17882b6bb58aa2b8ab1?Expires=1702252800&Signature=Ed75Gva5iNtjKR-NxxCE~8Dz~Pb6C7HSFSj-T7140Apqt6vbAMl8bYq3qUU157PXPHSMewyEclgnxZ5wv96ZxB42yCcJpz8gXSCOi-1zgEdy4KwouPzLaolEWpmLuBVpclItrxTTse0Y1-npi7hbkX~HzB4ciDCXzRQN6M5e1-M-z3ZI0Q1whZGIvnaTQD6m63rTMcx7iikiyCMtcYIPHvqM18fU9ii24gpXAMcuc~TYFoc6koPV6NISdnrwh4T-UIILWUZnpFFct2C7sjweXpraQo46sZlNUqRvb6T013Q25Me1WBkeUGutP~1hOcDt4UvFwEXUVe4XfjVeR20exQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: false }}
                navigation={false}
                grabCursor={true}
                // modules={[Pagination,]}
                className="mySwiper"
            >
                {streamData.map((item, index) => (
                    
                        <SwiperSlide key={index}>
                            <div className="flex flex-col max-w-[420px]  mt-4">
                                <div className='relative'>
                                    <img src={Clip6} className='w-full h-full rounded-lg' alt={item.streamer} />
                                    <span className='text-sm absolute top-2 left-2 rounded tracking-wider px-1 bg-red-500 text-white dark:text-black dark:bg-white'>
                                        LIVE
                                    </span>
                                    <div className="flex absolute w-full bottom-2 justify-between px-2">
                                        <div className='flex gap-x-1 items-center'>
                                            <PiSpeakerLowBold className='dark:text-white ' />
                                            <BsFillPlayFill className='dark:text-white' />
                                        </div>
                                        <div className='flex gap-x-1'>
                                            <span className="bg-gray-500 text-xs rounded-full px-2 text-white">360p</span>
                                            <AiOutlineSetting className='text-white' />
                                            <BiFullscreen className='text-white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-100 px-1 py-[2px] mt-2'>
                                    <div className="flex justify-between w-100 items-center mb-2">
                                        <span className="block text-black dark:text-white  ">{item.streamer}</span>
                                        <span className="block text-black dark:text-white">{item.viewers} viewers</span>
                                    </div>
                                    <span className="block text-black dark:text-white font-thin mb-2">{item.category}</span>
                                    <div className='flex gap-x-2 gap-y-1 flex-wrap'>
                                        {item.tags.map((tag, idx) => (
                                            <span key={idx} className='p-1 bg-gray-500 text-xs rounded text-white'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className='text-sm text-black dark:text-white mt-2'>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
