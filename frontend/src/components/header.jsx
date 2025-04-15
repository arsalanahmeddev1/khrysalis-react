import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetUserQuery } from "../redux/features/auth";
import { CiBrightnessUp } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FiMenu } from "react-icons/fi"; // Import Hamburger Icon
import Dashboard from "./dashboard"; // Import Dashboard Component

import logo from "../assets/images/logo.png";
import searchIcon from "../assets/icons/search.png";
import profile from "../assets/icons/profile.png";

const Header = () => {
  const { isSuccess, isFetching } = useGetUserQuery();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize from localStorage if available
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <header>
      <div
        className={`flex border-b  justify-between items-center py-2 px-2 md:px-8 fixed w-full z-50`}
      >
        <Link to={"/"} className="text-black dark:text-white">
          <img src={logo} alt="Logo" className="w-40" />
        </Link>

        {/* Search Bar - Only Visible on Large Screens */}
        <div className="hidden lg:flex grow">
          <div className="border w-full max-w-[400px] mx-auto h-[36px] flex justify-between rounded-full bg-transparent">
            <input
              type="text"
              placeholder="Search Here..."
              className="pl-4 w-full bg-transparent border-0 focus:border-0 focus:outline-none placeholder:text-teal-500 text-teal-400"
            />
            <button className="bg-violet-700 w-[67px] h-full rounded-full flex justify-center items-center">
              <img src={searchIcon} alt="Search" className="w-[16px]" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          {!isFetching && !isSuccess && (
            <Link
              to="/login"
              className="py-[9px] text-white px-[12px] md:px-[20px] rounded-full bg-violet-700 flex items-center gap-2"
            >
              <img src={profile} alt="Profile" />
              Sign In
            </Link>
          )}

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <CiBrightnessUp color="#fff" size={32} />
            ) : (
              <MdDarkMode color="#000" size={32} />
            )}
          </button>

          {/* Hamburger Menu for Mobile */}
          <button
            className="xl:hidden text-black dark:text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-2/4 h-full bg-white dark:bg-gray-900  p-4 z-50 xl:hidden">
          <Dashboard isSettingDashboard={false} />
          <button
            className="absolute top-4 right-4 text-black dark:text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
