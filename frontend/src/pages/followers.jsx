import Header from "../components/header"
import Dashboard from "../components/dashboard"
import channelPic1 from '../assets/images/channel-1.png'
import channelPic2 from '../assets/images/channel-2.png'
import channelPic3 from '../assets/images/channel-3.png'
import channelPic4 from '../assets/images/channel-4.png'
import { IoMdClose } from "react-icons/io";
import LineDivider from '../components/divider'

const FollowersPage = () => {


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
                            <div className="text-white-false py-2">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-[19px] font-bold leading-normal">Gaming Masters Pro</h1>
                                    <IoMdClose className="text-[20px]" />
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-10 py-4">
                                    {/* {
                                        channels?.map(val => {
                                            return ( */}
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic1} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic2} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic3} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic4} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic1} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic2} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic3} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic4} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    {/* )
                                        })
                                    } */}
                                </div>
                            </div>
                            <LineDivider/>
                            <div className="text-white-false py-2">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-[19px] font-bold leading-normal">Gaming Masters Pro</h1>
                                    {/* <IoMdClose className="text-[20px]" /> */}
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-10 py-4">
                                    {/* {
                                        channels?.map(val => {
                                            return ( */}
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic1} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic2} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic3} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic4} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div><div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic1} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic2} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic3} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    <div className="flex flex-col gap-y-[2px]">
                                        <div className="flex justify-center items-center">
                                            <img src={channelPic4} alt="" className="w-20 h-20 rounded-full" />
                                        </div>
                                        <h6 className="text-center text-sm font-medium">Channel name here</h6>
                                        <span className="block text-center font-thin text-xs">
                                            18.6k subscribers
                                        </span>
                                        <button className="text-custom-purple text-center w-fit m-auto block">Subscribe</button>
                                    </div>
                                    {/* )
                                        })
                                    } */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FollowersPage