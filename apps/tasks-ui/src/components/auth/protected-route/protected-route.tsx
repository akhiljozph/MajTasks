import { Navigate, Outlet, useLocation } from "react-router-dom";

import { IProtectedRouteProps } from "./protected-route.types";
import { RoutePaths } from "../../../routes/route-paths";
import { useAuth } from "../../../hooks";

export function ProtectedRoute({ children }: IProtectedRouteProps) {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return (
            <Navigate
                to={`${RoutePaths.AUTH.ROOT}/${RoutePaths.AUTH.SIGN_IN}`}
                state={{ from: location }}
                replace
            />
        );
    }

    return children ? <>{children}</> : <Outlet />;
}
