import Header from "../components/header-old"
import Dashboard from "../components/dashboard"
import history1Img from '../assets/images/history-1.png'
import history2Img from '../assets/images/history-2.png'
import history3Img from '../assets/images/history-3.png'
import history4Img from '../assets/images/history-4.png'
import { recommendedLinks, LiveNewsLinks } from '../components/videoLinks'
import Slider from "../components/sliders"
import LineDivider from '../components/divider'


const NewsPage = () => {

    return (
        <div className="bg-black-false pb-20 min-h-screen">
            <div className="w-full m-auto">
                <Header />
                <div className="px-4">
                    {/* Main  */}
                    <div className="flex justify-between relative top-[72px]">
                    <div className="lg:!w-[14%] sm:w-0 hidden xl:block">
              <Dashboard />
            </div>
                        <div className="md:w-[86%]  w-full">
                            <div className="mt-4 text-white-false">
                                <div>
                                    <h1 className="font-semibold text-[25px] leading-none">Live News</h1>
                                    <span className="text-[10px]">93.7M subscribers</span>
                                </div>
                                <div className="flex justify-between flex-wrap gap-5 text-white-false mt-8">
                                    <div className="w-[232px] flex-col flex gap-y-2">
                                        <div><img src={history1Img} className="w-[232px] h-[135px]" alt="" /></div>
                                        <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                    </div>
                                    <div className="w-[232px] flex-col flex gap-y-2">
                                        <div><img src={history2Img} className="w-[232px] h-[135px]" alt="" /></div>
                                        <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                    </div>
                                    <div className="w-[232px] flex-col flex gap-y-2">
                                        <div><img src={history3Img} className="w-[232px] h-[135px]" alt="" /></div>
                                        <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                    </div>
                                    <div className="w-[232px] flex-col flex gap-y-2">
                                        <div><img src={history4Img} className="w-[232px] h-[135px]" alt="" /></div>
                                        <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                    </div>
                                </div>
                            </div>

                            <LineDivider/>

                            <div className="mt-4 text-white-false">
                                <div>
                                    <h1 className="font-semibold text-[25px] leading-none">Regular News</h1>
                                </div>
                                <div className="flex mt-6 gap-6 justify-between flex-wrap">
                                    <Slider data={recommendedLinks} details={true}></Slider>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewsPage