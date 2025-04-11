import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import Button from '../../components/button'
import { Link } from "react-router-dom"
import dashboardPlayImg from '../../assets/images/dashboard-play.png'
import { channelTabs as tabs } from "../../conts"

const ChannelSubtitlesPage = () => {

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
                                    tabs?.map((val, index) => <Button key={index} enabled={"Subtitles"} path={val?.path}>{val?.title}</Button>)
                                }
                            </div>
                            <div className="mt-4 text-white-false">
                                <h1 className="font-bold text-[25px] leading-none">Subtitles</h1>
                            </div>

                            <div className="flex items-center gap-4 text-white-false border-y border-white border-opacity-10 py-2 mt-6">
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">All</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Drafts</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Published</Link>
                            </div>

                            <div className="flex justify-between items-center mt-8">
                                <div className="w-1/2">
                                    <span>Video</span>
                                </div>
                                <div className="w-1/2 flex justify-around items-center">
                                    <span>Language</span>
                                    <span>Modified on</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ChannelSubtitlesPage