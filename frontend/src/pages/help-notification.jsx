import Header from "../components/header"
import Dashboard from "../components/dashboard"
import searchIcon from '../assets/icons/search.png'
import { Hamburger } from '../assets/svgs/index'
import LineDivider from '../components/divider'
import { Collapse } from "antd"

const HelpNotificationPage = () => {

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
                                <h1 className="font-semibold text-[25px] text-white-false leading-none">Help Notification</h1>
                                <div className="w-[324px] border border-[#3B3B3B] rounded-[100px] px-2 gap-x-2 flex items-center h-[46px]">
                                    <input type="text" className="bg-transparent w-full border-none outline-none" name="" placeholder="Search Here..." id="" />
                                    <img src={searchIcon} alt="" />
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-[20px] font-bold">Help</p>
                                <p className="font-medium text-[15px] mt-2">Popular Help Resources</p>
                            </div>

                            <div className="mt-6 flex flex-col gap-y-6">
                                <div className="flex gap-x-3">
                                    <Hamburger width={36} height={20} />
                                    <p className="text-[18px] relative bottom-[2px]">Learn about NFL Sunday Ticket on khrysalis & khrysalis TV Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                </div>
                                <div className="flex gap-x-3">
                                    <Hamburger width={36} height={20} />
                                    <p className="text-[18px] relative bottom-[2px]">Learn about NFL Sunday Ticket on khrysalis & khrysalis TV Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                </div>
                                <div className="flex gap-x-3">
                                    <Hamburger width={36} height={20} />
                                    <p className="text-[18px] relative bottom-[2px]">Learn about NFL Sunday Ticket on khrysalis & khrysalis TV Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                </div>
                                <div className="flex gap-x-3">
                                    <Hamburger width={36} height={20} />
                                    <p className="text-[18px] relative bottom-[2px]">Learn about NFL Sunday Ticket on khrysalis & khrysalis TV Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                </div>
                            </div>

                            <LineDivider />

                            <div>
                                <h2 className="text-[20px] font-bold">FAQs</h2>
                                <Collapse className="border-0">
                                    {[1, 2, 3, 4].map(() => {
                                        return (
                                            <Collapse.Panel className="!bg-[#070707] mt-2 border-0" header={<div className="!text-white-false flex justify-between items-center w-full"><p>Learn about NFL Sunday Ticket on khrysalis & khrysalis TV Lorem ipsum</p><span>-</span></div>} >
                                                <p className="text-white-false bg-black-false border-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto aliquam magnam ad laudantium, saepe accusantium quisquam laboriosam nihil consequuntur eaque officiis perferendis rem placeat, dolores explicabo. Incidunt, debitis similique!</p>
                                            </Collapse.Panel>
                                        )
                                    })}
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HelpNotificationPage
