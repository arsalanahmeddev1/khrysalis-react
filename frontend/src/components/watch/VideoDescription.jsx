import { useState } from "react"
import Skeleton from "react-loading-skeleton"

const VideoDescription = ({ loading, videoData }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  if (loading) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 mb-6">
        <Skeleton count={3} className="mb-2" />
        <Skeleton width="60%" />
      </div>
    )
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 mb-6">
      <div className={`${expanded ? "" : "line-clamp-3"} whitespace-pre-line text-sm`}>{videoData.description}</div>

      {videoData.description && videoData.description.length > 100 && (
        <button className="text-sm font-medium mt-2 text-gray-800 dark:text-gray-200" onClick={toggleExpanded}>
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  )
}

export default VideoDescription
