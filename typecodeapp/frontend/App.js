import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import Article from './components/article';
import Input from './components/input';
import Root from './root';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
          <Route exact path='/' component={ Input } />
          <Route exact path='/article/:slug' component={ Article } />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
