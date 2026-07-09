import { FallbackProps } from "react-error-boundary";
import { ComponentType, ReactNode } from "react";

export interface ErrorBoundaryProps {
    children: ReactNode;
    FallbackComponent?: ComponentType<FallbackProps>;
    onReset?: () => void;
    resetKeys?: unknown[];
}