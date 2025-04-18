import Header from "../../components/header"
import Dashboard from '../../components/dashboard'
import profilePic from '../../assets/icons/blips-profile.png'
import { IoIosArrowForward } from "react-icons/io";
import Button from "../../components/button"
import { VerifiedTick } from "../../assets/svgs"
import searchIcon from '../../assets/icons/search.png'
import LineDivider from '../../components/divider'


const ChannelMainPage = () => {

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
                        <div className="w-[86%]">
                            <div className="mt-4">
                                <div className="mt-4 flex justify-between text-white-false items-center">
                                    <div className="flex items-center gap-x-4 ">
                                        <div>
                                            <img src={profilePic} alt="" />
                                        </div>
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
                                    <Button enabled={"Customize Channel"}>
                                        Customize Channel
                                    </Button>
                                </div>
                                <div className="mt-10 flex gap-x-3 items-center">
                                    <Button>Home</Button>
                                    <Button>Playlist</Button>
                                    <Button enabled={"Channels"}>Channels</Button>
                                    <Button>About</Button>
                                    <div className="ml-4">
                                        <img src={searchIcon} alt="" className="w-6" />
                                    </div>
                                </div>
                            </div>

                            <LineDivider/>

                            <p className="text-white-false">This channel doesn't feature any other channels.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelMainPage