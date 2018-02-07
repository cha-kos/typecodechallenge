import React from 'react';
// import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from '../input';
import TextArea from '../textarea';
import '../../styles/profile.css';

const Profile = props => (
  <div>
    <div className='header-background'>
      <div className='header-text'>
        <span className='header-name'>{props.name}</span>
        <span className='header-username'>@{props.username}</span>
      </div>
    </div>
    <div className='info-container'>
      <div className='inputs-container'>
        <div className='attribute'>
          <div className='label'>Name</div>
          <Input className="name" value={props.name}/>
        </div>
        <div className='attribute'>
          <div className='label'>Username</div>
          <Input className="username" value={props.username}/>
        </div>
        <div className='attribute'>
          <div className='label'>Hometown</div>
          <Input className="hometown" value={props.hometown}/>
        </div>
      </div>
      <div className='bio-container'>
        <div className='attribute bio'>
          <div className='label'>Bio</div>
          <TextArea className="bio"/>
          </div>
        </div>
      </div>
  </div>
);

const mapStateToProps = state =>{
  return ({
    name: state.user.name,
    username: state.user.username,
    hometown: state.user.hometown,
    bio: state.user.bio
  });
};

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

    // <button onClick={() => props.changePage()}>Go to about page via redux</button>
