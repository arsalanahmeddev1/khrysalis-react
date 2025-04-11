import Header from "../components/header"
import Dashboard from "../components/dashboard"
import ChannelImg from '../assets/images/channel-6.png'
import { VerifiedTick } from "../assets/svgs"
import { IoIosArrowForward } from "react-icons/io"
import LineDivider from '../components/divider'
import searchIcon from '../assets/icons/search.png'


const FeedbackPage = () => {

    return (
        <div className="bg-black-false pb-20 min-h-screen">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="px-4">
                    {/* Main  */}
                    <div className="flex justify-between relative top-[72px]">
                        <div className="!w-[14%]">
                            <Dashboard isSettingDashboard={true} />
                        </div>
                        <div className="w-[86%] text-white-false">
                            <div className="flex justify-between items-center mt-4">
                                <h1 className="font-semibold text-[25px] text-white-false leading-none">Feedbacks</h1>
                                <div className="w-[324px] border border-[#3B3B3B] rounded-[100px] px-2 gap-x-2 flex items-center h-[46px]">
                                    <input type="text" className="bg-transparent w-full border-none outline-none" name="" placeholder="Search Here..." id="" />
                                    <img src={searchIcon} alt="" />
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-[20px] font-bold">Send feedback to Khrysalis</p>
                                <p className="font-medium text-[15px] mt-2">Describe your feedback</p>
                            </div>

                            <div className="mt-6">
                                <textarea name="" id="" placeholder="enter your feedback..." className="resize-none bg-transparent w-full rounded-[19px] border border-white border-opacity-20" rows="4"></textarea>
                                <p className="text-[10px] ">Please don’t include any sensitive information</p>
                            </div>

                            <div className="mt-6">
                                <label className="flex w-fit items-center gap-x-2">
                                    <input type="checkbox" name="" id="" />
                                    <span className="text-[10px]">We may email you for more information or updates</span>
                                </label>
                            </div>

                            <p className="mt-6 text-[13px]">
                                Some account and system information may be sent to Google. We will use it to fix problems and improve our services, subject to our Privacy Policy and Terms of Service. We may email you for more information or updates. Go to Legal Help to ask for content changes for legal reasons.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FeedbackPage