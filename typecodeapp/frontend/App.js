import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import Article from './components/article';
import Title from './components/title';
import Root from './root';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={ Title } />
          <Route path='/article/:slug' component={ Article } />
      </Switch>
    );
  }
}


export default withRouter(App);
