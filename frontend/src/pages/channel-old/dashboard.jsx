import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import Button from '../../components/button'
import playPic from '../../assets/images/dashboard-play.png'
import newsImg from '../../assets/images/channel-news-1.png'
import newsImg2 from '../../assets/images/channel-news-2.png'
import { channelTabs as tabs } from "../../conts"
import LineDivider from '../../components/divider'

const ChannelDashboardPage = () => {

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
                            <div className="mt-4 text-white-false flex justify-between">
                                <h1 className="font-bold text-[25px] leading-none">Dashboard</h1>
                                <div className="flex items-center gap-x-2">
                                    <Button enabled={"Upload Videos"}>Upload Videos</Button>
                                    <Button enabled={"Go Live"}>Go Live</Button>
                                </div>
                            </div>

                            <div className="mt-10 flex gap-3 flex-wrap justify-center items-center">
                                {
                                    tabs?.map((val, index) => <Button key={index} enabled={"Dashboard"} path={val?.path}>{val?.title}</Button>)
                                }
                            </div>

                            <div className="flex mt-8 gap-x-4">
                                <div className="w-[60%]">
                                    <div className="flex gap-x-3">
                                        <div className="w-[491px] h-[422px] flex justify-center items-center flex-col border border-[#1B1B1B] rounded-[14px]">
                                            <div className="w-[141px] h-[141px]"><img src={playPic} alt="" className="" /></div>
                                            <p className="text-white-false text-center">Want to see metrics on your recent video?Upload and publish a video to get started.</p>
                                            <div className="mt-4">
                                                <Button enabled={"Dashboard"}>Dashboard</Button>
                                            </div>
                                        </div>
                                        <div className="text-white-false p-4 w-[491px] h-[422px] border border-[#1B1B1B] rounded-[14px] flex flex-col">
                                            <div>
                                                <h1 className="text-[19px] font-bold leading-normal">Channel Analytics</h1>
                                                <p>Current subscribers</p>
                                                <span>0</span>
                                            </div>
                                            <LineDivider/>
                                            <div>
                                                <h1 className="text-[19px] font-bold leading-normal">Summary</h1>
                                                <p>Last 28 days</p>
                                                <div className="flex flex-col gap-y-1 mt-3">
                                                    <div className="flex justify-between">
                                                        <span>Views</span>
                                                        <span>0 -</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Watch time (hours)</span>
                                                        <span>0.0 -</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <LineDivider/>
                                            <div>
                                                <h1 className="text-[19px] font-bold leading-normal">Top Videos</h1>
                                                <p>Last 48 hours · Views</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[40%]">
                                    <div className="w-full text-white-false border border-[#1B1B1B] rounded-[14px] p-4">
                                        <div>
                                            <h1 className="text-[19px] font-bold leading-normal">News</h1>
                                            <div className="mt-2">
                                                <img src={newsImg} alt="" />
                                            </div>
                                            <p className="text[13px] font-bold mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            <p className="text-[13px] font-normal mt-1">Lorem Ipsimply dummy text um is simply dummy text of the printing and typimply dummy text esetting industryimply dummy text </p>
                                        </div>
                                        <div className="mt-8">
                                            <h1 className="text-[19px] font-bold leading-normal">Creator Insider</h1>
                                            <div className="mt-2">
                                                <img src={newsImg2} alt="" />
                                            </div>
                                            <p className="text[13px] font-bold mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            <p className="text-[13px] font-normal mt-1">Lorem Ipsimply dummy text um is simply dummy text of the printing and typimply dummy text esetting industryimply dummy text </p>
                                        </div>

                                        <div className="flex flex-col gap-y-2 mt-8">
                                            <h1 className="text-[19px] font-bold leading-normal">What's new in studio</h1>
                                            <p className="text-[13px] font-normal">Lorem Ipsimply dummy text um is simply dummy text of the printing and typimply dummy text esetting industryimply dummy text </p>
                                            <p className="text-[13px] font-normal">Lorem Ipsimply dummy text um is simply dummy text of the printing and typimply dummy text esetting industryimply dummy text </p>
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


export default ChannelDashboardPage