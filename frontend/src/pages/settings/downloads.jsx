import Header from "../../components/header"
import Dashboard from '../../components/dashboard'
import Button from '../../components/button'
import LineDivider from '../../components/divider'


const DownloadsPage = () => {


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
                                    <h1 className="font-bold text-[25px]">Download</h1>
                                </div>
                                <div className="mt-6">
                                    <p className="font-bold text-[15px]">Control your download experience</p>
                                    <p className="text-[13px] font-medium mt-2">Control your download settings</p>
                                </div>
                            </div>

                            <LineDivider/>

                            <div className="flex flex-col gap-y-6 text-[13px]">
                                <div className="flex items-start justify-between">
                                    <span className="text-[15px] font-bold">Download quality</span>
                                    <div className="w-1/2 flex flex-col gap-y-2">
                                        <span>Ask each time</span>
                                        <label className="flex gap-x-2"><input type="checkbox" name="quality" id="" />Standard (480p)</label>
                                        <label className="flex gap-x-2"><input type="checkbox" name="quality" id="" />Low (144p)</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-12">
                                <div>
                                    <h2 className="text-[15px] font-semibold">Delete all downloads</h2>
                                    <p className="text-[13px]">Deleting downloads will free space on this device</p>
                                </div>
                                <Button enabled={'Delete all Downloads'}>
                                    Delete all Downloads
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadsPage