// src/LoginPage.jsx
import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearError, setformInfo, Log_in } from '../../back_end/slice/auth_managments/log_in_Slice';
import PlaneLoader from '../../style/loading/PlaneLoader'; 

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // التحكم بإظهار وإخفاء كلمة المرور
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // جلب معلومات الحالة من Redux
  const { password, work_number } = useSelector((state) => state.Log_in.formInfo);
  const { isLoading, error,message } = useSelector((state) => state.Log_in);

  // مسح الأخطاء السابقة عند فتح الصفحة
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  // تحديث بيانات الحقول في Redux
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setformInfo({ [name]: value }));
  };

  // تنفيذ عملية تسجيل الدخول
  const handle_log_in = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    dispatch(Log_in())
      .unwrap()
      .then(() => {
        // عند النجاح ننتقل لصفحة الفيريفيكيشن تأكيد الرمز
        navigate('/verification');
      })
      .catch((err) => {
        console.error('Login Failed:', err);
      });
  };

  // التحقق من تعبئة كافة الحقول لفك تعطيل الزر
  const isFormValid = work_number.trim() !== '' && password.trim() !== '';

  // استخراج الأخطاء الخاصة بالباك إند للحقول والخطأ العام
  const workNumberError = error?.errors?.work_number?.[0] || (error?.field === 'work_number' ? error.message : null);
  const passwordError = error?.errors?.password?.[0] || (error?.field === 'password' ? error.message : null);
  const generalError = typeof error === 'string' ? error : error?.message && !workNumberError && !passwordError ? error.message : null;

  // حدد ما إذا كان يجب إظهار حواف الإيميل بلون أحمر (من الباكيند فقط)
  const isWorkNumberInvalid = Boolean(workNumberError);

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
        {/* البوكس الرئيسي المخصص لتسجيل الدخول */}
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
          {/* اللوغو والعناوين */}
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
            {/* صورة اللوغو */}
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

            {/* النصوص العلوية */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: colors.textPrimary,
                  lineHeight: 1.2,
                }}
              >
                Sign In To Your Account!
              </Typography>

              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 400,
                  color: colors.textSecondary,
                  marginTop: '4px',
                }}
              >
                Enter your details to access your admin account.
              </Typography>
            </Box>
          </Box>

          {/* نموذج تسجيل الدخول */}
          <Box
            component="form"
            onSubmit={handle_log_in}
            autoComplete="off"
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Work Email / Number Field */}
            <Box sx={{ width: '100%' }}>
              <TextField
                fullWidth
                autoComplete="off"
                name="work_number"
                value={work_number}
                onChange={handleInputChange}
                placeholder="Work Number "
                variant="outlined"
                error={isWorkNumberInvalid}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: '48px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    '& fieldset': {
                      borderColor: isWorkNumberInvalid ? colors.error : colors.border,
                      borderWidth: '1px',
                    },
                    '&:hover fieldset': {
                      borderColor: isWorkNumberInvalid ? colors.error : colors.primary,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: isWorkNumberInvalid ? colors.error : colors.primary,
                    },
                  },
                  '& .MuiInputBase-input': {
                    fontSize: '12px',
                    padding: '12px 14px',
                  },
                }}
              />
              {workNumberError && (
                <Typography
                  sx={{
                    fontSize: '11px',
                    color: colors.error,
                    marginTop: '4px',
                    textAlign: 'left',
                  }}
                >
                  {workNumberError}
                </Typography>
              )}
            </Box>

            {/* Password Field */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
              <TextField
                fullWidth
                autoComplete="new-password"
                name="password"
                value={password}
                onChange={handleInputChange}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                variant="outlined"
                error={Boolean(passwordError)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                        disableRipple
                        sx={{ color: colors.primary }}
                      >
                        {showPassword ? (
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
                      borderColor: passwordError ? colors.error : colors.border,
                      borderWidth: '1px',
                    },
                    '&:hover fieldset': {
                      borderColor: passwordError ? colors.error : colors.primary,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: passwordError ? colors.error : colors.primary,
                    },
                  },
                  '& .MuiInputBase-input': {
                    fontSize: '12px',
                    padding: '12px 14px',
                    WebkitTextSecurity: showPassword ? 'none' : 'disc',
                  },
                }}
              />
              {passwordError && (
                <Typography
                  sx={{
                    fontSize: '11px',
                    color: colors.error,
                    marginTop: '2px',
                    textAlign: 'left',
                  }}
                >
                  {passwordError}
                </Typography>
              )}

              {/* Forgot Password Link */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                <Link
                  underline="none"
                  onClick={() => navigate('/forgot-password')}
                  sx={{
                    fontSize: '12px',
                    color: colors.primary,
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Forgot Your Password?
                </Link>
              </Box>
            </Box>

            {/* عرض الخطأ العام إن وجد */}
           {message && (
  <Typography
    sx={{
      fontSize: '13px',
      color: colors.primary,
      textAlign: 'center',
      fontWeight: 500,
    }}
  >
    {message}
  </Typography>
)}

{/* عرض الخطأ العام إن وجد */}
{generalError && (
  <Typography
    sx={{
      fontSize: '12px',
      color: colors.error,
      textAlign: 'center',
    }}
  >
    {generalError}
  </Typography>
)}

            {/* Submit Button */}
            <Button
              fullWidth
              type="submit"
              disabled={!isFormValid || isLoading}
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
                '&.Mui-disabled': {
                  background: colors.disabledBg,
                  color: colors.disabledText,
                },
              }}
            >
              {isLoading ? (
                <PlaneLoader text="Signing in..." />
              ) : (
                'Sign In'
              )}
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

export default LoginPage;