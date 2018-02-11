import React, { Component } from 'react';
import Input from './input';
import {getArticle, updateArticle, verifySlug} from '../util/articleApiUtil';


class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      slug: ""
    };
    this.retrieveArticle = this.retrieveArticle.bind(this);
  }

  componentDidMount(){
    this.retrieveArticle(this.props.match.params.slug);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.slug !== nextProps.match.params.slug){
      this.retrieveArticle(nextProps.match.params.slug);
    }
  }

  shouldComponentUpdate(nextProps){
    if (this.props.match.params.slug !== nextProps.match.params.slug){
      return false;
    } else {
      return true;
    }
  }

  retrieveArticle(slug){
    getArticle(slug)
    .then( response => {
      this.setState( response );
    });
  }

  update(title, slug){
    var article = this;
    updateArticle({ title: title, newSlug: slug, oldSlug: this.state.slug})
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
          <Input value={this.state.title} className="title" slug={this.state.slug} update={this.update.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default Article;
