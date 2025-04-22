  "use client"

  import Header from "../header"
  import SearchBar from "../SearchBar"
  import Sidebar from "../Sidebar"
  import { useState, useEffect } from "react"

  const Layout = ({
    children,
    searchQuery,
    onSearchChange,
    title,
    className = "max-w-full",
    noScroll = false,
  }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
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
        document.title = `${title} | Khryslis`
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

    return (
      <div className="flex flex-col h-screen bg-white dark:bg-[#0f0f0f] text-white">
        <Header searchQuery={searchQuery} onSearchChange={onSearchChange} onMenuClick={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden relative">
          <Sidebar
            collapsed={sidebarCollapsed}
            open={sidebarOpen}
            isMobile={isMobile}
            onClose={() => {
              setSidebarCollapsed(true)
              setSidebarOpen(false)
            }}
          />
          <main className={`flex-1 ${!noScroll ? "overflow-y-auto" : ""} w-full transition-all duration-300`}>
            <SearchBar className="block lg:hidden mt-[10px]"/>
            <div className={`${className} mx-auto px-4 md:px-6`}>
              {title && <h1 className="text-xl md:text-2xl font-bold mb-4 text-black dark:text-white">{title}</h1>}
              
              {children}
            </div>
          </main>
        </div>
      </div>
    )
  }

  export default Layout
