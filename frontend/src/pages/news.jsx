import { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import TrendingVideoList from "../components/TrendingVideoList";
import CategoryTabs from "../components/CategoryTabs";
import { initialTrendingVideos } from "../data";
import Skeleton from "react-loading-skeleton";
import InnerBanner from "../components/InnerBanner";

const NewsPage = () => {
  const [videos, setVideos] = useState([])
  const [filteredVideos, setFilteredVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "top-stories", name: "Top Stories" },
    { id: "sport", name: "Sports" },
    { id: "entertainment", name: "Entertainment" },
    { id: "business", name: "Business" },
    { id: "technology", name: "Technology" },
    { id: "world", name: "World" },
  ]

  useEffect(() => {
    const loadVideos = async () => {
      setLoading(true)
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setVideos(initialTrendingVideos)
      setFilteredVideos(initialTrendingVideos)
      setLoading(false)
    }

    loadVideos()
  }, [])

  // Handle category change
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredVideos(videos)
    } else {
      const filtered = videos.filter((video) => video.category.toLowerCase() === activeCategory.toLowerCase())
      setFilteredVideos(filtered)
    }
  }, [activeCategory, videos])

  // Handle category selection
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
  }

  return (
    <Layout title="News">
      <InnerBanner loading={loading} title={"News"} description={"Live streams, walkthroughs, reviews, and more from your favorite gaming creators"} />
      <div className="mb-6">
        {loading ? (
          <div className="mb-6">
            <Skeleton height={48} className="rounded-lg" />
          </div>
        ) : (
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        )}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="flex flex-col gap-4">
              <Skeleton height={180} className="rounded-xl" />
              <div className="flex gap-2">
                <Skeleton circle width={36} height={36} />
                <div className="flex-1">
                  <Skeleton height={20} width="90%" className="mb-2" />
                  <Skeleton height={16} width="60%" className="mb-1" />
                  <Skeleton height={16} width="40%" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <TrendingVideoList videos={filteredVideos} />
      )}
    </Layout>
  )
}

export default NewsPage
