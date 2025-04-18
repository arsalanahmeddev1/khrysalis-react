import { FaTrash } from "react-icons/fa"
import LikedVideoCard from "./LikedVideoCard"

const HistoryContent = ({ groupedVideos, onRemoveVideo, searchQuery }) => {
  return (
    <>

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
                <LikedVideoCard
                  key={video.id}
                  video={{
                    ...video,
                    channelName: video.channel,
                    publishedAt: video.uploadTime,
                    watchedTime: video.watchedAt, // Add watched time for history display
                  }}
                  onRemove={() => onRemoveVideo(video.id)}
                  removeFromLikedVideos="Remove from history"
                  // Savetoplaylist="Save to playlist"
                  // share="Share"
                  // addToQueue="Add to queue"
                  // notInterested="Not interested"
                  isHistoryItem={true} // Flag to indicate this is a history item
                />
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
            <button className="mt-4 px-4 py-2 bg-[#272727] rounded-full text-sm hover:bg-[#3a3a3a]">
              Clear search
            </button>
          )}
        </div>
      )}
    </>
  )
}
export default HistoryContent
