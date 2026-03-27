import React from "react";
import { List, Card, Typography, Tag } from "antd";

const { Title } = Typography;

const Interviews: React.FC = () => {
  const interviews = [
    {
      candidate: "Rahul Sharma",
      date: "10 Feb 2026",
      status: "Scheduled",
    },
    {
      candidate: "Sneha Patil",
      date: "12 Feb 2026",
      status: "Completed",
    },

        {
      candidate: " Naina Patil",
      date: "14 march 2026",
      status: "Pending",
    },

        {
      candidate: "Sneha Patil",
      date: "15 Feb 2026",
      status: "Completed",
    },
        {
      candidate: "Rahul Sharma",
      date: "10 Feb 2026",
      status: "Scheduled",
    },

        {
      candidate: "Rahul Sharma",
      date: "10 Feb 2026",
      status: "Scheduled",
    },


  ];

  return (
    <>
      <Title level={3}>Interviews</Title>

      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={interviews}
        renderItem={(item) => (
          <List.Item>
            <Card hoverable>
              <p><b>Candidate:</b> {item.candidate}</p>
              <p><b>Date:</b> {item.date}</p>
              {/* <Tag color={item.status === "Scheduled" ? "blue" : "green" }>
                {item.status}
              </Tag> */}
                <Tag color={item.status === "Pending" ? "red" : "purple" }>
                {item.status}
              </Tag>

            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default Interviews;
