import React, { useContext, useEffect, useState } from 'react'
import SearchContext from '../contexts/SearchContext';
import { FaSearch } from "react-icons/fa";
const SearchBar = ({className = ""}) => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [localSearch, setLocalSearch] = useState(searchQuery || "")

  useEffect(() => {
    setLocalSearch(searchQuery || "")
  }, [searchQuery])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(localSearch)
  }
  return (
    <div className="header-search-wrapper">
      <form onSubmit={handleSubmit} className={`flex items-center w-full ${className}`}>
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="header-search-submit-btn">
          <FaSearch className="text-gray-400" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
