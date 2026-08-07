// src/pages/accessControl/AdminManagement.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const AdminManagement = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'rgba(0, 52, 128, 1)' }}>
        Admin Management
      </Typography>
      <Typography variant="body1">
        مرحباً بك في صفحة إدارة المسؤولين (Admin Management)!
      </Typography>
    </Box>
  );
};

export default AdminManagement;