import React, { Component, Suspense } from "react";
import "./App.css";
import { Route, withRouter, HashRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import { compose } from "redux";
import store from "./Redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { withOutSuspense } from "./hoc/withSuspens";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));
const LogOut = React.lazy(() => import("./components/Login/Logout"));
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
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
            <Route path="/profile/:userid?" render={withOutSuspense(ProfileContainer)}/>
            <Route path="/messages" render={withOutSuspense(DialogsContainer)}/>
            <Route path="/users" render={withOutSuspense(UsersContainer)} />
            <Route path="/login" render={withOutSuspense(Login)} />
            <Route path="/logout" render={withOutSuspense(LogOut)} />
            <Route path="/music" render={withOutSuspense(Music)} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
// export default withRouter(connect(mapStateToProps, { initializeApp })(App));
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SocialNetworkApp = (props) => {
  return (
    <HashRouter basename={ process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};
export default SocialNetworkApp;
