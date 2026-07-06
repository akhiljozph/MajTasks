import { createBrowserRouter, Navigate } from "react-router-dom";

import { RoutePaths } from "./route-paths";
import { AuthLayout } from "../layouts/auth/auth-layout";
import { ErrorBoundary } from "../components/error-wrappers/error-boundary/error-boundary";
import SignIn from "../pages/auth/sign-in/sign-in";
import SignUp from "../pages/auth/sign-up/sign-up";
import PageNotFound from "../components/error-wrappers/page-not-found/page-not-found";

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
                element: <SignIn />,
            },
            {
                path: RoutePaths.AUTH.SIGN_UP,
                element: <SignUp />,
            },
        ],
    }, {
        path: '*',
        element: <PageNotFound />,
    },
]);