import React from 'react';
import Content from './Profile';
import { connect } from 'react-redux';
import { setUserProfileThunkCreator } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

  componentDidMount() {
    
    this.props.setUserProfileThunkCreator(this.props.match.params.userid);
  }

  render() {
    return <Content {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile})

let withURLDataContainerComponent = withRouter (ProfileContainer);

export default connect (mapStateToProps, {setUserProfileThunkCreator})(withURLDataContainerComponent);