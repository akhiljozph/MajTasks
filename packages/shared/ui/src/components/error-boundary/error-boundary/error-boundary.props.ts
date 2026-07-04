import { ComponentType, ReactNode } from "react";

export interface EBProps {
    children?: ReactNode;
    FallbackComponent?: ComponentType<{ error: Error; resetErrorBoundary: () => void; }>;
    onReset?: () => void;
}

export interface EBState {
    hasError: boolean;
    error: Error | null;
}