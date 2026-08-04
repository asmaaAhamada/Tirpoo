// src/components/PlaneLoader.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import SendOutlined from '@ant-design/icons/SendOutlined';
import { colors } from '../colors';

const PlaneLoader = ({ text = "Signing in..." }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
      <SendOutlined
        spin
        style={{
          fontSize: '18px',
          color: colors.primary, // تم تغيير اللون إلى الأزرق الأساسي ليكون واضحاً
        }}
      />
      <Typography sx={{ fontSize: '14px', color: colors.primary, fontWeight: 600 }}>
        {text}
      </Typography>
    </Box>
  );
};

export default PlaneLoader;