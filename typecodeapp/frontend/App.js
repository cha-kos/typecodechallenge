import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import Article from './components/article';
import Input from './components/input';
import Root from './root';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={ Input } />
          <Route path='/article/:slug' component={ Article } />
      </Switch>
    );
  }
}


export default withRouter(App);
