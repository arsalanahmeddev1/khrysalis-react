
import { Link } from 'react-router-dom'
import MyContext from '../router/context'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
// For Dark Mode mode Icons
import home from '../assets/icons/home.png'
import blips from '../assets/icons/blips.png'
import followers from '../assets/icons/followers.png'
import library from '../assets/icons/library.png'
import history from '../assets/icons/history.png'
import liked from '../assets/icons/liked.png'
import trending from '../assets/icons/trending.png'
import music from '../assets/icons/music.png'
import gaming from '../assets/icons/gaming.png'
import news from '../assets/icons/news.png'
import setting from '../assets/icons/setting.png'
import help from '../assets/icons/help.png'
import feedback from '../assets/icons/feedback.png'
import hamburger from '../assets/icons/hamburger.png'

// For Bright Mode mode Icons
import homeDark from '../assets/icons/home-dark.png'
import blipsDark from '../assets/icons/blips-dark.png'
import followersDark from '../assets/icons/followers-dark.png'
import libraryDark from '../assets/icons/library-dark.png'
import historyDark from '../assets/icons/history-dark.png'
import likedDark from '../assets/icons/thumbsup-dark.png'
import trendingDark from '../assets/icons/trending-dark.png'
import musicDark from '../assets/icons/music-dark.png'
import gamingDark from '../assets/icons/gaming-dark.png'
import newsDark from '../assets/icons/news-dark.png'
import settingDark from '../assets/icons/settings-dark.png'
import helpDark from '../assets/icons/help-dark.png'
import feedbackDark from '../assets/icons/help-2-dark.png'
import { Skeleton } from 'antd'

const Dashboard = ({ isSettingDashboard }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { data, updateData } = useContext(MyContext);
    const [isDarkMode, setIsDarkMode] = useState(data.isDarkMode)
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])

   
    


    const items = [
        [
            // {
            //     icon: hamburger
            // },
            {
                title: "home",
                icon: isDarkMode ? home : homeDark,
                path: "/"
            }, {
                title: "blips",
                icon: isDarkMode ? blips : blipsDark,
                path: '/blips'
            }, {
                title: "followers",
                icon: isDarkMode ? followers : followersDark,
                path: "/followers"
            }, {
                title: "library",
                icon: isDarkMode ? library : libraryDark,
                path: "/library",
            }, {
                title: "history",
                icon: isDarkMode ? history : historyDark,
                path: "/history"
            }, {
                title: "liked",
                icon: isDarkMode ? liked : likedDark,
                path: "/liked"
            }, {
                title: "trending",
                icon: isDarkMode ? trending : trendingDark,
                path: "/trending"
            }, {
                title: "music",
                icon: isDarkMode ? music : musicDark,
                path: "/music"
            }, {
                title: "gaming",
                icon: isDarkMode ? gaming : gamingDark,
                path: "/gaming"
            }, {
                title: "news",
                icon: isDarkMode ? news : newsDark,
                path: "/news"
            }
        ], [
            {
                title: "settings",
                icon: isDarkMode ? setting : settingDark,
                path: "/settings/account"
            }, {
                title: "report history",
                icon: isDarkMode ? history : historyDark,
                path: "/report-history"
            }, {
                title: "help",
                icon: isDarkMode ? help : helpDark,
                path: "/help-notification"
            }, {
                title: "send feedback",
                icon: isDarkMode ? feedback : feedbackDark,
                path: "/feedback"
            }
        ]
    ]

    const settingItems = [
        {
            title: "Account",
            path: "/settings/account"
        },
        {
            title: "Notifications",
            path: "/settings/notifications"
        },
        {
            title: "Privacy",
            path: "/settings/privacy"
        },
        {
            title: "Playback and Performance",
            path: "/settings/performance&playback"
        },
        {
            title: "Downloads",
            path: "/settings/downloads"
        },
        {
            title: "Connected Apps",
            path: "/settings/connected-apps"
        },
        {
            title: "Billing and Payments",
            path: "/settings/billing&payment"
        },
        {
            title: "Advance settings",
            path: "/settings/advance"
        }
    ]

    useEffect(() => {
        setIsDarkMode(data?.isDarkMode)
    }, [data?.isDarkMode])

    return (
        <div className="flex flex-col w-[12%] fixed h-[90vh] pt-4 top-[60px] px-6">
            
            {!isSettingDashboard ? (
                items?.map((group, index) => (
                    <div key={`group-${index}`} className={`text-white-false ${index === 1 && 'mt-6'}`}>
                        {group?.map((item) => (
                            <div key={item.path} className='flex flex-col'>
                                <Link
                                    to={item.path}
                                    className='flex gap-x-2 text-white-false py-[6px] items-center text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-[#00E9EE] via-[#5194EC] to-[#D414EE]'
                                >
                                    <img src={item.icon} alt="" className='w-4' />
                                    <span className='capitalize'>{item.title}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <div className='text-white-false'>
                    {settingItems?.map((item) => (
                        <div key={item.path} className='flex flex-col'>
                            <Link
                                to={item.path}
                                className='flex gap-x-2 text-white-false py-[6px] items-center text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-[#00E9EE] via-[#5194EC] to-[#D414EE]'
                            >
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dashboard