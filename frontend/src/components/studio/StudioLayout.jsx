import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import StudioSidebar from "./StudioSidebar"
import { useLocation } from "react-router-dom"

const StudioLayout = ({ children, title }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1200)
      // Auto-collapse sidebar on mobile
      if (window.innerWidth < 1200) {
        setSidebarCollapsed(true)
      } else {
        setSidebarCollapsed(false)
      }
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (title) {
      document.title = `${title} - Khryslis Studio`
    }
  }, [title])

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarCollapsed(false)
      setSidebarOpen(!sidebarOpen)
    } else {
      setSidebarCollapsed(!sidebarCollapsed)
    }
  }

  // Get current page title based on route
  const getPageTitle = () => {
    const path = location.pathname
    if (path.includes("/dashboard")) return "Channel Dashboard"
    if (path.includes("/content")) return "Content"
    if (path.includes("/analytics")) return "Analytics"
    if (path.includes("/comments")) return "Comments"
    if (path.includes("/customization")) return "Customization"
    if (path.includes("/settings")) return "Settings"
    if (path.includes("/upload/video")) return "Upload Video"
    if (path.includes("/upload/short")) return "Create Short"
    return "Studio"
  }

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
      {/* Studio Header */}
      <header className="bg-white dark:bg-[#0f0f0f] border-b border-gray-200 dark:border-gray-800 h-16 flex items-center px-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="ml-4 flex items-center">
          <h1 className="text-lg font-medium">{getPageTitle()}</h1>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="sr-only">Back to Khryslis</span>
          </Link>

          <button className="p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="sr-only">Notifications</span>
          </button>

          <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none">
            <img className="h-8 w-8 rounded-full" src="/placeholder.svg" alt="User profile" />
            <span className="sr-only">User menu</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <StudioSidebar
          collapsed={sidebarCollapsed}
          open={sidebarOpen}
          isMobile={isMobile}
          onClose={() => {
            setSidebarCollapsed(true)
            setSidebarOpen(false)
          }}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

export default StudioLayout
