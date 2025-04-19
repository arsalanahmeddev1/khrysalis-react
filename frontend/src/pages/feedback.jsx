import { useState, useRef } from "react"
import Layout from "../components/Layouts/Layout"
import { FaSmile, FaMeh, FaFrown, FaPaperclip, FaTimes } from "react-icons/fa"

const FeedbackPage = () => {
  const [selectedMood, setSelectedMood] = useState(null)
  const [feedbackText, setFeedbackText] = useState("")
  const [includeScreenshot, setIncludeScreenshot] = useState(false)
  const [files, setFiles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef(null)

  const moods = [
    { id: "happy", icon: <FaSmile className="text-2xl" />, label: "Satisfied", emoji: "😄" },
    { id: "neutral", icon: <FaMeh className="text-2xl" />, label: "Neutral", emoji: "😐" },
    { id: "sad", icon: <FaFrown className="text-2xl" />, label: "Dissatisfied", emoji: "😞" },
  ]

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        file: file,
      }))
      setFiles([...files, ...newFiles])
    }
  }

  const removeFile = (id) => {
    setFiles(files.filter((file) => file.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form
      setSelectedMood(null)
      setFeedbackText("")
      setIncludeScreenshot(false)
      setFiles([])
    }, 1500)
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  if (isSubmitted) {
    return (
      <Layout title="Send Feedback">
        <div className="bg-white dark:bg-[#0f0f0f] text-black dark:text-white max-w-2xl mx-auto">
          <div className="text-center py-12 px-4">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-4">Thank you for your feedback!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your feedback helps us improve our platform for everyone.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-gradient-to-r from-gradient-start to-gradient-end hover:from-gradient-start-hover hover:to-gradient-end-hover text-white transition rounded-full"
            >
              Send more feedback
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Send Feedback">
      <div className="bg-white dark:bg-[#0f0f0f] text-black dark:text-white max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We'd love to hear your thoughts! Your feedback helps us improve our platform.
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">How was your experience?</label>
            <div className="flex gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  type="button"
                  onClick={() => setSelectedMood(mood.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                    selectedMood === mood.id
                      ? "border-theme-color bg-theme-color dark:bg-red-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
                  }`}
                >
                  <div
                    className={`text-3xl mb-2 ${
                      selectedMood === mood.id ? "text-white dark:text-red-400" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {mood.emoji}
                  </div>
                  <span
                    className={`text-sm ${
                      selectedMood === mood.id ? "text-white" : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {mood.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="feedback" className="block text-sm font-medium mb-2">
              Tell us more (optional)
            </label>
            <textarea
              id="feedback"
              rows={5}
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="What went well? What could be improved?"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-color"
            ></textarea>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="includeScreenshot"
                checked={includeScreenshot}
                onChange={(e) => setIncludeScreenshot(e.target.checked)}
                className="mr-2 h-4 w-4 text-theme-color focus:ring-theme-color border-gray-300 rounded"
              />
              <label htmlFor="includeScreenshot" className="text-sm">
                Include screenshot of current page
              </label>
            </div>

            <div className="mb-4">
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition"
              >
                <FaPaperclip className="mr-2" />
                Attach files
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                className="hidden"
                accept="image/*,.pdf,.doc,.docx,.txt"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Supported formats: Images, PDF, DOC, TXT (max 10MB)
              </p>
            </div>

            {files.length > 0 && (
              <div className="space-y-2 mb-4">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center">
                      <span className="text-sm truncate max-w-xs">{file.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                        ({formatFileSize(file.size)})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(file.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!selectedMood || isSubmitting}
              className={`px-6 py-2 rounded-full ${
                !selectedMood || isSubmitting
                  ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-gradient-start to-gradient-end hover:from-gradient-start-hover hover:to-gradient-end-hover"
              } text-white transition`}
            >
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default FeedbackPage
