import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import Article from './components/article/article';
import Title from './components/title/title';
import Root from './root';
import ErrorBoundary from './errorComponents/errorboundary';
import RouteNotFound from './errorComponents/routeNotFound';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={ Title } />
          <Route exact path='/article/:slug' component={ Article } />
          <Route path="*" component={ RouteNotFound }/>
      </Switch>
    );
  }
}


export default withRouter(App);
