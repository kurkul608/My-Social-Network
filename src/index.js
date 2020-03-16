import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State';

// let postData = [
//     {id: 1, message: 'Hi!', likesCount: 157, disslikesCount: 0},
//     {id: 2, message: 'Today is 10.03.2020', likesCount: 725, disslikesCount: 13}
//   ]

//   let dialogData = [
//     {name: 'Petr', id: 1}, 
//     {name: 'Iuliia', id: 2},
//     {name: 'Alexey', id: 3},
//     {name: 'Ivan', id:4},
//     {name:'Alla', id: 5},
//     {name: 'Stanislav', id: 6},
//     {name: 'Vladimir', id: 7},
//     {name: 'Oleg', id: 8},
//     {name: 'Mew', id: 9}
//   ]
  
  
  
//     let messagesData = [
//     {message: 'Hi! Thats my first web-site!'},
//     {message: 'How are you?'}
//   ]

ReactDOM.render(<App state={state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
