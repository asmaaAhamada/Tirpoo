// src/components/tabs/adminTabs/SecurityActivityLogTab.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const SecurityActivityLogTab = ({ logs }) => {
  // بيانات افتراضية تطابق الصورة المرفقة في حال عدم التمرير من الـ props
  const defaultLogs = [
    {
      id: 1,
      dotColor: "#10B981", // أخضر
      action: "Approved and Activated corporate profile for",
      target: "Arabian Trails Ltd.",
      date: "July 19, 2026 at 21:14",
      ip: "192.168.1.42",
    },
    {
      id: 2,
      dotColor: "#014BA8", // أزرق
      action: "Updated Verification status on Tourism Ministry License document for",
      target: "Wanderlust Tours.",
      date: "July 18, 2026 at 14:35",
      ip: "192.168.1.42",
    },
    {
      id: 3,
      dotColor: "#014BA8", // أزرق
      action: "Requested security system credentials update (Password Reset Request).",
      target: "",
      date: "June 28, 2026 at 09:12",
      ip: "192.168.4.11",
    },
  ];

  const logList = logs && logs.length > 0 ? logs : defaultLogs;

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid rgba(226, 232, 240, 1)",
        p: { xs: 2.5, sm: 3.5 },
        boxSizing: "border-box",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#0F172A",
          mb: 3,
          pb: 2,
          borderBottom: "1px solid #F1F5F9",
        }}
      >
        Traceable Operations History
      </Typography>

      {/* Operations List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        {logList.map((item, index) => (
          <Box key={item.id || index}>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
              {/* Colored Dot Indicator */}
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: item.dotColor || "#014BA8",
                  mt: 0.75,
                  flexShrink: 0,
                }}
              />

              {/* Content */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Typography sx={{ fontSize: "13px", color: "#475569", fontWeight: 400 }}>
                  {item.action}{" "}
                  {item.target && (
                    <Typography
                      component="span"
                      sx={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}
                    >
                      {item.target}
                    </Typography>
                  )}
                </Typography>

                <Typography sx={{ fontSize: "11px", color: "#94A3B8", fontWeight: 500 }}>
                  {item.date} &nbsp;•&nbsp; IP: {item.ip}
                </Typography>
              </Box>
            </Box>

            {/* Separator Divider for items except the last one */}
            {index < logList.length - 1 && (
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "#F8FAFC",
                  mt: 2.5,
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SecurityActivityLogTab;