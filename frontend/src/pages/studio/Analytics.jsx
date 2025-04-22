import { useState, useEffect } from "react"
import StudioLayout from "../../components/studio/StudioLayout"
import Skeleton from "react-loading-skeleton"

const Analytics = () => {
  const [loading, setLoading] = useState(true)
  const [period, setPeriod] = useState("28days")
  const [analyticsData, setAnalyticsData] = useState({
    overview: {
      views: 0,
      watchTime: 0,
      subscribers: 0,
      revenue: 0,
    },
    topVideos: [],
    viewsChart: [],
    demographics: {
      age: [],
      gender: [],
      geography: [],
    },
  })

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setAnalyticsData({
        overview: {
          views: 3248,
          watchTime: 187.5,
          subscribers: 142,
          revenue: 0,
        },
        topVideos: [
          {
            id: 1,
            title: "How to Build a YouTube Clone with React",
            views: 1487,
            watchTime: 87.2,
            thumbnail: "/placeholder.svg",
          },
          {
            id: 2,
            title: "Top 10 Web Development Trends in 2023",
            views: 961,
            watchTime: 62.8,
            thumbnail: "/placeholder.svg",
          },
          {
            id: 3,
            title: "5 Minute React Shorts: useState Hook Explained",
            views: 800,
            watchTime: 37.5,
            thumbnail: "/placeholder.svg",
          },
        ],
        viewsChart: [
          { date: "2023-03-15", views: 85 },
          { date: "2023-03-16", views: 92 },
          { date: "2023-03-17", views: 120 },
          { date: "2023-03-18", views: 105 },
          { date: "2023-03-19", views: 98 },
          { date: "2023-03-20", views: 110 },
          { date: "2023-03-21", views: 125 },
          { date: "2023-03-22", views: 140 },
          { date: "2023-03-23", views: 132 },
          { date: "2023-03-24", views: 145 },
          { date: "2023-03-25", views: 160 },
          { date: "2023-03-26", views: 175 },
          { date: "2023-03-27", views: 162 },
          { date: "2023-03-28", views: 170 },
        ],
        demographics: {
          age: [
            { group: "13-17", percentage: 5 },
            { group: "18-24", percentage: 42 },
            { group: "25-34", percentage: 38 },
            { group: "35-44", percentage: 10 },
            { group: "45-54", percentage: 3 },
            { group: "55+", percentage: 2 },
          ],
          gender: [
            { group: "Male", percentage: 72 },
            { group: "Female", percentage: 26 },
            { group: "Other", percentage: 2 },
          ],
          geography: [
            { country: "United States", percentage: 45 },
            { country: "India", percentage: 12 },
            { country: "United Kingdom", percentage: 8 },
            { country: "Canada", percentage: 7 },
            { country: "Germany", percentage: 5 },
            { country: "Other", percentage: 23 },
          ],
        },
      })
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [period])

  const handlePeriodChange = (newPeriod) => {
    setLoading(true)
    setPeriod(newPeriod)
  }

  return (
    <StudioLayout title="Analytics">
      <div className="space-y-6">
        {/* Analytics Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Channel Analytics</h1>

          <div className="flex items-center space-x-2">
            <select
              value={period}
              onChange={(e) => handlePeriodChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
            >
              <option value="7days">Last 7 days</option>
              <option value="28days">Last 28 days</option>
              <option value="90days">Last 90 days</option>
              <option value="365days">Last 365 days</option>
              <option value="lifetime">Lifetime</option>
            </select>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading
            ? [...Array(4)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <Skeleton height={24} width={100} className="mb-2" />
                  <Skeleton height={36} width={80} />
                </div>
              ))
            : (
                <>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Views</h3>
                <p className="text-2xl font-bold mt-1">{analyticsData.overview.views.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-1">+12% from previous period</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Watch time (hours)</h3>
                <p className="text-2xl font-bold mt-1">{analyticsData.overview.watchTime.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-1">+8.2% from previous period</p>
              </div>
              
              {/* <div className="bg  from previous period</p>
              </div> */}
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Subscribers</h3>
                <p className="text-2xl font-bold mt-1">{analyticsData.overview.subscribers.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-1">+5 new subscribers</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Estimated Revenue</h3>
                <p className="text-2xl font-bold mt-1">${analyticsData.overview.revenue.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">Not monetized yet</p>
              </div>
            </>
              )}
        </div>

        {/* Views Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Views</h2>

          {loading ? (
            <Skeleton height={200} />
          ) : (
            <div className="h-64 relative">
              {/* This would be a real chart component in a production app */}
              <div className="absolute inset-0 flex items-end">
                {analyticsData.viewsChart.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-purple-500 dark:bg-purple-600 rounded-t"
                      style={{
                        height: `${(item.views / Math.max(...analyticsData.viewsChart.map((d) => d.views))) * 100}%`,
                        maxHeight: "90%",
                      }}
                    ></div>
                    {index % 2 === 0 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {new Date(item.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Top Videos */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Top Videos</h2>

          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton height={90} width={160} className="rounded-lg" />
                  <div className="flex-1">
                    <Skeleton height={24} width="80%" className="mb-2" />
                    <Skeleton height={20} width="40%" className="mb-2" />
                    <Skeleton height={16} width="30%" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {analyticsData.topVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-40 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium truncate">{video.title}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <span className="text-sm">{video.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm">{video.watchTime.toLocaleString()} hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Demographics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Age Demographics */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Age Demographics</h2>

            {loading ? (
              <Skeleton height={200} />
            ) : (
              <div className="space-y-2">
                {analyticsData.demographics.age.map((item) => (
                  <div key={item.group} className="flex items-center">
                    <span className="w-16 text-sm text-gray-500 dark:text-gray-400">{item.group}</span>
                    <div className="flex-1 mx-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500 dark:bg-purple-600 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="w-8 text-sm text-gray-500 dark:text-gray-400">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Gender Demographics */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Gender Demographics</h2>

            {loading ? (
              <Skeleton height={200} />
            ) : (
              <div className="space-y-2">
                {analyticsData.demographics.gender.map((item) => (
                  <div key={item.group} className="flex items-center">
                    <span className="w-16 text-sm text-gray-500 dark:text-gray-400">{item.group}</span>
                    <div className="flex-1 mx-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 dark:bg-blue-600 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="w-8 text-sm text-gray-500 dark:text-gray-400">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Geography */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Top Geographies</h2>

            {loading ? (
              <Skeleton height={200} />
            ) : (
              <div className="space-y-2">
                {analyticsData.demographics.geography.map((item) => (
                  <div key={item.country} className="flex items-center">
                    <span className="w-24 text-sm text-gray-500 dark:text-gray-400 truncate">{item.country}</span>
                    <div className="flex-1 mx-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 dark:bg-green-600 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="w-8 text-sm text-gray-500 dark:text-gray-400">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </StudioLayout>
  )
}

export default Analytics
