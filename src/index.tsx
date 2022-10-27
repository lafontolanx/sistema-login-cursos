import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes/routes';
import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <AppRoutes />
  </>
);

