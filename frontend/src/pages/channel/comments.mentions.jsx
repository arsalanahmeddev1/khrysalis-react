import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import Button from '../../components/button'
import { Link } from "react-router-dom"
import dashboardPlayImg from '../../assets/images/dashboard-play.png'
import { channelTabs as tabs } from "../../conts"

const ChannelCommentsMentionPage = () => {


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
                                    tabs?.map((val, index) => <Button key={index} enabled={"Comments"} path={val?.path}>{val?.title}</Button>)
                                }
                            </div>
                            <div className="mt-4 text-white-false">
                                <h1 className="font-bold text-[25px] leading-none">Channel comments & mentions</h1>
                            </div>

                            <div className="flex items-center gap-4 text-white-false border-y border-white border-opacity-10 py-2 mt-6">
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Comments</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Mentions</Link>
                            </div>

                            <div className="flex gap-x-3 mt-8">
                                <Button enabled={"Published"}>Published</Button>
                                <Button>Help for review</Button>
                            </div>

                            <div className="flex justify-center flex-col items-center">
                                <div><img src={dashboardPlayImg} alt="" /></div>
                                <p className="text-[12px]">No comments found. Try searching for something else or removing filters.</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ChannelCommentsMentionPage