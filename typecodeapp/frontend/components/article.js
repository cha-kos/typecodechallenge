import React, { Component } from 'react';
import Input from './input';
import {getArticle, updateArticle} from '../util/articleApiUtil';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      slug: ""
    };
  }

  componentDidMount(){

  }
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
