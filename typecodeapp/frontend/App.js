import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import Article from './components/article';
import Title from './components/title';
import Root from './root';
import ErrorBoundary from './components/errorboundary';

class App extends Component {
  render() {
    return (
      <Switch>
        <ErrorBoundary>
          <Route exact path='/' component={ Title } />
          <Route path='/article/:slug' component={ Article } />
        </ErrorBoundary>
      </Switch>
    );
  }
}


export default withRouter(App);
