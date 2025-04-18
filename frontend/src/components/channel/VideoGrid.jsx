import LikedVideoCard from "../LikedVideoCard"

const VideoGrid = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">No videos yet</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">This channel hasn't uploaded any videos yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.map((video) => (
        <LikedVideoCard
          key={video.id}
          video={video}
          className="flex-col"
          thumbnailClassName="w-full"
          Savetoplaylist="Save to playlist"
          share="Share"
          notInterested="Not interested"
          addToQueue="Add to queue"
        />
      ))}
    </div>
  )
}

export default VideoGrid
