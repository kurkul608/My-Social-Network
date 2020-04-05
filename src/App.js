import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, BrowserRouter} from "react-router-dom";
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import Communities from './components/Communities/Communities';
import Photos from './components/Photos/Photos';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Games from './components/Games/Games';
import NavBarContainer from './components/NavBar/NavBarContainer';


function App(props) {
  return (
    
      <div className='app-wrapper'>
        <Header />
        {/* <NavBar sideBar={props.state.sideBar}/> */}
        <NavBarContainer/>
        <div className='app-wrapper-content'>
          <Route path="/profile" 
              render={ () => <Profile/>}/>
          <Route path="/messages" 
              render={ () => <DialogsContainer/>}/>
          <Route path="/friends" component={Friends}/>
          <Route path="/music" component={Music}/>
          {/* <Route path="/friends" component={Friends}/>
          <Route path="/communities" component={Communities}/>
          <Route path="/photo" component={Photos}/>
          <Route path="/music" component={Music}/>
          <Route path="/videos" component={Videos}/>
          <Route path="/games" component={Games}/> */}
        </div>
      </div>
    
  );
}

export default App;
