"use client"

import { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import GamingCategoryTabs from "../components/gaming/GamingCategoryTabs";
import GamingVideoGrid from "../components/gaming/GamingVideoGrid";
import { getGamingVideos } from "../gamingData";
import InnerBanner from "../components/InnerBanner";

const GamingPage = () => {
  const [loading, setLoading] = useState(true)
  const [videos, setVideos] = useState([])
  const [activeCategory, setActiveCategory] = useState("all")

  // Available categories
  const categories = [
    { id: "all", name: "All" },
    { id: "live", name: "Live" },
    { id: "minecraft", name: "Minecraft" },
    { id: "fps", name: "First-person shooters" },
    { id: "action", name: "Action-adventure games" },
    { id: "rpg", name: "Role-playing games" },
    { id: "strategy", name: "Strategy" },
    { id: "recently-uploaded", name: "Recently uploaded" },
  ]

  // Simulate loading videos from an API
  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true)
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const gamingVideos = getGamingVideos()
      setVideos(gamingVideos)
      setLoading(false)
    }

    loadVideos()
  }, [])

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    // In a real app, you would fetch new videos based on the category
    setLoading(true)

    // Simulate network delay for category change
    setTimeout(() => {
      // Filter videos based on category (simplified for demo)
      const filteredVideos =
        categoryId === "all"
          ? getGamingVideos()
          : getGamingVideos().filter((video) => video.categories && video.categories.includes(categoryId))

      setVideos(filteredVideos)
      setLoading(false)
    }, 800)
  }

  return (
    <Layout title="Gaming">
      <div className="gaming-page">
        {/* Hero Section */}
        <InnerBanner loading={loading} title={"Gaming"} description={"Live streams, walkthroughs, reviews, and more from your favorite gaming creators"} />

        {/* Category Tabs */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 py-2 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-[1560px] mx-auto px-4">
            <GamingCategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              loading={loading}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1560px] mx-auto px-4 py-6">
          <GamingVideoGrid videos={videos} loading={loading} />
        </div>
      </div>
    </Layout>
  )
}

export default GamingPage
