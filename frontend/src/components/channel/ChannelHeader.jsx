import { useState } from "react"
import { formatSubscriberCount } from "../../utils/formatters"

const ChannelHeader = ({ channel, isSubscribed, onSubscribe }) => {
  const [showNotificationOptions, setShowNotificationOptions] = useState(false)
  
  const toggleNotificationOptions = (e) => {
    e.stopPropagation()
    setShowNotificationOptions(!showNotificationOptions)
  }

  // Close notification options when clicking outside
  const handleClickOutside = () => {
    if (showNotificationOptions) {
      setShowNotificationOptions(false)
    }
  }

  return (
    <div className="channel-header mb-4" onClick={handleClickOutside}>
      {/* Channel Banner */}
      <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden">
        <img 
          src={channel.banner || "/placeholder.svg"} 
          alt={`${channel.name} banner`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Channel Info */}
      <div className="flex flex-col md:flex-row md:items-center px-4 py-4 gap-4">
        {/* Channel Avatar */}
        <div className="flex-shrink-0">
          <img 
            src={channel.avatar || "/placeholder.svg"} 
            alt={channel.name} 
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white dark:border-gray-900"
          />
        </div>
        
        {/* Channel Details */}
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold">{channel.name}</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            <span>{formatSubscriberCount(channel.subscribers)} subscribers</span>
            {channel.videoCount && (
              <span className="ml-2">• {channel.videoCount} videos</span>
            )}
          </div>
          {channel.customUrl && (
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {channel.customUrl}
            </div>
          )}
        </div>
        
        {/* Subscribe Button */}
        <div className="relative">
          {isSubscribed ? (
            <div className="flex">
              <button 
                className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-l-full font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                onClick={onSubscribe}
              >
                Subscribed
              </button>
              <button 
                className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-r-full font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                onClick={toggleNotificationOptions}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path>
                </svg>
              </button>
              
              {/* Notification Options Dropdown */}
              {showNotificationOptions && (
                <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-10 w-48 py-2 border border-gray-200 dark:border-gray-700">
                  <button className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path>
                    </svg>
                    All notifications
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path>
                    </svg>
                    Personalized
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path>
                    </svg>
                    None
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition"
              onClick={onSubscribe}
            >
              Subscribe
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChannelHeader
