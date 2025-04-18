"use client"

import { useState, useEffect } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import Layout from "../components/Layouts/Layout"
import SettingsSidebar from "../components/settings/SettingsSidebar"
import AccountSettings from "../components/settings/AccountSettings"
import NotificationSettings from "../components/settings/NotificationSettings"
import PrivacySettings from "../components/settings/PrivacySettings"
import PlaybackSettings from "../components/settings/PlaybackSettings"
import AppearanceSettings from "../components/settings/AppearanceSettings"
import AdvancedSettings from "../components/settings/AdvancedSettings"
import DownloadsSettings from "../components/settings/DownloadsSettings"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const SettingsPage = () => {
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Settings categories
  const settingsCategories = [
    { id: "account", label: "Account", path: "/settings/account", icon: "user" },
    { id: "notifications", label: "Notifications", path: "/settings/notifications", icon: "bell" },
    { id: "privacy", label: "Privacy", path: "/settings/privacy", icon: "shield" },
    { id: "playback", label: "Playback and performance", path: "/settings/playback", icon: "play" },
    { id: "appearance", label: "Appearance", path: "/settings/appearance", icon: "monitor" },
    { id: "downloads", label: "Downloads", path: "/settings/downloads", icon: "download" },
    { id: "advanced", label: "Advanced settings", path: "/settings/advanced", icon: "settings" },
  ]

  // Redirect to account settings if on /settings
  useEffect(() => {
    if (location.pathname === "/settings") {
      navigate("/settings/account")
    }
  }, [location.pathname, navigate])

  return (
    <Layout title="Settings">
      <div className="settings-page bg-white dark:bg-gray-900">
        {/* Mobile menu button */}
        <div className="md:hidden sticky top-0 z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
          <button
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="font-medium">Settings</span>
            <svg
              className={`w-5 h-5 ml-2 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } md:block md:w-64 lg:w-72 border-r border-gray-200 dark:border-gray-800 md:sticky md:top-0 md:h-screen`}
          >
            <SettingsSidebar categories={settingsCategories} loading={loading} />
          </div>

          {/* Main content */}
          <div className="flex-1 min-h-screen">
            {loading ? (
              <div className="p-6">
                <Skeleton height={40} width="60%" className="mb-6" />
                <Skeleton height={24} width="40%" className="mb-4" />
                <Skeleton height={16} count={3} className="mb-2" />
                <Skeleton height={40} className="mb-4 mt-6" />
                <Skeleton height={40} className="mb-4" />
                <Skeleton height={40} className="mb-4" />
                <Skeleton height={24} width="40%" className="mb-4 mt-6" />
                <Skeleton height={16} count={2} className="mb-2" />
              </div>
            ) : (
              <div className="p-4 md:p-6 overflow-y-auto">
                <Routes>
                  <Route path="/account" element={<AccountSettings />} />
                  <Route path="/notifications" element={<NotificationSettings />} />
                  <Route path="/privacy" element={<PrivacySettings />} />
                  <Route path="/playback" element={<PlaybackSettings />} />
                  <Route path="/appearance" element={<AppearanceSettings />} />
                  <Route path="/downloads" element={<DownloadsSettings />} />
                  <Route path="/advanced" element={<AdvancedSettings />} />
                </Routes>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SettingsPage
