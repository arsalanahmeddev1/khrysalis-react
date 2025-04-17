import LikedVideoCard from "./LikedVideoCard"
// import NoSearchResults from "./NoSearchResults"

const VideoList = ({ videos, onRemoveVideo }) => {
  if (videos.length === 0) {
    return <div>No videos found</div>
  }
  return (
    <div className="video-list space-y-4">
      {videos.map((video) => (
        <LikedVideoCard
          removeFromLikedVideos="Remove from liked videos"
          Savetoplaylist="Save to playlist"
          share="Share"
          addToQueue="Add to queue"
          notInterested="Not interested"
          key={video.id}
          video={video}
          onRemove={() => onRemoveVideo(video.id)}
        />
      ))}
    </div>
  )
}

export default VideoList;
