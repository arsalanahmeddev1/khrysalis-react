// components/Skeleton.jsx
const Skeleton = ({ 
  type = 'rectangle', 
  width = '100%', 
  height = '100%', 
  rounded = 'none',
  className = '' 
}) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700 animate-pulse';

  const shapeClasses = {
    rectangle: '',
    circle: 'rounded-full',
    text: 'h-4',
    avatar: 'rounded-full h-10 w-10',
  };

  return (
    <div
      className={`${baseClasses} ${shapeClasses[type]} ${className}`}
      style={{ width, height, borderRadius: rounded }}
    />
  );
};

export default Skeleton;