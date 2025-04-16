import { useContext, useEffect, useState } from "react"
import MyContext from "../router/context";
import { FaSearch, FaMicrophone } from "react-icons/fa"
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
    <header className="flex items-center justify-between px-4 py-2 bg-white dark:bg-black border-b border-[#272727] sticky top-0 z-10">
      <div className="flex items-center">
        <button className="p-2 mr-2 rounded-full bg-[#272727]" onClick={onMenuClick}>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
        <Link to={"/"} className="text-black dark:text-white">
          <img src={logo} alt="Logo" className="w-40" />
        </Link>
      </div>

      <div className="flex items-center flex-grow max-w-[720px] mx-4">
        <form onSubmit={handleSubmit} className="flex items-center w-full">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full px-4 py-2 bg-white dark:bg-[#121212] border border-[#c6c6c6]  dark:border-[#303030] rounded-l-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-[#f8f8f8] dark:bg-[#222222] border border-[#d3d3d3] dark:border-[#303030] rounded-r-full hover:bg-[#3a3a3a]"
          >
            <FaSearch className="text-gray-400" />
          </button>
          <button type="button" className="p-2 ml-4 bg-[#f8f8f8] dark:bg-[#181818] rounded-full hover:bg-[#272727]">
            <FaMicrophone className="text-[#181818] dark:text-white" />
          </button>
        </form>
      </div>

      <div className="flex items-center gap-x-4">
        <Link
          to="/login"
          className="py-[9px] text-white px-[12px] md:px-[20px] rounded-full bg-violet-700 flex items-center gap-2"
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
