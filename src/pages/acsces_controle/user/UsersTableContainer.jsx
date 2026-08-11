// src/components/UsersTableContainer.jsx
import React, { useState } from "react";
import { Box, Tooltip, IconButton, Avatar, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Table, Tag } from "antd";
import "antd/dist/reset.css";
import trashIcon from "../../../assets/icon_SVG/trash.svg";

import TravelerDetailsPage from "./TravelerDetailsPage";

const UsersTableContainer = ({ searchQuery, statusFilter, timeFilter }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const dataSource = [
    {
      key: "1",
      id: "TRP-9024-UX",
      name: "Jane Cooper",
      email: "useremail@tripooo.com",
      status: "Active",
      registrationDate: "Jan 12, 2026",
      initials: "JC",
      avatarBg: "#E0F2FE",
      avatarColor: "#0284C7",
    },
    {
      key: "2",
      id: "TRP-1104-GD",
      name: "Wade Warren",
      email: "useremail@tripooo.com",
      status: "Active",
      registrationDate: "Mar 04, 2026",
      initials: "WW",
      avatarBg: "#E0F2FE",
      avatarColor: "#0284C7",
    },
  ];

  const getStatusTag = (status) => {
    switch (status) {
      case "Active":
        return (
          <Tag style={{ backgroundColor: "#DCFCE7", color: "#16A34A", border: "none", borderRadius: "4px", padding: "2px 8px", fontWeight: 600, fontSize: "12px" }}>
            Active
          </Tag>
        );
      case "Pending":
        return (
          <Tag style={{ backgroundColor: "#FEF3C7", color: "#D97706", border: "none", borderRadius: "4px", padding: "2px 8px", fontWeight: 600, fontSize: "12px" }}>
            Pending
          </Tag>
        );
      case "Suspended":
        return (
          <Tag style={{ backgroundColor: "#FEE2E2", color: "#DC2626", border: "none", borderRadius: "4px", padding: "2px 8px", fontWeight: 600, fontSize: "12px" }}>
            Suspended
          </Tag>
        );
      default:
        return <Tag>{status}</Tag>;
    }
  };

  const columns = [
    {
      title: "USER PROFILE",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <Box
          onClick={() => setSelectedUser(record)}
          sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: "pointer", width: "fit-content", "&:hover .user-name": { color: "#014BA8", textDecoration: "underline" } }}
        >
          <Avatar sx={{ bgcolor: record.avatarBg, color: record.avatarColor, fontWeight: 600, fontSize: "14px", width: 38, height: 38 }}>
            {record.initials}
          </Avatar>
          <Box>
            <Typography className="user-name" sx={{ fontSize: "14px", fontWeight: 600, color: "#1E293B", lineHeight: 1.2, transition: "color 0.2s" }}>
              {record.name}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#64748B", mt: "2px" }}>
              {record.email}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      title: "UNIQUE SYSTEM ID",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <Typography sx={{ fontSize: "13px", color: "#64748B", fontWeight: 500 }}>
          {text}
        </Typography>
      ),
    },
    {
      title: "Verification Status",
      dataIndex: "status",
      key: "status",
      render: (status) => getStatusTag(status),
    },
    {
      title: "REGISTRATION DATE",
      dataIndex: "registrationDate",
      key: "registrationDate",
      render: (text) => (
        <Typography sx={{ fontSize: "13px", color: "#64748B" }}>
          {text}
        </Typography>
      ),
    },
    {
      title: "QUICK ACTIONS",
      key: "actions",
      align: "right",
      render: (_, record) => (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 0.5 }}>
          <Tooltip title="View Traveler Details">
            <IconButton size="small" onClick={() => setSelectedUser(record)} sx={{ color: "#64748B", "&:hover": { color: "#014BA8" } }}>
              <VisibilityOutlinedIcon sx={{fontSize:"20px"}} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Suspend / Block User">
            <IconButton size="small" sx={{ color: "#64748B", "&:hover": { color: "#D97706" } }}>
              <BlockOutlinedIcon  sx={{fontSize:"20px"}} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete User Profile">
            <IconButton size="small" sx={{ color: "#EF4444", "&:hover": { color: "#B91C1C" } }}>
                 <img src={trashIcon} alt="Trash" width={20} height={20} />
             
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  if (selectedUser) {
    return <TravelerDetailsPage user={selectedUser} onBack={() => setSelectedUser(null)} />;
  }

  return (
    <Box sx={{ width: "100%", maxWidth: "1120px", mx: "auto", boxSizing: "border-box" }}>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          border: "1px solid rgba(226, 232, 240, 1)",
          overflow: "hidden",
          width: "100%",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.02)",
          "& .ant-table-thead > tr > th": {
            backgroundColor: "#F8FAFC !important",
            fontSize: "12px !important",
            fontWeight: "700 !important",
            color: "#64748B !important",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            borderBottom: "1px solid #E2E8F0 !important",
            padding: "14px 16px !important",
          },
          "& .ant-table-tbody > tr > td": {
            borderBottom: "1px solid #F1F5F9",
            padding: "16px !important",
          },
          "& .ant-table-tbody > tr:last-child > td": {
            borderBottom: "none",
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{
            position: ["bottomLeft"],
            defaultPageSize: 2,
            showSizeChanger: false,
          }}
          scroll={{ x: 800 }}
        />
      </Box>
    </Box>
  );
};

export default UsersTableContainer;