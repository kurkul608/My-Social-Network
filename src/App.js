import React, { Component } from "react";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, withRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import LogOut from "./components/Login/Logout";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
 
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBarContainer />
          <div className="app-wrapper-content">
            <Route
              path="/profile/:userid?"
              render={() => <ProfileContainer />}
            />
            <Route path="/messages" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/logout" render={() => <LogOut />} />
            <Route path="/music" render={() => <Music />} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default withRouter(connect(mapStateToProps, { initializeApp })(App));
