"use client"

import { useState } from "react"
import SettingsSection from "./SettingsSection"
import ToggleSwitch from "./ToggleSwitch"
import FormSelect from "./FormSelect"
import FormRadioGroup from "./FormRadioGroup"

const DownloadsSettings = () => {
  const [settings, setSettings] = useState({
    downloadOverWifi: true,
    downloadQuality: "720p",
    storageLocation: "internal",
    deleteWatched: false,
    autoDownload: false,
    downloadLimit: "10gb",
  })

  const handleToggle = (setting) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name, value) => {
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const qualityOptions = [
    { value: "144p", label: "144p" },
    { value: "240p", label: "240p" },
    { value: "360p", label: "360p" },
    { value: "480p", label: "480p" },
    { value: "720p", label: "720p" },
    { value: "1080p", label: "1080p" },
  ]

  const storageOptions = [
    { value: "internal", label: "Internal storage", description: "Save videos to your device's internal storage" },
    { value: "sd_card", label: "SD card", description: "Save videos to your SD card" },
  ]

  const downloadLimitOptions = [
    { value: "2gb", label: "2 GB" },
    { value: "5gb", label: "5 GB" },
    { value: "10gb", label: "10 GB" },
    { value: "20gb", label: "20 GB" },
    { value: "unlimited", label: "Unlimited" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Downloads</h1>

      <SettingsSection title="Download settings">
        <div className="space-y-6">
          <ToggleSwitch
            id="downloadOverWifi"
            label="Download over Wi-Fi only"
            description="Only download videos when connected to Wi-Fi"
            checked={settings.downloadOverWifi}
            onChange={() => handleToggle("downloadOverWifi")}
          />

          <FormSelect
            label="Download quality"
            name="downloadQuality"
            value={settings.downloadQuality}
            onChange={handleChange}
            options={qualityOptions}
          />

          <FormRadioGroup
            label="Storage location"
            name="storageLocation"
            value={settings.storageLocation}
            onChange={(value) => handleRadioChange("storageLocation", value)}
            options={storageOptions}
          />
        </div>
      </SettingsSection>

      <SettingsSection title="Download management">
        <div className="space-y-6">
          <ToggleSwitch
            id="deleteWatched"
            label="Delete watched downloads"
            description="Automatically delete downloaded videos after you've watched them"
            checked={settings.deleteWatched}
            onChange={() => handleToggle("deleteWatched")}
          />

          <ToggleSwitch
            id="autoDownload"
            label="Auto-download"
            description="Automatically download videos from channels you're subscribed to"
            checked={settings.autoDownload}
            onChange={() => handleToggle("autoDownload")}
          />

          <FormSelect
            label="Download limit"
            name="downloadLimit"
            value={settings.downloadLimit}
            onChange={handleChange}
            options={downloadLimitOptions}
          />
        </div>
      </SettingsSection>

      <SettingsSection title="Manage downloads">
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            You have 0 videos downloaded, using 0 MB of storage.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              View downloads
            </button>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Delete all downloads
            </button>
          </div>
        </div>
      </SettingsSection>
    </div>
  )
}

export default DownloadsSettings
