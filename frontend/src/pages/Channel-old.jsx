import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const dummyVideos = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  thumbnail: 'https://via.placeholder.com/320x180',
  title: `Sample Video Title ${i + 1}`,
  views: `${(Math.random() * 10).toFixed(1)}M views`,
  published: `${Math.floor(Math.random() * 10)} days ago`,
}));

const ChannelPage = () => {
  const [activeTab, setActiveTab] = useState('Videos');
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="dark:bg-black dark:text-white min-h-screen">
      {/* Channel Header */}
      <div className="p-6 flex items-center gap-4 border-b border-gray-700">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/100"
            alt="Channel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">Awesome Channel</h2>
          <span className="text-sm text-gray-400">1.23M subscribers</span>
        </div>
        <button
          onClick={() => setIsSubscribed(!isSubscribed)}
          className={`ml-auto px-4 py-2 rounded-full text-sm font-medium ${
            isSubscribed ? 'bg-gray-700 text-white' : 'bg-white text-black'
          }`}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-6 px-6 py-3 border-b border-gray-700 text-sm">
        {['Videos', 'Playlists', 'About'].map((tab) => (
          <button
            key={tab}
            className={`pb-2 border-b-2 transition-all ${
              activeTab === tab
                ? 'border-white text-white'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'Videos' && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {dummyVideos.map((video) => (
              <div key={video.id} className="space-y-2">
                <div className="aspect-video bg-gray-800 rounded-md overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium leading-tight">
                  {video.title || <Skeleton />}
                </h3>
                <div className="text-xs text-gray-400">
                  {video.views} • {video.published}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Playlists' && (
          <div className="text-gray-400">Playlists tab content (coming soon)</div>
        )}

        {activeTab === 'About' && (
          <div className="text-gray-400 max-w-prose">
            <p>This is a sample channel description. Here you can tell viewers about your channel, what content you upload, and your goals.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelPage;
