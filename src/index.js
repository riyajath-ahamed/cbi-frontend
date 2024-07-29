import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter as Router} from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import client from './api/apolloClient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </Router>
  </React.StrictMode>
);
