import React, { useState } from "react";
import { Table, Tag, Avatar, Space, Button, ConfigProvider } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import AdminDetailsPage from "./AdminDetailsPage";
import trashIcon from "../../assets/icon_SVG/trash.svg";

const initialData = [
  {
    key: "1",
    id: "1",
    name: "Jane Cooper",
    email: "useremail@tripooo.com",
    avatar: "JC",
    role: "Super Admin",
    status: "Active",
    lastActive: "Jan 12, 2026",
  },
  {
    key: "2",
    id: "2",
    name: "Wade Warren",
    email: "useremail@tripooo.com",
    avatar: "WW",
    role: "Operations Manager",
    status: "Active",
    lastActive: "Mar 04, 2026",
  },
  {
    key: "3",
    id: "3",
    name: "Esther Howard",
    email: "useremail@tripooo.com",
    avatar: "EH",
    role: "Editor",
    status: "Pending",
    lastActive: "Mar 09, 2026",
  },
  {
    key: "4",
    id: "4",
    name: "Leslie Alexander",
    email: "useremail@tripooo.com",
    avatar: "LA",
    role: "Super Agent",
    status: "Suspended",
    lastActive: "Mar 09, 2026",
  },
];

const AdminTablePage = () => {
  const [selectedAdminId, setSelectedAdminId] = useState(null);

  const handleOpenDetails = (id) => {
    setSelectedAdminId(id);
  };

  const handleBackToTable = () => {
    setSelectedAdminId(null);
  };

  const renderStatusTag = (status) => {
    let color = "";
    let bgColor = "";

    switch (status) {
      case "Active":
        color = "#10B981";
        bgColor = "#ECFDF5";
        break;
      case "Pending":
        color = "#F59E0B";
        bgColor = "#FFFBEB";
        break;
      case "Suspended":
        color = "#EF4444";
        bgColor = "#FEF2F2";
        break;
      default:
        color = "#6B7280";
        bgColor = "#F3F4F6";
    }

    return (
      <Tag
        style={{
          color: color,
          backgroundColor: bgColor,
          border: "none",
          borderRadius: "6px",
          padding: "2px 10px",
          fontWeight: 600,
          fontSize: "12px",
        }}
      >
        {status}
      </Tag>
    );
  };

  const columns = [
    {
      title: "ADMIN USER",
      dataIndex: "name",
      key: "name",
      width: 280,
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Avatar
            style={{
              backgroundColor: "#E0F2FE",
              color: "#0284C7",
              fontWeight: 600,
              fontSize: "13px",
              flexShrink: 0,
            }}
            size={40}
          >
            {record.avatar}
          </Avatar>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 700, color: "#0F172A", fontSize: "14px" }}>
              {record.name}
            </span>
            <span style={{ color: "#94A3B8", fontSize: "12px" }}>
              {record.email}
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "ROLE",
      dataIndex: "role",
      key: "role",
      width: 200,
      render: (role) => (
        <span style={{ color: "#334155", fontWeight: 600, fontSize: "13px" }}>
          {role}
        </span>
      ),
    },
    {
      title: "Verification Status",
      dataIndex: "status",
      key: "status",
      width: 180,
      render: (status) => renderStatusTag(status),
    },
    {
      title: "LAST ACTIVE",
      dataIndex: "lastActive",
      key: "lastActive",
      width: 160,
      render: (date) => (
        <span style={{ color: "#64748B", fontSize: "13px" }}>{date}</span>
      ),
    },
    {
      title: "QUICK ACTIONS",
      key: "actions",
      width: 140,
      fixed: "right",
      render: (_, record) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EyeOutlined style={{ color: "#64748B", fontSize: "20px" }} />}
            onClick={(e) => {
              e.stopPropagation();
              handleOpenDetails(record.id);
            }}
          />
          <Button
            type="text"
            icon={<NotInterestedOutlinedIcon style={{ color: "#64748B", fontSize: "20px" }} />}
            onClick={(e) => e.stopPropagation()}
          />
          <Button
            type="text"
            icon={<img src={trashIcon} alt="Trash" width={20} height={20} />}
            onClick={(e) => e.stopPropagation()}
          />
        </Space>
      ),
    },
  ];

  if (selectedAdminId) {
    return <AdminDetailsPage adminId={selectedAdminId} onBack={handleBackToTable} />;
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#F8FAFC",
            headerColor: "#475569",
            headerSplitColor: "transparent",
            rowHoverBg: "#F1F5F9",
          },
        },
      }}
    >
      <div
        style={{
          width: "100%", // تم التعديل إلى 100% وإلغاء maxWidth و margin: 0 auto
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          border: "1px solid #E2E8F0",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <Table
          columns={columns}
          dataSource={initialData}
          scroll={{ x: 900 }}
          onRow={(record) => ({
            onClick: () => handleOpenDetails(record.id),
            style: { cursor: "pointer" },
          })}
          pagination={{
            pageSize: 5,
            showSizeChanger: false,
            showTotal: (total, range) =>
              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
            style: { padding: "12px 24px", margin: 0 },
          }}
        />
      </div>
    </ConfigProvider>
  );
};

export default AdminTablePage;