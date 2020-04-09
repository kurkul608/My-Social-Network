import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import sideBarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;