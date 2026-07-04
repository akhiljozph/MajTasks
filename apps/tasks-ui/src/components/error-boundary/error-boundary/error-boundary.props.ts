import { ComponentType, ReactNode } from "react";
import { FallbackProps } from "react-error-boundary";

export interface ErrorBoundaryProps {
    children: ReactNode;
    FallbackComponent?: ComponentType<FallbackProps>;
    onReset?: () => void;
    resetKeys?: unknown[];
}