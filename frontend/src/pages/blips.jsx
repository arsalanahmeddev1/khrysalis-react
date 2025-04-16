import Layout from "../components/Layouts/Layout"
import ReelsPage from "../components/ReelsPage"

const blips = () => {
  const fetchShorts = async (page) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Return mock data
        resolve([
          {
            id: `page-${page}-${Math.random().toString(36).substr(2, 9)}`,
            videoUrl: "https://praetorstestnet.com/khy/storage/app/video/lUEU8MmXAvSIXze5f0SdOfvUsJ7LI3frq0IoI2JN.mp4",
            channel: {
              name: `Creator_${page}_1`,
              avatar: "https://randomuser.me/api/portraits/women/22.jpg",
              subscribers: "1.2M",
            },
            title: `Amazing video from page ${page} #trending #viral`,
            likes: Math.floor(Math.random() * 100000),
            dislikes: Math.floor(Math.random() * 5000),
            comments: Math.floor(Math.random() * 10000),
            views: "1.2M",
          },
          {
            id: `page-${page}-${Math.random().toString(36).substr(2, 9)}`,
            videoUrl: "https://praetorstestnet.com/khy/storage/app/video/lUEU8MmXAvSIXze5f0SdOfvUsJ7LI3frq0IoI2JN.mp4",
            channel: {
              name: `Creator_${page}_2`,
              avatar: "https://randomuser.me/api/portraits/men/54.jpg",
              subscribers: "567K",
            },
            title: `Check out this awesome content! Page ${page} #shorts #youtube`,
            likes: Math.floor(Math.random() * 100000),
            dislikes: Math.floor(Math.random() * 5000),
            comments: Math.floor(Math.random() * 10000),
            views: "2.5M",
          },
          {
            id: `page-${page}-${Math.random().toString(36).substr(2, 9)}`,
            videoUrl: "https://praetorstestnet.com/khy/storage/app/video/lUEU8MmXAvSIXze5f0SdOfvUsJ7LI3frq0IoI2JN.mp4",
            channel: {
              name: `Creator_${page}_3`,
              avatar: "https://randomuser.me/api/portraits/women/65.jpg",
              subscribers: "3.8M",
            },
            title: `Don't miss this! Page ${page} #viral #mustwatch`,
            likes: Math.floor(Math.random() * 100000),
            dislikes: Math.floor(Math.random() * 5000),
            comments: Math.floor(Math.random() * 10000),
            views: "4.3M",
          },
        ])
      }, 1500)
    })
  }


  return (
    <Layout>
      <ReelsPage fetchShorts={fetchShorts} />
    </Layout>
  )
}
export default blips;
