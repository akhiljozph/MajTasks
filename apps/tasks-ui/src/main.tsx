import { StrictMode } from 'react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

import { ErrorBoundary } from './components/error-boundary/error-boundary/error-boundary';
import { appRouter } from './routes/app-routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <ErrorBoundary onReset={() => window.location.replace('/')}>
      <RouterProvider router={appRouter} />
    </ErrorBoundary>
  </StrictMode>,
);
