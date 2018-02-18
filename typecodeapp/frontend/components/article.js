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
      titleEditing: false,
      date:"",
      error: null
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
    }, error => {
      console.log(error);
        this.setState({error: error.responseText});
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
    const body = this.state.body.split("\n");
    if(this.state.error) {
      throw new Error();
    }
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
          <div className="author futura">
            by <span>{this.state.author}</span>
          </div>
          <div className="date futura">
            {this.state.date}
          </div>
          <ul className="tags futura">
            {this.state.tags.map((tag, i) => {
              return <li key={i}>{"#" + tag}</li>;
            })}
          </ul>
        </div>
        <div className="article-body">
          {this.state.body.split("\n").map((paragraph, index) => {
            if (index === 0){
              return (
                <p key={index} className="paragraph">
                  <span className="location futura" style={{display: 'inline'}}>{this.state.location}</span>
                  {paragraph}
                </p>
              );
            } else if (index == 2){
              return (
                <div key={index}>
                  <div className="quote">
                    {this.state.quote}
                  </div>
                  <p className="paragraph">{paragraph}</p>
                </div>
              );
            }else {
              return <p key={index} className="paragraph">{paragraph}</p>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Article;
