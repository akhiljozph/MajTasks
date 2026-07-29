import { createBrowserRouter, Navigate } from "react-router-dom";

import { ErrorBoundary } from "../components/error-wrappers/error-boundary/error-boundary";
import PageNotFound from "../components/error-wrappers/page-not-found/page-not-found";
import { ProtectedRoute } from "../components/auth/protected-route/protected-route";
import SigninPage from "../pages/auth/signin/signin-page";
import SignupPage from "../pages/auth/signup/signup-page";
import AuthLayout from "../layouts/auth/auth-layout";
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
        path: RoutePaths.APP.ROOT,
        element: <ProtectedRoute />,
        lazy: () => import("../layouts/main/main-layout").then((module) => ({
            Component: module.MainLayout,
        })),
        children: [
            {
                path: RoutePaths.APP.DASHBOARD,
                lazy: () => import("../pages/app/dashboard/dashboard-page").then((module) => ({
                    Component: module.DashboardPage,
                }))
            }, {
                path: RoutePaths.APP.PROFILE,
                lazy: () => import("../pages/app/profile/profile-page").then((module) => ({
                    Component: module.ProfilePage,
                })),
            }
        ]
    }, {
        path: '*',
        element: <PageNotFound />,
    },
]);