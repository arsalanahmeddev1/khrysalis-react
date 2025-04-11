import Header from "../components/header"
import blipsIcon from '../assets/icons/blips.png'
import facebookIcon from '../assets/icons/facebook.png'
import twitterIcon from '../assets/icons/twitter.png'
import tiktokIcon from '../assets/icons/tiktok.png'
import Dashboard from '../components/dashboard'
import liveStreamImage from '../assets/images/live-stream.png'
import { AddUser, Reaction } from "../assets/svgs"
import profilePic from '../assets/icons/blips-profile.png'
import { VerifiedTick } from "../assets/svgs"
import { IoIosArrowForward } from "react-icons/io";
import Button from '../components/button'
import LineDivider from '../components/divider'

const LiveStreamPage = () => {
    const categories = [
        'All',
        'Trending',
        'Live',
        'Gaming',
        'Music',
        'Travel',
        'Sports',
        'Animation',
        'Game play',
        'Streaming',
        'Camping',
        'Cast'
    ]
    return (
        <div className="bg-black-false pb-20 min-h-screen text-white-false">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="px-4">
                    {/* Main  */}
                    <div className="flex justify-between relative top-[72px]">
                        <div className="!w-[14%]">
                            <Dashboard />
                        </div>
                        <div className="w-[86%]">
                            <div className="flex justify-center items-center">
                                <img src={blipsIcon} className="w-[52px]" alt="" />
                            </div>
                            <div className="text-white-false flex justify-between mt-4 px-1">
                                {
                                    categories?.map(item => {
                                        return <span className="">{item}</span>
                                    })
                                }
                            </div>
                            <div className="mt-3 flex gap-x-2">
                                <div className="w-[60%]">
                                    <img src={liveStreamImage} alt="" />
                                </div>
                                <div className="w-[40%] flex flex-col bg-[#1B1B1B] relative">
                                    <div className="flex justify-between items-center p-2 bg-[#141414]">
                                        <span className="font-bold uppercase text-[20px]">stream chat</span>
                                        <AddUser height={20} width={20} />
                                    </div>
                                    <div className="p-2 text-[14px]">
                                        Welcome to chat room
                                    </div>
                                    <div className="absolute bottom-0 w-full flex border border-[#3B3B3B] justify-between p-1">
                                        <input type="text" name="" placeholder="Welcome to chat room..." className="bg-transparent text-white-false w-full border-none focus:outline-none focus:ring-transparent" id="" />
                                        <Reaction height={20} width={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-2 mt-3">
                                <div className="w-[60%]">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-x-4 ">
                                            <div>
                                                <img src={profilePic} alt="" />
                                            </div>
                                            <div className="flex gap-y-1 flex-col">
                                                <div className="flex gap-x-2 items-center">
                                                    <h1 className="capitalize font-semibold text-[25px]">Gaming world</h1>
                                                    <VerifiedTick width={25} height={25} />
                                                </div>
                                                <div className="flex text-[10px] gap-x-2">
                                                    <span>Gaming World</span><span>18.6k subscribers</span><span>526 videos</span>
                                                </div>
                                                <div className="flex items-center gap-x-1">
                                                    <span className="text-[12px] font-medium">Gaming world</span> <IoIosArrowForward className="text-[12px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-x-2 items-center">
                                            <Reaction height={20} width={20} />
                                            <Button enabled={'Follow'}>Follow</Button>
                                            <Button>Subscribe</Button>
                                        </div>
                                    </div>
                                    <LineDivider />
                                    <div className="flex justify-between">
                                        <div className="w-2/6 flex justify-center">
                                            <div>
                                                <div className="flex gap-x-2 items-center">
                                                    <h2 className="text-[20px] font-bold">About Gaming World</h2>
                                                    <VerifiedTick width={25} height={25} />
                                                </div>
                                                <p><span className="text-[13px] font-medium">18.5k</span><span className="text-[10px]">Followers</span></p>
                                                <p className="text-[6px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                            </div>
                                        </div>
                                        {/* Social Icons  */}
                                        <div className="w-2/6 flex justify-center">
                                            <div className="flex flex-col gap-y-2">
                                                <div className="flex gap-x-2 items-center">
                                                    <img src={twitterIcon} alt="twitter_icon" width={25} height={25} />
                                                    <a href="#">Twitter</a>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <img src={facebookIcon} alt="twitter_icon" width={25} height={25} />
                                                    <a href="#">Facebook</a>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <span className="h-[25px] w-[25px]"></span>
                                                    <a href="#">Instagram</a>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <img src={tiktokIcon} alt="instagram_icon" width={25} height={25} />
                                                    <a href="#">Instagram</a>
                                                </div>
                                                <div className="flex gap-x-2 items-center">
                                                    <span className="h-[25px] w-[25px]"></span>
                                                    <a href="#">Discord</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-2/6 flex justify-center">
                                            <div className="flex flex-col gap-y-2">
                                                <h2 className="text-[20px] font-bold">About Gaming World's Goal</h2>
                                                <div className="flex items-center gap-x-4 ">
                                                    <div>
                                                        <img src={profilePic} width={83} height={83} alt="" />
                                                    </div>
                                                    <div>
                                                        <p><span className="text-[13px] font-medium">18.5k</span><span className="text-[10px]">Followers</span></p>
                                                        <p className="text-[10px]">Your Profile text here Your Profile text here  </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[40%] p-2">
                                    <div className="flex flex-col gap-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <img src={profilePic} alt="" />
                                            <div>
                                                <h2 className="text-[20px] font-bold">
                                                    Land Discover
                                                </h2>
                                                <p className="text-[10px]">Your Profile text here Your Profile text here</p>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <span className="block h-3 w-3 rounded-full bg-[#16B912]"></span>
                                                <span className="text-[13px] font-medium">18.5k</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <img src={profilePic} alt="" />
                                            <div>
                                                <h2 className="text-[20px] font-bold">
                                                    Land Discover
                                                </h2>
                                                <p className="text-[10px]">Your Profile text here Your Profile text here</p>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <span className="block h-3 w-3 rounded-full bg-[#16B912]"></span>
                                                <span className="text-[13px] font-medium">18.5k</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <img src={profilePic} alt="" />
                                            <div>
                                                <h2 className="text-[20px] font-bold">
                                                    Land Discover
                                                </h2>
                                                <p className="text-[10px]">Your Profile text here Your Profile text here</p>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <span className="block h-3 w-3 rounded-full bg-[#16B912]"></span>
                                                <span className="text-[13px] font-medium">18.5k</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <img src={profilePic} alt="" />
                                            <div>
                                                <h2 className="text-[20px] font-bold">
                                                    Land Discover
                                                </h2>
                                                <p className="text-[10px]">Your Profile text here Your Profile text here</p>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <span className="block h-3 w-3 rounded-full bg-[#16B912]"></span>
                                                <span className="text-[13px] font-medium">18.5k</span>
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

export default LiveStreamPage