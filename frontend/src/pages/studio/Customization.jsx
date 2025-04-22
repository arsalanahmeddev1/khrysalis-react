import { useState, useEffect, useRef } from "react"
import StudioLayout from "../../components/studio/StudioLayout"
import Skeleton from "react-loading-skeleton"

const Customization = () => {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("layout")
  const [channelData, setChannelData] = useState({
    name: "Your Channel",
    description: "Share your story with the world",
    profilePicture: "/placeholder.svg",
    banner: "/placeholder.svg",
    featuredVideo: null,
    featuredVideoForReturning: null,
    showRelatedChannels: true,
    showUnsubscribedIndicator: true,
  })
  const profilePictureInputRef = useRef(null)
  const bannerInputRef = useRef(null)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Create preview URL
    const imageUrl = URL.createObjectURL(file)
    setChannelData({
      ...channelData,
      profilePicture: imageUrl,
    })
  }

  const handleBannerChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Create preview URL
    const imageUrl = URL.createObjectURL(file)
    setChannelData({
      ...channelData,
      banner: imageUrl,
    })
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setChannelData({
      ...channelData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSave = () => {
    // Simulate saving
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <StudioLayout title="Customization">
      <div className="space-y-6">
        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-4 px-4" aria-label="Tabs">
              <button
                onClick={() => setActiveTab("layout")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "layout"
                    ? "border-purple-500 text-purple-600 dark:text-purple-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Layout
              </button>
              <button
                onClick={() => setActiveTab("branding")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "branding"
                    ? "border-purple-500 text-purple-600 dark:text-purple-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Branding
              </button>
              <button
                onClick={() => setActiveTab("basic_info")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "basic_info"
                    ? "border-purple-500 text-purple-600 dark:text-purple-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Basic info
              </button>
            </nav>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="space-y-6">
                <Skeleton height={40} width="50%" className="mb-4" />
                <Skeleton height={100} className="mb-4" />
                <Skeleton height={40} width="50%" className="mb-4" />
                <Skeleton height={100} className="mb-4" />
              </div>
            ) : (
              <>
                {activeTab === "layout" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold mb-2">Video spotlight</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Add a video to the top of your channel homepage
                      </p>

                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">Featured video</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            This video will be shown to users who aren't subscribed to your channel
                          </p>
                        </div>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition">
                          {channelData.featuredVideo ? "CHANGE" : "ADD"}
                        </button>
                      </div>

                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex justify-between items-center mt-4">
                        <div>
                          <h3 className="font-medium">Featured video for returning subscribers</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            This video will be shown to your subscribers when they visit your channel
                          </p>
                        </div>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition">
                          {channelData.featuredVideoForReturning ? "CHANGE" : "ADD"}
                        </button>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold mb-2">Channel recommendations</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Choose which content is promoted on your channel
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="showRelatedChannels"
                            name="showRelatedChannels"
                            type="checkbox"
                            checked={channelData.showRelatedChannels}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-700 rounded"
                          />
                          <label
                            htmlFor="showRelatedChannels"
                            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                          >
                            Show related channels on your channel page
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="showUnsubscribedIndicator"
                            name="showUnsubscribedIndicator"
                            type="checkbox"
                            checked={channelData.showUnsubscribedIndicator}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-700 rounded"
                          />
                          <label
                            htmlFor="showUnsubscribedIndicator"
                            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                          >
                            Show unsubscribed indicator to viewers who aren't subscribed to your channel
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "branding" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold mb-2">Profile picture</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        This will appear next to your videos and channel
                      </p>

                      <div className="flex items-center space-x-4">
                        <img
                          src={channelData.profilePicture || "/placeholder.svg"}
                          alt="Profile"
                          className="h-24 w-24 rounded-full object-cover"
                        />
                        <div>
                          <button
                            onClick={() => profilePictureInputRef.current.click()}
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition"
                          >
                            CHANGE
                          </button>
                          <input
                            ref={profilePictureInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                            className="hidden"
                          />
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Recommended: 800 x 800 pixels</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold mb-2">Banner image</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        This will appear at the top of your channel
                      </p>

                      <div className="space-y-4">
                        <div className="relative h-40 rounded-lg overflow-hidden">
                          <img
                            src={channelData.banner || "/placeholder.svg"}
                            alt="Banner"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition">
                            <button
                              onClick={() => bannerInputRef.current.click()}
                              className="px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition"
                            >
                              CHANGE
                            </button>
                          </div>
                        </div>
                        <input
                          ref={bannerInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleBannerChange}
                          className="hidden"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400">Recommended: 2048 x 1152 pixels</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "basic_info" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold mb-2">Channel name</h2>
                      <input
                        type="text"
                        name="name"
                        value={channelData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
                        placeholder="Enter your channel name"
                      />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold mb-2">Description</h2>
                      <textarea
                        name="description"
                        value={channelData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
                        placeholder="Tell viewers about your channel"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Your channel description appears in the About tab of your channel and in search results.
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Saving...
                      </span>
                    ) : (
                      "SAVE"
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </StudioLayout>
  )
}

export default Customization
