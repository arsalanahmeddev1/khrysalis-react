/**
 * Utility functions for working with localStorage
 */

// Storage keys
export const STORAGE_KEYS = {
  CHANNELS: "youtube_clone_channels",
  VIDEOS: "youtube_clone_videos",
  CURRENT_CHANNEL: "youtube_clone_current_channel",
  USER_SETTINGS: "youtube_clone_user_settings",
}

/**
 * Get data from localStorage
 * @param {string} key - The storage key
 * @param {any} defaultValue - Default value if key doesn't exist
 * @returns {any} The stored value or default value
 */
export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error(`Error getting ${key} from localStorage:`, error)
    return defaultValue
  }
}

/**
 * Save data to localStorage
 * @param {string} key - The storage key
 * @param {any} value - Value to store
 * @returns {boolean} Success status
 */
export const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error)
    return false
  }
}

/**
 * Remove data from localStorage
 * @param {string} key - The storage key
 */
export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing ${key} from localStorage:`, error)
  }
}

/**
 * Clear all app data from localStorage
 */
export const clearAllStorage = () => {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key)
    })
  } catch (error) {
    console.error("Error clearing localStorage:", error)
  }
}
