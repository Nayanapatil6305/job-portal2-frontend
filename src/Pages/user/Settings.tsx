import React, { useState } from "react";
import { Card, Switch, Space, Typography, Divider, message } from "antd";

const { Title, Text } = Typography;

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    emailNotifications: true,
    jobAlerts: true,
  });

  const handleChange = (key: keyof typeof settings, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));

    // Simulate API call
    message.success("Settings updated");
  };

  return (
    <Card>
      {/* Page Header */}
      <Title level={4}>Account Settings</Title>
      <Text type="secondary">
        Manage your preferences and notification settings
      </Text>

      <Divider />

      {/* Appearance */}
      <Title level={5}>Appearance</Title>
      <Space
        direction="vertical"
        size="large"
        style={{ width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Text strong>Dark Mode</Text>
            <br />
            <Text type="secondary">
              Enable dark theme for better night viewing
            </Text>
          </div>
          <Switch
            checked={settings.darkMode}
            onChange={(checked) =>
              handleChange("darkMode", checked)
            }
          />
        </div>

        <Divider />

        {/* Notifications */}
        <Title level={5}>Notifications</Title>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Text strong>Email Notifications</Text>
            <br />
            <Text type="secondary">
              Receive updates about applications and messages
            </Text>
          </div>
          <Switch
            checked={settings.emailNotifications}
            onChange={(checked) =>
              handleChange("emailNotifications", checked)
            }
          />
        </div>

        <Divider />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Text strong>Job Alerts</Text>
            <br />
            <Text type="secondary">
              Get notified when new jobs match your profile
            </Text>
          </div>
          <Switch
            checked={settings.jobAlerts}
            onChange={(checked) =>
              handleChange("jobAlerts", checked)
            }
          />
        </div>
      </Space>
    </Card>
  );
};

export default Settings;
