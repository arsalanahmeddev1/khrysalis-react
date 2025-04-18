import { useState } from "react"
import SettingsSection from "./SettingsSection"
import ToggleSwitch from "./ToggleSwitch"
import FormButton from "./FormButton"

const AdvancedSettings = () => {
  const [settings, setSettings] = useState({
    enableStats: false,
    enableDebugMode: false,
    enableExperimentalFeatures: false,
    enableBackgroundPlayback: true,
    enablePictureInPicture: true,
    enableHardwareAcceleration: true,
  })

  const handleToggle = (setting) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  const handleClearCache = () => {
    // In a real app, this would clear the cache
    alert("Cache cleared successfully!")
  }

  const handleResetSettings = () => {
    // In a real app, this would reset all settings to default
    setSettings({
      enableStats: false,
      enableDebugMode: false,
      enableExperimentalFeatures: false,
      enableBackgroundPlayback: true,
      enablePictureInPicture: true,
      enableHardwareAcceleration: true,
    })
    alert("Settings reset to default!")
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Advanced settings</h1>

      <SettingsSection title="Developer options">
        <div className="space-y-6">
          <ToggleSwitch
            id="enableStats"
            label="Enable stats for nerds"
            description="Show detailed video statistics during playback"
            checked={settings.enableStats}
            onChange={() => handleToggle("enableStats")}
          />

          <ToggleSwitch
            id="enableDebugMode"
            label="Debug mode"
            description="Enable debug logging and developer tools"
            checked={settings.enableDebugMode}
            onChange={() => handleToggle("enableDebugMode")}
          />

          <ToggleSwitch
            id="enableExperimentalFeatures"
            label="Experimental features"
            description="Enable experimental features that are still in development"
            checked={settings.enableExperimentalFeatures}
            onChange={() => handleToggle("enableExperimentalFeatures")}
          />
        </div>
      </SettingsSection>

      <SettingsSection title="Playback options">
        <div className="space-y-6">
          <ToggleSwitch
            id="enableBackgroundPlayback"
            label="Background playback"
            description="Continue playing audio when the app is in the background"
            checked={settings.enableBackgroundPlayback}
            onChange={() => handleToggle("enableBackgroundPlayback")}
          />

          <ToggleSwitch
            id="enablePictureInPicture"
            label="Picture-in-picture"
            description="Allow videos to play in a small floating window when you navigate away"
            checked={settings.enablePictureInPicture}
            onChange={() => handleToggle("enablePictureInPicture")}
          />

          <ToggleSwitch
            id="enableHardwareAcceleration"
            label="Hardware acceleration"
            description="Use your device's hardware for better video performance"
            checked={settings.enableHardwareAcceleration}
            onChange={() => handleToggle("enableHardwareAcceleration")}
          />
        </div>
      </SettingsSection>

      <SettingsSection title="Maintenance">
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Clear temporary files or reset all settings to their default values.
          </p>
          <div className="flex space-x-4">
            <FormButton variant="secondary" onClick={handleClearCache}>
              Clear cache
            </FormButton>
            <FormButton variant="danger" onClick={handleResetSettings}>
              Reset all settings
            </FormButton>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection title="About">
        <div className="space-y-2">
          <p className="text-sm">
            <span className="text-gray-600 dark:text-gray-400">App version: </span>
            <span>2.15.0</span>
          </p>
          <p className="text-sm">
            <span className="text-gray-600 dark:text-gray-400">Device: </span>
            <span>Web Browser</span>
          </p>
          <p className="text-sm">
            <span className="text-gray-600 dark:text-gray-400">Terms of Service: </span>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              View
            </a>
          </p>
          <p className="text-sm">
            <span className="text-gray-600 dark:text-gray-400">Privacy Policy: </span>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              View
            </a>
          </p>
        </div>
      </SettingsSection>
    </div>
  )
}

export default AdvancedSettings
