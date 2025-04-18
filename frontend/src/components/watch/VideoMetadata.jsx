"use client"

import { useState } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { formatViewCount, formatTimeAgo } from "../../utils/formatters"

const VideoMetadata = ({ loading, videoData }) => {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLiked(false)
    } else {
      setLiked(true)
      setDisliked(false)
    }
  }

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false)
    } else {
      setDisliked(true)
      setLiked(false)
    }
  }

  if (loading) {
    return (
      <div className="mt-4">
        <Skeleton height={32} width="80%" className="mb-2" />
        <Skeleton height={20} width="40%" className="mb-4" />
        <div className="flex flex-wrap justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3">
          <div className="flex gap-2 items-center">
            <Skeleton width={120} height={24} />
          </div>
          <div className="flex gap-2">
            <Skeleton width={80} height={36} className="rounded-full" />
            <Skeleton width={80} height={36} className="rounded-full" />
            <Skeleton width={80} height={36} className="rounded-full" />
            <Skeleton width={80} height={36} className="rounded-full" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-4">
      <h1 className="text-xl md:text-2xl font-bold mb-2">{videoData.title}</h1>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {formatViewCount(videoData.views)} views • {formatTimeAgo(videoData.publishedAt)}
      </div>

      <div className="flex flex-wrap justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3">
        <div className="flex gap-2 items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {videoData.tags &&
              videoData.tags.map((tag, index) => (
                <span key={index} className="mr-2">
                  #{tag}
                </span>
              ))}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
          {/* Like/Dislike buttons */}
          <div className="flex rounded-full bg-gray-100 dark:bg-gray-800">
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-l-full ${liked ? "text-blue-600 dark:text-blue-400" : ""}`}
              onClick={handleLike}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
              </svg>
              <span>{formatViewCount(videoData.likes)}</span>
            </button>
            <div className="w-[1px] bg-gray-300 dark:bg-gray-700"></div>
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-r-full ${disliked ? "text-blue-600 dark:text-blue-400" : ""}`}
              onClick={handleDislike}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
              </svg>
            </button>
          </div>

          {/* Share button */}
          <button className="flex items-center gap-1 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white ">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6c-3.89.39-5.4 1.83-6.89 3.56-2.4 2.71-2.79 6.04-2.93 7.81-.02.31.18.59.49.59.2 0 .38-.12.46-.31.38-.94 1.27-2.82 2.3-4.04C8.25 15.25 9.76 14 11.5 14H14v6l8-8.5L14 3z"></path>
            </svg>
            <span>Share</span>
          </button>

          {/* Save button */}
          <button className="flex items-center gap-1 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
            </svg>
            <span>Save</span>
          </button>

          {/* More button */}
          <button className="flex items-center gap-1 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoMetadata
