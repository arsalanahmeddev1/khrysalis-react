import MusicCard from "./MusicCard"

const MusicGrid = ({ musicItems }) => {
  const sections = musicItems.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = []
    }
    acc[item.section].push(item)
    return acc
  }, {})

  return (
    <div className="music-grid space-y-8">
      {Object.entries(sections).map(([sectionName, items]) => (
        <div key={sectionName} className="section">
          <h2 className="text-lg font-semibold mb-4">{sectionName}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {items.map((item) => (
              <MusicCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MusicGrid
