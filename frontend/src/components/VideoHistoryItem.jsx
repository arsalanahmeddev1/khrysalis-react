import { useState } from "react"
import { FaEllipsisV, FaTrash, FaFlag } from "react-icons/fa"

const VideoHistoryItem = ({ video, onRemove }) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleRemove = (e) => {
    e.stopPropagation()
    onRemove()
    setShowOptions(false)
  }

  const toggleOptions = (e) => {
    e.stopPropagation()
    setShowOptions(!showOptions)
  }

  const formatWatchTime = (dateString) => {
    const date = new Date(dateString)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? "PM" : "AM"
    const formattedHours = hours % 12 || 12
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

    return `${formattedHours}:${formattedMinutes} ${ampm}`
  }

  return (
    <div className="flex space-x-4 group">
      <div className="relative w-40 h-24 flex-shrink-0">
        <a href={`/watch?v=${video.id}`} className="block w-full h-full">
          <img
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 px-1 text-xs rounded">{video.duration}</div>
        </a>
      </div>
      <div className="flex-1 min-w-0">
        <a href={`/watch?v=${video.id}`} className="block">
          <h3 className="font-medium mb-1 line-clamp-2 hover:text-blue-400 cursor-pointer">{video.title}</h3>
        </a>
        <div className="text-sm text-gray-400">
          <a href={`/channel/${video.channelId}`} className="hover:text-white cursor-pointer">
            {video.channel}
          </a>
          <div>
            {video.views} views • {video.uploadTime}
          </div>
          <div className="mt-1">Watched at {formatWatchTime(video.watchedAt)}</div>
        </div>
      </div>
      <div className="relative">
        <button
          className="p-2 rounded-full hover:bg-[#272727] self-start opacity-0 group-hover:opacity-100 focus:opacity-100"
          onClick={toggleOptions}
        >
          <FaEllipsisV className="text-gray-400" />
        </button>

        {showOptions && (
          <div className="absolute right-0 top-10 bg-[#212121] rounded-lg shadow-lg z-10 w-48 py-2">
            <button
              className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-[#3a3a3a]"
              onClick={handleRemove}
            >
              <FaTrash className="mr-3 text-gray-400" />
              Remove from history
            </button>
            <button
              className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-[#3a3a3a]"
              onClick={() => setShowOptions(false)}
            >
              <FaFlag className="mr-3 text-gray-400" />
              Report
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoHistoryItem
