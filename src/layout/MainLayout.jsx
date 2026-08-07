// src/layouts/MainLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TopBar from "./TopBar";
import Sidebar from "./sidepar"
const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      {/* السايد بار (ثابت للشاشات الكبيرة / Drawer للشاشات الصغيرة) */}
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: { xs: "16px", md: "24px" },
          overflowX: "hidden",
          width: "100%",
        }}
      >
        {/* زر MENU بالشاشات الصغيرة والمتوسطة */}
        {isMobile && (
          <Box sx={{ marginBottom: "16px", display: "flex", alignItems: "center" }}>
            <Button
              variant="outlined"
              startIcon={<MenuIcon sx={{ fontSize: 22 }} />}
              onClick={handleDrawerToggle}
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#1E293B",
                borderColor: "#E2E8F0",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.5px",
                padding: "8px 16px",
                borderRadius: "8px",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.05)",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#F1F5F9",
                  borderColor: "#CBD5E1",
                },
              }}
            >
              MENU
            </Button>
          </Box>
        )}

        {/* التوب بار */}
        <TopBar />

        {/* محتوى الصفحة */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;