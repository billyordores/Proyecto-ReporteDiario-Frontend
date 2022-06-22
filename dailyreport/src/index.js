import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-1unjozjx.us.auth0.com' clientId='mZzivCM8TLn7oB0ijqWZjZu2EYfrx0pE' redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);