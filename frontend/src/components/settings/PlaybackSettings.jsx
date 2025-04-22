"use client"

import { useState } from "react"
import SettingsSection from "./SettingsSection"
import ToggleSwitch from "./ToggleSwitch"
import FormSelect from "./FormSelect"
import FormRadioGroup from "./FormRadioGroup"

const PlaybackSettings = () => {
  const [settings, setSettings] = useState({
    autoplay: true,
    subtitles: false,
    qualityOnMobile: "auto",
    qualityOnWifi: "1080p",
    playbackSpeed: "1",
    miniplayer: true,
    ambientMode: true,
    dataUsage: "balanced",
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
    { value: "auto", label: "Auto (recommended)" },
    { value: "144p", label: "144p" },
    { value: "240p", label: "240p" },
    { value: "360p", label: "360p" },
    { value: "480p", label: "480p" },
    { value: "720p", label: "720p" },
    { value: "1080p", label: "1080p" },
    { value: "1440p", label: "1440p" },
    { value: "2160p", label: "2160p (4K)" },
  ]

  const speedOptions = [
    { value: "0.25", label: "0.25x" },
    { value: "0.5", label: "0.5x" },
    { value: "0.75", label: "0.75x" },
    { value: "1", label: "Normal" },
    { value: "1.25", label: "1.25x" },
    { value: "1.5", label: "1.5x" },
    { value: "1.75", label: "1.75x" },
    { value: "2", label: "2x" },
  ]

  const dataUsageOptions = [
    { value: "data_saver", label: "Data saver", description: "Lower quality video to save data" },
    { value: "balanced", label: "Balanced", description: "Balance quality and data usage" },
    { value: "higher_quality", label: "Higher quality", description: "Higher quality video, uses more data" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Playback and performance</h1>

      <SettingsSection title="Autoplay">
        <div className="space-y-6">
          <ToggleSwitch
            id="autoplay"
            label="Autoplay next video"
            description="When enabled, a new video will play automatically after the current one finishes"
            checked={settings.autoplay}
            onChange={() => handleToggle("autoplay")}
          />

          <ToggleSwitch
            id="miniplayer"
            label="Miniplayer"
            description="Show miniplayer when scrolling outside of video player"
            checked={settings.miniplayer}
            onChange={() => handleToggle("miniplayer")}
          />
        </div>
      </SettingsSection>

      {/* <SettingsSection title="Video quality">
        <div className="space-y-6">
          <FormSelect
            label="Video quality on mobile networks"
            name="qualityOnMobile"
            value={settings.qualityOnMobile}
            onChange={handleChange}
            options={qualityOptions}
          />

          <FormSelect
            label="Video quality on Wi-Fi"
            name="qualityOnWifi"
            value={settings.qualityOnWifi}
            onChange={handleChange}
            options={qualityOptions}
          />

          <FormRadioGroup
            label="Data usage"
            name="dataUsage"
            value={settings.dataUsage}
            onChange={(value) => handleRadioChange("dataUsage", value)}
            options={dataUsageOptions}
          />
        </div>
      </SettingsSection> */}

      {/* <SettingsSection title="Playback">
        <div className="space-y-6">
          <FormSelect
            label="Default playback speed"
            name="playbackSpeed"
            value={settings.playbackSpeed}
            onChange={handleChange}
            options={speedOptions}
          />

          <ToggleSwitch
            id="subtitles"
            label="Always show captions"
            description="Automatically show captions on videos when available"
            checked={settings.subtitles}
            onChange={() => handleToggle("subtitles")}
          />

          <ToggleSwitch
            id="ambientMode"
            label="Ambient mode"
            description="Subtle lighting effect around the video player that adjusts based on video content"
            checked={settings.ambientMode}
            onChange={() => handleToggle("ambientMode")}
          />
        </div>
      </SettingsSection> */}
    </div>
  )
}

export default PlaybackSettings
