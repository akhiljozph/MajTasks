import { createBrowserRouter, Navigate } from "react-router-dom";

import { ErrorBoundary } from "../components/error-wrappers/error-boundary/error-boundary";
import PageNotFound from "../components/error-wrappers/page-not-found/page-not-found";
import SigninPage from "../pages/auth/signin/signin-page";
import SignupPage from "../pages/auth/signup/signup-page";
import AuthLayout from "../layouts/auth/auth-layout";
import MainLayout from "../layouts/main/main-layout";
import { RoutePaths } from "./route-paths";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={RoutePaths.AUTH.ROOT} replace />,
    }, {
        path: RoutePaths.AUTH.ROOT,
        element: <AuthLayout />,
        errorElement: (
            <ErrorBoundary>
                <div>Authentication sub-system crashed.</div>
            </ErrorBoundary>
        ),
        children: [
            {
                index: true,
                element: <Navigate to={RoutePaths.AUTH.SIGN_IN} replace />,
            },
            {
                path: RoutePaths.AUTH.SIGN_IN,
                element: <SigninPage />,
            },
            {
                path: RoutePaths.AUTH.SIGN_UP,
                element: <SignupPage />,
            },
        ],
    }, {
        path: '/profile',
        element: <MainLayout />,
    }, {
        path: '*',
        element: <PageNotFound />,
    },
]);