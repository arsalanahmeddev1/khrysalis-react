import Header from "../components/header"
import Dashboard from "../components/dashboard"
import LineDivider from '../components/divider'
import { useState } from "react"
import CopyrightImg from '../assets/images/copyright.png'
// import Tabs from "../components/Tabs"
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

const CopyRightPage = () => {

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
                            <Dashboard isSettingDashboard={false} />
                        </div>
                        <div className="w-[86%] text-white-false">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold text-[25px] mt-4 text-white-false leading-none">Copyright</h1>
                                <div><img src={CopyrightImg} alt="" width={280} /></div>
                            </div>

                            <div className="mt-6 copyright-tabs-container">
                                {/* <Tabs /> */}
                                <Tabs className="flex-row h-full justify-between copyright-vertical-tabs" aria-label="Default tabs" style="default"  >
                                    <Tabs.Item active title="Overview">
                                        <h2 className="text-[25px] font-bold">The first rule of copyright</h2>
                                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </Tabs.Item>
                                    <Tabs.Item title="Copyright Exceptions">
                                        <h2 className="text-[25px] font-bold">What are Copyright Exceptions?</h2>
                                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </Tabs.Item>
                                    <Tabs.Item title="Making Claims" className="text-left">
                                        <div>
                                            <h2 className="text-[25px] font-bold">How can rights holders make copyright claims?</h2>
                                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-[25px] font-bold">Web Forms</h2>
                                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </Tabs.Item>
                                    <Tabs.Item title="Enforcing copyright" className="text-left">
                                        <h2 className="text-[25px] font-bold">What action does YouTube take for copyright infringement?</h2>
                                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </Tabs.Item>
                                </Tabs>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CopyRightPage