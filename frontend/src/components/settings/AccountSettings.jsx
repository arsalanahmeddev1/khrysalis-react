import { useState } from "react"
import SettingsSection from "./SettingsSection"
import FormInput from "./FormInput"
import FormButton from "./FormButton"

const AccountSettings = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    channel: "John's Channel",
    handle: "@johndoe",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    // In a real app, you would save the data to a backend
    console.log("Saving account data:", userData)
    // Show success message
    alert("Account settings saved successfully!")
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Account</h1>

      <SettingsSection title="Your YouTube channel">
        <form onSubmit={handleSave} className="space-y-4">
          <FormInput
            label="Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <FormInput
            label="Channel name"
            name="channel"
            value={userData.channel}
            onChange={handleChange}
            placeholder="Enter your channel name"
          />
          <FormInput
            label="Handle"
            name="handle"
            value={userData.handle}
            onChange={handleChange}
            placeholder="@username"
            helpText="Your unique handle makes it easier for people to mention you and visit your channel"
          />
          <div className="flex justify-end">
            <FormButton type="submit">Save</FormButton>
          </div>
        </form>
      </SettingsSection>

      <SettingsSection title="Personal information">
        <form onSubmit={handleSave} className="space-y-4">
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <FormInput
            label="Phone number"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          <div className="flex justify-end">
            <FormButton type="submit">Save</FormButton>
          </div>
        </form>
      </SettingsSection>

      <SettingsSection title="Password">
        <form onSubmit={handleSave} className="space-y-4">
          <FormInput
            label="Current password"
            name="currentPassword"
            type="password"
            placeholder="Enter your current password"
          />
          <FormInput label="New password" name="newPassword" type="password" placeholder="Enter your new password" />
          <FormInput
            label="Confirm new password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your new password"
          />
          <div className="flex justify-end">
            <FormButton type="submit">Change password</FormButton>
          </div>
        </form>
      </SettingsSection>

      <SettingsSection title="Account management">
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="font-medium mb-2">Delete channel</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Permanently delete your YouTube channel and all your content
            </p>
            <FormButton variant="danger">Delete channel</FormButton>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="font-medium mb-2">Download your data</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Get a copy of your YouTube data, including your videos, comments, and more
            </p>
            <FormButton variant="secondary">Download data</FormButton>
          </div>
        </div>
      </SettingsSection>
    </div>
  )
}

export default AccountSettings
