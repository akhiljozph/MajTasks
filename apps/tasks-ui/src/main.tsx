import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import { ErrorBoundary } from './components/error-wrappers/error-boundary/error-boundary';
import { applicationTheme } from './theme/application-theme';
import { appRouter } from './routes/app-routes';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    {/* Global top-level safety net to trap rendering or provider crashes */}
    <ErrorBoundary onReset={() => window.location.replace('/')}>
      {/* Redux Core: Feeds data states downstream to all pages & styles */}
      <ReduxProvider store={store}>
        {/* MUI Engine: Applies design tokens across the tree */}
        <ThemeProvider theme={applicationTheme}>
          {/* CssBaseline kicks off a consistent global CSS reset based on theme tokens */}
          <CssBaseline />
          {/* React Router Data Layer: Executes data fetching and page mounting */}
          <RouterProvider router={appRouter} />
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  </StrictMode>,
);
