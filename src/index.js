import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/integral/IntegralCF-Bold.otf';

import { Navbar,Footer } from './components';

import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-diawlmgp0gmfgjtb.us.auth0.com"
    clientId="qLMJNQh6W2senhcxp2UxLMg0qIo3Y3D5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Navbar/>
    <BrowserRouter>
    <Routes>
                <Route path="/" element={<App />} />
                </Routes>
    </BrowserRouter>
    <Footer/>
  </Auth0Provider>,
);