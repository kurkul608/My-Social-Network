import React from 'react';
import Content from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { userAPI } from '../../api/api';


class ProfileContainer extends React.Component {

  componentDidMount() {
    
    let userid = this.props.match.params.userid
    if (!userid) {
      userid = 7079;
    } 
    userAPI.getUserProfile(userid).then(data => {
          this.props.setUserProfile(data);
            });
  }

  render() {
    return <Content {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile})

let withURLDataContainerComponent = withRouter (ProfileContainer);

export default connect (mapStateToProps, {setUserProfile})(withURLDataContainerComponent);