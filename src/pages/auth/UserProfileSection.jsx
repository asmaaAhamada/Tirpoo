// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  IconButton,
  Tooltip,
  Drawer,
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Folder as FolderIcon,
  Description as PageIcon,
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
  Logout as LogoutIcon
} from '@mui/icons-material';
import { colors } from '../../style/colors';


// ==========================================
// 1. User Component المنفصل
// ==========================================
export const UserProfileSection = ({ collapsedState }) => {
  // يمكنك استخدام البيانات القادمة من Context أو Redux أو Props
  const user = {
    name: "Asmaa Alhamada",
    role: "Admin",
    avatar: "" // رابط الصورة
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <Box sx={{ flexShrink: 0, width: '100%' }}>
      {/* الخط الفاصل */}
      <Box
        sx={{
          height: '1px',
          backgroundColor: 'rgba(226, 232, 240, 1)',
          width: '100%',
          marginY: '16px',
        }}
      />

      {/* تفاصيل المستخدم والزر */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsedState ? 'center' : 'space-between',
          gap: '12px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            minWidth: 0,
          }}
        >
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{
              width: 40,
              height: 40,
              fontSize: '14px',
              backgroundColor: colors.primary,
            }}
          >
            {user.name.charAt(0)}
          </Avatar>

          {!collapsedState && (
            <Box sx={{ minWidth: 0 }}>
              <Typography
                noWrap
                sx={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: colors.ecoTours,
                  lineHeight: 1.2,
                }}
              >
                {user.name}
              </Typography>
              <Typography
                noWrap
                sx={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: colors.metricsLabel ,
                  marginTop: '2px',
                  lineHeight: 1.2,
                }}
              >
                {user.role}
              </Typography>
            </Box>
          )}
        </Box>

        {/* أيقونة تسجيل الخروج */}
        {!collapsedState && (
          <Tooltip title="Logout" placement="top">
            <IconButton onClick={handleLogout} sx={{ color: colors.metricsLabel, padding: '6px' }}>
              <LogoutIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};


