import { formatDate } from "../../utils/formatters"

const AboutTab = ({ channel }) => {
  return (
    <div className="about-tab py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {channel.description || "This channel has no description."}
            </p>
          </div>

          {channel.links && channel.links.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Links</h3>
              <div className="flex flex-wrap gap-2">
                {channel.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {link.icon && (
                      <span className="mr-1">{link.icon}</span>
                    )}
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Stats</h3>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <div className="mb-3">
              <p className="text-gray-500 dark:text-gray-400 text-sm">Joined</p>
              <p className="font-medium">{formatDate(channel.joinedDate)}</p>
            </div>
            {channel.location && (
              <div className="mb-3">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Location</p>
                <p className="font-medium">{channel.location}</p>
              </div>
            )}
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Total views</p>
              <p className="font-medium">{channel.totalViews?.toLocaleString() || "0"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTab
