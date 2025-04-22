import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import StudioLayout from "../../components/studio/StudioLayout"
import { useData } from "../../contexts/DataContext"

const UploadVideo = () => {
  const navigate = useNavigate()
  const { addVideo } = useData()
  const [loading, setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [videoFile, setVideoFile] = useState(null)
  const [thumbnailFile, setThumbnailFile] = useState(null)
  const [thumbnailPreview, setThumbnailPreview] = useState(null)
  const [videoPreview, setVideoPreview] = useState(null)
  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    tags: "",
    visibility: "private",
    category: "",
    isKidsFriendly: false,
    isShort: false,
  })
  const fileInputRef = useRef(null)
  const thumbnailInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleVideoFileChange(e.dataTransfer.files[0])
    }
  }

  const handleVideoFileChange = (file) => {
    if (!file) return

    // Check if file is a video
    if (!file.type.startsWith("video/")) {
      alert("Please upload a video file")
      return
    }

    setVideoFile(file)

    // Create video preview URL
    const videoUrl = URL.createObjectURL(file)
    setVideoPreview(videoUrl)

    // Auto-fill title from filename
    const fileName = file.name.replace(/\.[^/.]+$/, "") // Remove extension
    setVideoData({
      ...videoData,
      title: fileName,
    })

    // Simulate upload progress
    setLoading(true)
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        setLoading(false)
      }
    }, 300)
  }

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file for the thumbnail")
      return
    }

    // Convert to base64 for storage
    const reader = new FileReader()
    reader.onload = (e) => {
      const base64String = e.target.result
      setThumbnailFile(base64String)
      setThumbnailPreview(base64String)
    }
    reader.readAsDataURL(file)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setVideoData({
      ...videoData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!videoFile) {
      alert("Please upload a video file")
      return
    }

    if (!videoData.title.trim()) {
      alert("Please enter a title for your video")
      return
    }

    // Prepare video data for storage
    const newVideo = {
      ...videoData,
      thumbnail: thumbnailFile || null,
      // We can't store the actual video file in localStorage due to size limitations
      // In a real app, you'd upload to a server/cloud storage
      videoUrl: null, // This would be a URL to the video in a real app
      restrictions: "None",
      date: new Date().toISOString(),
    }

    // Simulate publishing
    setLoading(true)
    setTimeout(() => {
      // Add video to storage
      addVideo(newVideo)

      setLoading(false)
      navigate("/studio/content")
    }, 2000)
  }

  return (
    <StudioLayout title="Upload Video">
      <div className="max-w-5xl mx-auto">
        {!videoFile ? (
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-10 text-center"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
              <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>

              <h2 className="text-xl font-semibold mb-2">Drag and drop video files to upload</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Your videos will be private until you publish them
              </p>

              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition"
              >
                SELECT FILES
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={(e) => handleVideoFileChange(e.target.files[0])}
                className="hidden"
              />
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold mb-6">Upload Video</h1>

            {loading && uploadProgress < 100 ? (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Uploading...</h2>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{uploadProgress}% complete</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    {/* Title */}
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Title (required)
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={videoData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
                        placeholder="Add a title that describes your video"
                        required
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={videoData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
                        placeholder="Tell viewers about your video"
                      />
                    </div>

                    {/* Thumbnail */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Thumbnail
                      </label>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Select or upload a picture that shows what's in your video
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Auto-generated thumbnails would go here */}
                        <div
                          className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition aspect-video flex items-center justify-center"
                          onClick={() => thumbnailInputRef.current.click()}
                        >
                          {thumbnailPreview ? (
                            <img
                              src={thumbnailPreview || "/placeholder.svg"}
                              alt="Custom thumbnail"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <div className="text-sm text-gray-500 dark:text-gray-400">Upload thumbnail</div>
                          )}
                        </div>
                      </div>
                      <input
                        ref={thumbnailInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleThumbnailChange}
                        className="hidden"
                      />
                    </div>

                    {/* Tags */}
                    <div>
                      <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Tags
                      </label>
                      <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={videoData.tags}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
                        placeholder="Add tags separated by commas"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Tags can help viewers find your video
                      </p>
                    </div>

                    {/* Visibility */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Visibility
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="private"
                            name="visibility"
                            value="private"
                            checked={videoData.visibility === "private"}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-700"
                          />
                          <label htmlFor="private" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Private
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="unlisted"
                            name="visibility"
                            value="unlisted"
                            checked={videoData.visibility === "unlisted"}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-700"
                          />
                          <label htmlFor="unlisted" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Unlisted
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="public"
                            name="visibility"
                            value="public"
                            checked={videoData.visibility === "public"}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-700"
                          />
                          <label htmlFor="public" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Public
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={videoData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
                      >
                        <option value="">Select a category</option>
                        <option value="education">Education</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="gaming">Gaming</option>
                        <option value="music">Music</option>
                        <option value="tech">Science & Technology</option>
                        <option value="sports">Sports</option>
                        <option value="travel">Travel & Events</option>
                      </select>
                    </div>

                    {/* Kids */}
                    <div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="isKidsFriendly"
                            name="isKidsFriendly"
                            type="checkbox"
                            checked={videoData.isKidsFriendly}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 dark:border-gray-700 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="isKidsFriendly" className="font-medium text-gray-700 dark:text-gray-300">
                            This content is made for kids
                          </label>
                          <p className="text-gray-500 dark:text-gray-400">
                            Regardless of your location, you're legally required to comply with the Children's Online
                            Privacy Protection Act (COPPA).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Preview */}
                  <div className="md:col-span-1">
                    <div className="sticky top-6">
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Video Preview</h3>
                      <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                        {videoPreview && <video src={videoPreview} controls className="w-full h-full" />}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <p className="mb-1">Filename: {videoFile?.name}</p>
                        <p>Size: {(videoFile?.size / (1024 * 1024)).toFixed(2)} MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => navigate("/studio/content")}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
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
                        Publishing...
                      </span>
                    ) : (
                      "Publish"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </StudioLayout>
  )
}

export default UploadVideo
