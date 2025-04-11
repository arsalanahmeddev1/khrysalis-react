import Header from "../components/header"
import Dashboard from "../components/dashboard"
import Slider from "../components/sliders"
import { blipLinks } from "../components/videoLinks"
import liked1 from '../assets/images/liked-1.png'
import thumbsUp from '../assets/icons/thumbs-up.png'
import thumbsDown from '../assets/icons/thumbs-down.png'
import comment from '../assets/icons/comments.png'
import searchIcon from '../assets/icons/search.png'
import { Link } from "react-router-dom"

const HistoryPage = () => {

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
                            <h1 className="text-[25px] font-bold">
                                Watch History
                            </h1>
                            <div className="mt-6">
                                <h2>Today</h2>
                                <div>
                                    {/* <img src={blipsIcon} alt="" /> */}
                                </div>
                                <div>
                                    <Slider blips={true} data={blipLinks} />
                                </div>
                            </div>

                            <div className="flex w-full justify-between mt-12 items-start gap-x-4">
                                <div className="flex flex-col gap-y-6">
                                    {[1, 2, 3, 4, 5]?.map(() => {
                                        return (
                                            <div className="flex items-center gap-x-3">
                                                <div>
                                                    <div><img src={liked1} className="w-[260px] h-[135px]" alt="" /></div>
                                                    <div className="relative top-2">
                                                        <div className="flex items-center justify-around">
                                                            <span className="flex items-center gap-x-1 "><img src={thumbsUp} alt="" />503</span>
                                                            <span><img src={thumbsDown} alt="" /></span>
                                                            <span className="flex items-center gap-x-1 "><img src={comment} alt="" />20</span>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-2">
                                                    <p className="text-[13px] font-bold">Lorem Ipsimply dummy text um is simply dummy text of the printing and typimply dummy text esetting industryimply dummy text </p>
                                                    <p className="text-[10px]">Lorem If the printing and typesettingpsum is f the printing and typesettingsimply dummy text of the printing and typesetting industry</p>
                                                    <div className="text-[10px] flex items-center justify-between">
                                                        <span>Gameforall</span>
                                                        <div className="flex gap-x-2">
                                                            <span>
                                                                532 views
                                                            </span>
                                                            <span>
                                                                1 Month ago
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="sticky top-20">
                                    <div className="flex items-center border-b pb-2">
                                        <input type="text" placeholder="Search Here..." className="bg-transparent border-none outline-none" name="" id="" />
                                        <img src={searchIcon} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-y-4 mt-4">
                                        <span>Clear all watch history</span>
                                        <span>Pause watch history</span>
                                        <span>Mange all history</span>
                                        <span>Comments</span>
                                        <span>Community</span>
                                        <span>Live chat</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HistoryPage