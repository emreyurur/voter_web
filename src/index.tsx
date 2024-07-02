import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';

const clientId = '862264570368-qt1p1qitq446seu7g0ir17cbe5llqacs.apps.googleusercontent.com';

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

