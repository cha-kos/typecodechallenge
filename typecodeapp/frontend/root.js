import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './errorComponents/errorboundary';

const Root = () => (
    <HashRouter>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </HashRouter>
);

export default Root;
