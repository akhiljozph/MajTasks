import { ErrorBoundary as LibErrorBoundary } from 'react-error-boundary';

import { DefaultFallback } from "../default-fallback/default-fallback";
import { ErrorBoundaryProps } from './error-boundary.props';

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
    children,
    FallbackComponent = DefaultFallback,
    onReset,
    resetKeys,
}) => {
    const handleError = (error: unknown, info: React.ErrorInfo) => {
        // Interface Adapter logic: Route crashes directly to your logging infrastructure
        console.error('Captured by Application ErrorBoundary:', error, info);
    };

    return (
        <LibErrorBoundary
            FallbackComponent={FallbackComponent || DefaultFallback}
            onError={handleError}
            onReset={onReset}
            resetKeys={resetKeys}
        >
            {children}
        </LibErrorBoundary>
    );
};