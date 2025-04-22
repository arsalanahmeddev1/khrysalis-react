import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import StudioLayout from "../../components/studio/StudioLayout"
import Skeleton from "react-loading-skeleton"
import { useData } from "../../contexts/DataContext"

const Content = () => {
  const [loading, setLoading] = useState(true)
  const [filterType, setFilterType] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [searchQuery, setSearchQuery] = useState("")
  const { videos, deleteVideo, currentChannel } = useData()
  const [selectedVideos, setSelectedVideos] = useState([])

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedVideos(videos.map((video) => video.id))
    } else {
      setSelectedVideos([])
    }
  }

  const handleSelectVideo = (id) => {
    if (selectedVideos.includes(id)) {
      setSelectedVideos(selectedVideos.filter((videoId) => videoId !== id))
    } else {
      setSelectedVideos([...selectedVideos, id])
    }
  }

  const handleDelete = (id) => {
    deleteVideo(id)
    setSelectedVideos(selectedVideos.filter((videoId) => videoId !== id))
  }

  // Filter videos by current channel
  const channelVideos = videos.filter((video) => video.channelId === currentChannel?.id)

  const filteredVideos = channelVideos.filter((video) => {
    // Filter by type
    if (filterType === "videos" && video.isShort) return false
    if (filterType === "shorts" && !video.isShort) return false

    // Filter by search query
    if (searchQuery && !video.title.toLowerCase().includes(searchQuery.toLowerCase())) return false

    return true
  })

  // Sort videos
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.createdAt) - new Date(a.createdAt)
    } else if (sortBy === "views") {
      return b.views - a.views
    } else if (sortBy === "comments") {
      return b.comments - a.comments
    } else if (sortBy === "likes") {
      return b.likes - a.likes
    }
    return 0
  })

  return (
    <StudioLayout title="Content">
      <div className="space-y-6">
        {/* Content Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">Channel Content</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">({channelVideos.length} videos)</span>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to="/studio/upload/video"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition"
            >
              Upload
            </Link>

            <Link
              to="/studio/upload/short"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              Create Short
            </Link>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
              >
                <option value="all">All content</option>
                <option value="videos">Videos</option>
                <option value="shorts">Shorts</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
              >
                <option value="date">Sort by date</option>
                <option value="views">Sort by views</option>
                <option value="comments">Sort by comments</option>
                <option value="likes">Sort by likes</option>
              </select>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-4">
              <Skeleton height={40} className="mb-4" />
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4 mb-4">
                  <Skeleton circle width={20} height={20} />
                  <Skeleton height={60} width={100} className="rounded-lg" />
                  <Skeleton height={20} width="40%" />
                  <Skeleton height={20} width={60} />
                  <Skeleton height={20} width={80} />
                  <Skeleton height={20} width={80} />
                  <Skeleton height={20} width={60} />
                  <Skeleton height={20} width={60} />
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      <input
                        type="checkbox"
                        checked={selectedVideos.length === sortedVideos.length && sortedVideos.length > 0}
                        onChange={handleSelectAll}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-700 rounded"
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Video
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Visibility
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Restrictions
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Views
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Comments
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Likes
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {sortedVideos.length > 0 ? (
                    sortedVideos.map((video) => (
                      <tr key={video.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="checkbox"
                            checked={selectedVideos.includes(video.id)}
                            onChange={() => handleSelectVideo(video.id)}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-700 rounded"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
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
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{video.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
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
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {video.restrictions || "None"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(video.createdAt).toLocaleDateString()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {video.views.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {video.comments.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {video.likes.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button
                              className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                              onClick={() => {
                                /* Edit functionality */
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                              onClick={() => handleDelete(video.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="px-6 py-10 text-center text-sm text-gray-500 dark:text-gray-400">
                        No videos found. Try adjusting your filters or upload a new video.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </StudioLayout>
  )
}

export default Content
