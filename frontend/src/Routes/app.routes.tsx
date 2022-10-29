import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserDashboard from "../Pages/Professor";
import { AuthContext } from '../Context/context'
import AdminDashboard from "../Pages/Admin";


export const AppRoutes = () => {
  const { email } = useContext(AuthContext)

    return (
      <Routes>
        {
          email === 'professor@hotmail.com' ? (
            <>
              <Route path="*" element={<Navigate to='/user' />} />
              <Route path='/user' element={<UserDashboard />} />
            </>
          ) : (
            <>
              <Route path="*" element={<Navigate to='/admin' />} />
              <Route path='/admin' element={<AdminDashboard />} />
            </>
          )
        }
      </Routes>
    )
}

export default AppRoutes