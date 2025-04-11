import Header from "../../components/header"
import Dashboard from "../../components/dashboard"
import Button from '../../components/button'
import { Link } from "react-router-dom"
import dashboardPlayImg from '../../assets/images/dashboard-play.png'
import { channelTabs as tabs } from "../../conts"

const ChannelAudioLibraryPage = () => {

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
                            <div className="flex gap-3 flex-wrap justify-center items-center mt-2">
                                {
                                    tabs?.map((val, index) => <Button key={index} enabled={"Audio Library"} path={val?.path}>{val?.title}</Button>)
                                }
                            </div>
                            <div className="mt-4 text-white-false">
                                <h1 className="font-bold text-[25px] leading-none">Audio Library</h1>
                            </div>

                            {/* <LineDivider/> */}
                            <div className="flex items-center gap-4 text-white-false border-y border-white border-opacity-10 py-2 mt-6">
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Music</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Sound Effects</Link>
                                <Link to={""} className="text-[18px] font-semibold leading-normal p-2">Starred</Link>
                            </div>

                            {/* <table className="text-white-false">
                                    <thead>
                                        <th></th>
                                        <th>Track Title</th>
                                        <th>Genre</th>
                                        <th>Mode</th>
                                        <th>Duration</th>
                                        <th>License type</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td className='p-0'></td>
                                            <td className='p-0'>Dead Wrong</td>
                                            <td className='p-0'>Cinematic</td>
                                            <td className='p-0'>Dark</td>
                                            <td className='p-0'>Jeremy Biake</td>
                                            <td className='p-0'>3:15</td>
                                            <td className='p-0'></td>
                                        </tr>
                                    </tbody>
                                </table> */}



                            <div class="relative overflow-x-auto">
                                <table class="w-full text-sm text-left text-white-false">
                                    <thead>
                                        <tr>
                                            <th>
                                                {/*  */}
                                            </th>
                                            <th>
                                                Track Title
                                            </th>
                                            <th>
                                                Genre
                                            </th>
                                            <th>
                                                Mode
                                            </th>
                                            <th>
                                                Artist
                                            </th>
                                            <th>
                                                Duration
                                            </th>
                                            <th>
                                                License Type
                                            </th>
                                            <th>
                                                Added
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="mt-2">
                                        {
                                            [1, 2, 3, 4, 5, 6].map(() => {
                                                return (
                                                    <tr className="mt-2">
                                                        <td className="py-2">
                                                            {/*  */}
                                                        </td>
                                                        <td className="py-2">
                                                            Dead Wrong
                                                        </td>
                                                        <td>
                                                            Cinematic
                                                        </td>
                                                        <td className="py-2">
                                                            Dark
                                                        </td>
                                                        <td className="py-2">
                                                            Jeremy Blake
                                                        </td>
                                                        <td className="py-2">
                                                            3:15
                                                        </td>
                                                        <td className="py-2">
                                                            {/*  */}
                                                        </td>
                                                        <td className="py-2">
                                                            Nov 2022
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ChannelAudioLibraryPage