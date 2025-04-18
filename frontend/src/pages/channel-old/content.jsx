import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import Button from '../../components/button'
import { Link } from "react-router-dom"
import dashboardPlayImg from '../../assets/images/dashboard-play.png'
import { channelTabs as tabs } from "../../conts"

const ChannelContentPage = () => {

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
                            <div className="flex gap-3 flex-wrap justify-center items-center mt-2">
                                {
                                    tabs?.map((val, index) => <Button key={index} enabled={"Content"} path={val?.path}>{val?.title}</Button>)
                                }
                            </div>
                            <div className="mt-4 text-white-false">
                                <h1 className="font-bold text-[25px] leading-none">Content</h1>
                            </div>

                            {/* <LineDivider/> */}
                            <div className="flex items-center gap-4 text-white-false border-y border-white border-opacity-10 py-2 mt-6">
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Videos</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Live</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Playlist</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Podcast</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Promotions</Link>
                            </div>

                            <div className="flex justify-between items-center text-white-false mt-6">
                                <div>
                                    <label className="flex items-center gap-x-2"><input type="checkbox" name="" id="" className="outline-violet-700 bg-none text-black-false focus-visible:outline-none" /><span>Videos</span></label>
                                </div>
                                <div className="flex items-center gap-5">
                                    <button className="p-3 hover:bg-[#1B1B1B] rounded-[100px]">Visiblity</button>
                                    <button className="p-3 hover:bg-[#1B1B1B] rounded-[100px]">Restrictions</button>
                                    <button className="p-3 hover:bg-[#1B1B1B] rounded-[100px]">Date</button>
                                    <button className="p-3 hover:bg-[#1B1B1B] rounded-[100px]">Views</button>
                                    <button className="p-3 hover:bg-[#1B1B1B] rounded-[100px]">Comments</button>
                                    <button className="p-3 hover:bg-[#1B1B1B] rounded-[100px]">Likes vs Dislike</button>
                                </div>
                            </div>

                            <div className="flex items-center justify-center flex-col text-white-false w-full text-center mt-6">
                                <div className="w-fit"><img src={dashboardPlayImg} alt="" /></div>
                                <p className="text-[12px]">No content available</p>
                                <div className="mt-3">
                                    <Button enabled={"Upload Videos"}>Upload Videos</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ChannelContentPage