// src/components/topbar/WelcomeSection.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../style/colors';

const WelcomeSection = () => {
  return (
    <Box 
      sx={{ 
        maxWidth: { xs: '100%', md: '387px' },
        display: 'flex',
        flexDirection: 'column',
        justify: 'center'
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"IBM Plex Sans", sans-serif',
          fontWeight: 600, // SemiBold
          fontSize: { xs: '18px', sm: '20px', md: '24px' },
          color: colors.textPrimary, // rgba(15, 23, 42, 1)
          lineHeight: 1.2,
          whiteSpace: 'nowrap'
        }}
      >
        Good afternoon, Ahmad!👋
      </Typography>
      
      <Typography
        variant="body2"
        sx={{
          fontFamily: '"IBM Plex Sans", sans-serif',
          fontWeight: 400, // Regular
          fontSize: { xs: '12px', md: '14px' },
          color: colors.light_gray, // rgba(148, 163, 184, 1)
          marginTop: '4px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        Overview of Tripooo operations & performance today.
      </Typography>
    </Box>
  );
};

export default WelcomeSection;