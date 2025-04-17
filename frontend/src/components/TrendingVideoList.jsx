import LikedVideoCard from "./LikedVideoCard"

const TrendingVideoList = ({ videos }) => {
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 19.59c-0.38 0.38-1.01 0.38-1.39 0l-3.83-3.83c-0.88 0.62-1.96 0.98-3.12 0.98-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5c0 1.16-0.36 2.24-0.98 3.12l3.83 3.83c0.38 0.38 0.38 1.01 0 1.39zM11.25 6.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">No videos found</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          No trending videos found in this category. Try selecting a different category.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <LikedVideoCard key={video.id} video={video} showCategory={true} trendingStyle={true} className="flex-col md:flex-col" thumbnailClassName="md:w-full"/>
      ))}
    </div>
  )
}
export default TrendingVideoList;
