import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import { Switch } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"
import LineDivider from '../../components/divider'

const SettingsNotificationPage = () => {
    const [options, setOptions] = useState({
        followers: true,
        recommendedVideos: false,
        acitivity: false,
        replies: false,
        mentions: false
    })

    return (
        <div className="bg-black-false pb-20 min-h-screen">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="px-4">
                    {/* Main  */}
                    <div className="flex justify-between gap-x-2 relative top-[72px]">
                        <div className="!w-[14%]">
                            <Dashboard isSettingDashboard={true} />
                        </div>
                        <div className="w-[86%] text-white-false">
                            <h1 className="font-semibold text-[25px] mt-4 text-white-false leading-none">Notification</h1>

                            <div className="mt-12">
                                <p className="text-[15px] font-bold">Choose when and how to be notified</p>
                                <p className="font-medium text-[13px] mt-2">Select push and email notifications you'd like to receive</p>
                            </div>

                            <LineDivider/>

                            <div className="">
                                <p className="text-[15px] font-bold">General</p>
                                <p className="font-medium text-[13px] mt-2">Manage your mobile and desktop notifications</p>
                            </div>

                            <div className="mt-12 pb-3 flex justify-between">
                                <p className="text-[15px] font-bold w-[30%]">Your preferences</p>
                                <div className="w-[70%] flex flex-col gap-y-6">
                                    <div className="flex gap-x-5">
                                        <div>
                                            <Switch onChange={(e) => {
                                                setOptions({
                                                    ...options,
                                                    followers: e,
                                                });
                                            }} checked={options.followers} className="border border-white" style={{ backgroundColor: options.followers ? '#6d28d9' : '#d9d9d9' }}></Switch>
                                        </div>
                                        <div>
                                            <span className="block font-bold mb-1">Followers</span>
                                            <p>Notify me about activity from the <Link className="text-custom-purple">channels I'm Follower to</Link></p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-5">
                                        <div>
                                            <Switch onChange={(e) => {
                                                setOptions({
                                                    ...options,
                                                    recommendedVideos: e,
                                                });
                                            }} checked={options.recommendedVideos} className="border border-white" style={{ backgroundColor: options.recommendedVideos ? '#6d28d9' : '#d9d9d9' }}></Switch>
                                        </div>
                                        <div>
                                            <span className="block font-bold mb-1">Recommended videos</span>
                                            <p>Notify me of videos I might like based on what I watch</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-5">
                                        <div>
                                            <Switch onChange={(e) => {
                                                setOptions({
                                                    ...options,
                                                    acitivity: e,
                                                });
                                            }} checked={options.acitivity} className="border border-white" style={{ backgroundColor: options.acitivity ? '#6d28d9' : '#d9d9d9' }}></Switch>
                                        </div>
                                        <div>
                                            <span className="block font-bold mb-1">Activity on my channel</span>
                                            <p>Notify me about comments and other activity on my channel or videos</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-5">
                                        <div>
                                            <Switch onChange={(e) => {
                                                setOptions({
                                                    ...options,
                                                    replies: e,
                                                });
                                            }} checked={options.replies} className="border border-white" style={{ backgroundColor: options.replies ? '#6d28d9' : '#d9d9d9' }}></Switch>
                                        </div>
                                        <div>
                                            <span className="block font-bold mb-1">Replies to my comments</span>
                                            <p>Notify me about replies to my comments</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-5">
                                        <div>
                                            <Switch onChange={(e) => {
                                                setOptions({
                                                    ...options,
                                                    mentions: e,
                                                });
                                            }} checked={options.mentions} className="border border-white" style={{ backgroundColor: options.mentions ? '#6d28d9' : '#d9d9d9' }}></Switch>
                                        </div>
                                        <div>
                                            <span className="block font-bold mb-1">Mentions</span>
                                            <p>Notify me when others mention my channel</p>
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


export default SettingsNotificationPage