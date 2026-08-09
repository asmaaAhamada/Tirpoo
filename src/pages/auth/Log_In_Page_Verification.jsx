import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  CssBaseline,
  CircularProgress,
  Snackbar,
  Alert,
  IconButton,
  Tooltip,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

import bgImage from '../../assets/image/loginimage/planeimage.jpg';
import logoImage from '../../assets/image/logo/tirppoLogo.png';
import { colors } from '../../style/colors';

import { Set_up_Google } from '../../back_end/slice/auth_managments/setup_google';
import { Verify_Code } from '../../back_end/slice/auth_managments/verify';
import { Resend } from '../../back_end/slice/auth_managments/resend';

const Log_In_Page_Verification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [successMessage, setSuccessMessage] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRefs = useRef([]);

  // استخراج البيانات من Redux
  const { qrCodeUrl, secret, isLoading: isQrLoading } = useSelector(
    (state) => state.Set_up_Google || {}
  );
  const { isLoading: isVerifying, error: verifyError } = useSelector(
    (state) => state.Verify_Code || {}
  );
  const { isLoading: isResending } = useSelector(
    (state) => state.Resend || {}
  );

  const reduxUserId = useSelector((state) => state.Log_in?.userId);
  const userId = reduxUserId || cookies.get('user_id');

  // طلب الـ Setup مرة واحدة فقط إذا لم يكن الـ secret موجهاً سابقاً
  useEffect(() => {
    if (userId && !secret) {
      dispatch(Set_up_Google({ user_id: Number(userId) }));
    }
  }, [dispatch, userId, secret]);

  // دالة نسخ الـ Secret
  const handleCopySecret = () => {
    if (secret) {
      navigator.clipboard.writeText(secret);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // دالة إعادة توليد الـ Key يدوباً عند الحاجة فقط
  const handleRegenerateKey = () => {
    if (userId) {
      dispatch(Set_up_Google({ user_id: Number(userId) }));
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join('');

    if (code.length !== 6 || !userId) return;

    dispatch(
      Verify_Code({
        user_id: Number(userId),
        code: code,
        method: 'totp',
      })
    )
      .unwrap()
      .then(() => {
        setSuccessMessage(true);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      })
      .catch((err) => {
        console.error('فشل التحقق:', err);
      });
  };

  const handleResendCode = () => {
    if (userId) {
      dispatch(Resend({ user_id: Number(userId) }))
        .unwrap()
        .then((res) => {
          console.log('Resend successful:', res);
        })
        .catch((err) => {
          console.error('Resend failed:', err);
        });
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

      <Snackbar
        open={successMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          icon={<CheckCircleIcon fontSize="inherit" />}
          severity="success"
          sx={{
            width: '100%',
            fontSize: '14px',
            fontWeight: 600,
            backgroundColor: '#4caf50',
            color: '#fff',
            '& .MuiAlert-icon': { color: '#fff' },
          }}
        >
          Verification successful! Redirecting to dashboard...
        </Alert>
      </Snackbar>

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
            maxHeight: 'calc(100vh - 48px)',
            overflowY: 'auto',
            backgroundColor: colors.cardBg,
            borderRadius: '16px',
            padding: { xs: '20px 16px', sm: '32px 32px' },
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <Box sx={{ width: '50px', height: '53px' }}>
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
                  marginTop: '6px',
                  maxWidth: '360px',
                  mx: 'auto',
                }}
              >
                Scan the QR code or enter the setup key into your authenticator app.
              </Typography>
            </Box>
          </Box>

          {/* عرض الـ QR Code */}
          {(isQrLoading || qrCodeUrl) && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '12px',
                height: '120px',
                width: '120px',
                flexShrink: 0,
              }}
            >
              {isQrLoading ? (
                <CircularProgress size={32} />
              ) : (
                <img
                  src={qrCodeUrl}
                  alt="Google 2FA QR Code"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                    objectFit: 'contain',
                  }}
                />
              )}
            </Box>
          )}

          {/* عرض الـ Secret Key لربطه يدوياً عبر "Enter a setup key" */}
          {secret && !isQrLoading && (
            <Box
              sx={{
                width: '100%',
                backgroundColor: 'rgba(0, 52, 128, 0.05)',
                borderRadius: '8px',
                padding: '8px 12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '16px',
                border: '1px dashed rgba(0, 52, 128, 0.3)',
              }}
            >
              <Typography sx={{ fontSize: '11px', color: colors.textSecondary, fontWeight: 500 }}>
                Setup Key (Enter manually in app):
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: colors.primary || '#003480',
                    fontFamily: 'monospace',
                  }}
                >
                  {secret}
                </Typography>

                <Tooltip title={copied ? 'Copied!' : 'Copy Key'}>
                  <IconButton size="small" onClick={handleCopySecret} color="primary">
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Generate New Key">
                  <IconButton size="small" onClick={handleRegenerateKey} color="secondary">
                    <RefreshIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            autoComplete="off"
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: '4px', sm: '8px' },
                width: '100%',
                direction: 'ltr',
              }}
            >
              {otp.map((digit, index) => (
                <React.Fragment key={index}>
                  <TextField
                    inputRef={(el) => (inputRefs.current[index] = el)}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    inputProps={{
                      maxLength: 1,
                      style: {
                        textAlign: 'center',
                        fontSize: '18px',
                        fontWeight: '600',
                        padding: 0,
                        color: verifyError
                          ? 'rgba(239, 68, 68, 1)'
                          : 'inherit',
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
                        backgroundColor: verifyError
                          ? 'rgba(254, 226, 226, 1)'
                          : 'transparent',
                        '& fieldset': {
                          borderColor: verifyError
                            ? 'rgba(239, 68, 68, 1)'
                            : colors.border,
                          borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                          borderColor: verifyError
                            ? 'rgba(239, 68, 68, 1)'
                            : colors.primary,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: verifyError
                            ? 'rgba(239, 68, 68, 1)'
                            : colors.primary,
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

            {verifyError && (
              <Typography
                sx={{
                  fontSize: '12px',
                  color: 'rgba(239, 68, 68, 1)',
                  fontWeight: 400,
                  textAlign: 'center',
                }}
              >
                That code isn't quite right. Please check your app and try again.
              </Typography>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: '#000000',
                  fontWeight: 400,
                }}
              >
                Didn't receive the code?
              </Typography>
              <Link
                component="button"
                type="button"
                disabled={isResending}
                onClick={handleResendCode}
                sx={{
                  fontSize: '12px',
                  color: 'rgba(1, 75, 168, 1)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: isResending ? 'not-allowed' : 'pointer',
                  opacity: isResending ? 0.6 : 1,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {isResending ? 'Sending...' : 'Resend Code.'}
              </Link>
            </Box>

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
              {isVerifying ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Sign In'
              )}
            </Button>
          </Box>

          <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
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