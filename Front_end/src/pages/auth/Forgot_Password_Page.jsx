// src/Forgot_Password_Page.jsx
import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  CssBaseline
} from '@mui/material';
import bgImage from '../../assets/image/loginimage/planeimage.jpg'; 
import logoImage from '../../assets/image/logo/tirppoLogo.png'; 
import { colors } from '../../style/colors';
import { useNavigate } from 'react-router-dom';

const Forgot_Password_Page = () => {
      const navigate = useNavigate(); 

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
        
        backgroundImage: {
          xs: 'none',
          md: `linear-gradient(rgba(0, 52, 128, 0.5), rgba(0, 52, 128, 0.5)), url(${bgImage})`,
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: { xs: colors.cardBg, md: 'transparent' },
      }}
    >
      <CssBaseline />

      {/* الحاوية الخارجية المتجاوبة */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1440px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-end' },
          paddingRight: { xs: '16px', sm: '32px', md: '80px', lg: '130px' },
          paddingLeft: { xs: '16px', sm: '32px', md: '0px' },
          paddingY: '24px',
          boxSizing: 'border-box',
        }}
      >
        {/* البوكس الرئيسي المخصص لـ Forgot Password */}
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: '480px' },
            minHeight: '466px',
            backgroundColor: colors.cardBg,
            borderRadius: '16px',
            padding: { xs: '24px 16px', sm: '40px 32px' },
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
            zIndex: 2,
            transform: {
              xs: 'none',
              md: 'translate(30px, 40px)',
            },
          }}
        >
          {/* البوكس الداخلي للوغو والعناوين */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            {/* بوكس اللوغو */}
            <Box
              sx={{
                width: '57px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={logoImage}
                alt="Tripooo Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </Box>

            {/* النصوص والعناوين */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: colors.textPrimary,
                  lineHeight: 1.2,
                }}
              >
                Forgot Password!
              </Typography>

              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: colors.textSecondary,
                  marginTop: '6px',
                  maxWidth: '340px',
                  mx: 'auto',
                }}
              >
                No worries! Enter your number and we'll send you recovery instructions.
              </Typography>
            </Box>
          </Box>

          {/* الفورم */}
          <Box
            component="form"
            autoComplete="off"
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Work Number Field */}
            <TextField
              fullWidth
              autoComplete="off"
              name="work_number_off"
              placeholder="Work Number"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '48px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  '& fieldset': {
                    borderColor: colors.border,
                    borderWidth: '1px',
                  },
                  '&:hover fieldset': {
                    borderColor: colors.primary,
                  },
                },
                '& .MuiInputBase-input': {
                  fontSize: '12px',
                  padding: '12px 14px',
                },
              }}
            />

            {/* Send Reset Link Button */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                height: '48px',
                borderRadius: '8px',
                background: colors.gradientButton,
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FFFFFF',
                boxShadow: 'none',
                '&:hover': {
                  background: colors.gradientButton,
                  opacity: 0.95,
                },
              }}
            >
              Send Reset Link
            </Button>

            {/* Back To Sign In Button (Outlined) */}
            <Button
              fullWidth
              variant="outlined"
                                   onClick={() => navigate("/login")} 

              sx={{
                height: '48px',
                borderRadius: '8px',
                borderColor: colors.primary || '#003480',
                borderWidth: '1px',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 500,
                color: colors.primary || '#003480',
                '&:hover': {
                  borderColor: colors.primary || '#003480',
                  backgroundColor: 'rgba(0, 52, 128, 0.04)',
                },
              }}
            >
              Back To Sign In
            </Button>
          </Box>

          {/* Footer Text */}
          <Box sx={{ marginTop: 'auto', paddingTop: '20px', textAlign: 'center' }}>
            <Typography
              component="span"
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                color: colors.textSecondary,
              }}
            >
              © 2026 Tripooo. All rights reserved. ·{' '}
            </Typography>

            <Link
              href="#"
              sx={{
                fontSize: '12px',
                fontWeight: 600,
                color: colors.primary,
                textDecoration: 'underline',
                textDecorationColor: colors.primary,
                marginRight: '4px',
              }}
            >
              Privacy Policy
            </Link>

            <Typography
              component="span"
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                color: colors.textSecondary,
              }}
            >
              ·{' '}
            </Typography>

            <Link
              href="#"
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                color: colors.primary,
                textDecoration: 'underline',
                textDecorationColor: colors.primary,
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Forgot_Password_Page;