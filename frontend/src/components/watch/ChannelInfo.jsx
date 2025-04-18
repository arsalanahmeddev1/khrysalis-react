import { useState } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { formatSubscriberCount } from "../../utils/formatters"
import { Link } from "react-router-dom"

const ChannelInfo = ({ loading, videoData }) => {
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed)
  }

  if (loading) {
    return (
      <div className="flex items-start justify-between py-4">
        <div className="flex items-start gap-3">
          <Skeleton circle width={48} height={48} />
          <div>
            <Skeleton width={120} height={20} className="mb-1" />
            <Skeleton width={80} height={16} />
          </div>
        </div>
        <Skeleton width={120} height={36} className="rounded-full" />
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-start justify-between py-4">
      <div className="flex items-start gap-3">
        <Link to={`/channel/${videoData.channelId}`} className="flex-shrink-0">
          <img 
            src={videoData.channelAvatar || "/placeholder.svg"} 
            alt={videoData.channelName} 
            className="w-12 h-12 rounded-full"
          />
        </Link>
        <div>
          <Link to={`/channel/${videoData.channelId}`} className="font-medium hover:text-blue-600 dark:hover:text-blue-400">
            {videoData.channelName}
          </Link>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {formatSubscriberCount(videoData.channelSubscribers)} subscribers
          </div>
        </div>
      </div>
      
      <button 
        className={`primary-btn ${
          isSubscribed 
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
            : 'primary-btn text-white hover:primary-btn'
        }`}
        onClick={handleSubscribe}
      >
        {isSubscribed ? 'Subscribed' : 'Subscribe'}
      </button>
    </div>
  )
}

export default ChannelInfo
