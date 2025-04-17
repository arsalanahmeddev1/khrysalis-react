"use client"

import { useState, useRef, useEffect } from "react"
import { formatTimeAgo, formatViewCount, formatDuration } from "../utils/formatters"
import Button from "../components/button"
import { Link } from "react-router-dom"

const LikedVideoCard = ({
  video,
  onRemove,
  className,
  removeFromLikedVideos,
  Savetoplaylist,
  share,
  addToQueue,
  notInterested = "",
  thumbnailClassName = "",
  isHistoryItem = false,
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = (e) => {
    e.stopPropagation()
    setShowMenu(!showMenu)
  }

  const handleRemove = (e) => {
    e.stopPropagation()
    onRemove()
    setShowMenu(false)
  }

  const formatWatchTime = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? "PM" : "AM"
    const formattedHours = hours % 12 || 12
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

    return `${formattedHours}:${formattedMinutes} ${ampm}`
  }

  return (
    <div
      className={`video-card flex gap-4 group hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors ${className}`}
    >
      {/* Thumbnail Section */}
      <div className="relative flex-shrink-0">
        <a
          href={`/watch?v=${video.id}`}
          className={`block w-full md:w-80 aspect-video rounded-xl overflow-hidden ${thumbnailClassName}`}
        >
          <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
            {formatDuration(video.duration)}
          </div>
        </a>
      </div>

      {/* Video Info Section */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start">
          <div className="flex-1 min-w-0">
            <a href={`/watch?v=${video.id}`} className="block">
              <h3 className="text-base md:text-lg font-medium line-clamp-2 hover:underline">{video.title}</h3>
            </a>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              <Link to={`/channel/${video.channelId}`} className="hover:text-black dark:hover:text-white">
                {video.channelName || video.channel}
              </Link>
            </div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {formatViewCount(video.views)} views • {formatTimeAgo(video.publishedAt || video.uploadTime)}
            </div>
            {/* Show watched time for history items */}
            {isHistoryItem && video.watchedTime && (
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Watched at {formatWatchTime(video.watchedTime)}
              </div>
            )}
          </div>

          {/* Menu Button */}
          <div className="relative" ref={menuRef}>
            <Button onClick={toggleMenu} className="vertical-dots-btn" variant="icon" aria-label="Video options">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
              </svg>
            </Button>

            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute right-0 mt-1 w-60 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-10 py-1 border border-gray-200 dark:border-gray-700">
                {
                  removeFromLikedVideos && (
                    <Button onClick={handleRemove} className="bg-transparent sm-icons">
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                      </svg>
                      {removeFromLikedVideos}
                    </Button>
                  )
                }
                {
                  Savetoplaylist && (
                    <Button onClick={() => setShowMenu(false)} className="bg-transparent sm-icons">
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                      </svg>
                      {Savetoplaylist}
                    </Button>
                  )
                }
                {share && (
                  <Button onClick={() => setShowMenu(false)} className="bg-transparent sm-icons">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                    </svg>
                    {share}
                  </Button>
                )}
                {notInterested && (
                  <Button onClick={() => setShowMenu(false)} className="bg-transparent sm-icons">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm7 11H5v-2h14v2z"></path>
                    </svg>
                    {notInterested}
                  </Button>
                )}
                {addToQueue && (
                  <Button onClick={() => setShowMenu(false)} className="bg-transparent sm-icons">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.18 4l.24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
                    </svg>
                    {addToQueue}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LikedVideoCard
