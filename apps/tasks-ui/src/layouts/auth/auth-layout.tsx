import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const AuthLayout: React.FC = () => {
    // const isAuthenticated = false;

    // if (isAuthenticated) {
    //     return <Navigate to="/dashboard" replace />;
    // }

    return (
        <>
            <Outlet />
        </>
    );
};