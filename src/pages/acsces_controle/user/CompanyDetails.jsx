// src/components/CompanyDetails.jsx
import React, { useState, lazy, Suspense } from "react";
import { Box, Typography, Button, IconButton, Avatar, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BlockIcon from "@mui/icons-material/Block";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Tag } from "antd";
import RejectChangesModal from "./action/RejectChangesModal";
import ApprovePartnerModal from "./action/ApprovePartnerModal";
import LegalProfileTab from "./tabs/compantTabs/LegalProfileTab";
import OfferedServicesTab from "./tabs/compantTabs/OfferedServicesTab";
import VerificationDocsTab from "./tabs/compantTabs/VerificationDocsTab";

// تحميل المودالات السابقة باستخدام React.lazy
const DeleteUserModal = lazy(() => import("./action/deletAccount"));
const SuspendUserModal = lazy(() => import("./action/suspend"));

// تحميل المودالات الجديدة باستخدام React.lazy
// const ApprovePartnerModal = lazy(() => import("./action/ApprovePartnerModal"));
// const RejectChangesModal = lazy(() => import("./action/RejectChangesModal"));

// // تحميل التبويبات باستخدام React.lazy
// const LegalProfileTab = lazy(() => import("./tabs/companyTabs/LegalProfileTab"));
// const OfferedServicesTab = lazy(() => import("./tabs/companyTabs/OfferedServicesTab"));
// const VerificationDocsTab = lazy(() => import("./tabs/companyTabs/VerificationDocsTab"));

const CompanyDetails = ({ company, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);

  // حالات المودالات
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSuspendModal, setOpenSuspendModal] = useState(false);
  const [openApproveModal, setOpenApproveModal] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);

  const companyData = {
    name: company?.name || "Arabian Trails Ltd.",
    subtitle: company?.subtitle || "Registered Corporate Partner",
    status: company?.status || "Pending Review",
    initials: company?.initials || "AT",
  };

  const tabs = [
    { label: "Legal Profile", component: <LegalProfileTab companyData={companyData} /> },
    { label: "Offered Services", component: <OfferedServicesTab /> },
    { label: "Verification Docs", component: <VerificationDocsTab /> },
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
              "&:hover": { backgroundColor: "rgba(1, 75, 168, 0.2)" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography sx={{ fontSize: { xs: "18px", sm: "24px" }, fontWeight: 700, color: "#0F172A" }}>
            Company Profile Management
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
          <Button
            onClick={() => setOpenSuspendModal(true)}
            startIcon={<BlockIcon sx={{ color: "#FFFFFF" }} />}
            sx={{
              width: { xs: "100%", sm: "164px" },
              height: "48px",
              borderRadius: "8px",
              background: "linear-gradient(90deg, rgba(0, 52, 128, 1) 0%, rgba(1, 75, 168, 1) 100%)",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                background: "linear-gradient(90deg, rgba(0, 40, 100, 1) 0%, rgba(1, 60, 145, 1) 100%)",
              },
            }}
          >
            Suspend User
          </Button>

          <Button
            onClick={() => setOpenDeleteModal(true)}
            startIcon={<DeleteOutlineIcon sx={{ color: "rgba(239, 68, 68, 1)" }} />}
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

      {/* 2. Content */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, alignItems: "flex-start" }}>
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
            {companyData.initials}
          </Avatar>

          <Typography sx={{ fontSize: { xs: "20px", sm: "24px" }, fontWeight: 700, color: "#000000", textAlign: "center", lineHeight: 1.2 }}>
            {companyData.name}
          </Typography>

          <Typography sx={{ fontSize: "14px", color: "#64748B", mt: "4px", mb: 1.5, textAlign: "center" }}>
            {companyData.subtitle}
          </Typography>

          <Tag
            style={{
              backgroundColor: companyData.status === "Active" ? "#DCFCE7" : companyData.status === "Suspended" ? "#FEE2E2" : "#FEF3C7",
              color: companyData.status === "Active" ? "#16A34A" : companyData.status === "Suspended" ? "#DC2626" : "#D97706",
              border: "none",
              borderRadius: "4px",
              padding: "4px 12px",
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            {companyData.status}
          </Tag>

          <Box sx={{ width: "100%", height: "1px", backgroundColor: "rgba(226, 232, 240, 1)", my: 3 }} />

          {/* الأزرار العلوية السفلية */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, width: "100%", alignItems: "center" }}>
            <Button
              onClick={() => setOpenApproveModal(true)}
              sx={{
                width: "284px",
                height: "48px",
                borderRadius: "8px",
                background: "linear-gradient(90deg, rgba(0, 52, 128, 1) 0%, rgba(1, 75, 168, 1) 100%)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  background: "linear-gradient(90deg, rgba(0, 40, 100, 1) 0%, rgba(1, 60, 145, 1) 100%)",
                },
              }}
            >
              Approve Corporate Partner
            </Button>

            <Button
              onClick={() => setOpenRejectModal(true)}
              sx={{
                width: "284px",
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
              Reject & Request Changes
            </Button>
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
                  backgroundColor: activeTab === idx ? "#E0F2FE" : "transparent",
                  borderRadius: "6px",
                  px: 2,
                  py: 1,
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

      {/* المودالات المظلمة بأداء Lazy */}
      <Suspense fallback={null}>
        {openDeleteModal && (
          <DeleteUserModal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)} userName={companyData.name} />
        )}
        {openSuspendModal && (
          <SuspendUserModal open={openSuspendModal} onClose={() => setOpenSuspendModal(false)} userName={companyData.name} />
        )}
        {openApproveModal && (
          <ApprovePartnerModal open={openApproveModal} onClose={() => setOpenApproveModal(false)} />
        )}
        {openRejectModal && (
          <RejectChangesModal open={openRejectModal} onClose={() => setOpenRejectModal(false)} />
        )}
      </Suspense>
    </Box>
  );
};

export default CompanyDetails;