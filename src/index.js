import state,  { addPost, subscribe } from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { updateNewPostText } from './Redux/State';

// addPost('nwviuevn')
    let rerenderEntrieTree = () =>{
    ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,
    document.getElementById('root'));
};

rerenderEntrieTree(state);


subscribe(rerenderEntrieTree);


serviceWorker.unregister();

