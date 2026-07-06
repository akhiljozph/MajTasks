import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from './error-boundary'

describe('Component - ErrorBoundary', () => {
    it('should render children when no runtime error occurs', () => {
        const testId = 'error-boundary-child';
        const ErrorBoundaryChild = () => <div data-testid={testId}>Error Boundary Child</div>;

        render(
            <ErrorBoundary>
                <ErrorBoundaryChild />
            </ErrorBoundary>
        );

        const errorBoundaryChildNode = screen.getByTestId(testId);
        expect(errorBoundaryChildNode).toBeInTheDocument();
        expect(errorBoundaryChildNode).toHaveTextContent('Error Boundary Child');

        expect(screen.queryByText('Application Error Occurred')).not.toBeInTheDocument();
    });
});