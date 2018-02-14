import React, { Component } from 'react';
import Title from './title';
import TitleMask from './titleMask';
import {getArticle, updateArticle, verifySlug} from '../util/articleApiUtil';


class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      author: "",
      location: "",
      slug: "",
      body: "",
      tags: [],
      titleEditing: false
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
    updateArticle({ title: title, newSlug: slug, oldSlug: this.state.slug})
    .then (response => {
      this.setState(response , () => {
        this.props.history.push(`/article/${this.state.slug}`);
      });
    });
  }

  toggleTitleEdit(status){
    this.setState({titleEditing: status});
  }

  render() {
    debugger
    return (
      <div className="article-container">
          <img className="header-image" src={window.images.headerImg}/>
        <Title value={this.state.title}
                className="title"
                slug={this.state.slug}
                update={this.update.bind(this)}
                toggleTitleEdit={this.toggleTitleEdit.bind(this)}/>
        <TitleMask value={this.state.title} editing={this.state.titleEditing}/>
        <div className="author-date-tags-container">
          <div className="author">
            by Joey Salami
          </div>
          <div className="date">
            August 6, 2015
          </div>
          <ul className="tags">
            {this.state.tags.map((tag) => {
              return <li>{"#" + tag}</li>;
            })}
          </ul>
        </div>
        <div className="article-body">
          {this.state.body}
        </div>
      </div>
    );
  }
}

export default Article;
