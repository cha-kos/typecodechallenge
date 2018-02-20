import React from 'react';

// this component provides the white background behind the knockout title text
export default class TitleMask extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.value,
      editing: this.props.editing
    };
  }

  componentWillReceiveProps(nextProps){
    // change state.title or hide titleMask component completely if editing
    if (this.props.value !== nextProps.value) {
      this.setState({title: nextProps.value, editing: nextProps.editing});
    } else if (this.props.editing !== nextProps.editing) {
      this.setState({editing: nextProps.editing});
    }
  }

  render(){
    if (!this.state.editing){
      return (
        <div className='title-mask-container'>
          <div className={`title-mask`}>{this.state.title}</div>
        </div>);
    } else {
      return (null);
    }
  }
}
