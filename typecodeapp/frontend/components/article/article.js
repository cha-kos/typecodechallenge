import React, { Component } from 'react';
import Title from '../title/title';
import TitleMask from '../title/titleMask';
import {getArticle, updateArticle, verifySlug} from '../../util/articleApiUtil';


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
      loading: true,
      error: null
    };
    this.retrieveArticle = this.retrieveArticle.bind(this);
  }

  componentDidMount(){
    this.retrieveArticle(this.props.match.params.slug);
  }

  componentWillReceiveProps(nextProps){
    // skip AJAX request if url slug has not changed
    if (this.props.match.params.slug !== nextProps.match.params.slug){
      this.retrieveArticle(nextProps.match.params.slug);
    }
  }

  shouldComponentUpdate(nextProps){
    // trigger update if url slug is changed
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
    // send editing state to titleMask component to hide mask while editing title
    this.setState({titleEditing: status});
  }

  render() {
    if(this.state.error) {
      throw new Error();
    }
    if (this.state.loading === true) {
      return(<div className="spinner"></div>);
    }
    return (
      <div className="article-container">
          <img className="header-image" src={window.images.headerImg}/>
        <Title value={this.state.title}
                className="title"
                slug={this.state.slug}
                update={this.update.bind(this)}
                toggleTitleEdit={this.toggleTitleEdit.bind(this)}/>
        <TitleMask title={this.state.title} editing={this.state.titleEditing}/>
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
            // split article body into paragraphs and iterate through
            // adding location and quote based on index of paragraph
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
