// src/components/tabs/adminTabs/ActiveSessionsTab.jsx
import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const ActiveSessionsTab = () => {
  const sessions = [
    {
      id: 1,
      device: 'MacBook Pro 16" (Chrome)',
      isCurrent: true,
      location: "Damascus, Syria",
      ip: "192.168.1.45",
      statusText: "Active Now",
      icon: <LaptopMacIcon sx={{ color: "#014BA8", fontSize: "20px" }} />,
    },
    {
      id: 2,
      device: "iPhone 12 Pro Max (Safari Mobile)",
      isCurrent: false,
      location: "Damascus, Syria",
      ip: "192.168.1.88",
      statusText: "Last active 3 hours ago",
      icon: <PhoneIphoneIcon sx={{ color: "#014BA8", fontSize: "20px" }} />,
    },
  ];

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid rgba(226, 232, 240, 1)",
      }}
    >
      {/* 1. العنوان الرئيسي */}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#0F172A",
          mb: 3,
        }}
      >
        Active Logged-in Devices
      </Typography>

      {/* 2. قائمة الأجهزة */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {sessions.map((session) => (
          <Box
            key={session.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              p: 2,
              borderRadius: "8px",
              border: "1px solid rgba(226, 232, 240, 1)",
              backgroundColor: "#FFFFFF",
              gap: 2,
            }}
          >
            {/* اليسار: أيقونة الجهاز والتفاصيل */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "rgba(1, 75, 168, 0.08)",
                  borderRadius: "8px",
                }}
              >
                {session.icon}
              </Avatar>

              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#0F172A",
                    }}
                  >
                    {session.device}
                  </Typography>

                  {session.isCurrent && (
                    <Typography
                      component="span"
                      sx={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#10B981",
                        letterSpacing: "0.5px",
                      }}
                    >
                      (CURRENT DEVICE)
                    </Typography>
                  )}
                </Box>

                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#94A3B8",
                    mt: 0.5,
                  }}
                >
                  {session.location} • IP: {session.ip} • {session.statusText}
                </Typography>
              </Box>
            </Box>

            {/* اليمين: زر إلغاء الجلسة */}
            <Button
              sx={{
                height: "36px",
                px: 2,
                borderRadius: "6px",
                backgroundColor: "#FEF2F2",
                color: "#EF4444",
                fontWeight: 600,
                fontSize: "13px",
                textTransform: "none",
                whiteSpace: "nowrap",
                alignSelf: { xs: "flex-end", sm: "center" },
                "&:hover": {
                  backgroundColor: "#FEE2E2",
                },
              }}
            >
              Revoke Session
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ActiveSessionsTab;