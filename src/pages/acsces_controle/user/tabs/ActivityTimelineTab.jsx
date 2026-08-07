// src/pages/accessControl/tabs/ActivityTimelineTab.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const ActivityTimelineTab = () => {
  // بيانات سجل النشاطات المطابقة للصورة
  const logsData = [
    {
      id: "1",
      title: "Authorized App Login Session",
      details: "2 hours ago  •  iOS App Interface  •  IP: 192.168.1.42",
      active: true, // للنقطة الزرقاء الحالية
    },
    {
      id: "2",
      title: "Wallet Funding Transaction Successful",
      details: "Yesterday at 14:32  •  Ref: +$1,500.00 Credit Card top-up",
      active: false,
    },
    {
      id: "3",
      title: "Account Profile Initialized",
      details:
        "January 12, 2026 at 09:11  •  Automated onboarding routine success",
      active: false,
    },
  ];

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
      {/* العنوان الرئيسي بحجم 24 ولون أسود */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#0F172A",
          lineHeight: 1.2,
        }}
      >
        Security & Activity Logs
      </Typography>

      {/* خط فاصل (Divider) على كامل عرض البوكس */}
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "#E2E8F0",
          my: 2.5,
        }}
      />

      {/* قائمة السجلات بتصميم الـ Timeline */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, pl: 0.5 }}>
        {logsData.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              position: "relative",
              pl: 3,
            }}
          >
            {/* الخط العمودي الرمادي الواصل بين النقاط */}
            {index !== logsData.length - 1 && (
              <Box
                sx={{
                  position: "absolute",
                  left: "4px",
                  top: "14px",
                  bottom: "-24px",
                  width: "1.5px",
                  backgroundColor: "#E2E8F0",
                }}
              />
            )}

            {/* النقطة الدائرية (الأزرق للنشاط الحالي والرمادي للبقية) */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "5px",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                backgroundColor: item.active ? "#0284C7" : "#E2E8F0",
                zIndex: 1,
              }}
            />

            {/* تفاصيل السجل */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {/* العنوان بحجم 14 */}
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1E293B",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </Typography>

              {/* القيمة والتفاصيل بحجم 12 */}
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#64748B",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {item.details}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ActivityTimelineTab;
