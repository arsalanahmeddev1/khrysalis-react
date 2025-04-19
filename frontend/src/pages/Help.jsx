import { useState, useEffect } from "react"
import Layout from "../components/Layouts/Layout"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa"

const Help = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [categories, setCategories] = useState([])
  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setCategories([
        { id: "account", name: "Account & Settings" },
        { id: "videos", name: "Videos & Playback" },
        { id: "creators", name: "Creator Support" },
        { id: "policy", name: "Policy & Safety" },
        { id: "billing", name: "Billing & Payments" },
      ])

      setFaqs([
        {
          id: 1,
          question: "How do I change my password?",
          answer:
            "To change your password, go to your account settings, select the Security tab, and click on 'Change password'. You'll need to enter your current password and then your new password twice to confirm.",
          category: "account",
        },
        {
          id: 2,
          question: "Why is my video buffering?",
          answer:
            "Buffering can occur due to slow internet connection, high video quality settings, or server issues. Try lowering the video quality, checking your internet connection, or refreshing the page.",
          category: "videos",
        },
        {
          id: 3,
          question: "How do I monetize my channel?",
          answer:
            "To monetize your channel, you need to join the Partner Program. Requirements include having at least 1,000 subscribers, 4,000 watch hours in the past 12 months, and following all the platform policies.",
          category: "creators",
        },
        {
          id: 4,
          question: "What content is not allowed on the platform?",
          answer:
            "Content that is not allowed includes but is not limited to: violent or graphic content, hateful content, harassment, dangerous or harmful activities, misinformation, and content that violates copyright laws.",
          category: "policy",
        },
        {
          id: 5,
          question: "How do I cancel my premium subscription?",
          answer:
            "To cancel your premium subscription, go to your account settings, select 'Memberships', find your premium subscription, and click 'Cancel membership'. Follow the prompts to complete the cancellation.",
          category: "billing",
        },
        {
          id: 6,
          question: "How do I report a video?",
          answer:
            "To report a video, click the three dots below the video player, select 'Report', choose the reason for reporting, and submit the form. Our team will review the report and take appropriate action.",
          category: "policy",
        },
        {
          id: 7,
          question: "Why can't I upload videos longer than 15 minutes?",
          answer:
            "By default, unverified accounts can only upload videos up to 15 minutes long. To upload longer videos, you need to verify your account by providing a phone number for a one-time verification code.",
          category: "creators",
        },
      ])
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Layout title="Help Center">
      <div className="bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
        <div className="mb-8">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-color"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {isLoading ? (
            <div className="space-y-6">
              <Skeleton height={50} />
              <Skeleton height={100} count={3} className="my-2" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition"
                  >
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {faqs.filter((faq) => faq.category === category.id).length} articles
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                {searchQuery && filteredFaqs.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600 dark:text-gray-400">No results found for "{searchQuery}"</p>
                  </div>
                ) : (
                  filteredFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="flex justify-between items-center w-full p-4 text-left font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                      >
                        <span>{faq.question}</span>
                        {expandedFaq === faq.id ? (
                          <FaChevronUp className="text-gray-500" />
                        ) : (
                          <FaChevronDown className="text-gray-500" />
                        )}
                      </button>
                      {expandedFaq === faq.id && (
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Help
