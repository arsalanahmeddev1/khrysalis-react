const FormButton = ({ children, variant = "primary", className = "", ...props }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-red-600 hover:bg-red-700 text-white"
      case "secondary":
        return "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
      case "danger":
        return "bg-red-600 hover:bg-red-700 text-white"
      default:
        return "bg-red-600 hover:bg-red-700 text-white"
    }
  }

  return (
    <button
      className={`px-4 py-2 rounded-full font-medium transition-colors ${getVariantClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default FormButton
