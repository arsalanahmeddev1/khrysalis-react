const PlaylistsTab = ({ playlists }) => {
  if (!playlists || playlists.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">No playlists yet</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">This channel hasn't created any playlists yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
      {playlists.map((playlist) => (
        <div key={playlist.id} className="playlist-card group cursor-pointer">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
            <img
              src={playlist.thumbnail || "/placeholder.svg"}
              alt={playlist.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white rounded-full p-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </button>
            </div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
              {playlist.videoCount} {playlist.videoCount === 1 ? "video" : "videos"}
            </div>
          </div>
          <h3 className="font-medium line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {playlist.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">View full playlist</p>
        </div>
      ))}
    </div>
  )
}

export default PlaylistsTab
