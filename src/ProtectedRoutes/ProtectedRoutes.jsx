import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


export default function ProtectedRoutes({userData}) {

  return <>
  {userData ? <Outlet /> : <Navigate to="login" />}
  {/* if i write /login will take me to login page whateve i logged in or not why ? */}
  
  </>
}
