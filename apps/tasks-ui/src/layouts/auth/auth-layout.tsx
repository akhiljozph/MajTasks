import { Outlet } from 'react-router-dom';
import React from 'react';

// import { Navigate } from 'react-router-dom';
// import { RoutePaths } from '../../routes/route-paths';

const AuthLayout: React.FC = () => {
    // const isAuthenticated = false;

    // if (isAuthenticated) {
    //     return <Navigate to={RoutePaths.APP.DASHBOARD} replace />;
    // }

    return (
        <Outlet />
    );
};

export default AuthLayout;