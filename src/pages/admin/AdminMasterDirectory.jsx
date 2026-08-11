// src/components/AdminMasterDirectory.jsx
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import pepole_Svg from "../../assets/icon_SVG/la_users-cog.svg";
import CreateAdminModal from "../acsces_controle/user/action/CreateAdminModal";

const AdminMasterDirectory = () => {
  // حالة التحكم بفتح وإغلاق المودال
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveAdmin = (data) => {
    console.log("Admin Data Saved:", data);
    // يمكنك إضافة الكود المطلوب هنا للحفظ أو إرساله للباك إند
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "89px" },
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          border: "1px solid #E2E8F0",
          px: { xs: 1.5, sm: 2, md: 3 },
          py: { xs: 1.5, md: 2 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "stretch", md: "center" },
          justifyContent: "space-between",
          boxSizing: "border-box",
          my: 2,
          gap: { xs: 2, md: 3 },
        }}
      >
        {/* النص والأيقونة */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5, sm: 2 } }}>
          <Box
            sx={{
              width: { xs: 36, sm: 44, md: 52 },
              height: { xs: 36, sm: 44, md: 52 },
              borderRadius: "50%",
              backgroundColor: "rgba(1, 75, 168, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img 
              src={pepole_Svg} 
              alt="Admin Management Icon" 
              style={{ width: "24px", height: "24px" }} 
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "18px", md: "24px" },
                fontWeight: 700,
                color: "#0F172A",
                lineHeight: 1.2,
              }}
            >
              Admin Management
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "11px", sm: "12.5px", md: "14px" },
                fontWeight: 400,
                color: "rgba(148, 163, 184, 1)",
                mt: "2px",
              }}
            >
              Manage admin roles, system permissions, and credential security.
            </Typography>
          </Box>
        </Box>

        {/* زر Invite New Admin */}
        <Button
          onClick={handleOpenDialog}
          startIcon={<AddIcon sx={{ fontSize: "24px !important" }} />}
          sx={{
            width: { xs: "100%", sm: "auto", md: "266px" },
            height: { xs: "42px", md: "48px" },
            borderRadius: "8px",
            background: "linear-gradient(90deg, rgba(0, 52, 128, 1) 0%, rgba(1, 75, 168, 1) 100%)",
            color: "#FFFFFF",
            textTransform: "none",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 600,
            boxShadow: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
            "&:hover": {
              background: "linear-gradient(90deg, rgba(0, 42, 105, 1) 0%, rgba(1, 60, 138, 1) 100%)",
              boxShadow: "0px 4px 12px rgba(1, 75, 168, 0.25)",
            },
          }}
        >
          Invite New Admin
        </Button>
      </Box>

      {/* استدعاء المودال هنا */}
      <CreateAdminModal
        open={openDialog}
        onClose={handleCloseDialog}
        onSave={handleSaveAdmin}
      />
    </>
  );
};

export default AdminMasterDirectory;