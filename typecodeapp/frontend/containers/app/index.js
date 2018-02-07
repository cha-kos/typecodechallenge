import React from 'react';
import { Route } from 'react-router-dom';
import Profile from '../profile';

const App = () => (
  <div>
    <header>
    </header>

    <main>
      <Route exact path="/" component={Profile} />
    </main>
  </div>
);

export default App;
