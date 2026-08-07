// src/pages/accessControl/RolesPermissions.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const RolesPermissions = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'rgba(0, 52, 128, 1)' }}>
        Roles & Permissions
      </Typography>
      <Typography variant="body1">
        مرحباً بك في صفحة الأدوار والصلاحيات (Roles & Permissions)!
      </Typography>
    </Box>
  );
};

export default RolesPermissions;