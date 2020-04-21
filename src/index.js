import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkApp from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// addPost('nwviuevn')
    ReactDOM.render(
            <SocialNetworkApp />,document.getElementById('root'));




serviceWorker.unregister();

