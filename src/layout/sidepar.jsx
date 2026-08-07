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
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Folder as FolderIcon,
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';

import { colors } from '../style/colors';
import logo from "../assets/image/logo/tirppoLogo.png";
import { UserProfileSection } from '../pages/auth/UserProfileSection';
import Groups2Icon from '@mui/icons-material/Groups2';
const SidebarContent = ({ isCollapsed, setIsCollapsed, isMobile, onClose }) => {
  const location = useLocation();
  const [openAccessControl, setOpenAccessControl] = useState(true);

  // لون التفعيل المطلوب
  const activeColor = 'rgba(0, 52, 128, 1)';

  const isActive = (path) => location.pathname === path;

  // التحقق مما إذا كان مسار Access Control نشطاً (في حال كان في أي صفحة فرعية له)
  const isAccessControlActive = 
    location.pathname.startsWith('/access-control') || 
    location.pathname === '/access-control';

  // التأكد من أن صفحة Users Management تكون الأكتيف افتراضياً عند فتح Access Control
  const isUsersManagementActive = 
    isActive('/access-control/users') || location.pathname === '/access-control';

  const collapsedState = isMobile ? false : isCollapsed;

  return (
    <Box
      sx={{
        position: 'relative',
        width: isMobile ? '257px' : (isCollapsed ? '80px' : '257px'),
        height: '100%',
        backgroundColor: colors.sidebarBg,
        borderRight: `1px solid ${colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        boxSizing: 'border-box',
        paddingX: collapsedState ? '12px' : '20px',
        paddingY: '24px',
      }}
    >
      {/* زر الطي للشاشات الكبيرة */}
      {!isMobile && (
        <IconButton
          onClick={() => setIsCollapsed(!isCollapsed)}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '-16px',
            transform: 'translateY(-50%)',
            backgroundColor: '#FFFFFF',
            border: `1px solid ${colors.border}`,
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
            zIndex: 10,
            width: '32px',
            height: '32px',
            '&:hover': {
              backgroundColor: colors.cardBg,
            },
          }}
        >
          {isCollapsed ? (
            <ChevronRight sx={{ color: colors.primary, fontSize: 20 }} />
          ) : (
            <ChevronLeft sx={{ color: colors.primary, fontSize: 20 }} />
          )}
        </IconButton>
      )}

      {/* الجزء القابل للتمرير */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': { width: '4px' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '4px' }
        }}
      >
        {/* اللوغو */}
        <Box
          sx={{
            width: "57px",
            height: "58px",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "32px",
            flexShrink: 0, 
            mx: "auto",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* عنوان CORE OVERVIEW */}
        {!collapsedState && (
          <Typography
            variant="caption"
            sx={{
              fontSize: '11px',
              fontWeight: 400,
              color: colors.light_gray,
              letterSpacing: '0.8px',
              marginBottom: '12px',
              textAlign: 'left',
              display: 'block',
            }}
          >
            CORE OVERVIEW
          </Typography>
        )}

        {/* القائمة */}
        <List component="nav" disablePadding sx={{ width: '100%' }}>
          {/* 1. Dashboard */}
          <Tooltip title={collapsedState ? 'Dashboard' : ''} placement="right">
            <ListItemButton
              component={Link}
              to="/dashboard"
              onClick={isMobile ? onClose : undefined}
              selected={isActive('/dashboard')}
              sx={{
                borderRadius: '8px',
                marginBottom: '6px',
                justifyContent: collapsedState ? 'center' : 'flex-start',
                paddingX: collapsedState ? '8px' : '12px',
                '&.Mui-selected': {
                  backgroundColor: colors.selectedBg,
                  '&:hover': { backgroundColor: colors.selectedBg },
                },
                '&:hover': {
                  backgroundColor: colors.hoverBg,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: collapsedState ? 'auto' : '36px', color: colors.primary }}>
                <DashboardIcon />
              </ListItemIcon>
              {!collapsedState && (
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{
                    fontSize: '14px',
                    fontWeight: isActive('/dashboard') ? 600 : 500,
                    color: isActive('/dashboard') ? colors.primaryDark : colors.textPrimary,
                  }}
                />
              )}
            </ListItemButton>
          </Tooltip>

          {/* 2. Access Control Folder */}
          <Tooltip title={collapsedState ? 'Access Control' : ''} placement="right">
            <ListItemButton
              component={Link}
              to="/access-control/users"
              onClick={() => {
                if (!collapsedState) setOpenAccessControl(!openAccessControl);
              }}
              sx={{
                borderRadius: '8px',
                marginBottom: '6px',
                justifyContent: collapsedState ? 'center' : 'flex-start',
                paddingX: collapsedState ? '8px' : '12px',
                backgroundColor: isAccessControlActive ? colors.hoverBg : 'transparent',
                '&:hover': {
                  backgroundColor: colors.hoverBg,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: collapsedState ? 'auto' : '36px', color: colors.primary }}>
                <Groups2Icon />
              </ListItemIcon>
              {!collapsedState && (
                <>
                  <ListItemText
                    primary="Access Control"
                    primaryTypographyProps={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: colors.textPrimary,
                    }}
                  />
                  {openAccessControl ? (
                    <ExpandLess sx={{ color: colors.textSecondary }} />
                  ) : (
                    <ExpandMore sx={{ color: colors.textSecondary }} />
                  )}
                </>
              )}
            </ListItemButton>
          </Tooltip>

          {/* القائمة الفرعية لـ Access Control دون أيقونات فرعية */}
          {!collapsedState && (
            <Collapse in={openAccessControl} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ paddingLeft: '36px' }}>
                
                {/* Users Management (Default Active) */}
                <ListItemButton
                  component={Link}
                  to="/access-control/users"
                  onClick={isMobile ? onClose : undefined}
                  selected={isUsersManagementActive}
                  sx={{
                    borderRadius: '8px',
                    marginBottom: '4px',
                    paddingY: '6px',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(0, 52, 128, 0.08)',
                      '&:hover': { backgroundColor: 'rgba(0, 52, 128, 0.12)' },
                    },
                    '&:hover': {
                      backgroundColor: colors.hoverBg,
                    },
                  }}
                >
                  <ListItemText
                    primary="Users Management"
                    primaryTypographyProps={{
                      fontSize: '13px',
                      fontWeight: isUsersManagementActive ? 600 : 400,
                      color: isUsersManagementActive ? activeColor : colors.textPrimary,
                    }}
                  />
                </ListItemButton>

                {/* Admin Management */}
                <ListItemButton
                  component={Link}
                  to="/access-control/admins"
                  onClick={isMobile ? onClose : undefined}
                  selected={isActive('/access-control/admins')}
                  sx={{
                    borderRadius: '8px',
                    marginBottom: '4px',
                    paddingY: '6px',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(0, 52, 128, 0.08)',
                      '&:hover': { backgroundColor: 'rgba(0, 52, 128, 0.12)' },
                    },
                    '&:hover': {
                      backgroundColor: colors.hoverBg,
                    },
                  }}
                >
                  <ListItemText
                    primary="Admin Management"
                    primaryTypographyProps={{
                      fontSize: '13px',
                      fontWeight: isActive('/access-control/admins') ? 600 : 400,
                      color: isActive('/access-control/admins') ? activeColor : colors.textPrimary,
                    }}
                  />
                </ListItemButton>

                {/* Roles & Permissions */}
                <ListItemButton
                  component={Link}
                  to="/access-control/roles"
                  onClick={isMobile ? onClose : undefined}
                  selected={isActive('/access-control/roles')}
                  sx={{
                    borderRadius: '8px',
                    marginBottom: '4px',
                    paddingY: '6px',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(0, 52, 128, 0.08)',
                      '&:hover': { backgroundColor: 'rgba(0, 52, 128, 0.12)' },
                    },
                    '&:hover': {
                      backgroundColor: colors.hoverBg,
                    },
                  }}
                >
                  <ListItemText
                    primary="Roles & Permissions"
                    primaryTypographyProps={{
                      fontSize: '13px',
                      fontWeight: isActive('/access-control/roles') ? 600 : 400,
                      color: isActive('/access-control/roles') ? activeColor : colors.textPrimary,
                    }}
                  />
                </ListItemButton>

              </List>
            </Collapse>
          )}
        </List>
      </Box>

      {/* قسم ملف المستخدم */}
      <UserProfileSection collapsedState={collapsedState} />
    </Box>
  );
};

// ==========================================
// Main Sidebar Component
// ==========================================
const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '257px' },
        }}
      >
        <SidebarContent 
          isCollapsed={false} 
          setIsCollapsed={setIsCollapsed} 
          isMobile={true} 
          onClose={handleDrawerToggle}
        />
      </Drawer>
    );
  }

  return (
    <SidebarContent 
      isCollapsed={isCollapsed} 
      setIsCollapsed={setIsCollapsed} 
      isMobile={false} 
    />
  );
};

export default Sidebar;