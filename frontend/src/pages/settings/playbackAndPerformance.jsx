import Header from "../../components/header"
import Dashboard from '../../components/dashboard'
import profilePic from '../../assets/icons/blips-profile.png'
import { IoIosArrowForward } from "react-icons/io";
import { VerifiedTick } from "../../assets/svgs"
import { Switch } from "antd";
import { useState } from "react";
import Checkbox from "../../components/checkbox";
import LineDivider from '../../components/divider'

const PerformanceAndPlaybackPage = () => {
    const [options, setOptions] = useState({
        inlinePlaybacks: true
    })

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
                            <div className="mt-4">
                                <div className="mt-4 flex justify-between text-white-false items-center">
                                    <h1 className="font-bold text-[25px]">Playback and performance</h1>
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
                                </div>
                                <div>
                                    <p className="font-bold text-[15px]">Control your video viewing experience</p>
                                    <p className="text-[13px] font-medium mt-2">Playback settings apply to this browser only</p>
                                </div>
                            </div>

                            <LineDivider/>

                            <div className="flex flex-col gap-y-6 text-[13px]">
                                <div className="flex items-center justify-between">
                                    <span className="text-[15px] font-bold">Info cards</span>
                                    <Checkbox title={'Playback settings apply to this browser only'} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[15px] font-bold w-[159px] h-[46px]">Subtitles and Closed
                                        Captions</span>
                                    <label className="flex gap-x-2 w-1/2"><input type="checkbox" name="" id="" />Always show captions</label>
                                </div>
                                <div className="flex items-start justify-between">
                                    <span className="text-[15px] font-bold">AV1 settings</span>
                                    <div className="w-1/2 flex flex-col gap-y-2">
                                        <label className="flex gap-x-2"><input type="checkbox" name="avisetting" id="autoSetting" />Auto (recommended)</label>
                                        <label className="flex gap-x-2"><input type="checkbox" name="avisetting" id="preferAV1SD" />Prefer AV1 for SD</label>
                                        <label className="flex gap-x-2"><input type="checkbox" name="avisetting" id="alwaysPreferAV1" />Always prefer AV1</label>
                                    </div>

                                </div>
                                <div className="flex items-start justify-between">
                                    <span className="text-[15px] font-bold">Browsing</span>
                                    <div className="w-1/2">
                                        <label className="flex gap-x-2"><Switch onChange={(e) => {
                                            setOptions({
                                                ...options,
                                                inlinePlaybacks: e
                                            })
                                            console.log(e)
                                        }} checked={options.inlinePlaybacks} style={{ backgroundColor: options?.inlinePlaybacks ? '#6d28d9' : '#d9d9d9' }}></Switch>Inline playbacks</label>
                                        <strong className="text-[13px] font-medium ml-12">Play videos when you hover over them on the Home and Search pages</strong>
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

export default PerformanceAndPlaybackPage