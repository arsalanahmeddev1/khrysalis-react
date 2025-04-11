import Skeleton from "./Skeleton-old";
const VideoCardSkeleton = ({ isLarge = false }) => (
  <div className={`relative ${isLarge ? 'md:w-[55%]' : 'md:w-[45%]'} w-full`}>
    <Skeleton 
      type="rectangle" 
      height={isLarge ? '333px' : '160px'} 
      rounded="lg"
    />
    
    <div className="absolute right-2 top-2">
      <Skeleton type="rectangle" width="40px" height="24px" rounded="lg" />
    </div>

    <div className="mt-2 flex items-center gap-2">
      <Skeleton type="avatar" />
      <Skeleton type="text" width="80px" />
    </div>

    {isLarge && <Skeleton type="text" width="70%" className="mt-2" />}
  </div>
);

export default VideoCardSkeleton;