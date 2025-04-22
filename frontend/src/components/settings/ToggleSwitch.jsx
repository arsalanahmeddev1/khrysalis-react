const ToggleSwitch = ({ id, label, description, checked, onChange, disabled = false }) => {
  return (
    <div className="flex items-start">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id={id}
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <div className={`w-[44px] h-[22px] rounded-full peer peer-focus:outline-none transition-colors duration-300
          ${disabled ? 'bg-gray-300' : 'bg-gray-200 dark:bg-gray-700  bg-gradient-to-r peer-checked:from-gradient-start peer-checked:to-gradient-end'}`}>
          <div className={`absolute top-0.5 left-0.5 w-[17px] h-[17px] bg-white rounded-full shadow-md transform transition-transform duration-300
            ${checked ? 'translate-x-5' : ''}`}></div>
        </div>
      </label>
      <div className="ms-3 text-sm">
        <label
          htmlFor={id}
          className={`font-medium ${disabled ? "text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-white"}`}
        >
          {label}
        </label>
        {description && (
          <p
            className={`text-xs mt-1 ${disabled ? "text-gray-400 dark:text-gray-500" : "text-gray-500 dark:text-gray-400"}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default ToggleSwitch;