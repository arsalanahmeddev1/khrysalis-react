import { useContext, useEffect, useState } from "react"
import ThemeContext from "../contexts/ThemeContext";
import SearchContext from "../contexts/SearchContext";
import { FaSearch } from "react-icons/fa"
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
import profile from "../assets/icons/profile.png"
import { CiBrightnessUp } from "react-icons/ci"
import { MdDarkMode } from "react-icons/md"

const TopNavBar = ({ onMenuClick }) => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { isDarkMode, toggleDarkMode  } = useContext(ThemeContext);
  const [localSearch, setLocalSearch] = useState(searchQuery || "")

  useEffect(() => {
    setLocalSearch(searchQuery || "")
  }, [searchQuery])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(localSearch)
  }

  return (
    <header className="header">
      <div className="flex items-center">
        {/* <button
          onClick={onMenuClick}
          className="lg:hidden menu-toggle-btn text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}

        <button className="menu-toggle-btn" onClick={onMenuClick}>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
        <Link to={"/"} className="logo-wrapper">
          <img src={logo} alt="Logo" className="w-40" />
        </Link>
      </div>

      <div className="header-search-wrapper">
        <form onSubmit={handleSubmit} className="flex items-center w-full">
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

      <div className="auth-btn-wrapper">
        <Link to="/login" className="auth-link-wrapper">
          <img src={profile} alt="Profile" />
          Sign In
        </Link>
        {/* <button className="w-8 h-8 ml-2 rounded-full bg-purple-600 flex items-center justify-center">
          <span className="font-medium text-sm">A</span>
        </button> */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <CiBrightnessUp color="#fff" size={32} /> : <MdDarkMode color="#000" size={32} />}
        </button>
      </div>
    </header>
  )
}

export default TopNavBar
