import { FallbackProps } from "react-error-boundary";

export const DefaultFallback: React.FC<FallbackProps> = ({
    error,
    resetErrorBoundary,
}) => {
    return (
        <div role="alert">
            <h2 >Application Error Occurred</h2>
            <p >{error.message || 'An unexpected failure occurred.'}</p>
            <button onClick={resetErrorBoundary}>
                Retry Operation
            </button>
        </div>
    );
};