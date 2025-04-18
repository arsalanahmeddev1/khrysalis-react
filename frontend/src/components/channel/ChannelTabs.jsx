const ChannelTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "videos", label: "Videos" },
    { id: "playlists", label: "Playlists" },
    { id: "community", label: "Community" },
    { id: "about", label: "About" },
  ]

  return (
    <div className="channel-tabs border-b border-gray-200 dark:border-gray-700">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex whitespace-nowrap px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black dark:bg-white"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChannelTabs
