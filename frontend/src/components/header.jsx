import { useContext, useEffect, useState } from "react"
import MyContext from "../router/context";
import { FaSearch } from "react-icons/fa"
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import profile from "../assets/icons/profile.png";
import { CiBrightnessUp } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const TopNavBar = ({onMenuClick }) => {
  const { searchQuery, setSearchQuery } = useContext(MyContext);
  const [localSearch, setLocalSearch] = useState(searchQuery || "")
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setLocalSearch(searchQuery || "");
  }, [searchQuery]);

  useEffect(() => {
    // Initialize from localStorage if available
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(localSearch)
  }

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };



  return (
    <header className="header">
      <div className="flex items-center">
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
          <button
            type="submit"
            className="header-search-submit-btn"
          >
            <FaSearch className="text-gray-400" />
          </button>
        </form>
      </div>

      <div className="auth-btn-wrapper">
        <Link
          to="/login"
          className="auth-link-wrapper"
        >
          <img src={profile} alt="Profile" />
          Sign In
        </Link>
        {/* <button className="w-8 h-8 ml-2 rounded-full bg-purple-600 flex items-center justify-center">
          <span className="font-medium text-sm">A</span>
        </button> */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <CiBrightnessUp color="#fff" size={32} />
          ) : (
            <MdDarkMode color="#000" size={32} />
          )}
        </button>
      </div>
    </header>
  )
}

export default TopNavBar
