import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Layout from "../components/Layouts/Layout"
import { useData } from "../contexts/DataContext"

const CreateChannel = () => {
  const navigate = useNavigate()
  const { createChannel, hasChannels } = useData()
  const [loading, setLoading] = useState(false)
  const [channelData, setChannelData] = useState({
    name: "",
    description: "",
    profilePicture: null,
    banner: null,
  })
  const [profilePreview, setProfilePreview] = useState(null)
  const [bannerPreview, setBannerPreview] = useState(null)

  // Redirect to dashboard if user already has channels
  useEffect(() => {
    if (hasChannels) {
      navigate("/studio/dashboard")
    }
  }, [hasChannels, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setChannelData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files && files[0]) {
      // Convert file to base64 for storage in localStorage
      const reader = new FileReader()
      reader.onload = (event) => {
        const base64String = event.target.result

        setChannelData((prev) => ({
          ...prev,
          [name]: base64String,
        }))

        // Set preview
        if (name === "profilePicture") {
          setProfilePreview(base64String)
        } else if (name === "banner") {
          setBannerPreview(base64String)
        }
      }
      reader.readAsDataURL(files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Create the channel
      await createChannel(channelData)

      // Redirect to channel dashboard
      navigate("/studio/dashboard")
    } catch (error) {
      console.error("Error creating channel:", error)
      alert("Failed to create channel. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout title="Create Channel">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">Create Your Channel</h1>

          <form onSubmit={handleSubmit}>
            {/* Banner Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Channel Banner</label>
              <div
                className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                onClick={() => document.getElementById("banner-upload").click()}
              >
                {bannerPreview ? (
                  <div className="relative">
                    <img
                      src={bannerPreview || "/placeholder.svg"}
                      alt="Banner preview"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition rounded-lg">
                      <span className="text-white">Change Banner</span>
                    </div>
                  </div>
                ) : (
                  <div className="py-10">
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Click to upload banner image (recommended: 2048 x 1152 px)
                    </p>
                  </div>
                )}
                <input
                  id="banner-upload"
                  name="banner"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Profile Picture Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Profile Picture</label>
              <div className="flex items-center">
                <div
                  className="w-24 h-24 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition overflow-hidden"
                  onClick={() => document.getElementById("profile-upload").click()}
                >
                  {profilePreview ? (
                    <img
                      src={profilePreview || "/placeholder.svg"}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  )}
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Upload a profile picture (recommended: 800 x 800 px)
                  </p>
                  <button
                    type="button"
                    className="mt-1 text-sm text-purple-600 dark:text-purple-400 hover:underline"
                    onClick={() => document.getElementById("profile-upload").click()}
                  >
                    Choose file
                  </button>
                </div>
                <input
                  id="profile-upload"
                  name="profilePicture"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Channel Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Channel Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={channelData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
                placeholder="Enter your channel name"
                required
              />
            </div>

            {/* Channel Description */}
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Channel Description
              </label>
              <textarea
                id="description"
                name="description"
                value={channelData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
                placeholder="Tell viewers about your channel"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
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
                    Creating Channel...
                  </span>
                ) : (
                  "Create Channel"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default CreateChannel
