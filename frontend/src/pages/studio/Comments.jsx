import { useState, useEffect } from "react"
import StudioLayout from "../../components/studio/StudioLayout"
import Skeleton from "react-loading-skeleton"

const Comments = () => {
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [selectedComments, setSelectedComments] = useState([])
  const [activeTab, setActiveTab] = useState("published")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setComments([
        {
          id: 1,
          author: {
            name: "Alex Johnson",
            avatar: "/placeholder.svg",
          },
          text: "This video was super helpful! I've been trying to understand React hooks for weeks and your explanation finally made it click.",
          video: "How to Build a YouTube Clone with React",
          date: "2023-04-15T14:32:00",
          likes: 12,
          isHearted: true,
          isPinned: false,
        },
        {
          id: 2,
          author: {
            name: "Sarah Miller",
            avatar: "/placeholder.svg",
          },
          text: "Great content as always! Would love to see a follow-up video on advanced state management techniques.",
          video: "How to Build a YouTube Clone with React",
          date: "2023-04-14T09:15:00",
          likes: 8,
          isHearted: false,
          isPinned: true,
        },
        {
          id: 3,
          author: {
            name: "Michael Chen",
            avatar: "/placeholder.svg",
          },
          text: "I disagree with your take on Redux. Context API isn't always the best solution for complex state management.",
          video: "Top 10 Web Development Trends in 2023",
          date: "2023-04-10T16:45:00",
          likes: 3,
          isHearted: false,
          isPinned: false,
        },
        {
          id: 4,
          author: {
            name: "Emily Rodriguez",
            avatar: "/placeholder.svg",
          },
          text: "Your explanation of Tailwind CSS was spot on! I'm converting all my projects now.",
          video: "Top 10 Web Development Trends in 2023",
          date: "2023-04-09T11:22:00",
          likes: 15,
          isHearted: true,
          isPinned: false,
        },
        {
          id: 5,
          author: {
            name: "David Kim",
            avatar: "/placeholder.svg",
          },
          text: "First! Love your videos, keep up the great work!",
          video: "JavaScript Tips and Tricks for Beginners",
          date: "2023-03-22T08:05:00",
          likes: 2,
          isHearted: false,
          isPinned: false,
        },
      ])
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedComments(comments.map((comment) => comment.id))
    } else {
      setSelectedComments([])
    }
  }

  const handleSelectComment = (id) => {
    if (selectedComments.includes(id)) {
      setSelectedComments(selectedComments.filter((commentId) => commentId !== id))
    } else {
      setSelectedComments([...selectedComments, id])
    }
  }

  const handleHeartComment = (id) => {
    setComments(
      comments.map((comment) => (comment.id === id ? { ...comment, isHearted: !comment.isHearted } : comment)),
    )
  }

  const handlePinComment = (id) => {
    setComments(comments.map((comment) => (comment.id === id ? { ...comment, isPinned: !comment.isPinned } : comment)))
  }

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id))
    setSelectedComments(selectedComments.filter((commentId) => commentId !== id))
  }

  const filteredComments = comments.filter((comment) => {
    // Filter by search query
    if (searchQuery && !comment.text.toLowerCase().includes(searchQuery.toLowerCase())) return false

    return true
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <StudioLayout title="Comments">
      <div className="space-y-6">
        {/* Comments Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">Channel Comments</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">({comments.length} comments)</span>
          </div>
        </div>

        {/* Tabs and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveTab("published")}
                className={`px-4 py-2 rounded-md ${
                  activeTab === "published"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Published
              </button>
              <button
                onClick={() => setActiveTab("held_for_review")}
                className={`px-4 py-2 rounded-md ${
                  activeTab === "held_for_review"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Held for review
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search comments..."
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

        {/* Comments List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-4 space-y-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex space-x-4">
                  <Skeleton circle width={40} height={40} />
                  <div className="flex-1">
                    <Skeleton height={20} width={120} className="mb-2" />
                    <Skeleton height={16} count={2} className="mb-2" />
                    <Skeleton height={12} width={180} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedComments.length === comments.length && comments.length > 0}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-700 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    {selectedComments.length > 0 ? `${selectedComments.length} selected` : "Select all"}
                  </span>

                  {selectedComments.length > 0 && (
                    <div className="ml-4 flex space-x-2">
                      <button className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                        Heart
                      </button>
                      <button className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                        Pin
                      </button>
                      <button className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {filteredComments.length > 0 ? (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredComments.map((comment) => (
                    <div key={comment.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="flex items-start space-x-4">
                        <input
                          type="checkbox"
                          checked={selectedComments.includes(comment.id)}
                          onChange={() => handleSelectComment(comment.id)}
                          className="h-4 w-4 mt-1 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-700 rounded"
                        />

                        <img
                          src={comment.author.avatar || "/placeholder.svg"}
                          alt={comment.author.name}
                          className="h-10 w-10 rounded-full"
                        />

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-1">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">{comment.author.name}</h3>
                            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                              {formatDate(comment.date)}
                            </span>
                            {comment.isPinned && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                Pinned
                              </span>
                            )}
                          </div>

                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{comment.text}</p>

                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <span>On: {comment.video}</span>
                            <span className="mx-2">•</span>
                            <span>{comment.likes} likes</span>
                            {comment.isHearted && (
                              <>
                                <span className="mx-2">•</span>
                                <span className="flex items-center text-red-500">
                                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                  </svg>
                                  Hearted
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleHeartComment(comment.id)}
                            className={`p-1 rounded-full ${
                              comment.isHearted
                                ? "text-red-500 hover:text-red-700 dark:hover:text-red-300"
                                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            }`}
                          >
                            <svg
                              className="h-5 w-5"
                              fill={comment.isHearted ? "currentColor" : "none"}
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={() => handlePinComment(comment.id)}
                            className={`p-1 rounded-full ${
                              comment.isPinned
                                ? "text-blue-500 hover:text-blue-700 dark:hover:text-blue-300"
                                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            }`}
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={() => handleDeleteComment(comment.id)}
                            className="p-1 rounded-full text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-10 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No comments found</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {searchQuery ? "Try adjusting your search query." : "You don't have any comments yet."}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </StudioLayout>
  )
}

export default Comments
