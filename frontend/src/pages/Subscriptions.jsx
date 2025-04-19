"use client"

import { useState, useEffect, useContext } from "react"
import { initialSubscriptionsData } from "../data"
import MyContext from "../router/context"
import SubscriptionsContent from "../components/SubscriptionsContent"
import Layout from "../components/Layouts/Layout"

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const [filteredSubscriptions, setFilteredSubscriptions] = useState([])
  const { searchQuery, setSearchQuery } = useContext(MyContext)

  // Load initial data
  useEffect(() => {
    // Check if we have data in localStorage
    const savedSubscriptions = localStorage.getItem("KhrysalisSubscriptions")
    if (savedSubscriptions) {
      const parsedData = JSON.parse(savedSubscriptions)
      setSubscriptions(parsedData)
      setFilteredSubscriptions(parsedData)
    } else {
      // Use initial mock data
      setSubscriptions(initialSubscriptionsData)
      setFilteredSubscriptions(initialSubscriptionsData)
      // Save to localStorage
      localStorage.setItem("KhrysalisSubscriptions", JSON.stringify(initialSubscriptionsData))
    }
  }, [])

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSubscriptions(subscriptions)
    } else {
      const filtered = subscriptions.filter(
        (channel) =>
          channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          channel.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredSubscriptions(filtered)
    }
  }, [searchQuery, subscriptions])

  // Handle unsubscribe
  const handleUnsubscribe = (channelId) => {
    const updatedSubscriptions = subscriptions.filter((channel) => channel.id !== channelId)
    setSubscriptions(updatedSubscriptions)
    setFilteredSubscriptions(updatedSubscriptions)

    // Update localStorage
    localStorage.setItem("KhrysalisSubscriptions", JSON.stringify(updatedSubscriptions))
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
    setFilteredSubscriptions(updatedSubscriptions)

    // Update localStorage
    localStorage.setItem("KhrysalisSubscriptions", JSON.stringify(updatedSubscriptions))
  }

  // Handle search query change
  const handleSearchChange = (query) => {
    setSearchQuery(query)
  }

  return (
    <Layout title="Subscriptions">
      <SubscriptionsContent
        subscriptions={filteredSubscriptions}
        onUnsubscribe={handleUnsubscribe}
        onNotificationChange={handleNotificationChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
    </Layout>
  )
}

export default Subscriptions
