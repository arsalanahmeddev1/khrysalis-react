import { useState, useEffect, useRef } from "react"
import { useInView } from "react-hook-inview"
import Skeleton from "react-loading-skeleton"
import ReactPlayer from "react-player"
import {
  FaThumbsUp,
  FaThumbsDown,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaComment,
  FaShare,
  FaEllipsisH,
} from "react-icons/fa"
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io"
import { BeatLoader } from "react-spinners"

const ReelsPage = ({ fetchShorts }) => {
  const [shorts, setShorts] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const containerRef = useRef(null)

  useEffect(() => {
    loadInitialShorts()
  }, [])

  const loadInitialShorts = async () => {
    try {
      setLoading(true)
      // If fetchShorts is provided as a prop, use it. Otherwise, use mock data
      const data = fetchShorts ? await fetchShorts(1) : getMockShorts()
      setShorts(data)
      setLoading(false)
      setPage(2)
    } catch (error) {
      console.error("Error loading shorts:", error)
      setLoading(false)
    }
  }

  const loadMoreShorts = async () => {
    try {
      // If fetchShorts is provided as a prop, use it. Otherwise, use mock data
      const data = fetchShorts ? await fetchShorts(page) : getMockShorts()

      if (data.length === 0) {
        setHasMore(false)
        return
      }

      setShorts((prevShorts) => [...prevShorts, ...data])
      setPage((prevPage) => prevPage + 1)
    } catch (error) {
      console.error("Error loading more shorts:", error)
    }
  }

  // Handle scroll to load more shorts
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      // Load more when user scrolls to 80% of the container
      if (scrollTop + clientHeight >= scrollHeight * 0.8 && !loading && hasMore) {
        loadMoreShorts()
      }
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [loading, hasMore])

  // Mock data function for demonstration
  const getMockShorts = () => {
    return [
      {
        id: Math.random().toString(36).substr(2, 9),
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-in-a-club-with-colorful-lights-32724-large.mp4",
        channel: {
          name: "DanceChannel",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          subscribers: "1.2M",
        },
        title: "Friday night vibes! 💃 #dancing #nightlife",
        likes: 124300,
        dislikes: 1240,
        comments: 8900,
        views: "1.2M",
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
        channel: {
          name: "NatureExplorer",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          subscribers: "567K",
        },
        title: "Spring is here! 🌼 #nature #spring #flowers",
        likes: 256700,
        dislikes: 2100,
        comments: 13400,
        views: "2.5M",
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
        channel: {
          name: "OceanVibes",
          avatar: "https://randomuser.me/api/portraits/women/65.jpg",
          subscribers: "3.8M",
        },
        title: "Ocean therapy 🌊 #beach #waves #relaxation",
        likes: 389100,
        dislikes: 3200,
        comments: 20100,
        views: "4.3M",
      },
    ]
  }

  return (
    <div
      ref={containerRef}
      className="shorts-container scrollbar-hidess"
      style={{
        height: "calc(100vh - 72px)",
        scrollbarWidth: "none" /* Firefox */,
      }}
    >

      {loading ? (
        <div className="h-full w-full flex flex-col">
          <ShortSkeleton />
        </div>
      ) : (
        <div className="h-full">
          {shorts.map((short) => (
            <Short key={short.id} short={short} />
          ))}
          {hasMore && (
            <div className="w-full flex justify-center items-center py-4">
              <BeatLoader color="#ffffff" size={10} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const Short = ({ short }) => {
  const [ref, inView] = useInView({
    threshold: 0.7,
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const playerRef = useRef(null)
  const manuallyPaused = useRef(false)

  useEffect(() => {
    if (inView) {
      // Only auto-play if it wasn't manually paused
      if (!isPlaying && !manuallyPaused.current) {
        setIsPlaying(true)
      }
    } else {
      setIsPlaying(false)
    }
  }, [inView])

  const handleVideoClick = () => {
    setIsPlaying((prev) => !prev)
    setShowControls(true)
    // Hide controls after 3 seconds
    setTimeout(() => {
      setShowControls(false)
    }, 3000)
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    setIsMuted((prev) => !prev)
  }

  const toggleLike = (e) => {
    e.stopPropagation()
    if (isDisliked) setIsDisliked(false)
    setIsLiked((prev) => !prev)
  }

  const toggleDislike = (e) => {
    e.stopPropagation()
    if (isLiked) setIsLiked(false)
    setIsDisliked((prev) => !prev)
  }

  const handleComment = (e) => {
    e.stopPropagation()
    // Implement comment functionality
    console.log("Comment clicked")
  }

  const handleShare = (e) => {
    e.stopPropagation()
    // Implement share functionality
    console.log("Share clicked")
  }

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M"
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K"
    }
    return count
  }

  const togglePlayPause = (e) => {
    e.stopPropagation()
    setIsPlaying((prev) => {
      manuallyPaused.current = !prev
      return !prev
    })
  }

  return (
    <div
      ref={ref}
      className="short-item"
      style={{ height: "calc(100vh - 72px)" }}
      onClick={handleVideoClick}
    >
      <div className="absolute inset-0 bg-black">
        <ReactPlayer
          ref={playerRef}
          url={short.videoUrl}
          playing={isPlaying}
          muted={isMuted}
          loop={true}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          playsinline={true}
          config={{
            file: {
              attributes: {
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              },
            },
          }}
        />
      </div>

      {/* Play/Pause button overlay */}
      {showControls && (
        <button
          className="playpause-btn"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
      )}

      {/* Large play button when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button
            className="text-white p-6 rounded-full bg-black/40"
            onClick={(e) => {
              e.stopPropagation()
              setIsPlaying(true)
              manuallyPaused.current = false
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" fill="white"></polygon>
            </svg>
          </button>
        </div>
      )}

      {/* Video info overlay - YouTube Shorts style */}
      <div className="shorts-overlay-wrapper">
        <div className="flex flex-col">
          <h3 className="shorts-title">{short.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={short.channel.avatar || "/placeholder.svg"}
                alt={short.channel.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 text-white font-medium text-sm">{short.channel.name}</span>
              <button className="ml-2 bg-white text-black text-xs font-medium px-3 py-1 rounded-full">Subscribe</button>
            </div>
            <div className="text-white text-xs">{short.views} views</div>
          </div>
        </div>
      </div>

      {/* Action buttons - YouTube Shorts style */}
      <div className="shorts-action-btns-wrapper">
        <button className="shorts-action-btns" onClick={toggleLike}>
          {isLiked ? <FaThumbsUp className="text-2xl text-white" /> : <FaRegThumbsUp className="text-2xl" />}
          <span className="text-xs mt-1">{formatCount(short.likes)}</span>
        </button>

        <button className="shorts-action-btns" onClick={toggleDislike}>
          {isDisliked ? <FaThumbsDown className="text-2xl text-white" /> : <FaRegThumbsDown className="text-2xl" />}
          <span className="text-xs mt-1">Dislike</span>
        </button>

        <button className="shorts-action-btns" onClick={handleComment}>
          <FaComment className="text-2xl" />
          <span className="text-xs mt-1">{formatCount(short.comments)}</span>
        </button>

        <button className="shorts-action-btns" onClick={handleShare}>
          <FaShare className="text-2xl" />
          <span className="text-xs mt-1">Share</span>
        </button>

        <button className="shorts-action-btns">
          <FaEllipsisH className="text-2xl" />
        </button>

        <div className="channel-avatar-wrapper">
          <img src={short.channel.avatar || "/placeholder.svg"} alt="Audio" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Video controls */}
      {showControls && (
        <button className="vol-mute-btn" onClick={toggleMute}>
          {isMuted ? <IoMdVolumeOff className="text-2xl" /> : <IoMdVolumeHigh className="text-2xl" />}
        </button>
      )}
    </div>
  )
}

const ShortSkeleton = () => {
  return (
    <div className="w-full relative snap-start snap-always bg-gray-900" style={{ height: "calc(100vh - 72px)" }}>
      <Skeleton height="100%" baseColor="#0f0f0f" highlightColor="#272727" />

      {/* Fake action buttons */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6">
        <Skeleton circle width={40} height={40} baseColor="#272727" highlightColor="#3a3a3a" />
        <Skeleton circle width={40} height={40} baseColor="#272727" highlightColor="#3a3a3a" />
        <Skeleton circle width={40} height={40} baseColor="#272727" highlightColor="#3a3a3a" />
        <Skeleton circle width={40} height={40} baseColor="#272727" highlightColor="#3a3a3a" />
        <Skeleton circle width={40} height={40} baseColor="#272727" highlightColor="#3a3a3a" />
      </div>

      {/* Fake video info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <Skeleton width="80%" height={20} baseColor="#272727" highlightColor="#3a3a3a" />
        <div className="flex items-center mt-2">
          <Skeleton circle width={32} height={32} baseColor="#272727" highlightColor="#3a3a3a" />
          <Skeleton width={100} height={16} className="ml-2" baseColor="#272727" highlightColor="#3a3a3a" />
          <Skeleton width={80} height={24} className="ml-2" baseColor="#272727" highlightColor="#3a3a3a" />
        </div>
      </div>
    </div>
  )
}


export default ReelsPage
