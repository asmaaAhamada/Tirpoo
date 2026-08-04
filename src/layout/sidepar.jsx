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
  Tooltip
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Folder as FolderIcon,
  Description as PageIcon,
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';

// استدعاء ملف الألوان الخاص بك
import { colors } from '../style/colors';

const Sidebar = () => {
  const location = useLocation();

  // حالة التحكم بالـ Sidebar (مفتوح / مضغوط)
  const [isCollapsed, setIsCollapsed] = useState(false);

  // حالة فتح وإغلاق المجلدات الفرعية
  const [openFolder1, setOpenFolder1] = useState(true);
  const [openFolder2, setOpenFolder2] = useState(false);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <Box
      sx={{
        position: 'relative',
        width: isCollapsed ? '80px' : '257px',
        height: '1062px',
        backgroundColor: colors.sidebarBg,
        borderRight: `1px solid ${colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        boxSizing: 'border-box',
        paddingX: isCollapsed ? '12px' : '20px',
        paddingY: '24px',
      }}
    >
      {/* زر الطي / التوسيع في المنتصف على الحافة الخارجية */}
      <IconButton
        onClick={handleToggleSidebar}
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

      {/* بوكس اللوغو (57px * 58px) */}
      <Box
        sx={{
          width: '57px',
          height: '58px',
          backgroundColor: colors.primaryDark,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontWeight: 'bold',
          marginBottom: '32px',
          flexShrink: 0,
        }}
      >
        LOGO
      </Box>

      {/* عنوان CORE OVERVIEW */}
      {!isCollapsed && (
        <Typography
          variant="caption"
          sx={{
            fontSize: '11px',
            fontWeight: 700,
            color: colors.textSecondary,
            letterSpacing: '0.8px',
            marginBottom: '12px',
            textAlign: 'left',
            display: 'block',
          }}
        >
          CORE OVERVIEW
        </Typography>
      )}

      {/* قائمة التنقلات المربوطة بالراوتر */}
      <List component="nav" disablePadding sx={{ width: '100%' }}>
        
        {/* 1. Dashboard (صفحة فردية) */}
        <Tooltip title={isCollapsed ? 'Dashboard' : ''} placement="right">
          <ListItemButton
            component={Link}
            to="/dashboard"
            selected={isActive('/dashboard')}
            sx={{
              borderRadius: '8px',
              marginBottom: '6px',
              justifyContent: isCollapsed ? 'center' : 'flex-start',
              paddingX: isCollapsed ? '8px' : '12px',
              '&.Mui-selected': {
                backgroundColor: colors.selectedBg,
                '&:hover': { backgroundColor: colors.selectedBg },
              },
              '&:hover': {
                backgroundColor: colors.hoverBg,
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: isCollapsed ? 'auto' : '36px', color: colors.primary }}>
              <DashboardIcon />
            </ListItemIcon>
            {!isCollapsed && (
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

        {/* 2. Folder 1: Management */}
        <Tooltip title={isCollapsed ? 'Management' : ''} placement="right">
          <ListItemButton
            onClick={() => !isCollapsed && setOpenFolder1(!openFolder1)}
            sx={{
              borderRadius: '8px',
              marginBottom: '6px',
              justifyContent: isCollapsed ? 'center' : 'flex-start',
              paddingX: isCollapsed ? '8px' : '12px',
              '&:hover': {
                backgroundColor: colors.hoverBg,
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: isCollapsed ? 'auto' : '36px', color: colors.primary }}>
              <FolderIcon />
            </ListItemIcon>
            {!isCollapsed && (
              <>
                <ListItemText
                  primary="Management"
                  primaryTypographyProps={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: colors.textPrimary,
                  }}
                />
                {openFolder1 ? (
                  <ExpandLess sx={{ color: colors.textSecondary }} />
                ) : (
                  <ExpandMore sx={{ color: colors.textSecondary }} />
                )}
              </>
            )}
          </ListItemButton>
        </Tooltip>

        {/* الصفحات الفرعية للفولدر الأول */}
        {!isCollapsed && (
          <Collapse in={openFolder1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ paddingLeft: '20px' }}>
              
              {/* صفحة قائمة الموظفين */}
              <ListItemButton
                component={Link}
                to="/management/employees"
                selected={isActive('/management/employees')}
                sx={{
                  borderRadius: '8px',
                  marginBottom: '4px',
                  paddingY: '6px',
                  '&.Mui-selected': {
                    backgroundColor: colors.selectedBg,
                  },
                  '&:hover': {
                    backgroundColor: colors.hoverBg,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '28px',
                    color: isActive('/management/employees') ? colors.primary : colors.textSecondary,
                  }}
                >
                  <PageIcon sx={{ fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText
                  primary="Employees List"
                  primaryTypographyProps={{
                    fontSize: '13px',
                    fontWeight: isActive('/management/employees') ? 600 : 400,
                    color: isActive('/management/employees') ? colors.primaryDark : colors.textPrimary,
                  }}
                />
              </ListItemButton>

              {/* صفحة إضافة موظف */}
              <ListItemButton
                component={Link}
                to="/management/add-employee"
                selected={isActive('/management/add-employee')}
                sx={{
                  borderRadius: '8px',
                  marginBottom: '4px',
                  paddingY: '6px',
                  '&.Mui-selected': {
                    backgroundColor: colors.selectedBg,
                  },
                  '&:hover': {
                    backgroundColor: colors.hoverBg,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '28px',
                    color: isActive('/management/add-employee') ? colors.primary : colors.textSecondary,
                  }}
                >
                  <PageIcon sx={{ fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText
                  primary="Add Employee"
                  primaryTypographyProps={{
                    fontSize: '13px',
                    fontWeight: isActive('/management/add-employee') ? 600 : 400,
                    color: isActive('/management/add-employee') ? colors.primaryDark : colors.textPrimary,
                  }}
                />
              </ListItemButton>

            </List>
          </Collapse>
        )}

        {/* 3. Folder 2: Settings & Security */}
        <Tooltip title={isCollapsed ? 'Settings & Security' : ''} placement="right">
          <ListItemButton
            onClick={() => !isCollapsed && setOpenFolder2(!openFolder2)}
            sx={{
              borderRadius: '8px',
              marginBottom: '6px',
              justifyContent: isCollapsed ? 'center' : 'flex-start',
              paddingX: isCollapsed ? '8px' : '12px',
              '&:hover': {
                backgroundColor: colors.hoverBg,
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: isCollapsed ? 'auto' : '36px', color: colors.primary }}>
              <FolderIcon />
            </ListItemIcon>
            {!isCollapsed && (
              <>
                <ListItemText
                  primary="Settings & Security"
                  primaryTypographyProps={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: colors.textPrimary,
                  }}
                />
                {openFolder2 ? (
                  <ExpandLess sx={{ color: colors.textSecondary }} />
                ) : (
                  <ExpandMore sx={{ color: colors.textSecondary }} />
                )}
              </>
            )}
          </ListItemButton>
        </Tooltip>

        {/* الصفحات الفرعية للفولدر الثاني */}
        {!isCollapsed && (
          <Collapse in={openFolder2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ paddingLeft: '20px' }}>
              
              {/* صفحة الأدوار والصلاحيات */}
              <ListItemButton
                component={Link}
                to="/settings/roles"
                selected={isActive('/settings/roles')}
                sx={{
                  borderRadius: '8px',
                  marginBottom: '4px',
                  paddingY: '6px',
                  '&.Mui-selected': {
                    backgroundColor: colors.selectedBg,
                  },
                  '&:hover': {
                    backgroundColor: colors.hoverBg,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '28px',
                    color: isActive('/settings/roles') ? colors.primary : colors.textSecondary,
                  }}
                >
                  <PageIcon sx={{ fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText
                  primary="Roles & Permissions"
                  primaryTypographyProps={{
                    fontSize: '13px',
                    fontWeight: isActive('/settings/roles') ? 600 : 400,
                    color: isActive('/settings/roles') ? colors.primaryDark : colors.textPrimary,
                  }}
                />
              </ListItemButton>

              {/* صفحة سجلات النظام */}
              <ListItemButton
                component={Link}
                to="/settings/logs"
                selected={isActive('/settings/logs')}
                sx={{
                  borderRadius: '8px',
                  marginBottom: '4px',
                  paddingY: '6px',
                  '&.Mui-selected': {
                    backgroundColor: colors.selectedBg,
                  },
                  '&:hover': {
                    backgroundColor: colors.hoverBg,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '28px',
                    color: isActive('/settings/logs') ? colors.primary : colors.textSecondary,
                  }}
                >
                  <PageIcon sx={{ fontSize: 18 }} />
                </ListItemIcon>
                <ListItemText
                  primary="System Logs"
                  primaryTypographyProps={{
                    fontSize: '13px',
                    fontWeight: isActive('/settings/logs') ? 600 : 400,
                    color: isActive('/settings/logs') ? colors.primaryDark : colors.textPrimary,
                  }}
                />
              </ListItemButton>

            </List>
          </Collapse>
        )}

      </List>
    </Box>
  );
};

export default Sidebar;