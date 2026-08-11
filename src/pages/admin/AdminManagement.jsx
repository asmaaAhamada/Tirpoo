// src/pages/accessControl/AdminManagement.jsx
import React from 'react';
import StateAdminCard from './adminStateCard';
import AdminMasterDirectory from './AdminMasterDirectory';
import TableFiltersBar from '../acsces_controle/user/action/TableFiltersBar';
import AdminTablePage from './AdminTablePage';

const AdminManagement = () => {
  return (
    <>
    
    
    <StateAdminCard/>
    <AdminMasterDirectory/>
    <TableFiltersBar/>
    <AdminTablePage/>
    </>
     
  );
};

export default AdminManagement;