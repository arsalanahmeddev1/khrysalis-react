import { useState, useEffect } from "react"
import Layout from "../components/Layouts/Layout"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { Link } from "react-router-dom"

const ReportHistoryPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [reports, setReports] = useState([])

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setReports([
        {
          id: "rep1",
          videoId: "v12345",
          videoTitle: "Misleading Content About Health Products",
          channelName: "Health Tips",
          reportDate: "2023-12-15T14:30:00",
          reason: "Misleading content",
          status: "Reviewed",
          thumbnail: "/placeholder.svg?height=120&width=200",
        },
        {
          id: "rep2",
          videoId: "v67890",
          videoTitle: "Inappropriate Gaming Stream Highlights",
          channelName: "Gaming Central",
          reportDate: "2023-11-28T09:15:00",
          reason: "Violent or repulsive content",
          status: "Under review",
          thumbnail: "/placeholder.svg?height=120&width=200",
        },
        {
          id: "rep3",
          videoId: "v24680",
          videoTitle: "Controversial Political Commentary",
          channelName: "News Network",
          reportDate: "2023-10-05T18:45:00",
          reason: "Hateful or abusive content",
          status: "Reviewed",
          thumbnail: "/placeholder.svg?height=120&width=200",
        },
        {
          id: "rep4",
          videoId: "v13579",
          videoTitle: "Unauthorized Music Remix",
          channelName: "Music Mixes",
          reportDate: "2023-09-20T11:20:00",
          reason: "Copyright infringement",
          status: "Action taken",
          thumbnail: "/placeholder.svg?height=120&width=200",
        },
      ])
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Layout title="Report History">
      <div className="bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Videos you've reported for potential policy violations are listed here. Learn more about reporting content.
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <Skeleton height={100} />
              </div>
            ))}
          </div>
        ) : reports.length > 0 ? (
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={report.thumbnail || "/placeholder.svg"}
                      alt={report.videoTitle}
                      className="w-full md:w-[180px] h-[100px] object-cover rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <Link to={`/watch?v=${report.videoId}`} className="text-lg font-medium hover:underline">
                      {report.videoTitle}
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{report.channelName}</p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                      <div>
                        <span className="font-medium">Reported on:</span> {formatDate(report.reportDate)}
                      </div>
                      <div>
                        <span className="font-medium">Reason:</span> {report.reason}
                      </div>
                      <div>
                        <span className="font-medium">Status:</span>{" "}
                        <span
                          className={`${
                            report.status === "Reviewed"
                              ? "text-blue-600 dark:text-blue-400"
                              : report.status === "Action taken"
                                ? "text-green-600 dark:text-green-400"
                                : "text-yellow-600 dark:text-yellow-400"
                          }`}
                        >
                          {report.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-medium mb-2">No reports found</h3>
            <p className="text-gray-600 dark:text-gray-400">You haven't reported any videos yet.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ReportHistoryPage
