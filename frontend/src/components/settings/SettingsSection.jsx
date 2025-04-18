const SettingsSection = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">{title}</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        {children}
      </div>
    </div>
  )
}

export default SettingsSection
