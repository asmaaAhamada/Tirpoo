import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  CssBaseline,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import bgImage from '../../assets/image/loginimage/planeimage.jpg';
import logoImage from '../../assets/image/logo/tirppoLogo.png';
import { colors } from '../../style/colors';

import { Set_up_Google } from '../../back_end/slice/auth_managments/setup_google'; // اضبط المسار
import { Verify_Code } from '../../back_end/slice/auth_managments/verify';       // اضبط المسار

const Log_In_Page_Verification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 1. زيادة عدد الخانات إلى 6 أرقام كما هو معتمد في Google Authenticator
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  // استدعاء البيانات من الـ Redux Slices
  const { qrCodeUrl, isLoading: isQrLoading } = useSelector(
    (state) => state.Set_up_Google || {}
  );
  const { isLoading: isVerifying, error: verifyError } = useSelector(
    (state) => state.Verify_Code || {}
  );

  // جلب user_id المخزن من مرحلة الدخول السابقة (أو تحديده)
  const userId = useSelector((state) => state.Log_in?.user_id) || 930;

  // 2. طلب إعداد QR Code فور دخول الصفحة لمسح الكود مجدداً من الهاتف
  useEffect(() => {
    if (userId) {
      dispatch(Set_up_Google({ user_id: userId }));
    }
  }, [dispatch, userId]);

  // التحكم بالتنقل بين مربعات الإدخال
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // الانتقال للمربع التالي تلقائياً عند الكتابة
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // الرجوع للمربع السابق عند الضغط على Backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // 3. معالجة إرسال الرمز للباك إند
  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join('');

    if (code.length !== 6) return;

    dispatch(
      Verify_Code({
        user_id: userId,
        code: code,
        method: 'totp',
      })
    )
      .unwrap()
      .then(() => {
        // الانتقال للواجهة الرئيسية عند نجاح التحقق
        navigate('/dashboard');
      })
      .catch((err) => {
        console.error('فشل التحقق:', err);
      });
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
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: '480px' },
            minHeight: { sm: '300px' },
            backgroundColor: colors.cardBg,
            borderRadius: '16px',
            padding: { xs: '24px 16px', sm: '48px 32px' },
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
            zIndex: 2,
            transform: {
              xs: 'none',
              md: 'translate(20px, 40px)',
            },
          }}
        >
          {/* اللوغو والعنوان */}
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
            <Box sx={{ width: '57px', height: '60px' }}>
              <img
                src={logoImage}
                alt="Tripooo Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </Box>

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
                Scan the QR code with Google Authenticator app, then enter the 6-digit code.
              </Typography>
            </Box>
          </Box>

          {/* 4. عرض الـ QR Code المجلوب لمسحه بالهاتف */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px',
              minHeight: '130px',
            }}
          >
            {isQrLoading ? (
              <CircularProgress size={32} />
            ) : qrCodeUrl ? (
              <img
                src={qrCodeUrl}
                alt="Google 2FA QR Code"
                style={{ width: '130px', height: '130px', borderRadius: '8px' }}
              />
            ) : null}
          </Box>

          {/* النموذج */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            autoComplete="off"
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {/* 6 مربعات لإدخال الرمز */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: '4px', sm: '10px' },
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
                      width: '42px',
                      height: '48px',
                      flexShrink: 0,
                      '& .MuiOutlinedInput-root': {
                        width: '42px',
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

            {/* عرض أخطاء التحقق إن وجدت */}
            {verifyError && (
              <Alert severity="error" sx={{ width: '100%', fontSize: '12px' }}>
                {typeof verifyError === 'string'
                  ? verifyError
                  : verifyError?.message || 'الرمز المدخل غير صحيح'}
              </Alert>
            )}

            {/* زر التأكيد */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={otp.join('').length !== 6 || isVerifying}
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
              {isVerifying ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
            </Button>
          </Box>

          {/* الفوتر */}
          <Box sx={{ marginTop: 'auto', paddingTop: '20px', textAlign: 'center' }}>
            <Typography
              component="span"
              sx={{ fontSize: '12px', fontWeight: 400, color: colors.textSecondary }}
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
              }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Log_In_Page_Verification;