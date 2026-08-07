import React from 'react'
import { Routes, Route, Link, Router ,Navigate } from 'react-router-dom'
import LoginPage from './pages/auth/loginPage'
import Log_In_Page_Verification from './pages/auth/Log_In_Page_Verification'
import Forgot_Password_Page from './pages/auth/Forgot_Password_Page'
import Reset_Password_Page from './pages/auth/Reset_Password_Page'
import Dashboard from './pages/homePage/Dashboard'
import MainLayout from './layout/MainLayout'
import UsersManagement from './pages/acsces_controle/user/UsersManagement'
import AdminManagement from './pages/acsces_controle/AdminManagement'
import RolesPermissions from './pages/acsces_controle/RolesPermissions'


export default function App(){
  return (
    <>
    
      <Routes>

                <Route path="/" element={<LoginPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<Forgot_Password_Page />} />
        <Route path="/verification" element={<Log_In_Page_Verification />} />
        <Route path="/Reset_Password_Page" element={<Reset_Password_Page />} />

  <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
<Route path="/access-control" element={<Navigate to="/access-control/users" replace />} />
      
      {/* راوتات Access Control */}
      <Route path="/access-control/users" element={<UsersManagement />} />
      <Route path="/access-control/admins" element={<AdminManagement />} />
      <Route path="/access-control/roles" element={<RolesPermissions />} />        </Route>



      </Routes>
    
    
    </>
  )
}