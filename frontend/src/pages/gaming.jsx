import Header from "../components/header"
import Dashboard from "../components/dashboard"
import liked1 from '../assets/images/liked-1.png'
import Slider from '../components/sliders'
import { blipLinks } from '../components/videoLinks'
import LineDivider from '../components/divider'


const GamingPage = () => {

    return (
        <div className="bg-black-false pb-20 min-h-screen">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="px-">
                    {/* Main  */}
                    <div className="flex justify-between relative top-[72px]">
                        <div className="!w-[14%]">
                            <Dashboard />
                        </div>
                        <div className="w-[86%] text-white-false">
                            <div>
                                <h1 className="text-[25px] font-bold">Gaming</h1>
                                <span className="text-[10px]">93.7M subscribers</span>
                            </div>


                            <div className="mt-12">
                                <h2 className="text-[20px] font-bold">Top Live Games</h2>
                                <Slider data={blipLinks} blips={true} />
                            </div>
                            <LineDivider />

                            <h2 className="text-[20px] font-bold text-white-false mt-12 mb-6">Recommended</h2>
                            <div className="flex gap-8 justify-between flex-wrap text-white-false">
                                <div className="flex items-center gap-x-4">
                                    <div className="w-[223px] h-[135px]"><img src={liked1} className="w-full h-full" alt="" /></div>
                                    <div className="flex flex-col gap-y-2 h-fit py-2 w-[220px]">
                                        <p className="text-[13px] font-bold">Lorem Ipsimply dummy text um is simply dummy text of the printing </p>
                                        <p className="text-[10px]">Lorem If the printing and typesettingpsum is f the printing and typesettingsimply.</p>
                                        <div className="text-[10px] flex items-center justify-between">
                                            <span className="font-semibold tracking-wider">Gameforall</span>
                                            <div className="flex gap-x-2">
                                                <span>
                                                    532 views
                                                </span>
                                                <span>
                                                    1 Month ago
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <div className="w-[223px] h-[135px]"><img src={liked1} className="w-full h-full" alt="" /></div>
                                    <div className="flex flex-col gap-y-2 h-fit py-2 w-[220px]">
                                        <p className="text-[13px] font-bold">Lorem Ipsimply dummy text um is simply dummy text of the printing </p>
                                        <p className="text-[10px]">Lorem If the printing and typesettingpsum is f the printing and typesettingsimply.</p>
                                        <div className="text-[10px] flex items-center justify-between">
                                            <span className="font-semibold tracking-wider">Gameforall</span>
                                            <div className="flex gap-x-2">
                                                <span>
                                                    532 views
                                                </span>
                                                <span>
                                                    1 Month ago
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <div className="w-[223px] h-[135px]"><img src={liked1} className="w-full h-full" alt="" /></div>
                                    <div className="flex flex-col gap-y-2 h-fit py-2 w-[220px]">
                                        <p className="text-[13px] font-bold">Lorem Ipsimply dummy text um is simply dummy text of the printing </p>
                                        <p className="text-[10px]">Lorem If the printing and typesettingpsum is f the printing and typesettingsimply.</p>
                                        <div className="text-[10px] flex items-center justify-between">
                                            <span className="font-semibold tracking-wider">Gameforall</span>
                                            <div className="flex gap-x-2">
                                                <span>
                                                    532 views
                                                </span>
                                                <span>
                                                    1 Month ago
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <div className="w-[223px] h-[135px]"><img src={liked1} className="w-full h-full" alt="" /></div>
                                    <div className="flex flex-col gap-y-2 h-fit py-2 w-[220px]">
                                        <p className="text-[13px] font-bold">Lorem Ipsimply dummy text um is simply dummy text of the printing </p>
                                        <p className="text-[10px]">Lorem If the printing and typesettingpsum is f the printing and typesettingsimply.</p>
                                        <div className="text-[10px] flex items-center justify-between">
                                            <span className="font-semibold tracking-wider">Gameforall</span>
                                            <div className="flex gap-x-2">
                                                <span>
                                                    532 views
                                                </span>
                                                <span>
                                                    1 Month ago
                                                </span>
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


export default GamingPage