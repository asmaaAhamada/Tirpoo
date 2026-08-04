import React from 'react'
import { Routes, Route, Link, Router } from 'react-router-dom'
import LoginPage from './pages/auth/loginPage'
import Log_In_Page_Verification from './pages/auth/Log_In_Page_Verification'
import Forgot_Password_Page from './pages/auth/Forgot_Password_Page'
import Reset_Password_Page from './pages/auth/Reset_Password_Page'


export default function App(){
  return (
    <>
    
      <Routes>
                <Route path="/" element={<LoginPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<Forgot_Password_Page />} />
        <Route path="/verification" element={<Log_In_Page_Verification />} />
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
      </Routes>
    
     {/* <Log_In_Page_Verification/> */}
{/* <Forgot_Password_Page/> */}
{/* <Reset_Password_Page/> */}
    </>
  )
}