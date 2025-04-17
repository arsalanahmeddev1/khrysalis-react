const NoSearchResults = ({ searchQuery }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
        <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </div>
      <h2 className="text-xl font-bold mb-2">No results found</h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md">
        No videos match "{searchQuery}". Try different keywords or check for typos.
      </p>
    </div>
  )
}

export default NoSearchResults
