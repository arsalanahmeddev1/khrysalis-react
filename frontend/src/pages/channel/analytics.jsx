import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import Button from '../../components/button'
import { Link } from "react-router-dom"
import { channelTabs as tabs } from "../../conts"

const ChannelAnalyticsPage = () => {


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
                        <div className="w-[86%] text-white-false">
                            <div className="flex gap-3 flex-wrap justify-center items-center mt-2">
                                {
                                    tabs?.map((val, index) => <Button key={index} enabled={"Analytics"} path={val?.path}>{val?.title}</Button>)
                                }
                            </div>
                            <div className="mt-4 text-white-false">
                                <h1 className="font-bold text-[25px] leading-none">Analytics</h1>
                            </div>

                            {/* <LineDivider/> */}
                            <div className="flex items-center gap-4 text-white-false border-y border-white border-opacity-10 py-2 mt-6">
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Overview</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Content</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Audience</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Research</Link>
                            </div>

                            <h1 className="text-[25px] font-bold leading-normal mt-6">Your channel didn’t get any views in the last 28 days</h1>

                            <div className="flex justify-between mt-8">
                                <div className="px-[84px] py-[47px] flex justify-center items-center border rounded-[14px] border-[#1B1B1B]">
                                    Watch time (hours)
                                </div>
                                <div className="px-[84px] py-[47px] flex justify-center items-center border rounded-[14px] border-[#1B1B1B]">
                                    Watch time (hours)
                                </div>
                                <div className="px-[84px] py-[47px] flex justify-center items-center border rounded-[14px] border-[#1B1B1B]">
                                    Watch time (hours)
                                </div>
                            </div>

                            <div className="w-[1051px] h-[268px] mt-6 flex justify-center items-center border border-[#1B1B1B] rounded-[14px]">
                                <div className="flex-col flex gap-y-6 mt-4">
                                    <div className="flex items-center gap-x-2">
                                        <div className="w-[945px] h-[2px] bg-[#1B1B1B]"></div>
                                        <span>3</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <div className="w-[945px] h-[2px] bg-[#1B1B1B]"></div>
                                        <span>2</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <div className="w-[945px] h-[2px] bg-[#1B1B1B]"></div>
                                        <span>1</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <div className="w-[945px] h-[2px] bg-custom-purple"></div>
                                        <span>0</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="w-[86px]">
                                            Oct 5, 2023
                                        </span>
                                        <span className="w-[86px]">
                                            Oct 5, 2023
                                        </span>
                                        <span className="w-[86px]">
                                            Oct 5, 2023
                                        </span>
                                        <span className="w-[86px]">
                                            Oct 5, 2023
                                        </span>
                                        <span className="w-[86px]">
                                            Oct 5, 2023
                                        </span>
                                        <span className="w-[86px]">
                                            Oct 5, 2023
                                        </span>
                                        <span className="w-[86px]">
                                            Nov 1, 2...
                                        </span>
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


export default ChannelAnalyticsPage