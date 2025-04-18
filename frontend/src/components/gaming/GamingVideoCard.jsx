import { useState } from "react"
import { formatDuration, formatTimeAgo, formatViewCount } from "../../utils/formatters"

const GamingVideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="video-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail Section */}
      <div className="relative rounded-xl overflow-hidden aspect-video mb-2">
        <a href={`/watch?v=${video.id}`}>
          <img
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Live badge or duration */}
          {video.isLive ? (
            <div className="absolute bottom-1 left-1 bg-red-600 text-white text-xs px-1 py-0.5 rounded flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
              LIVE
            </div>
          ) : (
            <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
              {formatDuration(video.duration)}
            </div>
          )}

          {/* Viewers count for live streams */}
          {video.isLive && video.liveViewers && (
            <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
              {formatViewCount(video.liveViewers)} watching
            </div>
          )}

          {/* Play button overlay on hover */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <svg className="w-12 h-12 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </a>
      </div>

      {/* Video Info Section */}
      <div className="flex">
        {/* Channel Avatar */}
        <a href={`/channel/${video.channelId}`} className="flex-shrink-0 mr-3">
          <img
            src={video.channelAvatar || "/placeholder.svg"}
            alt={video.channelName}
            className="w-9 h-9 rounded-full"
          />
        </a>

        <div className="flex-1 min-w-0">
          <a href={`/watch?v=${video.id}`} className="block">
            <h3 className="text-base font-medium line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {video.title}
            </h3>
          </a>
          <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <a href={`/channel/${video.channelId}`} className="hover:text-black dark:hover:text-white">
              {video.channelName}
            </a>

            {/* Game name badge */}
            {video.gameName && (
              <span className="inline-flex items-center ml-2">
                •{" "}
                <span className="ml-1 px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                  {video.gameName}
                </span>
              </span>
            )}
          </div>
          <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {video.isLive ? (
              <span className="text-red-600 dark:text-red-400 font-medium">Live now</span>
            ) : (
              <>
                {formatViewCount(video.views)} views • {formatTimeAgo(video.publishedAt)}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamingVideoCard
