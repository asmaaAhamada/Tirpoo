// src/Reset_Password_Page.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Link,
  CssBaseline
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import bgImage from '../../assets/image/loginimage/planeimage.jpg'; 
import logoImage from '../../assets/image/logo/tirppoLogo.png'; 
import { colors } from '../../style/colors';

const Reset_Password_Page = () => {
  // حالات للتحكم بإظهار/إخفاء كلمة المرور لكل حقل منفصل
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

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

      {/* الحاوية الخارجية */}
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
        {/* البوكس الرئيسي المخصص لإعادة تعيين كلمة المرور */}
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
                Create New Password
              </Typography>

              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: colors.textSecondary,
                  marginTop: '6px',
                  maxWidth: '320px',
                  mx: 'auto',
                }}
              >
                Must be at least 8 characters and contain a number and symbol.
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
            {/* New Password Field */}
            <TextField
              fullWidth
              autoComplete="new-password"
              name="new_password_off"
              type={showNewPassword ? 'text' : 'password'}
              placeholder="New Password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowNewPassword}
                      edge="end"
                      disableRipple
                      sx={{ color: colors.primary }}
                    >
                      {showNewPassword ? (
                        <VisibilityOff sx={{ fontSize: 20 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 20 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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

            {/* Confirm Password Field */}
            <TextField
              fullWidth
              autoComplete="new-password"
              name="confirm_password_off"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                      disableRipple
                      sx={{ color: colors.primary }}
                    >
                      {showConfirmPassword ? (
                        <VisibilityOff sx={{ fontSize: 20 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 20 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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

            {/* Submit Button */}
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
                marginTop: '8px',
                '&:hover': {
                  background: colors.gradientButton,
                  opacity: 0.95,
                },
              }}
            >
              Update Password
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

export default Reset_Password_Page;