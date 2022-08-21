import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { Contact } from './component/ContactButton';

const domain = process.env.REACT_APP_AUTHO_DOMAIN;
const clinet = process.env.REACT_APP_AUTHO_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clinet}
    redirectUri={window.location.origin}
  >
    {/* <App /> */}
    <Contact />
  </Auth0Provider>
);
