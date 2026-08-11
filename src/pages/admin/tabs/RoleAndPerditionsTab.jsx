// src/components/tabs/adminTabs/RoleAndPerditionsTab.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import pepole_Svg from "../../../assets/icon_SVG/la_users-cog.svg";

const RoleAndPerditionsTab = () => {
  const categories = [
    {
      title: "User Management",
      icon:   <img 
                  src={pepole_Svg} 
                  alt="Admin Management Icon" 
                  style={{ width: "24px", height: "24px" }} 
                />,
      permissions: ["Create Users", "Edit Profile", "Delete Users", "Export Data"],
    },
    {
      title: "Financial Transactions",
      icon: <AccountBalanceWalletOutlinedIcon sx={{ color: "#014BA8", fontSize: "20px" }} />,
      permissions: ["Issue Refunds", "View Reports", "Payout Approvals"],
    },
    {
      title: "System Settings",
      icon: <SettingsOutlinedIcon sx={{ color: "#014BA8", fontSize: "20px" }} />,
      permissions: ["Manage Admins", "API Keys Access", "Security Config"],
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
      {/* 1. العنوان الرئيسي */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#0F172A",
          mb: 3,
        }}
      >
        Assigned Permissions Matrix
      </Typography>

      {/* 2. شبكة الكاردات الثلاثة مع دعم التجاوب */}
    <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
        }}
      >
        {categories.map((cat, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#F8FAFC",
              border: "1px solid rgba(226, 232, 240, 1)",
              borderRadius: "10px",
              p: 2.5,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* عنوان الكارد مع الأيقونة */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              {cat.icon}
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                {cat.title}
              </Typography>
            </Box>

            {/* قائمة الصلاحيات */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {cat.permissions.map((permission, pIdx) => (
                <Box
                  key={pIdx}
                  sx={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(226, 232, 240, 1)",
                    borderRadius: "6px",
                    px: 1.25,
                    py: 0.6,
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#475569",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.02)",
                  }}
                >
                  {permission}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RoleAndPerditionsTab;