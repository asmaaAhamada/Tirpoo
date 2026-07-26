// src/LoginPage.jsx
import React, { useState, useRef } from 'react';
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

const Log_In_Page_Verification = () => {
  // حالة لحفظ قيم الخانات الـ 5
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);

  // التبديل والتنقل التلقائي بين المربعات
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // السماح برقم واحد فقط في كل مربع
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // الانتقال للمربع التالي تلقائياً
    if (value !== '' && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // الرجوع للمربع السابق عند ضغط Backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

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
        {/* البوكس الرئيسي المخصص للتحقق */}
        <Box
          sx={{
            width: '100%',
maxWidth: { xs: '100%', sm: '480px' },     
minHeight: {  sm: '300px' },        
            backgroundColor: colors.cardBg,
            borderRadius: '16px',
            padding: { xs: '24px 16px', sm: '48px 32px' },
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
            zIndex: 2,

            // نزول لأسفل وزياحة بسيطة لليمين للشاشات الكبيرة
            transform: {
              xs: 'none',
              md: 'translate(20px, 40px)',
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
              gap: '16px',
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
                Verify your identity
              </Typography>

              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: colors.textSecondary,
                  marginTop: '8px',
                  maxWidth: '360px',
                  mx: 'auto',
                }}
              >
                We've sent a 6-digit verification code to your authenticator app or email.
              </Typography>
            </Box>
          </Box>

          {/* نموذج إدخال رمز التحقق */}
          <Box
            component="form"
            autoComplete="off"
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {/* 5 مربعات رمز التحقق (OTP) بحجم 48x48 مع شرطات زرقاء وغاب 27px */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: '8px', sm: '17px' }, // الـ Gap 27px تماماً كالمطلوب
                width: '100%',
              }}
            >
              {otp.map((digit, index) => (
                <React.Fragment key={index}>
                  <TextField
                    inputRef={(el) => (inputRefs.current[index] = el)}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    inputProps={{
                      maxLength: 1,
                      style: {
                        textAlign: 'center',
                        fontSize: '18px',
                        fontWeight: '600',
                        padding: 0,
                      },
                    }}
                    sx={{
                      width: '48px',
                      height: '48px',
                      flexShrink: 0,
                      '& .MuiOutlinedInput-root': {
                        width: '48px',
                        height: '48px',
                        borderRadius: '8px',
                        '& fieldset': {
                          borderColor: colors.border,
                          borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                          borderColor: colors.primary,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: colors.primary,
                        },
                      },
                    }}
                  />

                  {/* شرطة عمودية باللون الأزرق بين المربعات */}
                  {index < otp.length - 1 && (
                    <Box
                      sx={{
                        width: '1.5px',
                        height: '16px',
                        backgroundColor: colors.primary || '#003480',
                        borderRadius: '1px',
                        opacity: 0.7,
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>

            {/* نص Resend Code */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: colors.textSecondary,
                  fontWeight: 400,
                }}
              >
                Didn't receive the code?
              </Typography>
              <Link
                underline="none"
                href="#"
                sx={{
                  fontSize: '12px',
                  color: '#0056b3',
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Resend Code.
              </Link>
            </Box>

            {/* زر التأكيد */}
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
              Sign In
            </Button>
          </Box>

          {/* الفوتر الأسفل */}
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

export default Log_In_Page_Verification;