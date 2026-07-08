import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import { ErrorBoundary } from './components/error-wrappers/error-boundary/error-boundary';
import { appRouter } from './routes/app-routes';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <ErrorBoundary onReset={() => window.location.replace('/')}>
      <ReduxProvider store={store}>
        <RouterProvider router={appRouter} />
      </ReduxProvider>
    </ErrorBoundary>
  </StrictMode>,
);
