import Header from "../components/header"
import Dashboard from "../components/dashboard"
import LineDivider from '../components/divider'


const ReportHistoryPage = () => {

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
                            <h1 className="text-[25px] font-bold leading-normal text-white-false mt-4">
                                Thanksk for reporting
                            </h1>

                            <div className="text-white-false mt-14">
                                <h2 className="text-[15px] font-bold">
                                    Account
                                </h2>
                                <p className="text-[13px] font-medium mt-3">Any member of the Khrysalis community can flag content to us that they believe violates our Community Guidelines. When something is flagged, it’s not
                                    automatically taken down. Flagged content is reviewed in line with the following guidelines:
                                </p>
                                <ul className="list-inside list-disc text-[13px] font-medium mt-5">
                                    <li>Content that violates our Community Guidelines is removed from YouTube.</li>
                                    <li>Content that may not be appropriate for all younger audiences may be age-restricted.</li>
                                    <li> Reports filed for content that has been deleted by the creator cannot be shown.</li>
                                </ul>
                            </div>

                            <LineDivider/>

                            <div className="mt-6 text-white-false">
                                <p className="text-[13px]">All</p>

                                <div className="mt-4">
                                    <p className="text-[13px]">You haven't submitted any reports.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReportHistoryPage