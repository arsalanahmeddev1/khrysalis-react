import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import LikedVideoCard from "../LikedVideoCard"

const GamingVideoGrid = ({ videos, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {[...Array(15)].map((_, index) => (
          <div key={index} className="flex flex-col">
            <Skeleton height={180} className="rounded-xl mb-2" />
            <div className="flex gap-2">
              <Skeleton circle width={36} height={36} />
              <div className="flex-1">
                <Skeleton height={20} width="90%" className="mb-2" />
                <Skeleton height={16} width="60%" className="mb-1" />
                <Skeleton height={16} width="40%" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 19.59c-0.38 0.38-1.01 0.38-1.39 0l-3.83-3.83c-0.88 0.62-1.96 0.98-3.12 0.98-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5c0 1.16-0.36 2.24-0.98 3.12l3.83 3.83c0.38 0.38 0.38 1.01 0 1.39zM11.25 6.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">No videos found</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          No gaming videos found in this category. Try selecting a different category.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {videos.map((video) => {
        // Ensure all required properties exist for LikedVideoCard
        const processedVideo = {
          ...video,
          // For live videos, use liveViewers as views if views is not present
          views: video.views || video.liveViewers || 0,
          // Ensure other required properties have default values
          duration: video.duration || 0,
          publishedAt: video.publishedAt || new Date().toISOString(),
        }

        return (
          <LikedVideoCard
            key={video.id}
            video={processedVideo}
            className="flex-col"
            thumbnailClassName="md:w-full"
            Savetoplaylist="Save to playlist"
            share="Share"
            notInterested="Not interested"
            // addToQueue="Add to queue"
          />
        )
      })}
    </div>
  )
}

export default GamingVideoGrid
