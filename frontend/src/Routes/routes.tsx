import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthContext } from '../Context/context'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'


export const Routes = () => {
    const { signed } = useContext(AuthContext)

    return (
        <BrowserRouter>
            {signed ? (
                <AppRoutes />
                ) : (
                <AuthRoutes />
            )}
        </BrowserRouter>
    )
}

export default Routes;