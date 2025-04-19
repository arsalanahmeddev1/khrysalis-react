import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import MyProvider from './router/provider';
// import { SkeletonTheme } from 'react-loading-skeleton';
import { AppProviders } from './contexts/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
        {/* <MyProvider> */}
        <AppProviders>  
          <App />
        </AppProviders>
        {/* </MyProvider> */}
      </BrowserRouter>
    
  </React.StrictMode>

);

reportWebVitals();
