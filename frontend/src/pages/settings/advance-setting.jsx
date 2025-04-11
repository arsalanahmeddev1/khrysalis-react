import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import LineDivider from '../../components/divider'
import { useState } from "react"

const AdvanceSettingPage = () => {

    const [data, setData] = useState([
        {
            heading: 'User ID',
            definition: 'SXjgK1Hc8JTanKA2uFXAjA'
        },
        {
            heading: 'Channel ID',
            definition: 'SXjgK1Hc8JTanKA2uFXAjA'
        },
        {
            heading: 'Move channel',
            definition: 'You can move your channel to a brand account',
            action: 'Move channel to a brand account'
        },
        {
            heading: 'Delete channel',
            definition: "Deleting your Khrysalis channel won't close your Google Account",
            action: 'Delete channel'
        },
    ])

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
                            <h1 className="font-semibold text-[25px] mt-4 text-white-false leading-none">Advanced setting</h1>
                            <p className="text-[15px] font-bold mt-12">Set up Khrysalis exactly how you want it</p>

                            <LineDivider />

                            <div className="flex flex-col gap-y-3">
                                {
                                    data?.map(({ heading, definition, action }, index) => {
                                        return (
                                            <div className="flex justify-between">
                                                <span className="font-bold w-1/2 text-[15px]">
                                                    {heading}
                                                </span>
                                                <span className="w-1/2 text-[13px]">
                                                    <span className="block text-custom-purple cursor-pointer">{action}</span>
                                                    {definition}
                                                </span>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AdvanceSettingPage