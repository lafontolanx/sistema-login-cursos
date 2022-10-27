import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import UserDashboard from "./Pages/userDashboard";
import AdminDashboard from "./Pages/adminDashboard";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/user' element={<UserDashboard />} />
                <Route path='/admin' element={<AdminDashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;