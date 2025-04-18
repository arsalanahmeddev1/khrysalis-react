"use client"

const ToggleSwitch = ({ id, label, description, checked, onChange, disabled = false }) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 appearance-none relative cursor-pointer"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
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

export default ToggleSwitch
