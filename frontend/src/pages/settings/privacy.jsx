import Header from "../../components/header"
import Dashboard from '../../components/dashboard'
import Button from '../../components/button'
import { Link } from "react-router-dom"
import LineDivider from '../../components/divider'
import { useState } from "react"
import { Switch } from "antd"

const PrivacyPage = () => {

    const [keepPrivate, setKeepPrivate] = useState(true)


    
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
                                    <h1 className="font-bold text-[25px]">Privacy</h1>
                                </div>
                                <div className="mt-6">
                                    <p className="font-bold text-[15px]">Manage what you share on Khrysalis</p>
                                    <p className="text-[13px] font-medium mt-2">Choose who can see your follower</p>
                                    <p className="text-[13px] font-medium mt-1">Review <Link className="text-custom-purple">Khrysalis Terms of Service</Link> and <Link className="text-custom-purple">Google Privacy Policy</Link></p>
                                </div>
                            </div>

                            <LineDivider />

                            <div className="flex flex-col gap-y-6 text-[13px]">
                                <div className="flex items-start justify-between">
                                    <span className="text-[15px] font-bold">Followers</span>
                                    <div className="w-1/2 flex flex-col gap-y-2">
                                        <div className="flex items-center gap-x-2">
                                            <Switch value={keepPrivate} style={{ backgroundColor: keepPrivate ? '#6d28d9' : '#d9d9d9' }} onChange={(e) => setKeepPrivate(e)}/>
                                            <span className="text-[13px] font-medium">Keep all my subscriptions private </span>
                                        </div>
                                        <p className="mt-2 text-[13px] font-medium">Your subscriptions won't be visible to others, unless you use features that make them public. <Link className="text-custom-purple">Learn more</Link> about what
                                            could make your subscriptions visible or manage your subscriptions <Link className="text-custom-purple">here</Link>.</p>
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

export default PrivacyPage