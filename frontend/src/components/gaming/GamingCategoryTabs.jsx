import Skeleton from "react-loading-skeleton"
const GamingCategoryTabs = ({ categories, activeCategory, onCategoryChange, loading }) => {
  if (loading && !categories.length) {
    return (
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2 min-w-max py-2">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} width={120} height={32} className="rounded-full" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex space-x-2 min-w-max py-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default GamingCategoryTabs
