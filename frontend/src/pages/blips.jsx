import { useEffect, useState, useRef } from "react";
import { useInView } from "react-hook-inview";
import styled from "styled-components";
import Header from "../components/header"
import Dashboard from "../components/dashboard"
import blips1 from '../assets/images/blips-1.png'
import { ThumbsUp, ThumbsDown, Comments, Share } from "../assets/svgs";

function ScrollContainer() {
    const [state, setState] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const element = document.getElementById('blips-container'); // actual id of your div
            if (element) {
                const { key } = event;
                const delta = 50; // Adjust this value to control scrolling speed

                if (key === 'ArrowUp') {
                    element.scrollTop -= delta;
                } else if (key === 'ArrowDown') {
                    element.scrollTop += delta;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="pb-20 min-h-screen">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="px-4">
                    {/* Main  */}
                    <div className="flex justify-between relative top-[72px]">
                        <div className="!w-[14%]">
                            <Dashboard />
                        </div>
                        <div className="w-[86%] ">
                            <div id="blips-container" className="max-h-[86vh] hideScroll border-orange-200 overflow-y-scroll snap-y snap-mandatory flex flex-col gap-5 ">
                                {state.map((el, index) => (
                                    <div className={`m-0 text-center mx-auto flex w-[390px] snap-start min-h-[86vh]`} key={index + el}>
                                        <div className="w-4/5">
                                            <img src={blips1} className="h-full w-full" alt="" />
                                        </div>
                                        <div className="flex justify-center gap-y-5 items-center flex-col  w-1/5">
                                            <div>
                                                <ThumbsUp width={20} height={20} />
                                            </div>
                                            <div>
                                                <ThumbsDown width={20} height={20} />
                                            </div>
                                            <div>
                                                <Comments width={20} height={20} />
                                            </div>
                                            <div>
                                                <Share width={20} height={20} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <Loader ref={ref}>Loading...</Loader> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ScrollContainer;