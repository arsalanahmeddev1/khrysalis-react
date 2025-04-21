import React from 'react';
import Layout from '../components/Layouts/Layout';
import Card from '../components/ui/Card';
import CardList from '../components/ui/CardList';
import { initialHistoryData } from '../data';
const GridPage = () => {
  return (
    <div>
      <Layout title="new Page">
        <CardList variant="grid">
          {initialHistoryData.map((card) => (
            <Card
              key={card.id}
              variant="horizontal"
              config={{
                imgWrapper: { imgWrapperClass: 'w-full max-w-[320px]' },
                thumbnail: {
                  img: card.thumbnail,
                  duration: card.duration,
                  id: card.id,
                },
                content: {
                  title: card.title,
                  description: card.description,
                  showDescription: card.showDescription,
                  uploadedAt: card.uploadedAt,
                  views: card.views,
                  watchedAt: card.watchedAt,
                },
                channel: {
                  name: card.channelName,
                  // img: card.channelImg,
                  subscribers: card.subscribers,
                  isVerified: card.isVerified,
                  icon: card.icon,
                },
                // actions: {
                //   onClick: () => console.log(`Clicked ${card.title}`),
                //   saveToPlaylist: () => console.log(`Saved ${card.title} to playlist`),
                //   share: () => console.log(`Shared ${card.title}`),
                //   addToQueue: () => console.log(`Added ${card.title} to queue`),
                //   onRemove: card.isHistoryItem
                //     ? () => console.log(`Removed ${card.title} from history`)
                //     : undefined,
                //   removeFromLikedVideos: () => console.log(`Removed ${card.title} from liked videos`),
                //   notInterested: () => console.log(`Marked ${card.title} as not interested`),
                // },
              }}
            />
          ))}
        </CardList>
      </Layout>
    </div>
  )
}

export default GridPage
