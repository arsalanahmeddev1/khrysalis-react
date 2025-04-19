const FormButton = ({ children, variant = "primary", className = "", ...props }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-gradient-start to-gradient-end hover:from-gradient-start-hover hover:to-gradient-end-hover transition-all duration-300 text-white"
      case "secondary":
        return "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
      case "danger":
        return "bg-gradient-to-r from-gradient-start to-gradient-end hover:from-gradient-start-hover hover:to-gradient-end-hover transition-all duration-300 text-white"
      default:
        return "bg-gradient-to-r from-gradient-start to-gradient-end hover:from-gradient-start-hover hover:to-gradient-end-hover transition-all duration-300 text-white"
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
