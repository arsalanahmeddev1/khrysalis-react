import Header from "../../components/header"
import Dashboard from '../../components/dashboard'
import { Link } from "react-router-dom"
import LineDivider from '../../components/divider'
import { useState } from "react"
import { Switch } from "antd"
import Button from '../../components/button'
import appsImage1 from '../../assets/images/connected-apps-1.png'
import appsImage2 from '../../assets/images/connected-apps-2.png'
import appsImage3 from '../../assets/images/connected-apps-3.png'
import appsImage4 from '../../assets/images/connected-apps-4.png'
import appsImage5 from '../../assets/images/connected-apps-5.png'

const ConnectedAppsPage = () => {

    const [data, setData] = useState([
        {
            name: 'Activision ID',
            description: 'Connect accounts and watch approved events and videos for a chance to win in-game rewards',
            image: appsImage1
        },
        {
            name: 'Activision ID',
            description: 'Connect accounts and watch approved events and videos for a chance to win in-game rewards',
            image: appsImage2
        },
        {
            name: 'Activision ID',
            description: 'Connect accounts and watch approved events and videos for a chance to win in-game rewards',
            image: appsImage3
        },
        {
            name: 'Activision ID',
            description: 'Connect accounts and watch approved events and videos for a chance to win in-game rewards',
            image: appsImage4
        },
        {
            name: 'Activision ID',
            description: 'Connect accounts and watch approved events and videos for a chance to win in-game rewards',
            image: appsImage5
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
                            <div className="mt-4">
                                <div className="mt-4 flex justify-between text-white-false items-center">
                                    <h1 className="font-bold text-[25px]">Connected apps</h1>
                                </div>
                                <div className="mt-6">
                                    <p className="font-bold text-[15px]">Expand your experience</p>
                                    <p className="text-[13px] font-medium mt-2">Connect Khrysalis with other apps and watch more easily</p>
                                </div>
                            </div>

                            <LineDivider />

                            <div className="flex flex-col gap-y-10 pb-6">
                                {
                                    data?.map(({image, name, description}, ind) => {
                                        return (
                                            <div key={ind} className="flex justify-between items-center">
                                                <div className="flex gap-x-3 items-center">
                                                    <div>
                                                        <img className="rounded-[80px]" width={80} height={80} src={image} alt="" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[15px] font-bold">{name}</h3>
                                                        <p className="text-[13px] font-medium">{description}</p>
                                                    </div>
                                                </div>
                                                <Button enabled={'Delete all Downloads'}>Delete all Downloads</Button>
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

export default ConnectedAppsPage