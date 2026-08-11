// src/components/AdminUserDetails.jsx
import React, { useState, lazy, Suspense } from "react";
import { Box, Typography, Button, IconButton, Avatar, CircularProgress, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BlockIcon from "@mui/icons-material/Block";
import LockResetIcon from "@mui/icons-material/LockReset";
import SecurityIcon from "@mui/icons-material/Security";
import { Tag } from "antd";
import SuspendUserModal from "../acsces_controle/user/action/suspend";
import ChangeRoleModal from "./action/ChangeRoleModal";

// استيراد التابات Lazy (أو استوردها بشكل عادي إذا كنت لا تريد لودر للتابات)
const RoleAndPerditionsTab = lazy(() => import("./tabs/RoleAndPerditionsTab"));
const ActivityLogTab = lazy(() => import("./tabs/ActivityLogTab"));
const ActiveSessionsTab = lazy(() => import("./tabs/ActiveSessionsTab"));

const AdminDetailsPage = ({ admin, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [openSuspendModal, setOpenSuspendModal] = useState(false);
  const [openChangeRoleModal, setOpenChangeRoleModal] = useState(false);

  const adminData = {
    name: admin?.name || "Tala Betar",
    subtitle: admin?.email || "tala.b@tripooo.com",
    role: admin?.role || "Super Admin",
    status: admin?.status || "Active",
    department: admin?.department || "Product & Design",
    joinedDate: admin?.joinedDate || "Jan 15, 2026",
    twoFactor: admin?.twoFactor || "Enabled",
    initials: admin?.initials || "TB",
  };

  const tabs = [
    { label: "Role & Perditions", component: <RoleAndPerditionsTab /> },
    { label: "Activity Log", component: <ActivityLogTab /> },
    { label: "Active Sessions", component: <ActiveSessionsTab /> },
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
      {/* Header Area */}
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

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
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
              width: { xs: "100%", sm: "auto" },
              "&:hover": { backgroundColor: "#013B85" },
            }}
          >
            Force Password Reset
          </Button>

          <Button
            onClick={() => setOpenSuspendModal(true)}
            startIcon={<BlockIcon sx={{ fontSize: "18px !important", color: "#EF4444" }} />}
            sx={{
              height: "40px",
              px: 2.5,
              borderRadius: "8px",
              border: "1px solid #FECACA",
              backgroundColor: "white",
              color: "#EF4444",
              fontWeight: 600,
              fontSize: "13px",
              textTransform: "none",
              whiteSpace: "nowrap",
              width: { xs: "100%", sm: "auto" },
              "&:hover": { backgroundColor: "#FEE2E2", borderColor: "#FCA5A5" },
            }}
          >
            Revoke Token & Suspense
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2.5, alignItems: "flex-start" }}>
        {/* Left Side Profile Box */}
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
              backgroundColor: "#F1F5F9",
              color: "#475569",
              border: "none",
              borderRadius: "4px",
              padding: "2px 10px",
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            {adminData.role}
          </Tag>

          <Divider sx={{ width: "100%", my: 2.5, borderColor: "#E2E8F0" }} />

          <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#475569", letterSpacing: "0.5px" }}>
                STATUS
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#10B981" }}>
                {adminData.status}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#475569", letterSpacing: "0.5px" }}>
                DEPARTMENT
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, color: "#334155" }}>
                {adminData.department}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#475569", letterSpacing: "0.5px" }}>
                JOINED DATE
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, color: "#334155" }}>
                {adminData.joinedDate}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#475569", letterSpacing: "0.5px" }}>
                2FA AUTHENTICATION
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#10B981" }}>
                {adminData.twoFactor}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ width: "100%", mb: 2.5, borderColor: "#E2E8F0" }} />

          <Button
            fullWidth
            onClick={() => setOpenChangeRoleModal(true)}
            startIcon={<SecurityIcon sx={{ fontSize: "18px !important" }} />}
            sx={{
              height: "42px",
              borderRadius: "8px",
              border: "1px solid #014BA8",
              backgroundColor: "#FFFFFF",
              color: "#014BA8",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#F0F7FF", borderColor: "#013B85" },
            }}
          >
            Change Role
          </Button>
        </Box>

        {/* Right Side Tabs Container */}
        <Box sx={{ flex: 1, width: "100%", minWidth: 0 }}>
          {/* شريط التابات - معتمد التجاوب بحجم الخط وتجميع العناصر */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: { xs: "wrap", sm: "nowrap" },
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
                  flex: { xs: "1 1 100%", sm: "none" },
                  fontSize: { xs: "12px", sm: "13px" },
                  fontWeight: activeTab === idx ? 600 : 500,
                  color: activeTab === idx ? "#014BA8" : "#64748B",
                  backgroundColor: activeTab === idx ? "#E0F2FE" : "transparent",
                  borderRadius: "6px",
                  px: { xs: 1.5, sm: 2 },
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

          <Suspense fallback={<Box sx={{ display: "flex", justifyContent: "center", p: 4 }}><CircularProgress /></Box>}>
            {tabs[activeTab].component}
          </Suspense>
        </Box>
      </Box>

      {/* Modals */}
      <Suspense fallback={null}>
        {openSuspendModal && (
          <SuspendUserModal open={openSuspendModal} onClose={() => setOpenSuspendModal(false)} userName={adminData.name} />
        )}
        {openChangeRoleModal && (
          <ChangeRoleModal open={openChangeRoleModal} onClose={() => setOpenChangeRoleModal(false)} adminName={adminData.name} />
        )}
      </Suspense>
    </Box>
  );
};

export default AdminDetailsPage;