import React from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const UsersMasterDirectory = ({ activeTab, onTabChange }) => {
  const tabsData = [
    { label: "Travelers", value: 0 },
    { label: "Guides", value: 1 },
    { label: "Companies", value: 2 },
    { label: "Admin Users", value: 3 },
  ];

  const handleTabChange = (event, newValue) => {
    if (onTabChange) {
      onTabChange(newValue);
    }
  };

  return (
    <Box
      sx={{
        width: "100%", // تم التعديل ليكون العرض بالكامل
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
          <ManageAccountsIcon
            sx={{
              color: "rgba(1, 75, 168, 1)",
              fontSize: { xs: 18, sm: 22, md: 28 },
            }}
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
            Users Master Directory
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12.5px", md: "14px" },
              fontWeight: 400,
              color: "rgba(148, 163, 184, 1)",
              mt: "2px",
            }}
          >
            Manage all users types in this section.
          </Typography>
        </Box>
      </Box>

      {/* شريط التابات */}
      <Box
        sx={{
          backgroundColor: "#F8FAFC",
          padding: "4px",
          borderRadius: "8px",
          border: "1px solid #F1F5F9",
          maxWidth: "100%",
          overflow: "hidden",
          marginLeft: { md: "auto" },
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            minHeight: { xs: "28px", sm: "32px" },
            width: "100%",
            "& .MuiTabs-indicator": { display: "none" },
            "& .MuiTabs-flexContainer": {
              justifyContent: "flex-end",
            },
          }}
        >
          {tabsData.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              disableRipple
              sx={{
                minHeight: { xs: "28px", sm: "32px", md: "36px" },
                padding: { xs: "4px 8px", sm: "6px 12px", md: "6px 16px" },
                minWidth: "auto",
                fontSize: { xs: "11px", sm: "12.5px", md: "14px" },
                fontWeight: activeTab === tab.value ? 600 : 500,
                color: activeTab === tab.value ? "#1E293B !important" : "#64748B",
                backgroundColor:
                  activeTab === tab.value ? "#FFFFFF" : "transparent",
                borderRadius: "6px",
                textTransform: "none",
                boxShadow:
                  activeTab === tab.value
                    ? "0px 1px 3px rgba(0, 0, 0, 0.08)"
                    : "none",
                transition: "all 0.2s ease-in-out",
                "&:hover": { color: "#334155" },
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default UsersMasterDirectory;