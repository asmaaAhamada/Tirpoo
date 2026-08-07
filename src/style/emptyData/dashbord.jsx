// src/components/EmptyStateBox.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// أيقونة الرسم البياني الكبيرة بداخل الدائرة
import ChartIconSvg from "../../assets/icon_SVG/octicon_graph-24.svg"; 

const EmptyStateBox = ({ onInviteVendor, onConfigureRules }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1120px",
        minHeight: "480px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        my: 3,
        padding: "32px 16px",
        boxSizing: "border-box",
      }}
    >
      {/* البوكس الداخلي (العرض: 548px, الارتفاع: 240px, الـ Gap: 16px) */}
      <Box
        sx={{
          width: { xs: "100%", sm: "548px" },
          height: { sm: "240px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          textAlign: "center",
        }}
      >
        {/* الأيقونة الدائرية (96px x 96px) */}
        <Box
          sx={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            backgroundColor: "rgba(241, 245, 249, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <img
            src={ChartIconSvg}
            alt="No Data Chart Icon"
            style={{ width: "48px", height: "48px", opacity: 0.6 }}
          />
        </Box>

        {/* النصوص */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "480px" }}>
          {/* النص الأول باللون الأسود */}
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#000000",
              lineHeight: 1.2,
            }}
          >
            No operational data streaming yet
          </Typography>

          {/* النص الثاني بلون rgba(71, 85, 105, 1) */}
          <Typography
            variant="body2"
            sx={{
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(71, 85, 105, 1)",
              lineHeight: 1.4,
            }}
          >
            To populate this dashboard with real-time analytics, you need to configure your baseline rules or invite your first network provider.
          </Typography>
        </Box>

        {/* الأزرار تحت بحجم (266px عرض x 48px ارتفاع) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "16px",
            marginTop: "8px",
          }}
        >
          {/* الزر الأول باللون المدرج */}
          <Button
            onClick={onInviteVendor}
            startIcon={<AddIcon />}
            sx={{
              width: "266px",
              height: "48px",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 600,
              color: "#FFFFFF",
              background: "linear-gradient(90deg, rgba(0, 52, 128, 1) 0%, rgba(1, 75, 168, 1) 100%)",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                background: "linear-gradient(90deg, rgba(0, 40, 100, 1) 0%, rgba(1, 60, 140, 1) 100%)",
              },
            }}
          >
            Invite First Vendor
          </Button>

          {/* الزر الثاني حدود فقط */}
          <Button
            onClick={onConfigureRules}
            variant="outlined"
            sx={{
              width: "266px",
              height: "48px",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(0, 52, 128, 1)",
              borderColor: "rgba(1, 75, 168, 0.5)",
              "&:hover": {
                borderColor: "rgba(0, 52, 128, 1)",
                backgroundColor: "rgba(1, 75, 168, 0.04)",
              },
            }}
          >
            Configure system rules
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyStateBox;