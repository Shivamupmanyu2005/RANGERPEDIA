import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useAuth } from './Authcontext1'

const PrivateRoutes = () => {

    const {user} = useAuth();
  return (
    <>
    
    {user ? <Outlet /> : <Navigate to= "/login" />}
    
    
    </>
  )
}

export default PrivateRoutes