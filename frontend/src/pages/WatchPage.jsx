"use client"

import { useState, useEffect } from "react"
import VideoPlayer from "../components/watch/VideoPlayer"
import VideoMetadata from "../components/watch/VideoMetadata"
import ChannelInfo from "../components/watch/ChannelInfo"
import VideoDescription from "../components/watch/VideoDescription"
import CommentsSection from "../components/watch/CommentsSection"
import RecommendedVideos from "../components/watch/RecommendedVideos"
import { getVideoData, getRecommendedVideos } from "../videoData"
import Layout from "../components/Layouts/Layout"


const WatchPage = () => {

  const [loading, setLoading] = useState(true)
  const [videoData, setVideoData] = useState(null)
  const [recommendedVideos, setRecommendedVideos] = useState([])

  // Simulate fetching video data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Get video data from mock API
      const videoId = new URLSearchParams(window.location.search).get("v") || "dQw4w9WgXcQ"
      const data = getVideoData(videoId)
      const recommended = getRecommendedVideos(videoId)

      setVideoData(data)
      setRecommendedVideos(recommended)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 py-4 max-w-[1800px]">
        {/* <Layout> */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main content - Video and info */}
            <div className="flex-1">
              {/* Video Player */}
              <VideoPlayer loading={loading} videoData={videoData} />

              {/* Video Metadata */}
              <VideoMetadata loading={loading} videoData={videoData} />

              {/* Channel Info */}
              <ChannelInfo loading={loading} videoData={videoData} />

              {/* Video Description */}
              <VideoDescription loading={loading} videoData={videoData} />

              {/* Comments Section */}
              <CommentsSection loading={loading} videoData={videoData} />
            </div>

            {/* Sidebar - Recommended videos */}
            <div className="w-full lg:w-[400px]">
              <RecommendedVideos loading={loading} videos={recommendedVideos} />
            </div>
          </div>
        {/* </Layout> */}
      </div>
    </div>
  )
}

export default WatchPage
