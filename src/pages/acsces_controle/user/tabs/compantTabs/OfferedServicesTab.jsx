// src/components/tabs/companyTabs/OfferedServicesTab.jsx
import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Tag } from "antd";

const OfferedServicesTab = () => {
  const offerings = [
    {
      id: 1,
      title: "Group Desert Safaris & Dune Bashing",
      description: "Includes 4x4 operations, local camps, and multi-day desert glamping.",
      badge: "Core Expertise",
      icon: <LocationOnOutlinedIcon sx={{ color: "#0284C7", fontSize: "20px" }} />,
    },
    {
      id: 2,
      title: "Historical & Cultural Guided Journeys",
      description: "City excursions, museum entry logistics, and certified historical route planning.",
      badge: null,
      icon: <MapOutlinedIcon sx={{ color: "#0284C7", fontSize: "20px" }} />,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        border: "1px solid rgba(226, 232, 240, 1)",
        p: { xs: 2.5, sm: 4 },
      }}
    >
      {/* العنوان والوصف الرئيسي */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#0F172A", mb: 0.5 }}>
        Declared Agency Offerings
      </Typography>

      <Typography sx={{ fontSize: "14px", color: "#64748B", mb: 3 }}>
        Review the specialized travel fields this business intends to publish and operate on the platform:
      </Typography>

      {/* قائمة البطاقات */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {offerings.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "100%",
              maxWidth: "908px",
              minHeight: "65px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              border: "1px solid #E2E8F0",
              p: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            {/* اليسار: الأيقونة + النصوص */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#E0F2FE",
                  borderRadius: "50%",
                }}
              >
                {item.icon}
              </Avatar>

              <Box>
                <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#64748B", mt: "2px" }}>
                  {item.description}
                </Typography>
              </Box>
            </Box>

            {/* اليمين: Tag الـ Core Expertise عند وجوده */}
            {item.badge && (
              <Tag
                bordered={false}
                style={{
                  backgroundColor: "#DCFCE7",
                  color: "#16A34A",
                  fontWeight: 600,
                  fontSize: "12px",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  margin: 0,
                }}
              >
                {item.badge}
              </Tag>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OfferedServicesTab;