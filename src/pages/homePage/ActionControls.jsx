// src/components/topbar/ActionControls.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import {
  KeyboardArrowDown as ArrowDownIcon,
  Search as SearchIcon,
  SettingsOutlined as SettingsIcon,
  NotificationsOutlined as NotificationsIcon
} from '@mui/icons-material';
import { colors } from '../../style/colors';

const ActionControls = () => {
  // حالات القوائم المنسدلة
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('This Month');
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [selectedLang, setSelectedLang] = useState('US');

  const lightBlueBg = 'rgba(1, 75, 168, 0.05)';
  const primaryIconColor = colors.primary; // rgba(1, 75, 168, 1)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: '8px', sm: '12px' },
        flexWrap: { xs: 'wrap', lg: 'nowrap' },
        justifyContent: { xs: 'flex-start', md: 'flex-end' },
        width: { xs: '100%', md: 'auto' }
      }}
    >
      {/* 1. زر الفلترة (الشهر/السنة) */}
      <Button
        disableElevation
        onClick={(e) => setFilterAnchorEl(e.currentTarget)}
        endIcon={<ArrowDownIcon sx={{ color: colors.textSecondary }} />}
        sx={{
          width: { xs: '100px', sm: '125px' },
          height: '48px',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          color: colors.textPrimary,
          border: `1px solid ${colors.border}`,
          textTransform: 'none',
          fontSize: '14px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: '#F8FAFC',
            borderColor: colors.border
          }
        }}
      >
        {selectedFilter}
      </Button>

      <Menu
        anchorEl={filterAnchorEl}
        open={Boolean(filterAnchorEl)}
        onClose={() => setFilterAnchorEl(null)}
      >
        <MenuItem onClick={() => { setSelectedFilter('This Month'); setFilterAnchorEl(null); }}>This Month</MenuItem>
        <MenuItem onClick={() => { setSelectedFilter('This Year'); setFilterAnchorEl(null); }}>This Year</MenuItem>
      </Menu>

      {/* 2. حقل البحث */}
      <TextField
        placeholder="Search bookings, transactions, or guides..."
        variant="outlined"
        size="small"
        sx={{
          width: { xs: '100%', sm: '260px', md: '345px' },
          '& .MuiOutlinedInput-root': {
            height: '48px',
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
            fontSize: '14px',
            fontFamily: '"IBM Plex Sans", sans-serif',
            color: colors.textPrimary,
            '& fieldset': {
              borderColor: colors.border,
            },
            '&:hover fieldset': {
              borderColor: colors.border,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.primary,
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: colors.light_gray, // rgba(148, 163, 184, 1)
            opacity: 1,
            fontSize: '13px'
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: colors.light_gray, fontSize: 20 }} />
            </InputAdornment>
          ),
        }}
      />

      {/* 3. زر تغيير اللغة */}
      <Button
        disableElevation
        onClick={(e) => setLangAnchorEl(e.currentTarget)}
        endIcon={<ArrowDownIcon sx={{ color: primaryIconColor, fontSize: 18 }} />}
        sx={{
          width: '74px',
          height: '48px',
          borderRadius: '8px',
          backgroundColor: lightBlueBg,
          color: primaryIconColor,
          textTransform: 'none',
          fontSize: '14px',
          fontWeight: 600,
          minWidth: 'auto',
          paddingX: '8px',
          '&:hover': {
            backgroundColor: 'rgba(1, 75, 168, 0.1)',
          }
        }}
      >
        {selectedLang}
      </Button>

      <Menu
        anchorEl={langAnchorEl}
        open={Boolean(langAnchorEl)}
        onClose={() => setLangAnchorEl(null)}
      >
        <MenuItem onClick={() => { setSelectedLang('US'); setLangAnchorEl(null); }}>US</MenuItem>
        <MenuItem onClick={() => { setSelectedLang('AR'); setLangAnchorEl(null); }}>AR</MenuItem>
      </Menu>

      {/* 4. زر الإعدادات */}
      <IconButton
        sx={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          backgroundColor: lightBlueBg,
          '&:hover': {
            backgroundColor: 'rgba(1, 75, 168, 0.1)',
          }
        }}
      >
        <SettingsIcon sx={{ color: primaryIconColor, fontSize: 22 }} />
      </IconButton>

      {/* 5. زر الإشعارات */}
      <IconButton
        sx={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          backgroundColor: lightBlueBg,
          '&:hover': {
            backgroundColor: 'rgba(1, 75, 168, 0.1)',
          }
        }}
      >
        <NotificationsIcon sx={{ color: primaryIconColor, fontSize: 22 }} />
      </IconButton>
    </Box>
  );
};

export default ActionControls;