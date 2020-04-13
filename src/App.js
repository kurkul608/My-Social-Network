import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, BrowserRouter} from "react-router-dom";
import News from './components/News/News';
import Communities from './components/Communities/Communities';
import Photos from './components/Photos/Photos';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Games from './components/Games/Games';
import NavBarContainer from './components/NavBar/NavBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import LogOut from './components/Login/Logout';


function App(props) {
  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBarContainer/>
        <div className='app-wrapper-content'>
          <Route path="/profile/:userid?" 
              render={ () => <ProfileContainer />}/>
          <Route path="/messages" 
              render={ () => <DialogsContainer/>}/>
          <Route path="/users"
          render ={ () => <UsersContainer />} />
          <Route path="/login"
          render ={ () => <Login />} />
           <Route path="/logout"
          render ={ () => <LogOut />} />
       
        </div>
      </div>
    
  );
}

export default App;
