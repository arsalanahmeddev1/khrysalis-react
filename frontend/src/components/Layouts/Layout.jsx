import Header from "../header"
import Sidebar from "../Sidebar"
import { useState } from "react"

const Layout = ({ children, searchQuery, onSearchChange }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="flex flex-col h-screen bg-[#0f0f0f] text-white">
      <Header 
        searchQuery={searchQuery} 
        onSearchChange={onSearchChange} 
        onMenuClick={toggleSidebar}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={sidebarCollapsed} />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
