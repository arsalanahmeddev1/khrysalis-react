"use client"

import { useState } from "react"
import SettingsSection from "./SettingsSection"
import ToggleSwitch from "./ToggleSwitch"
import FormSelect from "./FormSelect"

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    subscriptions: true,
    recommended: true,
    activitySharing: false,
    mentions: true,
    replies: true,
    channelActivity: true,
    premieres: true,
    liveStreams: true,
    emailNotifications: true,
    pushNotifications: true,
    emailFrequency: "daily",
  })

  const handleToggle = (setting) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const emailFrequencyOptions = [
    { value: "immediate", label: "Send immediately" },
    { value: "daily", label: "Daily digest" },
    { value: "weekly", label: "Weekly digest" },
    { value: "never", label: "Never" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>

      <SettingsSection title="General notifications">
        <div className="space-y-6">
          <ToggleSwitch
            id="subscriptions"
            label="Subscriptions"
            description="Notify me about activity from channels I'm subscribed to"
            checked={settings.subscriptions}
            onChange={() => handleToggle("subscriptions")}
          />

          <ToggleSwitch
            id="recommended"
            label="Recommended videos"
            description="Notify me about videos I might like based on what I watch"
            checked={settings.recommended}
            onChange={() => handleToggle("recommended")}
          />

          {/* <ToggleSwitch
            id="activitySharing"
            label="Activity sharing"
            description="Notify me when my activity is shared with others"
            checked={settings.activitySharing}
            onChange={() => handleToggle("activitySharing")}
          /> */}
        </div>
      </SettingsSection>

      {/* <SettingsSection title="Interactions">
        <div className="space-y-6">
          <ToggleSwitch
            id="mentions"
            label="Mentions"
            description="Notify me when someone mentions me in a comment or post"
            checked={settings.mentions}
            onChange={() => handleToggle("mentions")}
          />

          <ToggleSwitch
            id="replies"
            label="Replies"
            description="Notify me when someone replies to my comments"
            checked={settings.replies}
            onChange={() => handleToggle("replies")}
          />
        </div>
      </SettingsSection> */}

      <SettingsSection title="Channel notifications">
        <div className="space-y-6">
          <ToggleSwitch
            id="channelActivity"
            label="Channel activity"
            description="Notify me about activity on my channel"
            checked={settings.channelActivity}
            onChange={() => handleToggle("channelActivity")}
          />

          <ToggleSwitch
            id="premieres"
            label="Premieres"
            description="Notify me about upcoming premieres from channels I'm subscribed to"
            checked={settings.premieres}
            onChange={() => handleToggle("premieres")}
          />

          <ToggleSwitch
            id="liveStreams"
            label="Live streams"
            description="Notify me when channels I'm subscribed to start a live stream"
            checked={settings.liveStreams}
            onChange={() => handleToggle("liveStreams")}
          />
        </div>
      </SettingsSection>

      {/* <SettingsSection title="Notification delivery">
        <div className="space-y-6">
          <ToggleSwitch
            id="emailNotifications"
            label="Email notifications"
            description="Send notifications to my email address"
            checked={settings.emailNotifications}
            onChange={() => handleToggle("emailNotifications")}
          />

          <ToggleSwitch
            id="pushNotifications"
            label="Push notifications"
            description="Send notifications to my device"
            checked={settings.pushNotifications}
            onChange={() => handleToggle("pushNotifications")}
          />

          <FormSelect
            label="Email frequency"
            name="emailFrequency"
            value={settings.emailFrequency}
            onChange={handleChange}
            options={emailFrequencyOptions}
            disabled={!settings.emailNotifications}
          />
        </div>
      </SettingsSection> */}
    </div>
  )
}

export default NotificationSettings
