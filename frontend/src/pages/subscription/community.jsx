import Header from "../../components/header"
import blipsIcon from '../../assets/icons/blips.png'
import Dashboard from '../../components/dashboard'
import gamingHeaderPic from '../../assets/images/gamingheader1.png'
import profilePic from '../../assets/icons/blips-profile.png'
import { IoIosArrowForward } from "react-icons/io";
import Button from "../../components/button"
import history1Img from '../../assets/images/history-1.png'
import history2Img from '../../assets/images/history-2.png'
import history3Img from '../../assets/images/history-3.png'
import history4Img from '../../assets/images/history-4.png'
import { VerifiedTick } from "../../assets/svgs"
import { subscriptionTabs as tabs } from "../../conts"
import thumbsUp from '../../assets/icons/thumbs-up.png'
import thumbsDown from '../../assets/icons/thumbs-down.png'
import comment from '../../assets/icons/comments.png'


const SubscriptionCommunityPage = () => {
    const categories = [
        'All',
        'Trending',
        'Live',
        'Gaming',
        'Music',
        'Travel',
        'Sports',
        'Animation',
        'Game play',
        'Streaming',
        'Camping',
        'Cast'
    ]
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
                            <div className="flex justify-center items-center">
                                <img src={blipsIcon} className="w-[52px]" alt="" />
                            </div>
                            <div className="text-white-false flex justify-between mt-4 px-1">
                                {
                                    categories?.map(item => {
                                        return <span className="">{item}</span>
                                    })
                                }
                            </div>

                            <div className="mt-4 pb-4">
                                <div>
                                    <img src={gamingHeaderPic} alt="" />
                                </div>
                                <div className="mt-4 flex justify-between text-white-false items-center">
                                    <div className="flex items-center gap-x-4 ">
                                        <div>
                                            <img src={profilePic} alt="" />
                                        </div>
                                        <div className="flex gap-y-1 flex-col">
                                            <div className="flex gap-x-2 items-center">
                                                <h1 className="capitalize font-semibold text-[20px]">Gaming world</h1>
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
                                    <Button>
                                        Followers
                                    </Button>
                                </div>
                                <div className="mt-10 flex gap-x-3 items-center">
                                    {
                                        tabs?.map((val, index) => <Button path={val?.path} enabled={"Community"}>
                                            {val?.title}
                                        </Button>)
                                    }
                                </div>

                                <div className="mt-10 text-white-false">
                                    <div className="flex items-center gap-x-4">
                                        <div>
                                            <img src={profilePic} alt="" />
                                        </div>
                                        <div className="flex gap-y-1 flex-col">
                                            <div className="flex gap-x-4 items-center">
                                                <h1 className="capitalize font-semibold text-[20px]">Gaming world</h1>
                                                {/* <VerifiedTick width={25} height={25} /> */}
                                                <span className="text-[12px] font-medium">10 months ago</span>
                                            </div>
                                            <p className="text-[11px] w-[340px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, molestiae. </p>
                                        </div>
                                    </div>

                                    <div className="mt-10">

                                        <div className="flex flex-col gap-y-8">
                                            <div className="flex items-center gap-x-3">
                                                <div>
                                                    <div><img src={history1Img} className="!w-[260px] h-[135px]" alt="" /></div>
                                                    <div className="relative top-2">
                                                        <div className="flex items-center justify-around">
                                                            <span className="flex items-center gap-x-1 "><img src={thumbsUp} alt="" />503</span>
                                                            <span><img src={thumbsDown} alt="" /></span>
                                                            <span className="flex items-center gap-x-1 "><img src={comment} alt="" />20</span>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-2">
                                                    <p className="text-[13px] font-bold">Lorem Ipsimply dummy text um is simply dummy text of the printing and typimply dummy text esetting industryimply dummy text esetting industryimply dummy tex </p>
                                                    <p className="text-[10px]">Lorem If the printing and typesettingpsum is f the printing and typesettingsimply dummy text of the printing and typesetting industry</p>
                                                    <div className="text-[10px] flex items-center gap-x-8">
                                                        <span className="text-[11px] font-semibold">Gameforall</span>
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
                                            <div className="flex items-center gap-x-3">
                                                <div>
                                                    <div><img src={history1Img} className="!w-[260px] h-[135px]" alt="" /></div>
                                                    <div className="relative top-2">
                                                        <div className="flex items-center justify-around">
                                                            <span className="flex items-center gap-x-1 "><img src={thumbsUp} alt="" />503</span>
                                                            <span><img src={thumbsDown} alt="" /></span>
                                                            <span className="flex items-center gap-x-1 "><img src={comment} alt="" />20</span>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-2">
                                                    <p className="text-[13px] font-bold">Lorem Ipsimply dummy text um is simply dummy text of the printing and typimply dummy text esetting industryimply dummy text esetting industryimply dummy tex </p>
                                                    <p className="text-[10px]">Lorem If the printing and typesettingpsum is f the printing and typesettingsimply dummy text of the printing and typesetting industry</p>
                                                    <div className="text-[10px] flex items-center gap-x-8">
                                                        <span className="text-[11px] font-semibold">Gameforall</span>
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
                </div>
            </div>
        </div>
    )
}

export default SubscriptionCommunityPage