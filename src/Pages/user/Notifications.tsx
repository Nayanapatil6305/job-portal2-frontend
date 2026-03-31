import React, { useEffect, useState } from "react";
import {
  Card,
  List,
  Badge,
  Typography,
  Space,
  Tag,
  Tabs,
  Pagination,
  Spin,
} from "antd";
import {
  BellOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

type Category = "jobs" | "applications" | "system";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  category: Category;
  icon: React.ReactNode;
}

/* ---------------- MOCK API ---------------- */
const fetchNotifications = async (
  category: Category,
  page: number
): Promise<{ data: Notification[]; total: number }> => {
  await new Promise((res) => setTimeout(res, 500)); // simulate API delay

  const allData: Notification[] = [
    {
      id: 1,
      title: "New Job Alert",
      message: "React Developer role matches your profile.",
      time: "10 min ago",
      read: false,
      category: "jobs",
      icon: <BellOutlined />,
    },
    {
      id: 2,
      title: "Application Viewed",
      message: "Your application was viewed by HR.",
      time: "1 hour ago",
      read: false,
      category: "applications",
      icon: <FileTextOutlined />,
    },
    {
      id: 3,
      title: "Shortlisted",
      message: "You are shortlisted for UI Engineer role.",
      time: "1 day ago",
      read: true,
      category: "applications",
      icon: <CheckCircleOutlined />,
    },
    {
      id: 4,
      title: "Settings Updated",
      message: "Your account settings were updated successfully.",
      time: "2 days ago",
      read: true,
      category: "system",
      icon: <SettingOutlined />,
    },
  ];

  const filtered =
    category === "jobs"
      ? allData.filter((n) => n.category === "jobs")
      : category === "applications"
      ? allData.filter((n) => n.category === "applications")
      : allData.filter((n) => n.category === "system");

  return {
    data: filtered.slice((page - 1) * 5, page * 5),
    total: filtered.length,
  };
};

/* ---------------- MAIN PAGE ---------------- */
const Notifications = () => {
  const [category, setCategory] = useState<Category>("jobs");
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Notification[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const res = await fetchNotifications(category, page);
    setData(res.data);
    setTotal(res.total);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [category, page]);

  const markAsRead = (id: number) => {
    setData((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <Card title="Notifications">
      {/* Categories */}
      <Tabs
        activeKey={category}
        onChange={(key) => {
          setCategory(key as Category);
          setPage(1);
        }}
        items={[
          { key: "jobs", label: "Jobs" },
          { key: "applications", label: "Applications" },
          { key: "system", label: "System" },
        ]}
      />

      {/* List */}
      <Spin spinning={loading}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              onClick={() => markAsRead(item.id)}
              style={{
                cursor: "pointer",
                background: item.read ? "#fff" : "#f0f9ff",
                borderRadius: 8,
                padding: "12px 16px",
                marginBottom: 8,
              }}
            >
              <List.Item.Meta
                avatar={
                  <Badge status={item.read ? "default" : "processing"}>
                    {item.icon}
                  </Badge>
                }
                title={
                  <Space>
                    <Text strong>{item.title}</Text>
                    {!item.read && <Tag color="blue">NEW</Tag>}
                  </Space>
                }
                description={
                  <>
                    <Text>{item.message}</Text>
                    <br />
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {item.time}
                    </Text>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </Spin>

      {/* Pagination */}
      <Pagination
        current={page}
        pageSize={5}
        total={total}
        onChange={(p) => setPage(p)}
        style={{ marginTop: 16, textAlign: "right" }}
      />
    </Card>
  );
};

export default Notifications;
