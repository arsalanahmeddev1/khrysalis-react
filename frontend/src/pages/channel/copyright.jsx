import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import Button from '../../components/button'
import { Link } from "react-router-dom"
import dashboardPlayImg from '../../assets/images/dashboard-play.png'
import { channelTabs as tabs } from "../../conts"

const ChannelCopyrightPage = () => {


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
                                    tabs?.map((val, index) => <Button key={index} enabled={"Copyrights"} path={val?.path}>{val?.title}</Button>)
                                }
                            </div>
                            <div className="mt-4 text-white-false">
                                <h1 className="font-bold text-[25px] leading-none">Channel copyright</h1>
                            </div>


                            <div className="mt-8">
                                <Button enabled={"Removal Request"}>Removal Request</Button>
                            </div>

                            <div className="flex justify-center flex-col items-center">
                                <div><img src={dashboardPlayImg} alt="" /></div>
                                <h1 className="text-[24px] leading-normal font-semibold">Nothing to see yet</h1>
                                <p className="text-[12px]">You haven't submitted any <a href="#" className="underline">copyright takedown requests</a>.</p>
                            <p className="text-center w-[612px]">Looking for a copyright claim somebodymade on your video? Check the <a href="#" className="underline">video list</a>.</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ChannelCopyrightPage