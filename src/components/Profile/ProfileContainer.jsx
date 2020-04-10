import React from 'react';
import Content from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

  componentDidMount() {
    debugger
    let userid = this.props.match.params.userid
    if (!userid) {
      userid = 2;
    } 
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userid}`)
    .then(response => {
          this.props.setUserProfile(response.data);
            });
  }

  render() {
    return <Content {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile})

let withURLDataContainerComponent = withRouter (ProfileContainer);

export default connect (mapStateToProps, {setUserProfile})(withURLDataContainerComponent);