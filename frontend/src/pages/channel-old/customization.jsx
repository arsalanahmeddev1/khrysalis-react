import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import Button from '../../components/button'
import { Link } from "react-router-dom"
import { channelTabs as tabs } from "../../conts"
import { Switch } from "antd"
import { useState } from "react"

const ChannelCustomizationPage = () => {

    const [isVideoSpotLight, setIsVideoSpotlight] = useState(true)

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
                                    tabs?.map((val, index) => <Button key={index} enabled={"Customization"} path={val?.path}>{val?.title}</Button>)
                                }
                            </div>
                            <div className="mt-4">
                                <h1 className="font-bold text-[25px] leading-none">Channel comments & mentions</h1>
                            </div>

                            {/* <LineDivider/> */}
                            <div className="flex items-center gap-4 text-white-false border-y border-white border-opacity-10 py-2 mt-6">
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Layout</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Branding</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Basic info</Link>
                            </div>

                            <div className="mt-6 flex flex-col gap-y-2">
                                <h2 className="text-[20px] font-bold" >
                                    Video spotlight
                                </h2>
                                <p className="">Add a video to the top of your channel homepage</p>
                            </div>

                            <div className="p-6 flex w-[861px] justify-between border border-[#1B1B1B] mt-6">
                                <div className="flex flex-col gap-y-2">
                                    <h3 className="text-[20px] font-bold">Video spotlight</h3>
                                    <p>Add a video to the top of your channel homepage</p>
                                </div>
                                <Button enabled={'ADD'}>ADD</Button>
                            </div>
                            <div className="p-6 flex w-[861px] justify-between border border-[#1B1B1B] mt-6">
                                <div className="flex flex-col gap-y-2">
                                    <h3 className="text-[20px] font-bold">Featured video for returning subscribers</h3>
                                    <p>Highlight a video for your subscribers to watch.</p>
                                </div>
                                <Button enabled={'ADD'}>ADD</Button>
                            </div>

                            <div className="mt-6 pb-4">
                                <h2 className="text-[20px] font-bold">Recommendations for your viewers</h2>
                                <div className="p-6 flex w-[861px] justify-between border border-[#1B1B1B] mt-2">
                                    <div className="flex flex-col gap-y-2">
                                        <h3 className="text-[20px] font-bold">Video spotlight</h3>
                                        <p>Add a video to the top of your channel homepage</p>
                                    </div>
                                    <Switch value={isVideoSpotLight} style={{ backgroundColor: isVideoSpotLight ? '#6d28d9' : '#d9d9d9' }} onChange={(e) => setIsVideoSpotlight(e)} />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ChannelCustomizationPage