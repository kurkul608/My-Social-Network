import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import sideBarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
});

let store = createStore(reducers);
export default store;