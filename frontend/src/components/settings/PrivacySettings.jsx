"use client"

import { useState } from "react"
import SettingsSection from "./SettingsSection"
import ToggleSwitch from "./ToggleSwitch"
import FormSelect from "./FormSelect"
import FormButton from "./FormButton"

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    keepHistoryPaused: false,
    pauseWatchHistory: false,
    pauseSearchHistory: false,
    manageActivityData: true,
    showSubscriptions: true,
    showLikedVideos: true,
    showSavedPlaylists: true,
    adPersonalization: true,
    cookiePreference: "all",
  })

  const handleToggle = (setting) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const cookieOptions = [
    { value: "all", label: "Accept all cookies" },
    { value: "necessary", label: "Only necessary cookies" },
    { value: "custom", label: "Custom settings" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Privacy</h1>

      <SettingsSection title="History & privacy">
        <div className="space-y-6">
          <ToggleSwitch
            id="keepHistoryPaused"
            label="Keep history paused"
            description="YouTube won't save your watch and search history while this is turned on"
            checked={settings.keepHistoryPaused}
            onChange={() => handleToggle("keepHistoryPaused")}
          />

          <ToggleSwitch
            id="pauseWatchHistory"
            label="Pause watch history"
            description="YouTube won't remember what videos you've watched"
            checked={settings.pauseWatchHistory}
            onChange={() => handleToggle("pauseWatchHistory")}
            disabled={settings.keepHistoryPaused}
          />

          <ToggleSwitch
            id="pauseSearchHistory"
            label="Pause search history"
            description="YouTube won't remember what you search for"
            checked={settings.pauseSearchHistory}
            onChange={() => handleToggle("pauseSearchHistory")}
            disabled={settings.keepHistoryPaused}
          />

          <div className="pt-2">
            <FormButton variant="secondary">Clear all watch history</FormButton>
            <FormButton variant="secondary" className="ml-4">
              Clear all search history
            </FormButton>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection title="Activity sharing">
        <div className="space-y-6">
          <ToggleSwitch
            id="manageActivityData"
            label="Manage activity data"
            description="Control what activity data is saved to your Google account"
            checked={settings.manageActivityData}
            onChange={() => handleToggle("manageActivityData")}
          />

          <ToggleSwitch
            id="showSubscriptions"
            label="Show subscriptions"
            description="Make your subscriptions visible to others"
            checked={settings.showSubscriptions}
            onChange={() => handleToggle("showSubscriptions")}
          />

          <ToggleSwitch
            id="showLikedVideos"
            label="Show liked videos"
            description="Make your liked videos visible to others"
            checked={settings.showLikedVideos}
            onChange={() => handleToggle("showLikedVideos")}
          />

          <ToggleSwitch
            id="showSavedPlaylists"
            label="Show saved playlists"
            description="Make your saved playlists visible to others"
            checked={settings.showSavedPlaylists}
            onChange={() => handleToggle("showSavedPlaylists")}
          />
        </div>
      </SettingsSection>

      <SettingsSection title="Ads & cookies">
        <div className="space-y-6">
          <ToggleSwitch
            id="adPersonalization"
            label="Ad personalization"
            description="Allow YouTube to show you personalized ads based on your activity"
            checked={settings.adPersonalization}
            onChange={() => handleToggle("adPersonalization")}
          />

          <FormSelect
            label="Cookie preferences"
            name="cookiePreference"
            value={settings.cookiePreference}
            onChange={handleChange}
            options={cookieOptions}
          />

          <div className="pt-2">
            <FormButton variant="secondary">Manage your Google Ad settings</FormButton>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection title="Data download">
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            You can download a copy of all your YouTube data, including your videos, comments, and more.
          </p>
          <FormButton variant="secondary">Download your data</FormButton>
        </div>
      </SettingsSection>
    </div>
  )
}

export default PrivacySettings
