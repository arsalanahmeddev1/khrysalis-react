import { useState } from "react"
import { formatDuration } from "../utils/formatters"

const MusicCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="music-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-lg overflow-hidden aspect-square mb-2">
        <img
          src={item.thumbnail || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Play button overlay on hover */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </button>
        </div>

        {/* Duration badge */}
        {item.duration && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
            {formatDuration(item.duration)}
          </div>
        )}
      </div>

      <h3 className="font-medium text-sm line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400">
        {item.title}
      </h3>

      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
        {item.type === "album" ? "Album • " : ""}
        {item.artist}
      </p>
    </div>
  )
}

export default MusicCard
