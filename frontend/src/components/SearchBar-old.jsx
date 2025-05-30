import { useState } from "react"

const SearchBar = ({ searchQuery, onSearchChange }) => {
  const [localSearch, setLocalSearch] = useState(searchQuery || "")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearchChange(localSearch)
  }

  const handleClear = () => {
    setLocalSearch("")
    onSearchChange("")
  }

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-64">
      <div className="relative">
        <input
          type="text"
          placeholder="Search liked videos"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="w-full px-4 py-2 pr-10 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        />
        {localSearch && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        )}
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
