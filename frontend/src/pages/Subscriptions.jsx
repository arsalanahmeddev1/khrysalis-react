import { useState, useEffect, useContext } from "react";
import { initialSubscriptionsData } from "../data";
import MyContext from "../router/context";
import SubscriptionsContent from "../components/SubscriptionsContent";
import Layout from "../components/Layouts/Layout";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const [filteredSubscriptions, setFilteredSubscriptions] = useState([])
  const { searchQuery, setSearchQuery } = useContext(MyContext);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sortOption, setSortOption] = useState("alphabetical") // alphabetical, recent, popularity
  const [viewMode, setViewMode] = useState("grid") // grid or list

  // Load initial data
  useEffect(() => {
    // Check if we have data in localStorage
    const savedSubscriptions = localStorage.getItem("youtubeSubscriptions")
    if (savedSubscriptions) {
      const parsedData = JSON.parse(savedSubscriptions)
      setSubscriptions(parsedData)
      setFilteredSubscriptions(sortSubscriptions(parsedData, sortOption))
    } else {
      // Use initial mock data
      setSubscriptions(initialSubscriptionsData)
      setFilteredSubscriptions(sortSubscriptions(initialSubscriptionsData, sortOption))
      // Save to localStorage
      localStorage.setItem("youtubeSubscriptions", JSON.stringify(initialSubscriptionsData))
    }
  }, [])

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSubscriptions(sortSubscriptions(subscriptions, sortOption))
    } else {
      const filtered = subscriptions.filter(
        (channel) =>
          channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          channel.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredSubscriptions(sortSubscriptions(filtered, sortOption))
    }
  }, [searchQuery, subscriptions, sortOption])

  // Sort subscriptions based on selected option
  const sortSubscriptions = (subs, option) => {
    const sortedSubs = [...subs]

    switch (option) {
      case "alphabetical":
        return sortedSubs.sort((a, b) => a.name.localeCompare(b.name))
      case "recent":
        return sortedSubs.sort((a, b) => new Date(b.lastUpload.date) - new Date(a.lastUpload.date))
      case "popularity":
        return sortedSubs.sort((a, b) => {
          const aCount =
            Number.parseInt(a.subscribers.replace(/[KM]/g, "")) *
            (a.subscribers.includes("M") ? 1000000 : a.subscribers.includes("K") ? 1000 : 1)
          const bCount =
            Number.parseInt(b.subscribers.replace(/[KM]/g, "")) *
            (b.subscribers.includes("M") ? 1000000 : b.subscribers.includes("K") ? 1000 : 1)
          return bCount - aCount
        })
      default:
        return sortedSubs
    }
  }

  // Handle unsubscribe
  const handleUnsubscribe = (channelId) => {
    const updatedSubscriptions = subscriptions.filter((channel) => channel.id !== channelId)
    setSubscriptions(updatedSubscriptions)
    setFilteredSubscriptions(
      sortSubscriptions(
        updatedSubscriptions.filter(
          (channel) =>
            searchQuery.trim() === "" ||
            channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            channel.description.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
        sortOption,
      ),
    )

    // Update localStorage
    localStorage.setItem("youtubeSubscriptions", JSON.stringify(updatedSubscriptions))
  }

  // Handle notification settings change
  const handleNotificationChange = (channelId, setting) => {
    const updatedSubscriptions = subscriptions.map((channel) => {
      if (channel.id === channelId) {
        return { ...channel, notificationSetting: setting }
      }
      return channel
    })

    setSubscriptions(updatedSubscriptions)
    setFilteredSubscriptions(
      sortSubscriptions(
        updatedSubscriptions.filter(
          (channel) =>
            searchQuery.trim() === "" ||
            channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            channel.description.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
        sortOption,
      ),
    )

    // Update localStorage
    localStorage.setItem("youtubeSubscriptions", JSON.stringify(updatedSubscriptions))
  }

  // Handle search query change
  const handleSearchChange = (query) => {
    setSearchQuery(query)
  }

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  // Handle sort option change
  const handleSortChange = (option) => {
    setSortOption(option)
    setFilteredSubscriptions(sortSubscriptions(filteredSubscriptions, option))
  }

  // Handle view mode change
  const handleViewModeChange = (mode) => {
    setViewMode(mode)
  }

  return (
    <Layout>
      <SubscriptionsContent
          subscriptions={filteredSubscriptions}
          onUnsubscribe={handleUnsubscribe}
          onNotificationChange={handleNotificationChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          sortOption={sortOption}
          onSortChange={handleSortChange}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
        />
    </Layout>
  )
}
export default Subscriptions;