import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import { useData } from "../../contexts/DataContext"

const StudioSidebar = ({ collapsed, onClose, isMobile }) => {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const { currentChannel } = useData()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Determine sidebar classes based on state
  const sidebarClasses = `
    sidebar-wrapper
    ${isMobile ? "fixed left-0 top-0 h-full z-30" : "relative"} 
    ${isMobile && collapsed ? "-translate-x-full" : "translate-x-0"}
    transition-transform duration-300 ease-in-out
    ${collapsed && !isMobile ? "w-20" : "w-64"}
    bg-white dark:bg-[#0f0f0f] border-r border-gray-200 dark:border-gray-800
  `

  // Studio navigation items
  const studioNavItems = [
    {
      title: "Dashboard",
      path: "/studio/dashboard",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      title: "Content",
      path: "/studio/content",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    {
      title: "Analytics",
      path: "/studio/analytics",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      title: "Comments",
      path: "/studio/comments",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
      title: "Customization",
      path: "/studio/customization",
      icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
    },
    {
      title: "Settings",
      path: "/studio/settings",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    },
  ]

  // Upload section items
  const uploadItems = [
    {
      title: "Upload Video",
      path: "/studio/upload/video",
      icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
    },
    {
      title: "Create Short",
      path: "/studio/upload/short",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    },
  ]

  return (
    <aside className={sidebarClasses}>
      {/* Mobile close button */}
      {isMobile && !collapsed && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Studio Logo */}
      <div className="flex h-16 items-center px-4 border-b border-gray-200 dark:border-gray-800">
        <Link to="/studio/dashboard" className="flex items-center space-x-2">
          {!collapsed && <span className="text-lg font-semibold text-black dark:text-white">Khryslis Studio</span>}
          {collapsed && <span className="text-lg font-semibold text-black dark:text-white">K</span>}
        </Link>
      </div>

      {isLoading ? (
        <div className="px-4 py-4">
          <Skeleton height={40} className="mb-2" />
          <Skeleton height={24} count={6} className="mb-2" />
          <Skeleton height={40} className="mb-2 mt-6" />
          <Skeleton height={24} count={2} className="mb-2" />
        </div>
      ) : (
        <div className="py-4">
          {/* Channel Selector */}
          <div className={`px-4 mb-6 ${collapsed ? "text-center" : ""}`}>
            <div className="flex items-center space-x-2">
              <img
                src={currentChannel?.profilePicture || "/placeholder.svg"}
                alt="Channel"
                className="w-8 h-8 rounded-full object-cover"
              />
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {currentChannel?.name || "Your Channel"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="px-2 space-y-1">
            {studioNavItems.map((item) => {
              const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    ${
                      isActive
                        ? "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }
                    group flex items-center px-2 py-2 text-sm font-medium rounded-md
                  `}
                  onClick={isMobile ? onClose : undefined}
                >
                  <svg
                    className={`
                      ${isActive ? "text-purple-600 dark:text-purple-400" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"}
                      mr-3 flex-shrink-0 h-5 w-5
                      ${collapsed ? "mx-auto" : ""}
                    `}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {!collapsed && <span>{item.title}</span>}
                </Link>
              )
            })}
          </nav>

          {/* Upload Section */}
          <div className="mt-8">
            <h3
              className={`px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider ${collapsed ? "text-center" : ""}`}
            >
              {!collapsed && "Create"}
            </h3>
            <div className="mt-1 px-2 space-y-1">
              {uploadItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={isMobile ? onClose : undefined}
                >
                  <svg
                    className={`
                      text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300
                      mr-3 flex-shrink-0 h-5 w-5
                      ${collapsed ? "mx-auto" : ""}
                    `}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {!collapsed && <span>{item.title}</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

export default StudioSidebar
