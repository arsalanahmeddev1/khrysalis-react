import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ChannelHeader from "../components/channel/ChannelHeader"
import ChannelTabs from "../components/channel/ChannelTabs"
import VideoGrid from "../components/channel/VideoGrid"
import AboutTab from "../components/channel/AboutTab"
import PlaylistsTab from "../components/channel/PlaylistsTab"
import CommunityTab from "../components/channel/CommunityTab"
import { getChannelData } from "../channelData"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import Layout from "../components/Layouts/Layout"

const ChannelPage = () => {
  const { channelId } = useParams()
  const [channel, setChannel] = useState(null)
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("videos")
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    const loadChannelData = async () => {
      setLoading(true)
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      const data = getChannelData(channelId)
      setChannel(data.channelInfo)
      setVideos(data.videos)
      
      // Check if user is subscribed to this channel
      const subscribedChannels = JSON.parse(localStorage.getItem("subscribedChannels") || "[]")
      setIsSubscribed(subscribedChannels.includes(channelId))
      
      setLoading(false)
    }

    loadChannelData()
  }, [channelId])

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handleSubscribe = () => {
    const newSubscribedState = !isSubscribed
    setIsSubscribed(newSubscribedState)
    
    // Save subscription state to localStorage
    const subscribedChannels = JSON.parse(localStorage.getItem("subscribedChannels") || "[]")
    if (newSubscribedState) {
      if (!subscribedChannels.includes(channelId)) {
        subscribedChannels.push(channelId)
      }
    } else {
      const index = subscribedChannels.indexOf(channelId)
      if (index > -1) {
        subscribedChannels.splice(index, 1)
      }
    }
    localStorage.setItem("subscribedChannels", JSON.stringify(subscribedChannels))
  }

  return (
    <Layout title={channel?.name || "Channel"}>
      <div className="channel-page">
        {loading ? (
          <ChannelSkeleton />
        ) : (
          <>
            <ChannelHeader 
              channel={channel} 
              isSubscribed={isSubscribed} 
              onSubscribe={handleSubscribe} 
            />
            
            <ChannelTabs activeTab={activeTab} onTabChange={handleTabChange} />
            
            <div className="mt-4">
              {activeTab === "videos" && <VideoGrid videos={videos} />}
              {activeTab === "playlists" && <PlaylistsTab playlists={channel.playlists} />}
              {activeTab === "community" && <CommunityTab posts={channel.communityPosts} />}
              {activeTab === "about" && <AboutTab channel={channel} />}
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

const ChannelSkeleton = () => {
  return (
    <div>
      {/* Banner skeleton */}
      <Skeleton height={200} className="w-full rounded-none" />
      
      {/* Channel info skeleton */}
      <div className="flex flex-col md:flex-row md:items-center px-4 py-4 gap-4">
        <Skeleton circle width={80} height={80} />
        <div className="flex-1">
          <Skeleton height={28} width={200} className="mb-2" />
          <Skeleton height={20} width={120} />
        </div>
        <Skeleton height={40} width={120} />
      </div>
      
      {/* Tabs skeleton */}
      <Skeleton height={48} className="mb-6" />
      
      {/* Videos grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex flex-col">
            <Skeleton height={180} className="rounded-xl mb-2" />
            <Skeleton height={20} width="90%" className="mb-1" />
            <Skeleton height={16} width="60%" className="mb-1" />
            <Skeleton height={16} width="40%" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChannelPage
