import { useState } from "react"
import { FaSearch, FaEllipsisV, FaTrash, FaFilter } from "react-icons/fa"
import VideoHistoryItem from "../components/VideoHistoryItem"

const HistoryContent = ({ groupedVideos, onRemoveVideo, searchQuery, onSearchChange }) => {
  const [showHistorySearch, setShowHistorySearch] = useState(false)
  const [localSearch, setLocalSearch] = useState(searchQuery || "")

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    onSearchChange(localSearch)
  }

  const handleClearSearch = () => {
    setLocalSearch("")
    onSearchChange("")
    setShowHistorySearch(false)
  }

  return (
    <main className="flex-1 overflow-y-auto bg-[#0f0f0f] p-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between mb-6 flex-wrap">
          <h1 className="text-xl font-bold">Watch history</h1>
          <div className="flex items-center mt-2 sm:mt-0">
            {showHistorySearch ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search watch history"
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    className="px-4 py-1.5 bg-[#121212] border border-[#303030] rounded-full focus:outline-none focus:border-blue-500 w-48 sm:w-64"
                    autoFocus
                  />
                  {localSearch && (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      ✕
                    </button>
                  )}
                </div>
                <button type="submit" className="ml-2 px-3 py-1.5 bg-[#272727] rounded-full text-sm">
                  <FaSearch />
                </button>
              </form>
            ) : (
              <>
                <button
                  onClick={() => setShowHistorySearch(true)}
                  className="flex items-center px-3 py-1.5 bg-[#272727] rounded-full text-sm mr-2"
                >
                  <FaSearch className="mr-2" />
                  Search watch history
                </button>
                <button className="px-3 py-1.5 bg-[#272727] rounded-full text-sm mr-2">
                  <FaFilter />
                </button>
                <button className="px-3 py-1.5 bg-[#272727] rounded-full text-sm">
                  <FaEllipsisV />
                </button>
              </>
            )}
          </div>
        </div>

        {Object.keys(groupedVideos).map((timeGroup) => {
          if (groupedVideos[timeGroup].length === 0) return null

          let groupTitle
          switch (timeGroup) {
            case "today":
              groupTitle = "Today"
              break
            case "yesterday":
              groupTitle = "Yesterday"
              break
            case "lastWeek":
              groupTitle = "Last week"
              break
            case "older":
              groupTitle = "Older"
              break
            default:
              groupTitle = timeGroup
          }

          return (
            <div key={timeGroup}>
              <div className="text-sm text-gray-400 mb-2 mt-6">{groupTitle}</div>
              <div className="space-y-4">
                {groupedVideos[timeGroup].map((video) => (
                  <VideoHistoryItem key={video.id} video={video} onRemove={() => onRemoveVideo(video.id)} />
                ))}
              </div>
            </div>
          )
        })}

        {Object.values(groupedVideos).flat().length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <FaTrash className="text-4xl text-gray-500 mb-4" />
            <p className="text-xl text-gray-300">No videos found</p>
            {searchQuery && <p className="text-gray-400 mt-2">No results found for "{searchQuery}"</p>}
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="mt-4 px-4 py-2 bg-[#272727] rounded-full text-sm hover:bg-[#3a3a3a]"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

export default HistoryContent
