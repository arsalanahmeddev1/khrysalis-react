import { useState } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { formatTimeAgo } from "../../utils/formatters"
import { Link } from "react-router-dom"

const CommentsSection = ({ loading, videoData }) => {
  const [commentText, setCommentText] = useState("")
  
  const handleCommentChange = (e) => {
    setCommentText(e.target.value)
  }
  
  const handleSubmitComment = (e) => {
    e.preventDefault()
    // In a real app, you would submit the comment to an API
    console.log("Submitting comment:", commentText)
    setCommentText("")
  }
  
  if (loading) {
    return (
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Skeleton width={120} height={24} />
          <Skeleton width={80} height={24} />
        </div>
        
        <div className="flex gap-3 mb-6">
          <Skeleton circle width={40} height={40} />
          <Skeleton height={80} width="100%" />
        </div>
        
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex gap-3 mb-4">
            <Skeleton circle width={40} height={40} />
            <div className="flex-1">
              <Skeleton width={120} height={16} className="mb-1" />
              <Skeleton width="90%" height={16} className="mb-1" />
              <Skeleton width="60%" height={16} />
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-medium">{videoData.commentCount.toLocaleString()} Comments</h3>
        <button className="flex items-center gap-1 text-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path>
          </svg>
          <span>Sort by</span>
        </button>
      </div>
      
      {/* Comment input */}
      <div className="flex gap-3 mb-6">
        <img 
          src="/user-avatar.jpg" 
          alt="Your avatar" 
          className="w-10 h-10 rounded-full"
          onError={(e) => {
            e.target.src = "https://ui-avatars.com/api/?name=You&background=random"
          }}
        />
        <form className="flex-1" onSubmit={handleSubmitComment}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={handleCommentChange}
            className="w-full border-b border-gray-300 dark:border-gray-700 bg-transparent py-1 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button 
              type="button" 
              className="px-3 py-1.5 text-sm font-medium rounded-full"
              onClick={() => setCommentText("")}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                commentText.trim() 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
              disabled={!commentText.trim()}
            >
              Comment
            </button>
          </div>
        </form>
      </div>
      
      {/* Comments list */}
      {videoData.comments.map((comment) => (
        <div key={comment.id} className="flex gap-3 mb-4">
          <Link to={`/channel/${comment.authorChannelId}`} className="flex-shrink-0">
            <img 
              src={comment.authorProfileImageUrl || "/placeholder.svg"} 
              alt={comment.authorDisplayName} 
              className="w-10 h-10 rounded-full"
            />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <Link 
                to={`/channel/${comment.authorChannelId}`} 
                className="font-medium text-sm"
              >
                {comment.authorDisplayName}
              </Link>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {formatTimeAgo(comment.publishedAt)}
              </span>
            </div>
            <p className="text-sm mt-1">{comment.textDisplay}</p>
            <div className="flex items-center gap-3 mt-1">
              <button className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                </svg>
                <span>{comment.likeCount}</span>
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
                </svg>
              </button>
              <button className="text-sm text-gray-600 dark:text-gray-400">Reply</button>
            </div>
          </div>
        </div>
      ))}
      
      <button className="text-blue-600 dark:text-blue-400 font-medium">
        Show more comments
      </button>
    </div>
  )
}

export default CommentsSection
