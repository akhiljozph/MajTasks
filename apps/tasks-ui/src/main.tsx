import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './store';
import { appRouter } from './routes/app-routes';
import { applicationTheme } from './theme/application-theme';
import { ErrorBoundary } from './components/error-wrappers/error-boundary/error-boundary';

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
          <CssBaseline />

          <RouterProvider router={appRouter} />
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  </StrictMode>,
);
