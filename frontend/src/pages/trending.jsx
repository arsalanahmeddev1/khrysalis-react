import Header from "../components/header"
import Dashboard from '../components/dashboard'
import channel6Img from '../assets/images/channel-6.png'
import Slider from "../components/sliders"
import { recommendedLinks, blipLinks} from "../components/videoLinks"
import LineDivivder from '../components/divider'

const TrendingPage = () => {

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
                            <h1 className="font-semibold text-[25px] mt-4 text-white-false leading-none">Trending</h1>

                            <div className="mt-12">
                                <div>
                                    <div className="flex items-center gap-x-4">
                                        <div className="h-[50px] w-[50px]">
                                            <img className="w-full h-full" src={channel6Img} alt="" />
                                        </div>
                                        <div>
                                            <h2 className="text-[20px] font-bold">Music</h2>
                                            <p className="text-[10px]">Your Profile text here Your Profile text here  </p>
                                        </div>
                                    </div>
                                    <div>
                                        <Slider data={recommendedLinks} details={true} />
                                    </div>
                                </div>
                                <LineDivivder />
                                <div>
                                    <div className="flex items-center gap-x-4">
                                        <div className="h-[50px] w-[50px]">
                                            <img className="w-full h-full" src={channel6Img} alt="" />
                                        </div>
                                        <div>
                                            <h2 className="text-[20px] font-bold">Sports</h2>
                                            <p className="text-[10px]">Your Profile text here Your Profile text here  </p>
                                        </div>
                                    </div>
                                    <div>
                                        <Slider data={recommendedLinks} details={true} />
                                    </div>
                                </div>
                                <LineDivivder />
                                <div>
                                    <div className="flex items-center gap-x-4">
                                        <div className="h-[50px] w-[50px]">
                                            <img className="w-full h-full" src={channel6Img} alt="" />
                                        </div>
                                        <div>
                                            <h2 className="text-[20px] font-bold">Gaming</h2>
                                            <p className="text-[10px]">Your Profile text here Your Profile text here  </p>
                                        </div>
                                    </div>
                                    <div>
                                        <Slider data={recommendedLinks} details={true} />
                                    </div>
                                </div>
                                <LineDivivder />
                                <div>
                                    <div className="flex items-center gap-x-4">
                                        <div className="h-[50px] w-[50px]">
                                            <img className="w-full h-full" src={channel6Img} alt="" />
                                        </div>
                                        <div>
                                            <h2 className="text-[20px] font-bold">Music</h2>
                                            <p className="text-[10px]">Your Profile text here Your Profile text here  </p>
                                        </div>
                                    </div>
                                    <div>
                                        <Slider data={blipLinks} blips={true} />
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

export default TrendingPage