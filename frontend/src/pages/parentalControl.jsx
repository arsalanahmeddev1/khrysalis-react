import Header from "../components/header"
import Dashboard from "../components/dashboard"
import LineDivider from '../components/divider'


const ParentalControlPage = () => {

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
                            <h1 className="font-semibold text-[25px] mt-4 text-white-false leading-none">Parental control</h1>

                            <div className="mt-12">
                                <p className="text-[15px] font-bold">Set up parental controls</p>
                                <p className="font-medium text-[13px] mt-2">Learn about NFL Sunday Ticket on khrysalis & khrysalis TV Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                            </div>

                            <div className="flex flex-col gap-y-4 mt-12">
                                <label className="flex gap-x-2 items-center">
                                    <input type="checkbox" name="" id="" />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                </label>
                                <label className="flex gap-x-2 items-center">
                                    <input type="checkbox" name="" id="" />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                </label>
                                <label className="flex gap-x-2 items-center">
                                    <input type="checkbox" name="" id="" />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                </label>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ParentalControlPage