import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import LikedVideoCard from "../LikedVideoCard"

const RecommendedVideos = ({ loading, videos }) => {
  if (loading) {
    return (
      <div>
        <h3 className="text-lg font-medium mb-3">Recommended videos</h3>
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <Skeleton height={94} width={168} className="rounded-lg" />
            <div className="flex-1">
              <Skeleton height={16} width="90%" className="mb-1" />
              <Skeleton height={14} width="60%" className="mb-1" />
              <Skeleton height={14} width="40%" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Recommended videos</h3>
      <div className="space-y-3">
        {videos.map((video) => (
          <LikedVideoCard
            key={video.id}
            video={video}
            className="flex"
            thumbnailClassName="md:w-[168px]"
            Savetoplaylist="Save to playlist"
            share="Share"
            notInterested="Not interested"
            // addToQueue="Add to queue"
          />
        ))}
      </div>
    </div>
  )
}

export default RecommendedVideos
