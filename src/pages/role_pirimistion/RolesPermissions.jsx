// src/pages/accessControl/RolesPermissions.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import RoleStateCard from './roleState';
import RoleTabsContainer from './RoleRouter';

const RolesPermissions = () => {
  return (
  <>
  
  <RoleStateCard/>
  <RoleTabsContainer/>
  
  </>
  );
};

export default RolesPermissions;