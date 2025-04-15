// import { useEffect, useState, useRef } from "react";
// import { useInView } from "react-hook-inview";
// import styled from "styled-components";
// import Header from "../components/header"
// import Dashboard from "../components/dashboard"
// import blips1 from '../assets/images/blips-1.png'
// import { ThumbsUp, ThumbsDown, Comments, Share } from "../assets/svgs";

// function ScrollContainer() {
//     const [state, setState] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             const element = document.getElementById('blips-container'); // actual id of your div
//             if (element) {
//                 const { key } = event;
//                 const delta = 50; // Adjust this value to control scrolling speed

//                 if (key === 'ArrowUp') {
//                     element.scrollTop -= delta;
//                 } else if (key === 'ArrowDown') {
//                     element.scrollTop += delta;
//                 }
//             }
//         };

//         window.addEventListener('keydown', handleKeyDown);

//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, []);

//     return (
//         <div className="pb-20 min-h-screen">
//             <div className="max-w-screen-xl m-auto">
//                 <Header />
//                 <div className="px-4">
//                     {/* Main  */}
//                     <div className="flex justify-between relative top-[72px]">
//                         <div className="!w-[14%]">
//                             <Dashboard />
//                         </div>
//                         <div className="w-[86%] ">
//                             <div id="blips-container" className="max-h-[86vh] hideScroll border-orange-200 overflow-y-scroll snap-y snap-mandatory flex flex-col gap-5 ">
//                                 {state.map((el, index) => (
//                                     <div className={`m-0 text-center mx-auto flex w-[390px] snap-start min-h-[86vh]`} key={index + el}>
//                                         <div className="w-4/5">
//                                             <img src={blips1} className="h-full w-full" alt="" />
//                                         </div>
//                                         <div className="flex justify-center gap-y-5 items-center flex-col  w-1/5">
//                                             <div>
//                                                 <ThumbsUp width={20} height={20} />
//                                             </div>
//                                             <div>
//                                                 <ThumbsDown width={20} height={20} />
//                                             </div>
//                                             <div>
//                                                 <Comments width={20} height={20} />
//                                             </div>
//                                             <div>
//                                                 <Share width={20} height={20} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                                 {/* <Loader ref={ref}>Loading...</Loader> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// }
// export default ScrollContainer;


import Dashboard from "../components/dashboard"
import Header from "../components/header"
import ReelsPage from "../components/ReelsPage"

const blips = () => {
    // You can implement your actual data fetching function here
    const fetchReels = async (page) => {
      // Example implementation:
      // const response = await fetch(`/api/reels?page=${page}`);
      // const data = await response.json();
      // return data;
  
      // For now, we'll use a timeout to simulate network request
      return new Promise((resolve) => {
        setTimeout(() => {
          // Return mock data
          resolve([
            {
              id: `page-${page}-${Math.random().toString(36).substr(2, 9)}`,
              videoUrl:
                "https://praetorstestnet.com/khy/storage/app/video/lUEU8MmXAvSIXze5f0SdOfvUsJ7LI3frq0IoI2JN.mp4",
              user: {
                username: `user_${page}_1`,
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
              },
              caption: `This is a reel from page ${page} #trending #viral`,
              likes: Math.floor(Math.random() * 10000),
              comments: Math.floor(Math.random() * 500),
            },
            {
              id: `page-${page}-${Math.random().toString(36).substr(2, 9)}`,
              videoUrl:
                "https://praetorstestnet.com/khy/storage/app/video/lUEU8MmXAvSIXze5f0SdOfvUsJ7LI3frq0IoI2JN.mp4",
              user: {
                username: `user_${page}_2`,
                avatar: "https://randomuser.me/api/portraits/men/54.jpg",
              },
              caption: `Road trip vibes! Page ${page} #travel #adventure`,
              likes: Math.floor(Math.random() * 10000),
              comments: Math.floor(Math.random() * 500),
            },
            {
              id: `page-${page}-${Math.random().toString(36).substr(2, 9)}`,
              videoUrl:
                "https://praetorstestnet.com/khy/storage/app/video/lUEU8MmXAvSIXze5f0SdOfvUsJ7LI3frq0IoI2JN.mp4",
              user: {
                username: `user_${page}_2`,
                avatar: "https://randomuser.me/api/portraits/men/54.jpg",
              },
              caption: `Road trip vibes! Page ${page} #travel #adventure`,
              likes: Math.floor(Math.random() * 10000),
              comments: Math.floor(Math.random() * 500),
            },
          ])
        }, 1500)
      })
    }
  
    return (
      <div className="reels-page">

        <ReelsPage fetchReels={fetchReels} />
      </div>
    )
  }

export default blips
