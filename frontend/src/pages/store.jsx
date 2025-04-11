import Header from "../components/header"
import Dashboard from "../components/dashboard"
import storeImage1 from '../assets/images/store-1.png'
import storeImage2 from '../assets/images/store-2.png'
import storeImage3 from '../assets/images/store-3.png'
import storeImage4 from '../assets/images/store-4.png'
import storeImage5 from '../assets/images/store-5.png'
import storeImage6 from '../assets/images/store-6.png'
import storeImage7 from '../assets/images/store-7.png'
import storeImage8 from '../assets/images/store-8.png'
import { Link } from "react-router-dom"

const StorePage = () => {

    const products = [
        {
            img: storeImage1,
            title: "Your product text here",
            price: 105
        },
        {
            img: storeImage2,
            title: "Your product text here",
            price: 105
        },
        {
            img: storeImage3,
            title: "Your product text here",
            price: 105
        },
        {
            img: storeImage4,
            title: "Your product text here",
            price: 105
        },
        {
            img: storeImage5,
            title: "Your product text here",
            price: 105
        },
        {
            img: storeImage6,
            title: "Your product text here",
            price: 105
        },
        {
            img: storeImage7,
            title: "Your product text here",
            price: 105
        },
        {
            img: storeImage8,
            title: "Your product text here",
            price: 105
        },
    ]

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
                                Store
                            </h1>
                            <div className="mt-4 flex justify-between gap-4 flex-wrap">
                                {
                                    products?.map((val, index) => {
                                        return (
                                            <Link to={{pathname: '/product/details', search: val?.img}} key={index} className="w-[228px] block h-[320px] text-white-false">
                                                <div className="h-[236px]">
                                                    <img src={val?.img} className="h-full w-full" alt="" />
                                                </div>
                                                <div>
                                                    <span className="block text-center text-[18px font-bold]">{val?.title}</span>
                                                    <span className="block text-center text-[35px] font-light">$ {val?.price}</span>
                                                </div>
                                            </Link>
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


export default StorePage