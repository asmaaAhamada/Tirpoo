// src/components/topbar/TopBar.jsx
import React from 'react';
import { Box } from '@mui/material';
import WelcomeSection from '../pages/homePage/WelcomeSection';
import ActionControls from '../pages/homePage/ActionControls';


const TopBar = () => {
  return (
    <Box
      component="header"
      sx={{
        maxWidth: '1120px',
        width: '100%',
        minHeight: '65px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        gap: '16px',
        flexWrap: { xs: 'wrap', md: 'nowrap' }
      }}
    >
      <WelcomeSection />
      <ActionControls />
    </Box>
  );
};

export default TopBar;