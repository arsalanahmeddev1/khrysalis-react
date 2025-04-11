import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import ChannelImg from '../../assets/images/channel-6.png'
import { VerifiedTick } from "../../assets/svgs"
import { IoIosArrowForward } from "react-icons/io"
import LineDivider from '../../components/divider'


const SettingsAccountPage = () => {

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
                            <h1 className="font-semibold text-[25px] mt-4 text-white-false leading-none">Account</h1>

                            <div className="mt-12">
                                <p className="text-[15px] font-bold">Choose how you appear and what you see on Khrysalis</p>
                                <p className="font-medium text-[13px] mt-2">Signed in as designer8420@gmail.com</p>
                            </div>

                            <LineDivider/>

                            <div className="">
                                <p className="text-[15px] font-bold">Your Khrysalis channel</p>
                                <p className="font-medium text-[13px] mt-2">This is your public presence on khrysalis. You need a channel to upload your own videos, comment on videos, or create playlists.</p>
                            </div>

                            <div className="flex mt-12">
                                <div className="w-[30%]">
                                    <span className="block text-[15px] font-bold mt-4">Your channel</span>
                                </div>
                                <div className="w-[70%] flex items-center gap-x-4">
                                    <div className="w-[130px] h-[130px]"><img src={ChannelImg} alt="" className="w-full h-full" /></div>
                                    <div className="flex gap-y-1 flex-col">
                                        <div className="flex gap-x-2 items-center">
                                            <h1 className="capitalize font-semibold text-[25px]">Gaming world</h1>
                                            <VerifiedTick width={25} height={25} />
                                        </div>
                                        <div className="flex text-[10px] gap-x-2">
                                            <span>Gaming World</span><span>18.6k subscribers</span><span>526 videos</span>
                                        </div>
                                        <div className="flex items-center gap-x-1">
                                            <span className="text-[12px] font-medium">Gaming world</span> <IoIosArrowForward className="text-[12px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <LineDivider/>

                            <div className="mt-12">
                                <p className="text-[15px] font-bold">Your account</p>
                                <p className="font-medium text-[13px] mt-2">You sign in to khrysalis with your Google Account</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SettingsAccountPage