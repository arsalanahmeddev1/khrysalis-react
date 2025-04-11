import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../router/context";
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
  const { data, updateData } = useContext(MyContext);
  const [isDarkMode, setIsDarkMode] = useState(data.isDarkMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsDarkMode(data?.isDarkMode);
    document.body.style.backgroundColor = data?.isDarkMode ? "#000" : "#fff";
    document.body.style.color = data?.isDarkMode ? "#fff" : "#000";
  }, [data.isDarkMode]);

  return (
    <header>
      <div
        className={`flex border-b ${
          isDarkMode
          ? "bg-[#000] border-b border-white" 
          : "bg-[#fff] border-b-2 border-gray-300"
        } justify-between items-center py-2 px-2 md:px-8 fixed w-full z-50`}
      >
        <Link to={"/"} className="text-white-false">
          <img src={logo} alt="Logo" className="w-40" />
        </Link>

        {/* Search Bar - Only Visible on Large Screens */}
        <div className="hidden lg:flex grow">
          <div className="border w-full max-w-[400px] mx-auto h-[36px]  flex justify-between rounded-full bg-transparent">
            <input
              type="text"
              placeholder="Search Here..."
              className="pl-4 w-full bg-transparent focus:border-0 focus:outline-none focus:ring-0 placeholder:text-teal-500 text-teal-400 w-full border-none"

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

          <button onClick={() => updateData({ isDarkMode: !isDarkMode })}>
            {isDarkMode ? <CiBrightnessUp color="#fff" size={32} /> : <MdDarkMode color="#000" size={32} />}
          </button>

          {/* Hamburger Menu for Mobile (Only Visible on Small Screens) */}
          <button
            className="xl:hidden text-white-false text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

   
      {/* <div classN ame="hidden xl:block">
        <Dashboard />
      </div> */}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-2/4 h-full bg-gray-900 p-4 z-50 xl:hidden">
          <Dashboard isSettingDashboard={false} />
          <button
            className="absolute top-4 right-4 text-white text-2xl"
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
