// src/components/AdminUserDetails.jsx
import React, { useState, lazy, Suspense } from "react";
import { Box, Typography, Button, IconButton, Avatar, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BlockIcon from "@mui/icons-material/Block";
import LockResetIcon from "@mui/icons-material/LockReset";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import { Tag } from "antd";

// استيراد مكونات التبويبات منفصلة
import AccountIdentityTab from "./tabs/adminTabs/AccountIdentityTab";
import SecurityActivityLogTab from "./tabs/adminTabs/SecurityActivityLogTab";

// استيراد المودالات أداء Lazy
const SuspendUserModal = lazy(() => import("./action/suspend"));

const AdminUserDetails = ({ admin, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [openSuspendModal, setOpenSuspendModal] = useState(false);

  const adminData = {
    name: admin?.name || "Jane Cooper",
    subtitle: admin?.email || "useremail@tripooo.com",
    status: admin?.status || "Active",
    initials: admin?.initials || "JC",
  };

  const cardsData = [
    {
      title: "Assigned Roles",
      value: "2",
      icon: <AdminPanelSettingsOutlinedIcon sx={{ color: "rgba(1, 75, 168, 1)", fontSize: "20px" }} />,
    },
    {
      title: "Reviewed Documents",
      value: "148",
      icon: <DescriptionOutlinedIcon sx={{ color: "rgba(1, 75, 168, 1)", fontSize: "20px" }} />,
    },
    {
      title: "Verified Companies",
      value: "35",
      icon: <BusinessOutlinedIcon sx={{ color: "rgba(1, 75, 168, 1)", fontSize: "20px" }} />,
    },
  ];

  const tabs = [
    { label: "Account Identity", component: <AccountIdentityTab adminData={adminData} /> },
    { label: "Security Activity Log", component: <SecurityActivityLogTab /> },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1120px",
        mx: "auto",
        my: 2,
        px: { xs: 1.5, sm: 2, md: 0 },
        boxSizing: "border-box",
      }}
    >
      {/* 1. Header Area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: "space-between",
          minHeight: "64px",
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          p: { xs: 1.5, sm: 2 },
          gap: 2,
          mb: { xs: 2, sm: 3 },
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* اليسار: زر العودة + العنوان */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <IconButton
            onClick={onBack}
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "rgba(1, 75, 168, 0.1)",
              color: "rgba(1, 75, 168, 1)",
              "&:hover": { backgroundColor: "rgba(1, 75, 168, 0.2)" },
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <Typography sx={{ fontSize: { xs: "16px", sm: "20px" }, fontWeight: 700, color: "#0F172A" }}>
            Admin Profile Management
          </Typography>
        </Box>

        {/* اليمين: الأزرار */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          {/* الزر الأول */}
          <Button
            startIcon={<LockResetIcon sx={{ fontSize: "18px !important" }} />}
            sx={{
              height: "40px",
              px: 2.5,
              borderRadius: "8px",
              backgroundColor: "#014BA8",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "13px",
              textTransform: "none",
              whiteSpace: "nowrap",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#013B85",
                boxShadow: "none",
              },
            }}
          >
            Force Password Reset
          </Button>

          {/* الزر الثاني */}
          <Button
            onClick={() => setOpenSuspendModal(true)}
            startIcon={<BlockIcon sx={{ fontSize: "18px !important", color: "#EF4444" }} />}
            sx={{
              height: "40px",
              px: 2.5,
              borderRadius: "8px",
              border: "1px solid #FECACA",
              backgroundColor: "#FEF2F2",
              color: "#EF4444",
              fontWeight: 600,
              fontSize: "13px",
              textTransform: "none",
              whiteSpace: "nowrap",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#FEE2E2",
                borderColor: "#FCA5A5",
              },
            }}
          >
            Revoke Token & Suspense
          </Button>
        </Box>
      </Box>

      {/* 2. Content */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2.5, alignItems: "flex-start" }}>
        {/* البوكس اليساري */}
        <Box
          sx={{
            width: { xs: "100%", md: "280px" },
            flexShrink: 0,
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            border: "1px solid rgba(226, 232, 240, 1)",
            p: 3,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              fontSize: "28px",
              bgcolor: "#E0F2FE",
              color: "#0284C7",
              fontWeight: 700,
              mb: 2,
            }}
          >
            {adminData.initials}
          </Avatar>

          <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "#000000", textAlign: "center", lineHeight: 1.2 }}>
            {adminData.name}
          </Typography>

          <Typography sx={{ fontSize: "13px", color: "#64748B", mt: "4px", mb: 1.5, textAlign: "center" }}>
            {adminData.subtitle}
          </Typography>

          <Tag
            style={{
              backgroundColor: adminData.status === "Active" ? "#DCFCE7" : "#FEE2E2",
              color: adminData.status === "Active" ? "#16A34A" : "#DC2626",
              border: "none",
              borderRadius: "4px",
              padding: "2px 10px",
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            {adminData.status}
          </Tag>
        </Box>

        {/* البوكس اليميني */}
        <Box sx={{ flex: 1, width: "100%", minWidth: 0 }}>
          {/* الكاردات الثلاثة العلوية بجانب بعضها */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              gap: 1.5,
              mb: 2.5,
            }}
          >
            {cardsData.map((card, idx) => (
              <Box
                key={idx}
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid rgba(226, 232, 240, 1)",
                  p: 2,
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minWidth: 0,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, overflow: "hidden" }}>
                  <Typography
                    noWrap
                    sx={{ fontSize: "12px", fontWeight: 500, color: "#64748B" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontSize: "22px", fontWeight: 700, color: "#0F172A" }}>
                    {card.value}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "8px",
                    backgroundColor: "rgba(1, 75, 168, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </Box>
              </Box>
            ))}
          </Box>

          {/* التابات */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              p: 0.75,
              border: "1px solid rgba(226, 232, 240, 1)",
              overflowX: "auto",
            }}
          >
            {tabs.map((tab, idx) => (
              <Button
                key={idx}
                onClick={() => setActiveTab(idx)}
                sx={{
                  fontSize: "13px",
                  fontWeight: activeTab === idx ? 600 : 500,
                  color: activeTab === idx ? "#014BA8" : "#64748B",
                  backgroundColor: activeTab === idx ? "#E0F2FE" : "transparent",
                  borderRadius: "6px",
                  px: 2,
                  py: 0.75,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundColor: activeTab === idx ? "#E0F2FE" : "#F1F5F9",
                  },
                }}
              >
                {tab.label}
              </Button>
            ))}
          </Box>

          {/* محتوى التاب المحددة */}
          <Suspense fallback={<Box sx={{ display: "flex", justifyContent: "center", p: 4 }}><CircularProgress /></Box>}>
            {tabs[activeTab].component}
          </Suspense>
        </Box>
      </Box>

      {/* المودال */}
      <Suspense fallback={null}>
        {openSuspendModal && (
          <SuspendUserModal open={openSuspendModal} onClose={() => setOpenSuspendModal(false)} userName={adminData.name} />
        )}
      </Suspense>
    </Box>
  );
};

export default AdminUserDetails;