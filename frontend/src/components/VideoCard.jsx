import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const VideoCard = ({
  thumbnail,
  label,
  profileImage,
  author,
  title,
  layout = "large",
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = thumbnail;
    img.onload = () => setIsLoading(false);
  }, [thumbnail]);

  return (
    <div
      className={`relative ${layout === "simple" ? "w-1/2" : "w-full"} overflow-hidden group`}
    >
      {isLoading ? (
        <div className="w-full h-[230px] md:h-[333px] rounded-lg">
          <Skeleton height="100%" width="100%" borderRadius={12} />
        </div>
      ) : (
        <>
          <img
            src={thumbnail}
            className="h-full w-full object-cover rounded-lg max-h-[408px] cursor-pointer"
            alt={title || "video thumbnail"}
          />

          <span className="absolute text-white right-2 top-2 bg-gray-800 px-2 py-1 rounded-lg text-sm">
            {label}
          </span>

          {/* Bottom Info Panel - shows on hover */}
          <div
            className={`
              absolute bottom-2 left-3 text-white
              opacity-0 translate-y-6
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-500
            `}
          >
            {title && <p className="font-semibold">{title}</p>}
            <div className="flex items-center gap-x-2 mt-1">
              <img src={profileImage} className="h-6 w-6 rounded-full" alt="Author" />
              <span className="text-sm">{author}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoCard;
