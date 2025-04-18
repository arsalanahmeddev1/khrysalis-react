import { Link } from 'react-router-dom'
import {useState, useEffect } from 'react'
import Skeleton from "react-loading-skeleton"
import { sideBarItems, settingItems } from '../data'

const Sidebar = ({ collapsed, isSettingDashboard }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <aside className={`${
      collapsed ? "w-20" : "w-64"
    } sidebar-wrapper`}>
      {isLoading ? (
        <div className="px-6">
          <Skeleton
            height={20}
            count={sideBarItems.flat().length}
            className="mb-2"
          />
        </div>
      ) : !isSettingDashboard ? (
        <>
          {sideBarItems.map((group, index) => (
            <div key={`group-${index}`} className={`${index === 1 && 'mt-6'}`}>
              {group.map((item) => (
                <NavItem
                  key={item.path}
                  iconLight={item.iconLight}
                  iconDark={item.iconDark}
                  title={item.title}
                  path={item.path}
                  collapsed={collapsed}
                />
              ))}
            </div>
          ))}
        </>
      ) : (
        <div>
          {settingItems.map((item) => (
            <NavItem
              key={item.path}
              title={item.title}
              path={item.path}
              collapsed={collapsed}
              isTextOnly
            />
          ))}
        </div>
      )}
    </aside>
  )
}

const NavItem = ({ iconLight, iconDark, title, path, collapsed, isTextOnly }) => (
  <Link
    to={path}
    className={`flex items-center w-full  ${
      collapsed ? "px-2 justify-center" : "px-6"
    } nav-item`}
  >
    {!isTextOnly && (
      <>
        <img
          src={iconDark}
          alt=""
          className={`w-4 ${collapsed ? "" : "mr-4"} block dark:hidden`}
        />
        <img
          src={iconLight}
          alt=""
          className={`w-4 ${collapsed ? "" : "mr-4"} hidden dark:block`}
        />
      </>
    )}
    {!collapsed && <span className="capitalize">{title}</span>}
  </Link>
)

export default Sidebar
