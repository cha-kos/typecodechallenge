import React, { Component } from 'react';
import Input from './input';
import {getArticle, updateArticle} from '../util/articleApiUtil';
var article;

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      slug: ""
    };
  }

  componentDidMount(){
    article = this;
    getArticle(this.props.match.params.slug)
    .then( response => {
      article.setState( response );
    });
  }

  update(title){
    article = this;
    updateArticle({ title: title, slug: this.state.slug })
    .then (response => {
      article.setState(response , () => {
        article.props.history.push(`/article/${article.state.slug}`);
      });
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">{this.state.title}</h1>
          <div className="app-designer"> Built & Designed by <a href="https://www.chrishakos.com">Chris Hakos</a></div>
          <Input value={this.state.title} className="title" update={this.update.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default Article;
