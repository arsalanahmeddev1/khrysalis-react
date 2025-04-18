import {useContext, useState, useEffect } from "react"
import { initialHistoryData } from "../data";
import MyContext from "../router/context";
import HistoryContent from "../components/HistoryContent"
import Layout from "../components/Layouts/Layout"

const History = () => {
  const { searchQuery, setSearchQuery } = useContext(MyContext);
  const [historyData, setHistoryData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  // const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const savedHistory = localStorage.getItem("history")
    if (savedHistory) {
      const parsed = JSON.parse(savedHistory)
      setHistoryData(parsed)
      setFilteredData(parsed)
    } else {
      setHistoryData(initialHistoryData)
      setFilteredData(initialHistoryData)
      localStorage.setItem("history", JSON.stringify(initialHistoryData))
    }
  }, [])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(historyData)
    } else {
      const filtered = historyData.filter(
        (video) =>
          video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.channel.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }, [searchQuery, historyData])

  const handleRemoveVideo = (videoId) => {
    const updated = historyData.filter((v) => v.id !== videoId)
    setHistoryData(updated)
    localStorage.setItem("history", JSON.stringify(updated))
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query)
  }

  const groupVideosByDate = (videos) => {
    const grouped = { today: [], yesterday: [], lastWeek: [], older: [] }
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    const lastWeekStart = new Date(today)
    lastWeekStart.setDate(lastWeekStart.getDate() - 7)

    videos.forEach((video) => {
      const date = new Date(video.watchedAt)
      const dateStr = date.toDateString()
      if (dateStr === today.toDateString()) grouped.today.push(video)
      else if (dateStr === yesterday.toDateString()) grouped.yesterday.push(video)
      else if (date >= lastWeekStart) grouped.lastWeek.push(video)
      else grouped.older.push(video)
    })

    return grouped
  }

  const groupedVideos = groupVideosByDate(filteredData)

  return (
    <Layout title="History">
      <HistoryContent 
        groupedVideos={groupedVideos} 
        onRemoveVideo={handleRemoveVideo}
        onSearchChange={handleSearchChange}
      />
    </Layout>
  )
}

export default History
