"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-hook-inview"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import ReactPlayer from "react-player"
import { FaHeart, FaRegHeart, FaComment, FaShare } from "react-icons/fa"
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io"
import InfiniteScroll from "react-infinite-scroll-component"
import { BeatLoader } from "react-spinners"

const ReelsPage = ({ fetchReels }) => {
  const [reels, setReels] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    loadInitialReels()
  }, [])

  const loadInitialReels = async () => {
    try {
      setLoading(true)
      // If fetchReels is provided as a prop, use it. Otherwise, use mock data
      const data = fetchReels ? await fetchReels(1) : getMockReels()
      setReels(data)
      setLoading(false)
      setPage(2)
    } catch (error) {
      console.error("Error loading reels:", error)
      setLoading(false)
    }
  }

  const loadMoreReels = async () => {
    try {
      // If fetchReels is provided as a prop, use it. Otherwise, use mock data
      const data = fetchReels ? await fetchReels(page) : getMockReels()

      if (data.length === 0) {
        setHasMore(false)
        return
      }

      setReels((prevReels) => [...prevReels, ...data])
      setPage((prevPage) => prevPage + 1)
    } catch (error) {
      console.error("Error loading more reels:", error)
    }
  }

  // Mock data function for demonstration
  const getMockReels = () => {
    return [
      {
        id: Math.random().toString(36).substr(2, 9),
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-in-a-club-with-colorful-lights-32724-large.mp4",
        user: {
          username: "dancequeen",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        caption: "Friday night vibes! 💃 #dancing #nightlife",
        likes: 1243,
        comments: 89,
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
        user: {
          username: "naturelover",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        caption: "Spring is here! 🌼 #nature #spring #flowers",
        likes: 2567,
        comments: 134,
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
        user: {
          username: "oceanvibes",
          avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        caption: "Ocean therapy 🌊 #beach #waves #relaxation",
        likes: 3891,
        comments: 201,
      },
    ]
  }

  return (
    <div
      className="reels-container w-full bg-black dark:bg-gray-900 overflow-hidden max-w-[500px] mx-auto"
      style={{ height: "calc(100vh - 72px)" }}
    >
      {loading ? (
        <div className="h-full w-full flex flex-col">
          <ReelSkeleton />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={reels.length}
          next={loadMoreReels}
          hasMore={hasMore}
          scrollableTarget="scrollableDiv"
          loader={
            <div className="w-full flex justify-center items-center py-4">
              <BeatLoader color="#ffffff" size={10} />
            </div>
          }
          endMessage={<p className="text-center text-white dark:text-gray-300 py-4">You've seen all reels!</p>}
          className="h-full snap-y snap-mandatory overflow-y-auto"
          id="scrollableDiv"
        >
          {reels.map((reel) => (
            <Reel key={reel.id} reel={reel} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  )
}

const Reel = ({ reel }) => {
  const [ref, inView] = useInView({
    threshold: 0.7,
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const playerRef = useRef(null)

  useEffect(() => {
    if (inView) {
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  }, [inView])

  const handleVideoClick = () => {
    setShowControls((prev) => !prev)
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    setIsMuted((prev) => !prev)
  }

  const toggleLike = (e) => {
    e.stopPropagation()
    setIsLiked((prev) => !prev)
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

  return (
    <div
      ref={ref}
      className="reel-item w-full relative snap-start snap-always"
      style={{ height: "calc(100vh - 72px)" }}
      onClick={handleVideoClick}
    >
      <div className="absolute inset-0 bg-black">
        <ReactPlayer
          ref={playerRef}
          url={reel.videoUrl}
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

      {/* Overlay for user info and caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <div className="flex items-center mb-2">
          <img
            src={reel.user.avatar || "/placeholder.svg"}
            alt={reel.user.username}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <span className="ml-2 text-white font-semibold">{reel.user.username}</span>
        </div>
        <p className="text-white text-sm">{reel.caption}</p>
      </div>

      {/* Action buttons */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6">
        <button className="text-white flex flex-col items-center" onClick={toggleLike}>
          {isLiked ? <FaHeart className="text-3xl text-red-500" /> : <FaRegHeart className="text-3xl" />}
          <span className="text-xs mt-1">{formatCount(reel.likes)}</span>
        </button>

        <button className="text-white flex flex-col items-center" onClick={handleComment}>
          <FaComment className="text-3xl" />
          <span className="text-xs mt-1">{formatCount(reel.comments)}</span>
        </button>

        <button className="text-white flex flex-col items-center" onClick={handleShare}>
          <FaShare className="text-3xl" />
          <span className="text-xs mt-1">Share</span>
        </button>
      </div>

      {/* Video controls */}
      {showControls && (
        <button className="absolute bottom-24 left-4 text-white p-2 rounded-full bg-black/50" onClick={toggleMute}>
          {isMuted ? <IoMdVolumeOff className="text-2xl" /> : <IoMdVolumeHigh className="text-2xl" />}
        </button>
      )}
    </div>
  )
}

const ReelSkeleton = () => {
  return (
    <div className="w-full relative snap-start snap-always bg-gray-900" style={{ height: "calc(100vh - 72px)" }}>
      <Skeleton height="100%" baseColor="#202020" highlightColor="#444" />

      {/* Fake action buttons */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6">
        <Skeleton circle width={48} height={48} baseColor="#202020" highlightColor="#444" />
        <Skeleton circle width={48} height={48} baseColor="#202020" highlightColor="#444" />
        <Skeleton circle width={48} height={48} baseColor="#202020" highlightColor="#444" />
      </div>

      {/* Fake user info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center mb-2">
          <Skeleton circle width={40} height={40} baseColor="#202020" highlightColor="#444" />
          <Skeleton width={100} height={20} className="ml-2" baseColor="#202020" highlightColor="#444" />
        </div>
        <Skeleton width={250} height={15} count={2} baseColor="#202020" highlightColor="#444" />
      </div>
    </div>
  )
}

export default ReelsPage
