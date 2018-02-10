import React from 'react';
import SaveIcon from '../icons/saveIcon';
import EditIcon from '../icons/editIcon';
import {getArticle, updateArticle, verifySlug} from '../util/articleApiUtil';
// import '../../styles/input.css';

export default class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value,
      slug: this.props.slug,
      className: this.props.className,
      editing: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({value: nextProps.value});
  }

  onChange(e){
    return e => {
      this.setSlug(e.target.value);
    };
  }

  setSlug(title){
    if (title.length >= 1) {
      var slug = title.toLowerCase().replace(" ", "-");
      verifySlug(slug).then(response => this.setState({value: title , slug:response.slug}));
    } else {
      this.setState({value: title, slug: ""})
    }
  }

  handleKeyPress(e){
    if (e && e.key === "Enter"){
      this.setState({editing: false}, this.props.update(this.state.value));
    }
  }

  autoFocus(){
    this.nameInput.selectionStart = this.nameInput.selectionEnd = this.nameInput.value.length;
    this.nameInput.focus();
  }

  render(){
    if (this.state.editing === true){
      return (
        <div className={`${this.state.className}-body input-body`}>
          <input
            className={this.state.className}
            placeholder=''
            type="text"
            value={this.state.value}
            onChange={this.onChange()}
            onKeyPress={(e) => this.handleKeyPress(e)}
            ref={(input) => { this.nameInput = input; }}
          />
          <div> slug: {this.state.slug} </div>
          <button onClick={() => this.setState({editing: false}, this.props.update(this.state.value))}>
            <SaveIcon/>
          </button>
        </div>
      );
    } else {
      return (
        <div className={`${this.state.className}-body input-body`}>
          <div
            className={`${this.state.className} input-display`}
            placeholder=''
            type="text"
            value={this.state.value}
            onChange={this.onChange()}
            onClick={() => this.setState({editing: true}, () => this.autoFocus())}
          >{this.state.value}
          </div>
          <button onClick={() => this.setState({editing: true}, () => this.autoFocus())}>
            <EditIcon/>
          </button>
        </div>
      );
    }
  }
}
