import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import StudioLayout from "../../components/studio/StudioLayout"
import { useData } from "../../contexts/DataContext"
import Skeleton from "react-loading-skeleton"

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const { videos, currentChannel } = useData()

  // Channel stats
  const [stats, setStats] = useState({
    totalViews: 0,
    totalSubscribers: 0,
    totalVideos: 0,
    recentComments: 0,
    watchTime: 0,
  })

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false)

      // Calculate stats from videos
      if (currentChannel) {
        const channelVideos = videos.filter((video) => video.channelId === currentChannel.id)
        const totalViews = channelVideos.reduce((sum, video) => sum + video.views, 0)

        setStats({
          totalViews,
          totalSubscribers: Math.floor(totalViews * 0.1) || 0, // Simulate subscriber count
          totalVideos: channelVideos.length,
          recentComments: channelVideos.reduce((sum, video) => sum + video.comments, 0),
          watchTime: Math.floor(totalViews * 2.5), // Simulate watch time in minutes
        })
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [currentChannel, videos])

  // Get channel videos
  const channelVideos = currentChannel ? videos.filter((video) => video.channelId === currentChannel.id) : []

  // Get recent videos (last 5)
  const recentVideos = [...channelVideos].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5)

  // Get top performing videos (by views)
  const topVideos = [...channelVideos].sort((a, b) => b.views - a.views).slice(0, 5)

  return (
    <StudioLayout title="Dashboard">
      <div className="space-y-6">
        {/* Channel Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Channel Overview</h2>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <Skeleton height={24} width={100} className="mb-2" />
                  <Skeleton height={36} width={80} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Views</h3>
                <p className="text-2xl font-bold mt-1">{stats.totalViews.toLocaleString()}</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Subscribers</h3>
                <p className="text-2xl font-bold mt-1">{stats.totalSubscribers.toLocaleString()}</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Videos</h3>
                <p className="text-2xl font-bold mt-1">{stats.totalVideos.toLocaleString()}</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Watch Time (mins)</h3>
                <p className="text-2xl font-bold mt-1">{stats.watchTime.toLocaleString()}</p>
              </div>
            </div>
          )}
        </div>

        {/* Recent Videos */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Recent Videos</h2>
            <Link to="/studio/content" className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
              See all
            </Link>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton height={60} width={100} className="rounded-lg" />
                  <div className="flex-1">
                    <Skeleton height={20} width="60%" className="mb-2" />
                    <Skeleton height={16} width="40%" />
                  </div>
                  <Skeleton height={20} width={60} />
                </div>
              ))}
            </div>
          ) : recentVideos.length > 0 ? (
            <div className="space-y-4">
              {recentVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                >
                  <div className="flex-shrink-0 h-16 w-28 relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="h-full w-full object-cover rounded-lg"
                    />
                    {video.isShort && (
                      <span className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-1 rounded">
                        SHORT
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">{video.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(video.createdAt).toLocaleDateString()} • {video.views.toLocaleString()} views
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        video.visibility === "public"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : video.visibility === "private"
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {video.visibility.charAt(0).toUpperCase() + video.visibility.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No videos yet</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by creating a new video.</p>
              <div className="mt-6">
                <Link
                  to="/studio/upload/video"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Upload Video
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Top Performing Videos */}
        {!loading && topVideos.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Top Performing Videos</h2>
              <Link to="/studio/analytics" className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                See analytics
              </Link>
            </div>

            <div className="space-y-4">
              {topVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                >
                  <div className="flex-shrink-0 h-16 w-28 relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="h-full w-full object-cover rounded-lg"
                    />
                    {video.isShort && (
                      <span className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-1 rounded">
                        SHORT
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">{video.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(video.createdAt).toLocaleDateString()} • {video.views.toLocaleString()} views
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {video.views.toLocaleString()} views
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{video.likes.toLocaleString()} likes</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/studio/upload/video"
              className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <svg
                className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
              <span className="text-sm font-medium">Upload Video</span>
            </Link>

            <Link
              to="/studio/upload/short"
              className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <svg
                className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-medium">Create Short</span>
            </Link>

            <Link
              to="/studio/analytics"
              className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <svg
                className="h-8 w-8 text-green-600 dark:text-green-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="text-sm font-medium">View Analytics</span>
            </Link>

            <Link
              to="/studio/customization"
              className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <svg
                className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
              <span className="text-sm font-medium">Customize Channel</span>
            </Link>
          </div>
        </div>
      </div>
    </StudioLayout>
  )
}

export default Dashboard
