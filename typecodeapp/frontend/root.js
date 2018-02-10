import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Article from './components/article';
import Input from './components/input';

const Root = () => (
    <HashRouter>
        <App/>
    </HashRouter>
);

export default Root;
