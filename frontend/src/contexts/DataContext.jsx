import { createContext, useContext, useState, useEffect } from "react";
import { getFromStorage, saveToStorage, STORAGE_KEYS } from "../utils/localStorage";

// Default channel structure
const DEFAULT_CHANNEL = {
  id: null,
  name: "",
  description: "",
  profilePicture: null,
  banner: null,
  createdAt: null,
}

// Create context
const DataContext = createContext()

export const DataProvider = ({ children }) => {
  // Channels state
  const [channels, setChannels] = useState([])
  const [currentChannel, setCurrentChannel] = useState(null)

  // Videos state
  const [videos, setVideos] = useState([])

  // User settings
  const [userSettings, setUserSettings] = useState({
    theme: "light",
    notifications: true,
  })

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedChannels = getFromStorage(STORAGE_KEYS.CHANNELS, [])
    const storedVideos = getFromStorage(STORAGE_KEYS.VIDEOS, [])
    const storedCurrentChannel = getFromStorage(STORAGE_KEYS.CURRENT_CHANNEL, null)
    const storedUserSettings = getFromStorage(STORAGE_KEYS.USER_SETTINGS, {
      theme: "light",
      notifications: true,
    })

    setChannels(storedChannels)
    setVideos(storedVideos)
    setCurrentChannel(storedCurrentChannel)
    setUserSettings(storedUserSettings)
  }, [])

  // Save channels to localStorage whenever they change
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.CHANNELS, channels)
  }, [channels])

  // Save videos to localStorage whenever they change
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.VIDEOS, videos)
  }, [videos])

  // Save current channel to localStorage whenever it changes
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.CURRENT_CHANNEL, currentChannel)
  }, [currentChannel])

  // Save user settings to localStorage whenever they change
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.USER_SETTINGS, userSettings)
  }, [userSettings])

  // Channel management functions
  const createChannel = (channelData) => {
    const newChannel = {
      ...DEFAULT_CHANNEL,
      ...channelData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }

    setChannels((prevChannels) => [...prevChannels, newChannel])
    setCurrentChannel(newChannel)
    return newChannel
  }

  const updateChannel = (channelId, channelData) => {
    setChannels((prevChannels) =>
      prevChannels.map((channel) =>
        channel.id === channelId ? { ...channel, ...channelData, updatedAt: new Date().toISOString() } : channel,
      ),
    )

    if (currentChannel?.id === channelId) {
      setCurrentChannel((prev) => ({ ...prev, ...channelData, updatedAt: new Date().toISOString() }))
    }
  }

  const deleteChannel = (channelId) => {
    setChannels((prevChannels) => prevChannels.filter((channel) => channel.id !== channelId))

    if (currentChannel?.id === channelId) {
      const remainingChannels = channels.filter((channel) => channel.id !== channelId)
      setCurrentChannel(remainingChannels.length > 0 ? remainingChannels[0] : null)
    }

    // Also delete all videos associated with this channel
    setVideos((prevVideos) => prevVideos.filter((video) => video.channelId !== channelId))
  }

  // Video management functions
  const addVideo = (videoData) => {
    const newVideo = {
      ...videoData,
      id: Date.now().toString(),
      channelId: currentChannel?.id,
      createdAt: new Date().toISOString(),
      views: 0,
      likes: 0,
      comments: 0,
    }

    setVideos((prevVideos) => [...prevVideos, newVideo])
    return newVideo
  }

  const updateVideo = (videoId, videoData) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId ? { ...video, ...videoData, updatedAt: new Date().toISOString() } : video,
      ),
    )
  }

  const deleteVideo = (videoId) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId))
  }

  // User settings functions
  const updateUserSettings = (newSettings) => {
    setUserSettings((prev) => ({ ...prev, ...newSettings }))
  }

  // Check if user has any channels
  const hasChannels = channels.length > 0

  // Context value
  const value = {
    // Channel data and functions
    channels,
    currentChannel,
    setCurrentChannel,
    createChannel,
    updateChannel,
    deleteChannel,
    hasChannels,

    // Video data and functions
    videos,
    addVideo,
    updateVideo,
    deleteVideo,

    // User settings
    userSettings,
    updateUserSettings,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

// Custom hook to use the data context
export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}
