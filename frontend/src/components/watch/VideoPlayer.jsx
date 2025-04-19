import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const VideoPlayer = ({ loading, videoData }) => {
  if (loading) {
    return (
      <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
        <Skeleton height="100%" baseColor="#202020" highlightColor="#444" />
      </div>
    )
  }

  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src={`https://www.Khrysalis.com/embed/${videoData.id}?autoplay=1`}
        title={videoData.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoPlayer
