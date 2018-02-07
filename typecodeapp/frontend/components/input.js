import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { update } from '../../modules/user';
import SaveIcon from '../icons/saveIcon';
import EditIcon from '../icons/editIcon';
// import '../../styles/input.css';

export default class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
      className: "input",
      editing: false
    };
  }

  onChange(e){
    return e => {
      this.setState({value: e.target.value});
    };
  }

  handleKeyPress(e){
    if (e && e.key === "Enter"){
      this.setState({editing: false});
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
          <button onClick={() => this.setState({editing: false}, this.update())}>
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
//
// render(){
//   if (this.state.editing === true){
//     return (
//       <div className={`${this.state.className}-body input-body`}>
//         <input
//           className={this.state.className}
//           placeholder=''
//           type="text"
//           value={this.state.value}
//           onChange={this.onChange()}
//           onKeyPress={(e) => this.handleKeyPress(e)}
//           ref={(input) => { this.nameInput = input; }}
//         />
//         <button onClick={() => this.setState({editing: false}, this.update())}>
//           <SaveIcon/>
//         </button>
//       </div>
//     );
//   } else {
//     return (
//       <div className={`${this.state.className}-body input-body`}>
//         <div
//           className={`${this.state.className} input-display`}
//           placeholder=''
//           type="text"
//           value={this.state.value}
//           onChange={this.onChange()}
//           onClick={() => this.setState({editing: true}, () => this.autoFocus())}
//         >{this.state.value}
//         </div>
//         <button onClick={() => this.setState({editing: true}, () => this.autoFocus())}>
//           <EditIcon/>
//         </button>
//       </div>
//     );
//   }
// }
// }
