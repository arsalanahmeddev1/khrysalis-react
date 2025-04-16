
import { Link } from 'react-router-dom'
import MyContext from '../router/context'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import Skeleton from "react-loading-skeleton";
import {sideBarItems, settingItems} from '../data';

const Dashboard = ({ isSettingDashboard }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { data, updateData } = useContext(MyContext);
    // const [isDarkMode, setIsDarkMode] = useState(data.isDarkMode)
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex flex-col w-[12%] fixed h-[90vh] pt-4 top-[60px] px-6 justify-between pe-0">
            {isLoading ? (
                <div className="p-4 h-full">
                    <Skeleton
                        height={20}
                        count={sideBarItems.flat().length}
                        className="mb-2"
                    />
                </div>
            ) : !isSettingDashboard ? (
                sideBarItems?.map((group, index) => (
                    <div key={`group-${index}`} className={`text-black dark:text-white ${index === 1 && 'mt-6'}`}>
                        {group?.map((item) => (
                            <div key={item.path} className="flex flex-col pb-[20px]">
                                <Link
                                    to={item.path}
                                    className="flex gap-x-2 text-black dark:text-white py-[6px] items-center text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-[#00E9EE] via-[#5194EC] to-[#D414EE]"
                                >
                                    <img src={item.iconLight} alt="" className="w-4 hidden dark:block" />
                                    <img src={item.iconDark} alt="" className="w-4 block dark:hidden" />
                                    <span className="capitalize">{item.title}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <div className="text-white">
                    {settingItems?.map((item) => (
                        <div key={item.path} className="flex flex-col">
                            <Link
                                to={item.path}
                                className="flex gap-x-2 text-white-false py-[6px] items-center text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-[#00E9EE] via-[#5194EC] to-[#D414EE]"
                            >
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

}

export default Dashboard