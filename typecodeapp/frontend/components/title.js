import React from 'react';
import Checkmark from '../icons/checkmark';
import Pencil from '../icons/pencil';
import Xicon from '../icons/Xicon';
import {getArticle, updateArticle, verifySlug} from '../util/articleApiUtil';

export default class Title extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value,
      slug: this.props.slug,
      parentValue: this.props.value,
      parentSlug: this.props.slug,
      className: this.props.className,
      editing: false,
      checkmarkColor: "#A2D05A"
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState(
      {
        value: nextProps.value,
        slug: nextProps.slug,
        parentValue: nextProps.value,
        parentSlug: nextProps.slug
      }
    );
  }

  setTitle(){
    this.setState({editing: false},
      () => {
        this.props.update(this.state.value, this.state.slug);
        this.props.toggleTitleEdit(this.state.editing);
      }
    );
  }

  setSlug(title){
    if (title.length >= 1) {
      var slug = this.slugify(title);
      if (slug !== this.state.parentSlug) {
        verifySlug(slug).then(response => this.setState({value: title , slug: response.slug}));
      } else {
        this.setState({value: title, slug: slug});
      }
    } else {
      this.setState({value: title, slug: ""});
    }
  }

  slugify(title){
    // convert title into valid slug, making lowercase, omitting special characters, and replacing white space with -
    return(
      title.toLowerCase()
            .replace(/[;/?:@&=+$,.!""'']/g, "")
            .replace(/\s/g, "-")
    );
  }

  discard(){
    // use previously saved state to set back to original title and slug
    this.setState(
      {value: this.state.parentValue,
        slug: this.state.parentSlug,
        checkmarkColor: "#A2D05A",
        editing: false},
      () => this.props.toggleTitleEdit(this.state.editing));
  }

  onChange(e){
    // update state of title, change color of checkmark box if title length is insufficient
    return e => {
      if(e.target.value.length < 1){
        this.setState({checkmarkColor: "#4D4D4D"});
      } else if (this.state.checkmarkColor === "#4D4D4D" && e.target.value.length >= 1){
        this.setState({checkmarkColor: "#A2D05A"});
      }
      this.setSlug(e.target.value);
    };
  }


  handleCheckmarkClick(){
    // update the title if valid
      if (this.state.value.length < 1){
        return;
      }
      this.setTitle();
  }

  handleKeyPress(e){
    // update the title if valid and Enter is pressed, discard changes if Esc is pressed
    if (e.key === "Enter" && e.target.value.length >= 1){
      this.setTitle();
    } else if (e.key === "Escape"){
      this.discard();
    }
  }

  autoFocus(){
    // autofocus on input when clicking to edit in place
    this.nameInput.selectionStart = this.nameInput.selectionEnd = this.nameInput.value.length;
    this.nameInput.focus();
  }

  render(){
    if (this.state.editing === true){
      return (
        <div className={`title-body input-body`}>
          <div className='editing-icons-wrap'>
            <button className='x-icon' onClick={() => this.discard()}>
              <Xicon/>
            </button>
            <button className='checkmark'
                    style= {{background: this.state.checkmarkColor}}
                    onClick={this.handleCheckmarkClick.bind(this)}
            >
              <Checkmark/>
            </button>
          </div>
          <div className="input-wrapper">
            <input
              className='title-input'
              placeholder=''
              type="text"
              value={this.state.value}
              onChange={this.onChange().bind(this)}
              onKeyDown={(e) => this.handleKeyPress(e)}
              ref={(input) => { this.nameInput = input; }}
            />
            {(() => {if(this.state.value.length > 0){
              return(  <div className="slug-container futura"> slug: <span className="slug">{this.state.slug}</span> </div>);
            }else{
              return(<div className="slug-container futura"> slug: <span style={{fontStyle: "italic"}}>please enter a post title</span> </div>);
            }})()}
          </div>
        </div>
      );
    } else {
      return (
        <div className={`${this.state.className}-body input-body`}>
          <button className="edit-button" onClick={() => this.setState({editing: true}, () =>{
              this.autoFocus();
              this.props.toggleTitleEdit(this.state.editing);})}>
            <Pencil/>
          </button>
            <div
              className='title-display'
              value={this.state.value}
              onClick={() => this.setState({editing: true}, () =>{
                  this.autoFocus();
                  this.props.toggleTitleEdit(this.state.editing);})}
              >
                {this.state.value}
            </div>
        </div>
      );
    }
  }
}
