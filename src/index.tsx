import { CssBaseline, ThemeProvider } from '@mui/material';
import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from 'theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);