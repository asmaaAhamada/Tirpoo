// src/components/CompaniesTable.jsx
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Table, Tag, Avatar, Space } from "antd";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CompanyDetails from "../CompanyDetails";

// استدعاء كمبوننت التفاصيل المنفصل

const CompaniesTable = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  // بيانات وهمية تجريبية
  const dataSource = [
    {
      key: "1",
      initials: "AT",
      name: "Arabian Trails Ltd.",
      email: "useremail@tripooo.com",
      cr: "CR-2026-90412",
      coreService: "Group Desert Safaris",
      status: "Pending Review",
    },
    {
      key: "2",
      initials: "WT",
      name: "Wanderlust Tours",
      email: "useremail@tripooo.com",
      cr: "CR-2023-11093",
      coreService: "DMC & City Excursions",
      status: "Active",
    },
  ];

  // أعمدة الجدول
  const columns = [
    {
      title: "Company & Brand",
      dataIndex: "name",
      key: "name",
      width: 250,
      render: (_, record) => (
        <Space size={12}>
          <Avatar
            style={{
              backgroundColor: "#E0F2FE",
              color: "#0284C7",
              fontWeight: 600,
              fontSize: "13px",
            }}
          >
            {record.initials}
          </Avatar>
          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              {record.name}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#64748B", marginTop: "2px" }}>
              {record.email}
            </Typography>
          </Box>
        </Space>
      ),
    },
    {
      title: "COMMERCIAL REGISTER (CR)",
      dataIndex: "cr",
      key: "cr",
      width: 200,
      render: (text) => (
        <Typography sx={{ fontSize: "13px", color: "#64748B", fontWeight: 500 }}>
          {text}
        </Typography>
      ),
    },
    {
      title: "CORE SERVICE",
      dataIndex: "coreService",
      key: "coreService",
      width: 220,
      render: (text) => (
        <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#1E293B" }}>
          {text}
        </Typography>
      ),
    },
    {
      title: "VERIFICATION STATUS",
      dataIndex: "status",
      key: "status",
      width: 180,
      render: (status) => {
        const isPending = status === "Pending Review";
        return (
          <Tag
            bordered={false}
            style={{
              backgroundColor: isPending ? "#FEF3C7" : "#DCFCE7",
              color: isPending ? "#D97706" : "#16A34A",
              fontWeight: 600,
              fontSize: "12px",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "QUICK ACTIONS",
      key: "actions",
      width: 150,
      render: () => (
        <Space size={12} onClick={(e) => e.stopPropagation()}>
          <VisibilityOutlinedIcon sx={{ fontSize: 18, color: "#64748B", cursor: "pointer", "&:hover": { color: "#0284C7" } }} />
          <BlockOutlinedIcon sx={{ fontSize: 18, color: "#64748B", cursor: "pointer", "&:hover": { color: "#E11D48" } }} />
          <DeleteOutlineIcon sx={{ fontSize: 18, color: "#F87171", cursor: "pointer", "&:hover": { color: "#DC2626" } }} />
        </Space>
      ),
    },
  ];

  // عند اختيار شركة، يتم عرض مكون التفاصيل المستورد
  if (selectedCompany) {
    return (
      <CompanyDetails
        company={selectedCompany}
        onBack={() => setSelectedCompany(null)}
      />
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        maxWidth: "1120px",
        mx: "auto",
        border: "1px solid #E2E8F0",
        overflow: "hidden",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Table
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: "max-content" }} // لجعل الجدول ريسبونسيف مع امكانية التمرير الافقي للشاشات الصغيره
        pagination={{
          pageSize: 5,
          total: 5,
          showSizeChanger: false,
          itemRender: (page, type, originalElement) => {
            if (type === "prev" || type === "next") {
              return originalElement;
            }
            return null;
          },
        }}
        onRow={(record) => ({
          onClick: () => setSelectedCompany(record),
          style: { cursor: "pointer" },
        })}
      />
    </Box>
  );
};

export default CompaniesTable;