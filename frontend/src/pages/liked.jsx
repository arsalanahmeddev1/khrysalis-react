import { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import VideoList from "../components/VideoList";
import EmptyState from "../components/EmptyState";
import { initialLikedVideos } from "../data";
import Skeleton from "react-loading-skeleton";


const Liked = () => {
    const [videos, setVideos] = useState([])
    const [filteredVideos, setFilteredVideos] = useState([])
    const [loading, setLoading] = useState(true)

    // Simulate loading videos from an API
    useEffect(() => {
        const loadVideos = async () => {
            setLoading(true)
            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 1500))

            // Check if we have data in localStorage
            const savedVideos = localStorage.getItem("likedVideos")
            if (savedVideos) {
                const parsedVideos = JSON.parse(savedVideos)
                setVideos(parsedVideos)
                setFilteredVideos(parsedVideos)
            } else {
                // Use initial mock data
                setVideos(initialLikedVideos)
                setFilteredVideos(initialLikedVideos)
                // Save to localStorage
                localStorage.setItem("likedVideos", JSON.stringify(initialLikedVideos))
            }

            setLoading(false)
        }

        loadVideos()
    }, [])
    // Handle removing a video from liked videos
    const handleRemoveVideo = (videoId) => {
        const updatedVideos = videos.filter((video) => video.id !== videoId)
        setVideos(updatedVideos)

        // Update localStorage
        localStorage.setItem("likedVideos", JSON.stringify(updatedVideos))
    }

    return (
        <Layout title="Liked videos">
            <>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                        {!loading && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                {videos.length} {videos.length === 1 ? "video" : "videos"}
                            </p>
                        )}
                    </div>
                </div>

                {loading ? (
                    <div className="space-y-4">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-4">
                                <Skeleton height={180} width={320} className="rounded-xl" />
                                <div className="flex-1">
                                    <Skeleton height={24} width="80%" className="mb-2" />
                                    <Skeleton height={20} width="60%" className="mb-2" />
                                    <Skeleton height={16} width="40%" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : videos.length === 0 ? (
                    <EmptyState />
                ) : (
                    <VideoList
                        videos={filteredVideos}
                        onRemoveVideo={handleRemoveVideo}
                        className="flex-col"
                    />
                )}
            </>
        </Layout>
    )
}

export default Liked
