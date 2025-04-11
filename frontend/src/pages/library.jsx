import Header from "../components/header"
import Dashboard from "../components/dashboard"
import historyIcon from '../assets/icons/history.png'
import blipsProfile from '../assets/icons/blips-profile.png'
import history1Img from '../assets/images/history-1.png'
import history2Img from '../assets/images/history-2.png'
import history3Img from '../assets/images/history-3.png'
import playlistIcon from '../assets/icons/playlist.png'
import LikedIcon from '../assets/icons/like-outline.png'

const LibraryPage = () => {
    const channels = [
        '', '', '', '', '', '', '', '', '', ''
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
                            <div className="flex text-white-false gap-x-3">
                                <div className="w-4/5">
                                    <span className="gap-x-2 flex items-center mt-2">
                                        <img src={historyIcon} alt="" />
                                        <span >History</span>
                                    </span>
                                    <div className="flex justify-between flex-wrap gap-5 mt-2 border-b border-gray-600 pb-6">
                                        <div className="w-[232px] flex-col flex gap-y-2">
                                            <div><img src={history1Img} className="w-[232px] h-[135px]" alt="" /></div>
                                            <span className="block text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                            <span className="block font-thin text-[10px]">Gaming World 171,532 views  Aug 13, 2021 </span>
                                        </div>
                                        <div className="w-[232px] flex-col flex gap-y-2">
                                            <div><img src={history2Img} className="w-[232px] h-[135px]" alt="" /></div>
                                            <span className="block text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                            <span className="block font-thin text-[10px]">Gaming World 171,532 views  Aug 13, 2021 </span>
                                        </div>
                                        <div className="w-[232px] flex-col flex gap-y-2">
                                            <div><img src={history3Img} className="w-[232px] h-[135px]" alt="" /></div>
                                            <span className="block text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                            <span className="block font-thin text-[10px]">Gaming World 171,532 views  Aug 13, 2021 </span>
                                        </div>
                                        <div className="w-[232px] flex-col flex gap-y-2">
                                            <div><img src={history1Img} className="w-[232px] h-[135px]" alt="" /></div>
                                            <span className="block text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                            <span className="block font-thin text-[10px]">Gaming World 171,532 views  Aug 13, 2021 </span>
                                        </div>
                                        <div className="w-[232px] flex-col flex gap-y-2">
                                            <div><img src={history2Img} className="w-[232px] h-[135px]" alt="" /></div>
                                            <span className="block text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                            <span className="block font-thin text-[10px]">Gaming World 171,532 views  Aug 13, 2021 </span>
                                        </div>
                                        <div className="w-[232px] flex-col flex gap-y-2">
                                            <div><img src={history3Img} className="w-[232px] h-[135px]" alt="" /></div>
                                            <span className="block text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                            <span className="block font-thin text-[10px]">Gaming World 171,532 views  Aug 13, 2021 </span>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-700 pb-6">
                                        <div className="flex items-center gap-x-2 mt-4">
                                            <img src={historyIcon} alt="" />
                                            Watch Later
                                        </div>
                                        <p className="text-xs">Save videos to watch later. Your list shows up right here.</p>
                                    </div>
                                    <div className="border-b border-gray-700 pb-6">
                                        <div className="flex items-center gap-x-2 mt-4">
                                            <img src={playlistIcon} alt="" />
                                            Playlist
                                        </div>
                                        <p className="text-xs">Playlists you create or save will show up here.</p>
                                    </div>
                                    <div className="pb-6">
                                        <div className="flex items-center gap-x-2 mt-4 justify-between mb-4">
                                            <div className="flex items-center gap-x-2"> <img src={LikedIcon} alt="" />
                                                Liked Videos</div>
                                            <span className="text-[#CC19EB]">see all</span>
                                        </div>

                                        <div className="w-[232px] flex-col flex gap-y-2">
                                            <div><img src={history2Img} className="w-[232px] h-[135px]" alt="" /></div>
                                            <span className="block text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                            <span className="block font-thin text-[10px]">Gaming World 171,532 views  Aug 13, 2021 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/5">
                                    <div className="text-center fixed w-56 mt-2">
                                        <img src={blipsProfile} className="m-auto w-fit block" alt="" />
                                        <span className="mt-1">Gaming world</span>
                                        <div className="text-thin text-xs mt-3">
                                            <div className="border-y flex justify-between py-2 px mt-3-1"><span>Subscriptions</span><span>25k</span></div>
                                            <div className="border-b flex justify-between py-2 px mt-3-1"><span>Uploads</span><span>35</span></div>
                                            <div className="border-b flex justify-between py-2 px-1"><span>Likes</span><span>63.1k</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LibraryPage