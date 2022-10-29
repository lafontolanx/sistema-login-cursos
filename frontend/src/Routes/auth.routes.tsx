import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../Pages/Login";


export const AuthRoutes = () => {
    return (
      <Routes>
        <Route path="*" element={<Navigate to='/' />} />
        <Route path='/' element={<Login />} />
      </Routes>
    )
}

export default AuthRoutes;