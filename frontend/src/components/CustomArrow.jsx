const CustomArrow = ({ onClick, direction, darkMode = true }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 z-10 w-7 bg-gray-700 dark:bg-transparent dark:hover:bg-gray-700 h-7 flex items-center justify-center rounded-full transform -translate-y-1/2
        ${darkMode ? 
          'hover:bg-gray-700 text-white' : 
          'hover:bg-gray-300 text-gray-800'
        }
        shadow-lg transition-all duration-300 hover:scale-1
        ${direction === 'prev' ? 'left-[-18px]' : 'right-[-18px]'}`}
    >
      {direction === 'prev' ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
};

export default CustomArrow;