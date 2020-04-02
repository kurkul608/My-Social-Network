import store from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// addPost('nwviuevn')
    let rerenderEntrieTree = () =>{
    ReactDOM.render(
    <BrowserRouter>
        <App state={store.getstate()} 
        addPost={store.addPost.bind(store)} 
        updateNewPostText={store.updateNewPostText.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root'));
};

rerenderEntrieTree(store.getstate());


store.subscribe(rerenderEntrieTree);


serviceWorker.unregister();

