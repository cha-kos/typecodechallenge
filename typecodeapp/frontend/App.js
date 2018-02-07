import React, { Component } from 'react';
import Input from './components/input';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">US Airport Distance Calculator</h1>
          <div className="app-designer"> Built & Designed by <a href="https://www.chrishakos.com">Chris Hakos</a></div>
          <Input/>
        </header>
      </div>
    );
  }
}

export default App;
