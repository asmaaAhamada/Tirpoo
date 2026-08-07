import React from "react";
import { Dialog, DialogContent, Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
const ApproveGuideModal = ({ open, onClose, onConfirm, userName }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          padding: "24px",
          maxWidth: "560px",
          width: "100%",
          overflow: "hidden",
        },
      }}
    >
      <DialogContent sx={{ p: 0, textAlign: "center", overflow: "hidden" }}>
        {/* 1. الدائرة العلوية مع أيقونة الموافقة */}
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "rgba(236, 253, 245, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2.5,
          }}
        >
          <VolunteerActivismOutlinedIcon sx={{ fontSize: 40, color: "rgba(16, 185, 129, 1)" }} />
        </Box>

        {/* 2. العنوان الرئيسي */}
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#000000",
            mb: 1.5,
          }}
        >
          Approve & Activate Guide
        </Typography>

        {/* 3. النص الوصفي */}
        <Typography
          sx={{
            fontSize: "14px",
            color: "rgba(71, 85, 105, 1)",
            lineHeight: 1.6,
            mb: 4,
            px: { xs: 0, sm: 1 },
          }}
        >
          Are you sure you want to approve and activate {userName || "Jane Cooper"}'s profile? This action will grant them access to operate on Tripooo Hub.
        </Typography>

        {/* 4. أزرار التحكم (بعرض متساوي 270px بجانب بعضهما) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
              <Button
            onClick={onClose}
            sx={{
              width: { xs: "100%", sm: "270px" },
              height: "48px",
              borderRadius: "8px",
              border: "1px solid rgba(1, 75, 168, 1)",
              color: "rgba(1, 75, 168, 1)",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(1, 75, 168, 0.05)",
                borderColor: "rgba(1, 75, 168, 1)",
              },
            }}
          >
            Cancel
          </Button>
          {/* الزر اليساري: Approve & Publish */}
          <Button
            onClick={onConfirm}
            sx={{
              width: { xs: "100%", sm: "270px" },
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "rgba(16, 185, 129, 1)",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgba(5, 150, 105, 1)",
                boxShadow: "none",
              },
            }}
          >
            Approve & Publish
          </Button>

          {/* الزر اليميني: Cancel */}
        
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ApproveGuideModal;