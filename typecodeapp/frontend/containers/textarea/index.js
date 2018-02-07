import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { update } from '../../modules/user';
import SaveIcon from '../../icons/saveIcon';
import EditIcon from '../../icons/editIcon';
import '../../styles/textarea.css';

class TextArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.user[props.className],
      className: props.className,
      editing: false
    };
  }

  onChange(e){
    return e => {
      this.setState({value: e.target.value});
    };
  }

  update(){
    return () => {
      this.props.update(this.state);
    };
  }

  handleKeyPress(e){
    if (e && e.key === "Enter"){
      this.setState({editing: false}, this.update());
    }
  }

  autoFocus(){
    this.textArea.selectionStart = this.textArea.selectionEnd = this.textArea.value.length;
    this.textArea.focus();
  }

  render(){
    if (this.state.editing === true) {
      return(
        <div className='input-container textarea-body' >
          <textarea
            className={this.state.className}
            placeholder=''
            type="text"
            value={this.state.value}
            onChange={this.onChange()}
            onKeyPress={(e) => this.handleKeyPress(e)}
            ref={(input) => this.textArea = input}
          />
          <button onClick={() => this.setState({editing: false}, this.update())} className='edit-button'>
            <SaveIcon/>
          </button>
        </div>
      );
    } else {
      return(
        <div className='input-container textarea-body'>
          <div
            className={`${this.state.className} textarea-display`}
            onClick={() => this.setState({editing: true}, () => this.autoFocus())}>
            {this.state.value}
          </div>
          <button onClick={() => this.setState({editing: true}, () => this.autoFocus())} className='edit-button'>
            <EditIcon/>
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  update: (attribute) => dispatch(update(attribute))
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextArea);
