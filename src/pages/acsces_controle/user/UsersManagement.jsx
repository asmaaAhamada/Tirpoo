// src/pages/accessControl/UsersManagement.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import StateUserCard from './state_user';
import UsersMasterDirectory from './UsersMasterDirectory';
import UsersTableContainer from './UsersTableContainer';

const UsersManagement = () => {
  return (
    < >
     <StateUserCard/>
     <UsersMasterDirectory/>
     <UsersTableContainer/>
    </>
  );
};

export default UsersManagement;