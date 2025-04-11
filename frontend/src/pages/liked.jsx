import Header from "../components/header"
import Dashboard from "../components/dashboard"
import { IoMdClose } from "react-icons/io";
import historyIcon from '../assets/icons/history.png'
import blipsProfile from '../assets/icons/blips-profile.png'
import LikedIcon from '../assets/icons/like-outline.png'
import liked1 from '../assets/images/liked-1.png'
import thumbsUp from '../assets/icons/thumbs-up.png'
import thumbsDown from '../assets/icons/thumbs-down.png'
import comment from '../assets/icons/comments.png'

const LikedPage = () => {
    const channels = [
        '', '', '', '', '', '', '', '', '', ''
    ]

    return (
        <div className="bg-black-false pb-20 min-h-screen">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="px-4">
                    {/* Main  */}
                    <div className="flex justify-between relative top-[72px]">
                        <div className="!w-[14%]">
                            <Dashboard />
                        </div>
                        <div className="w-[86%]">
                            <div className="flex text-white-false gap-x-10 mt-4">
                                <div className="w-[232px]">
                                    <div>
                                        <img src={liked1} alt="liked" className="w-[232px] h-[135px]" />
                                    </div>
                                    <div className="mt-2">
                                        <span className="font-semibold block text-[12px]">
                                            Liked videos
                                        </span>
                                        <span className="text-[10px]">
                                            1 video no views last updated on Sep 20, 2023
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        <button className="text-[16px] leading-normal">Play all</button>
                                        <button className="text-[16px] leading-normal">Shuffle</button>
                                    </div>
                                </div>
                                <div className="w-[75%]">
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex items-center gap-x-2">
                                            <span>1</span>
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
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <span>2</span>
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
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <span>3</span>
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
                                        </div>
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


export default LikedPage