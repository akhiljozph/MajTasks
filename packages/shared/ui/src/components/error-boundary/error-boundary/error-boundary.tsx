import React, { Component, ErrorInfo } from "react";
import { EBProps, EBState } from "./error-boundary.props";
import { DefaultFallback } from "../default-fallback/default-fallback";

export class ErrorBoundary extends Component<EBProps, EBState> {

    public state: EBState = {
        hasError: false,
        error: null
    }

    public static getDerivedStateFromError(error: Error): EBState {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Uncaught error bound within boundary:', error, errorInfo);
    }

    private handleReset = () => {
        this.props.onReset?.();
        this.setState({ hasError: false, error: null });
    }

    public render() {
        if (this.state.hasError && this.state.error) {
            const Fallback = this.props.FallbackComponent || DefaultFallback;
            return <Fallback error={this.state.error} resetErrorBoundary={this.handleReset} />;
        }

        return this.props.children;
    }

}