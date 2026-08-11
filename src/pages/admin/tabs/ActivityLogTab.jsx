// src/components/tabs/adminTabs/ActivityLogTab.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { Table } from "antd";

const ActivityLogTab = () => {
  const columns = [
    {
      title: "ACTION PERFORMED",
      dataIndex: "actionPerformed",
      key: "actionPerformed",
      render: (text) => (
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#0F172A",
          }}
        >
          {text}
        </Typography>
      ),
    },
    {
      title: "IP ADDRESS",
      dataIndex: "ipAddress",
      key: "ipAddress",
      render: (text) => (
        <Typography
          sx={{
            fontSize: "13px",
            color: "#64748B",
            fontFamily: "monospace",
          }}
        >
          {text}
        </Typography>
      ),
    },
    {
      title: "DATE & TIME",
      dataIndex: "dateTime",
      key: "dateTime",
      render: (text) => (
        <Typography
          sx={{
            fontSize: "13px",
            color: "#64748B",
          }}
        >
          {text}
        </Typography>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      actionPerformed: "Updated Daily Fleet Rental Pricing",
      ipAddress: "192.168.1.45",
      dateTime: "Jul 21, 2026 - 11:20 AM",
    },
    {
      key: "2",
      actionPerformed: "Triggered Password Reset for Ahmad Hassan",
      ipAddress: "192.168.1.45",
      dateTime: "Jul 20, 2026 - 04:30 PM",
    },
    {
      key: "3",
      actionPerformed: "Exported Monthly Revenue Financial Report",
      ipAddress: "192.168.1.45",
      dateTime: "Jul 19, 2026 - 02:10 PM",
    },
  ];

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid rgba(226, 232, 240, 1)",
      }}
    >
      {/* 1. Title */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#0F172A",
          mb: 3,
        }}
      >
        Audit Activity Trail
      </Typography>

      {/* 2. Ant Design Table Wrapper */}
      <Box
        sx={{
          overflowX: "auto",
          "& .ant-table": {
            backgroundColor: "transparent",
          },
          "& .ant-table-thead > tr > th": {
            backgroundColor: "#F8FAFC",
            color: "#475569",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            borderBottom: "1px solid #E2E8F0",
            padding: "12px 16px",
          },
          "& .ant-table-tbody > tr > td": {
            borderBottom: "1px solid #F1F5F9",
            padding: "16px",
          },
          "& .ant-table-tbody > tr:last-child > td": {
            borderBottom: "none",
          },
          "& .ant-table-tbody > tr:hover > td": {
            backgroundColor: "#F8FAFC !important",
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          scroll={{ x: true }}
        />
      </Box>
    </Box>
  );
};

export default ActivityLogTab;