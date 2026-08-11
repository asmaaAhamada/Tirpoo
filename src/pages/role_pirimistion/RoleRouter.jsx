import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import SuperAdminPermissions from "./tabs/SuperAdminPermissions";

// 1. استدعاء المكون الجديد هنا

const OperationsManagerTab = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6">Operations Manager Component Content</Typography>
  </Box>
);

const SupportAgentTab = () => (
  <Box sx={{ p: 2 }}>
    <Typography variant="h6">Support Agent Component Content</Typography>
  </Box>
);

const RoleTabsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1120px", my: 2 }}>
      <Box
        sx={{
          width: "100%",
          height: "48px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          border: "1px solid rgba(226, 232, 240, 1)",
          display: "flex",
          alignItems: "center",
          px: 1,
          boxSizing: "border-box",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            minHeight: "36px",
            height: "36px",
            alignItems: "center",
            "& .MuiTabs-indicator": { display: "none" },
          }}
        >
          <Tab
            disableRipple
            label="Super Admin (3 Users)"
            sx={{
              minHeight: "36px",
              height: "36px",
              borderRadius: "6px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 600,
              px: 2,
              mx: 0.5,
              color: "#94A3B8",
              "&.Mui-selected": {
                color: "#014BA8",
                backgroundColor: "rgba(1, 75, 168, 0.08)",
              },
            }}
          />
          <Tab
            disableRipple
            label="Operations Manager (8 Users)"
            sx={{
              minHeight: "36px",
              height: "36px",
              borderRadius: "6px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 600,
              px: 2,
              mx: 0.5,
              color: "#94A3B8",
              "&.Mui-selected": {
                color: "#014BA8",
                backgroundColor: "rgba(1, 75, 168, 0.08)",
              },
            }}
          />
          <Tab
            disableRipple
            label="Support Agent (14 Users)"
            sx={{
              minHeight: "36px",
              height: "36px",
              borderRadius: "6px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 600,
              px: 2,
              mx: 0.5,
              color: "#94A3B8",
              "&.Mui-selected": {
                color: "#014BA8",
                backgroundColor: "rgba(1, 75, 168, 0.08)",
              },
            }}
          />
        </Tabs>
      </Box>

      {/* 2. عرض المكون عند اختيار التاب الأول */}
      <Box sx={{ mt: 2 }}>
        {activeTab === 0 && <SuperAdminPermissions />}
        {activeTab === 1 && <OperationsManagerTab />}
        {activeTab === 2 && <SupportAgentTab />}
      </Box>
    </Box>
  );
};

export default RoleTabsContainer;