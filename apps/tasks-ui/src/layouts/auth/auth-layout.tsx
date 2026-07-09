import { Outlet, Navigate } from 'react-router-dom';
import React from 'react';

export const AuthLayout: React.FC = () => {
    // const isAuthenticated = false;

    // if (isAuthenticated) {
    //     return <Navigate to="/dashboard" replace />;
    // }

    return (
        <Outlet />
    );
};