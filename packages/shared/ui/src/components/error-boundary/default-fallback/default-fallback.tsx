import React from "react";
import { DefaultFallbackProps } from "./default-fallback.props";

export const DefaultFallback: React.FC<DefaultFallbackProps> = ({
    error,
    resetErrorBoundary
}) => {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error?.message || 'An unexpected error occurred!'}</p>
            <button onClick={(resetErrorBoundary)}>
                Try Again
            </button>
        </div>
    )
}