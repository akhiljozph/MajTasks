import { Navigate, Outlet, useLocation } from "react-router-dom";

import { IProtectedRouteProps } from "./protected-route.types";
import { useAuth } from "../../../hooks";

export function ProtectedRoute(props: IProtectedRouteProps) {

    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
    }

    return props ? <>{props?.children}</> : <Outlet />;
}