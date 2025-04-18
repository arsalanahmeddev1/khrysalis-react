"use client"

import { useState, useEffect } from "react"
import SettingsSection from "./SettingsSection"
import FormRadioGroup from "./FormRadioGroup"
import ToggleSwitch from "./ToggleSwitch"

const AppearanceSettings = () => {
  const [settings, setSettings] = useState({
    theme: "system",
    compactMode: false,
    reducedMotion: false,
    fontSize: "medium",
    language: "english",
  })

  // Update theme when settings change
  useEffect(() => {
    const root = document.documentElement
    if (settings.theme === "dark") {
      root.classList.add("dark")
    } else if (settings.theme === "light") {
      root.classList.remove("dark")
    } else {
      // System preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }
  }, [settings.theme])

  const handleRadioChange = (name, value) => {
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleToggle = (setting) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  const themeOptions = [
    { value: "light", label: "Light", description: "Light background with dark text" },
    { value: "dark", label: "Dark", description: "Dark background with light text" },
    { value: "system", label: "Use device theme", description: "Automatically match your device theme" },
  ]

  const fontSizeOptions = [
    { value: "small", label: "Small", description: "Smaller text size" },
    { value: "medium", label: "Medium", description: "Default text size" },
    { value: "large", label: "Large", description: "Larger text size" },
    { value: "x-large", label: "Extra Large", description: "Much larger text size" },
  ]

  const languageOptions = [
    { value: "english", label: "English", description: "English (United States)" },
    { value: "spanish", label: "Spanish", description: "Español" },
    { value: "french", label: "French", description: "Français" },
    { value: "german", label: "German", description: "Deutsch" },
    { value: "japanese", label: "Japanese", description: "日本語" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Appearance</h1>

      <SettingsSection title="Theme">
        <div className="space-y-6">
          <FormRadioGroup
            label="Theme"
            name="theme"
            value={settings.theme}
            onChange={(value) => handleRadioChange("theme", value)}
            options={themeOptions}
          />

          <ToggleSwitch
            id="compactMode"
            label="Compact mode"
            description="Show more content at once with a denser layout"
            checked={settings.compactMode}
            onChange={() => handleToggle("compactMode")}
          />

          <ToggleSwitch
            id="reducedMotion"
            label="Reduced motion"
            description="Reduce the amount of animations and motion effects"
            checked={settings.reducedMotion}
            onChange={() => handleToggle("reducedMotion")}
          />
        </div>
      </SettingsSection>

      <SettingsSection title="Text">
        <div className="space-y-6">
          <FormRadioGroup
            label="Font size"
            name="fontSize"
            value={settings.fontSize}
            onChange={(value) => handleRadioChange("fontSize", value)}
            options={fontSizeOptions}
          />
        </div>
      </SettingsSection>

      <SettingsSection title="Language">
        <div className="space-y-6">
          <FormRadioGroup
            label="Language"
            name="language"
            value={settings.language}
            onChange={(value) => handleRadioChange("language", value)}
            options={languageOptions}
          />
        </div>
      </SettingsSection>
    </div>
  )
}

export default AppearanceSettings
