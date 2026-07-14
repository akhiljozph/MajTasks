import { Outlet } from 'react-router-dom';
import React from 'react';

const AuthLayout: React.FC = () => {
    // const isAuthenticated = false;

    // if (isAuthenticated) {
    //     return <Navigate to="/dashboard" replace />;
    // }

    return (
        <Outlet />
    );
};

export default AuthLayout;