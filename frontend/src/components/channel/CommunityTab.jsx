import { formatTimeAgo } from "../../utils/formatters"

const CommunityTab = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">No community posts yet</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">This channel hasn't shared any community posts yet.</p>
      </div>
    )
  }

  return (
    <div className="community-tab py-4 max-w-3xl mx-auto">
      {posts.map((post) => (
        <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6 overflow-hidden">
          <div className="p-4">
            <div className="flex items-center mb-3">
              <img
                src={post.channelAvatar || "/placeholder.svg"}
                alt={post.channelName}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-medium">{post.channelName}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{formatTimeAgo(post.publishedAt)}</div>
              </div>
            </div>

            <div className="text-gray-800 dark:text-gray-200 mb-3 whitespace-pre-line">{post.content}</div>

            {post.image && (
              <div className="rounded-lg overflow-hidden mb-3">
                <img src={post.image || "/placeholder.svg"} alt="Post attachment" className="w-full h-auto" />
              </div>
            )}

            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-4">
              <button className="flex items-center mr-4 hover:text-gray-900 dark:hover:text-gray-200">
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                </svg>
                {post.likes.toLocaleString()}
              </button>

              <button className="flex items-center mr-4 hover:text-gray-900 dark:hover:text-gray-200">
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
                </svg>
                {post.dislikes.toLocaleString()}
              </button>

              <button className="flex items-center hover:text-gray-900 dark:hover:text-gray-200">
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                </svg>
                {post.comments.toLocaleString()}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommunityTab
