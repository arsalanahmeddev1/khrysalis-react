import Header from "../header"
import Sidebar from "../Sidebar"
import { useState } from "react"

const Layout = ({ children, searchQuery, onSearchChange, title, className="max-w-[1560px]", noScroll=false }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#0f0f0f] text-white">
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onMenuClick={toggleSidebar}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={sidebarCollapsed} />
        <main className={`flex-1 ${!noScroll ? "overflow-y-auto" : ""}`}>
          <div className={`${className} mx-auto py-[50px]`}>
            <h1 className="text-xl md:text-2xl font-bold mb-4 text-black dark:text-white">{title}</h1>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
