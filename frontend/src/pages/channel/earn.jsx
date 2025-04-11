import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import Button from '../../components/button'
import { Link } from "react-router-dom"
import dashboardPlayImg from '../../assets/images/dashboard-play.png'
import { channelTabs as tabs } from "../../conts"
import LineDivider from '../../components/divider'

const ChannelEarningPage = () => {


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
                                    tabs?.map((val, index) => <Button key={index} enabled={"Earn"} path={val?.path}>{val?.title}</Button>)
                                }
                            </div>
                            <div className="mt-4 text-white-false">
                                <h1 className="font-bold text-[25px] leading-none">Earn on khrysalis</h1>
                            </div>

                            <LineDivider/>

                            <h1 className="text-[20px] leading-normal font-bold ">Creator Support & Tools</h1>

                            <div className="flex flex-col gap-y-2 mt-4">
                                <p>Copyright Match Tool</p>
                                <p>Chat & email support</p>
                                <p>Giving fundraises</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ChannelEarningPage