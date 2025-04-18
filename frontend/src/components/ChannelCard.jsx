import { useState } from "react"
import { FaBell, FaRegBell, FaEllipsisV, FaCheck } from "react-icons/fa"
import { Link } from "react-router-dom"

const ChannelCard = ({ channel, onUnsubscribe, onNotificationChange }) => {
  const [showOptions, setShowOptions] = useState(false)
  const [showNotificationOptions, setShowNotificationOptions] = useState(false)

  const handleUnsubscribe = (e) => {
    e.stopPropagation()
    onUnsubscribe(channel.id)
    setShowOptions(false)
  }

  const toggleOptions = (e) => {
    e.stopPropagation()
    setShowOptions(!showOptions)
    if (showNotificationOptions) setShowNotificationOptions(false)
  }

  const toggleNotificationOptions = (e) => {
    e.stopPropagation()
    setShowNotificationOptions(!showNotificationOptions)
    if (showOptions) setShowOptions(false)
  }

  const handleNotificationChange = (setting) => {
    onNotificationChange(channel.id, setting)
    setShowNotificationOptions(false)
  }

  const getNotificationIcon = () => {
    switch (channel.notificationSetting) {
      case "all":
        return <FaBell className="text-white" />
      case "personalized":
        return <FaBell className="text-gray-400" />
      case "none":
      default:
        return <FaRegBell className="text-gray-400" />
    }
  }

  return (
    <div className="bg-[#1f1f1f] rounded-lg overflow-hidden group">
      {/* Channel Banner */}
      <div
        className="h-24 bg-gradient-to-r from-gray-800 to-gray-700"
        style={{
          backgroundImage: channel.banner ? `url(${channel.banner})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="p-4">
        <div className="flex items-start">
          {/* Channel Avatar */}
          <Link to={`/channel/${channel.id}`} className="block">
            <img
              src={channel.avatar || "/placeholder.svg"}
              alt={channel.name}
              className="w-16 h-16 rounded-full border-4 border-[#1f1f1f] -mt-10"
            />
          </Link>

          <div className="ml-auto flex items-center space-x-2">
            {/* Notification Bell */}
            <div className="relative">
              <button
                className="p-2 rounded-full hover:bg-[#272727]"
                onClick={toggleNotificationOptions}
                title="Notification settings"
              >
                {getNotificationIcon()}
              </button>

              {showNotificationOptions && (
                <div className="absolute right-0 top-10 bg-[#212121] rounded-lg shadow-lg z-10 w-64 py-2">
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-[#3a3a3a] ${
                      channel.notificationSetting === "all" ? "bg-[#3a3a3a]" : ""
                    }`}
                    onClick={() => handleNotificationChange("all")}
                  >
                    <FaBell className="mr-3 text-white" />
                    <div>
                      <div>All</div>
                      <div className="text-xs text-gray-400">Get all notifications</div>
                    </div>
                    {channel.notificationSetting === "all" && <FaCheck className="ml-auto text-blue-500" />}
                  </button>
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-[#3a3a3a] ${
                      channel.notificationSetting === "personalized" ? "bg-[#3a3a3a]" : ""
                    }`}
                    onClick={() => handleNotificationChange("personalized")}
                  >
                    <FaBell className="mr-3 text-gray-400" />
                    <div>
                      <div>Personalized</div>
                      <div className="text-xs text-gray-400">Only get some notifications</div>
                    </div>
                    {channel.notificationSetting === "personalized" && <FaCheck className="ml-auto text-blue-500" />}
                  </button>
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-[#3a3a3a] ${
                      channel.notificationSetting === "none" ? "bg-[#3a3a3a]" : ""
                    }`}
                    onClick={() => handleNotificationChange("none")}
                  >
                    <FaRegBell className="mr-3 text-gray-400" />
                    <div>
                      <div>None</div>
                      <div className="text-xs text-gray-400">Don't get notifications</div>
                    </div>
                    {channel.notificationSetting === "none" && <FaCheck className="ml-auto text-blue-500" />}
                  </button>
                </div>
              )}
            </div>

            {/* Options Menu */}
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-[#272727]" onClick={toggleOptions} title="Channel options">
                <FaEllipsisV className="text-gray-400" />
              </button>

              {showOptions && (
                <div className="absolute right-0 top-10 bg-[#212121] rounded-lg shadow-lg z-10 w-48 py-2">
                  <Link
                    to={`/channel/${channel.id}`}
                    className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-[#3a3a3a]"
                  >
                    View channel
                  </Link>
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-[#3a3a3a] text-red-500"
                    onClick={handleUnsubscribe}
                  >
                    Unsubscribe
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Channel Info */}
        <div className="mt-2">
          <Link to={`/channel/${channel.id}`} className="block">
            <h3 className="font-medium text-white hover:text-blue-400">{channel.name}</h3>
          </Link>
          <div className="text-sm text-gray-400 mt-1">{channel.subscribers} subscribers</div>

          {/* Last Upload */}
          {channel.lastUpload && (
            <div className="mt-2 text-sm">
              <div className="text-gray-400">Last upload:</div>
              <Link
                to={`/watch?v=${channel.lastUpload.videoId}`}
                className="text-white hover:text-blue-400 line-clamp-1"
              >
                {channel.lastUpload.title}
              </Link>
              <div className="text-xs text-gray-500">{channel.lastUpload.timeAgo}</div>
            </div>
          )}

          {/* Channel Description */}
          <p className="mt-2 text-sm text-gray-300 line-clamp-2">{channel.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ChannelCard
