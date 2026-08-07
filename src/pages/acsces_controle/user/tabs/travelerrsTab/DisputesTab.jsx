// src/pages/accessControl/tabs/DisputesTab.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Tag } from "antd";

const DisputesTab = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "956px",
        minHeight: "264px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid rgba(226, 232, 240, 1)",
        p: { xs: 2, sm: 3 },
        boxSizing: "border-box",
      }}
    >
      {/* العنوان الرئيسي */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#0F172A",
          lineHeight: 1.2,
          mb: 3,
        }}
      >
        User Disputes Matrix
      </Typography>

      {/* بطاقة النزاع (Dispute Card Box) */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(248, 250, 252, 1)", // الخلفية رمادية فاتحة جداً كما في Figma
          borderRadius: "8px",
          border: "1px solid rgba(226, 232, 240, 1)", // لون الحدود الإضافي المطلوب
          p: { xs: 2, sm: 3 },
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* الهيدر الداخلي للبطاقة: Dispute Ref + Badge */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            Dispute Ref: #DSP-9901
          </Typography>

          {/* حالة النزاع */}
          <Tag
            style={{
              backgroundColor: "#FEE2E2",
              color: "#EF4444",
              border: "none",
              borderRadius: "4px",
              padding: "4px 12px",
              fontWeight: 700,
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            UNDER REVIEW
          </Tag>
        </Box>

        {/* تفاصيل النزاع في سطر واحد (Linked Trip, Against Provider, Claim Amount) */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: { xs: 1.5, sm: 3 },
            py: 1,
            borderTop: "1px solid #E2E8F0",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          {/* Linked Trip */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: "12px", color: "#64748B", fontWeight: 500 }}>
              Linked Trip:
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#1E293B", fontWeight: 600 }}>
              TRP-TR-881
            </Typography>
          </Box>

          {/* خط فاصل صغير */}
          <Typography sx={{ color: "#CBD5E1", display: { xs: "none", sm: "inline" } }}>|</Typography>

          {/* Against Provider */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: "12px", color: "#64748B", fontWeight: 500 }}>
              Against Provider:
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#1E293B", fontWeight: 600 }}>
              Arabian Nights Co. (Company)
            </Typography>
          </Box>

          {/* خط فاصل صغير */}
          <Typography sx={{ color: "#CBD5E1", display: { xs: "none", sm: "inline" } }}>|</Typography>

          {/* Claim Amount */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: "12px", color: "#64748B", fontWeight: 500 }}>
              Claim Amount:
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#1E293B", fontWeight: 700 }}>
              $350.00
            </Typography>
          </Box>
        </Box>

        {/* بيان المسافر (Traveler Statement) */}
        <Typography
          sx={{
            fontSize: "13px",
            color: "#475569",
            fontWeight: 400,
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          <Box component="span" sx={{ fontWeight: 600, fontStyle: "normal", color: "#1E293B" }}>
            Traveler Statement:{" "}
          </Box>
          "The company cancelled the desert safari tour 1 hour before the moving schedule without providing any alternative, and they refuse to accept my refund request."
        </Typography>

        {/* الأزرار السفلية (Dismiss Claim & Accept & Refund Traveler) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mt: 1,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {/* زر Dismiss Claim */}
          <Button
            sx={{
              width: { xs: "100%", sm: "220px" },
              height: "40px",
              borderRadius: "6px",
              border: "1px solid #CBD5E1",
              color: "#334155",
              fontWeight: 600,
              fontSize: "13px",
              textTransform: "none",
              backgroundColor: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#F1F5F9",
                borderColor: "#94A3B8",
              },
            }}
          >
            Dismiss Claim
          </Button>

          {/* زر Accept & Refund Traveler */}
          <Button
            sx={{
              width: { xs: "100%", sm: "240px" },
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "#014BA8",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "13px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#003480",
              },
            }}
          >
            Accept & Refund Traveler
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DisputesTab;