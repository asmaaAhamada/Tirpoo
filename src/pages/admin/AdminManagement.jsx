import React from 'react';
import { Box } from '@mui/material';
import StateAdminCard from './adminStateCard';
import AdminMasterDirectory from './AdminMasterDirectory';
import TableFiltersBar from '../acsces_controle/user/action/TableFiltersBar';
import AdminTablePage from './AdminTablePage';

const AdminManagement = () => {
  return (
    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
      <StateAdminCard />
      <AdminMasterDirectory />
      <TableFiltersBar />
      <AdminTablePage />
    </Box>
  );
};

export default AdminManagement;