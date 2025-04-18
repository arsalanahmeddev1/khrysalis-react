"use client"

import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import ChannelCard from "./ChannelCard"

const SubscriptionsContent = ({ subscriptions, onUnsubscribe, onNotificationChange, searchQuery, onSearchChange }) => {
  const [showSearch, setShowSearch] = useState(false)
  const [localSearch, setLocalSearch] = useState(searchQuery || "")

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    onSearchChange(localSearch)
  }

  const handleClearSearch = () => {
    setLocalSearch("")
    onSearchChange("")
    setShowSearch(false)
  }

  return (
    <>
      {subscriptions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-[#272727]">
            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-gray-400">
              <path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-0.7 1.6-1.6 1.6H5.3c-1 0-1.6-0.7-1.6-1.6V12c0-1 0.7-1.7 1.6-1.7h13.4c1 0 1.6 0.8 1.6 1.7zm-5 3.3l-5-2.7v5.4l5-2.7z"></path>
            </svg>
          </div>
          <p className="text-xl text-gray-300">No channels found</p>
          {searchQuery && <p className="text-gray-400 mt-2">No results found for "{searchQuery}"</p>}
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="mt-4 px-4 py-2 bg-[#272727] rounded-full text-sm hover:bg-[#3a3a3a]"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="text-sm text-gray-400 mb-4">
            {subscriptions.length} {subscriptions.length === 1 ? "channel" : "channels"}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subscriptions.map((channel) => (
              <ChannelCard
                key={channel.id}
                channel={channel}
                onUnsubscribe={onUnsubscribe}
                onNotificationChange={onNotificationChange}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default SubscriptionsContent
