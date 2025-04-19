import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import ChannelImg from '../../assets/images/channel-6.png'
import { VerifiedTick } from "../../assets/svgs"
import { IoIosArrowForward } from "react-icons/io"
import LineDivider from '../../components/divider'


const BillingsAndPaymentPage = () => {

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
                            <h1 className="font-semibold text-[25px] mt-4 text-white-false leading-none">Billing and payments</h1>
                            <p className="text-[15px] font-bold mt-12">Choose how you make purchases on Khrysalis</p>

                            <LineDivider/>

                            <div className="">
                                <p className="text-[15px] font-bold">Quick purchase is disabled.</p>
                                <p className="font-medium text-[13px] mt-2">You will be asked to verify your account for all Khrysalis purchasesLearn more about purchase verification</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BillingsAndPaymentPage