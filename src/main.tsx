import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import client from './apolloClient';
import './styles/App.css';
import { ApolloProvider } from '@apollo/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
