// components/SkeletonLoader.jsx
import Skeleton from 'react-loading-skeleton'

const SkeletonLoader = ({ count = 1, ...props }) => (
  <Skeleton 
    baseColor="#e5e7eb"  // Light mode color
    highlightColor="#f3f4f6" // Shimmer color
    duration={1.5}  // Animation speed
    {...props}
  />
)

export default SkeletonLoader;