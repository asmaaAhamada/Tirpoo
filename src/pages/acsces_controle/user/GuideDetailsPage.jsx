import React, { useState, lazy, Suspense } from "react";
import { Box, Typography, Button, IconButton, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BlockIcon from "@mui/icons-material/Block";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Tag } from "antd";

// استدعاء المودالات
import DeleteUserModal from "./action/deletAccount";
import SuspendUserModal from "./action/suspend";

// استدعاء التبويبات المستقلة
import VerificationDocumentsTab from "./tabs/guideTabs/VerificationDocumentsTab";
import ToursTripsOfferedTab from "./tabs/guideTabs/ToursTripsOfferedTab"; // <--- تم إضافة استدعاء المكون هنا
import EarningsPayoutsTab from "./tabs/guideTabs/EarningsPayoutsTab";


const GuideDetailsPage = ({ guide, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);

  // حالات فتح وإغلاق المودالات
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSuspendModal, setOpenSuspendModal] = useState(false);

  // استخدام بيانات المرشد الممررة أو القيم الافتراضية
  const guideData = {
    name: guide?.name || "Ralph Edwards",
    email: guide?.email || "useremail@tripooo.com",
    status: guide?.status || "Pending Review",
    id: guide?.id || "TRP-9024-UX",
    registrationDate: guide?.registrationDate || "Jan 12, 2026",
    licenseNumber: guide?.licenseCode || "LIC-N-2026-880",
    initials: guide?.initials || "RE",
  };

  const tabs = [
    { label: "Verification Documents", component: <VerificationDocumentsTab guideName={guideData.name} /> },
    { label: "Tours & Trips Offered", component: <ToursTripsOfferedTab /> },
{ label: "Earnings & Payouts", component: <EarningsPayoutsTab /> }  ];

  const handleDeleteConfirm = () => {
    setOpenDeleteModal(false);
  };

  const handleSuspendConfirm = () => {
    setOpenSuspendModal(false);
  };

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
      {/* 1. الشريط العلوي (Header Area) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: "space-between",
          minHeight: "72px",
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          p: { xs: 2, sm: 2.5 },
          gap: 2,
          mb: { xs: 2, sm: 3 },
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* اليسار: زر العودة + العنوان */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            onClick={onBack}
            sx={{
              width: 48,
              height: 48,
              borderRadius: "38px",
              backgroundColor: "rgba(1, 75, 168, 0.1)",
              color: "rgba(1, 75, 168, 1)",
              "&:hover": {
                backgroundColor: "rgba(1, 75, 168, 0.2)",
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "24px" },
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            Guide Profile Management
          </Typography>
        </Box>

        {/* اليمين: زر الحظر وزر الحذف */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          {/* زر Suspend User */}
          <Button
            onClick={() => setOpenSuspendModal(true)}
            startIcon={<BlockIcon sx={{ color: "#FFFFFF" }} />}
            sx={{
              width: { xs: "100%", sm: "164px" },
              height: "48px",
              borderRadius: "8px",
              background:
                "linear-gradient(90deg, rgba(0, 52, 128, 1) 0%, rgba(1, 75, 168, 1) 100%)",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                background:
                  "linear-gradient(90deg, rgba(0, 40, 100, 1) 0%, rgba(1, 60, 145, 1) 100%)",
              },
            }}
          >
            Suspend User
          </Button>

          {/* زر Delete User */}
          <Button
            onClick={() => setOpenDeleteModal(true)}
            startIcon={
              <DeleteOutlineIcon sx={{ color: "rgba(239, 68, 68, 1)" }} />
            }
            sx={{
              width: { xs: "100%", sm: "164px" },
              height: "48px",
              borderRadius: "8px",
              border: "1px solid rgba(239, 68, 68, 1)",
              color: "rgba(239, 68, 68, 1)",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(239, 68, 68, 0.05)",
                borderColor: "rgba(239, 68, 68, 1)",
              },
            }}
          >
            Delete User
          </Button>
        </Box>
      </Box>

      {/* 2. المحتوى الرئيسي */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          alignItems: "flex-start",
        }}
      >
        {/* البوكس اليساري */}
        <Box
          sx={{
            width: { xs: "100%", md: "332px" },
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
              width: { xs: 70, sm: 100 },
              height: { xs: 70, sm: 100 },
              fontSize: { xs: "24px", sm: "36px" },
              bgcolor: "#E0F2FE",
              color: "#0284C7",
              fontWeight: 700,
              mb: 2,
            }}
          >
            {guideData.initials}
          </Avatar>

          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "24px" },
              fontWeight: 700,
              color: "#000000",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            {guideData.name}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#64748B",
              mt: "4px",
              mb: 1.5,
              wordBreak: "break-word",
              textAlign: "center",
            }}
          >
            {guideData.email}
          </Typography>

          <Tag
            style={{
              backgroundColor:
                guideData.status === "Active"
                  ? "#DCFCE7"
                  : guideData.status === "Suspended"
                  ? "#FEE2E2"
                  : "#FEF3C7",
              color:
                guideData.status === "Active"
                  ? "#16A34A"
                  : guideData.status === "Suspended"
                  ? "#DC2626"
                  : "#D97706",
              border: "none",
              borderRadius: "4px",
              padding: "4px 12px",
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            {guideData.status}
          </Tag>

          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(226, 232, 240, 1)",
              my: 3,
            }}
          />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#64748B",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                SYSTEM IDENTIFIER
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#1E293B",
                  fontWeight: 500,
                  mt: "2px",
                }}
              >
                {guideData.id}
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#64748B",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                REGISTRATION DATE
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#1E293B",
                  fontWeight: 500,
                  mt: "2px",
                }}
              >
                {guideData.registrationDate}
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#64748B",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                LICENCE NUMBER
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#1E293B",
                  fontWeight: 500,
                  mt: "2px",
                }}
              >
                {guideData.licenseNumber}
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#64748B",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Security Cleared
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mt: "2px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ color: "#16A34A", fontSize: "16px" }}
                />
                <Typography
                  sx={{ fontSize: "14px", color: "#16A34A", fontWeight: 600 }}
                >
                  Verified
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* البوكس اليميني */}
        <Box sx={{ flex: 1, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              p: 1,
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
                  backgroundColor:
                    activeTab === idx ? "#E0F2FE" : "transparent",
                  borderRadius: "6px",
                  px: 2,
                  py: 1,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundColor:
                      activeTab === idx ? "#E0F2FE" : "#F1F5F9",
                  },
                }}
              >
                {tab.label}
              </Button>
            ))}
          </Box>

          {tabs[activeTab].component}
        </Box>
      </Box>

      {/* مودالات الحظر والحذف */}
      <Suspense fallback={null}>
        {openDeleteModal && (
          <DeleteUserModal
            open={openDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
            onConfirm={handleDeleteConfirm}
            userName={guideData.name}
          />
        )}

        {openSuspendModal && (
          <SuspendUserModal
            open={openSuspendModal}
            onClose={() => setOpenSuspendModal(false)}
            onConfirm={handleSuspendConfirm}
            userName={guideData.name}
          />
        )}
      </Suspense>
    </Box>
  );
};

export default GuideDetailsPage;