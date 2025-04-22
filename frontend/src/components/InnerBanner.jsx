import Skeleton from "react-loading-skeleton"
const InnerBanner = ({ loading, description, title }) => {
  if (loading) {
    return (
      <div className="w-full bg-gray-100 dark:bg-gray-800 mb-4">
        <div className="max-w-[1560px] mx-auto px-4 py-6">
          <Skeleton height={250} className="rounded-[12px]" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-gradient-to-r from-gradient-start to-gradient-end mb-4 rounded-[12px]">
      <div className="max-w-[1560px] mx-auto px-4 py-6">
        <div className="relative h-[250px] rounded-xl overflow-hidden">
          <img
            src="https://i.ytimg.com/vi/TcMBFSGVi1c/maxresdefault.jpg"
            alt="Gaming on Khrysalis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
            <h1 className="text-white text-3xl font-bold mb-2">{title}</h1>
            <p className="text-white text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnerBanner
