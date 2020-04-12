import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reducer';
import sideBarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    sideBar: sideBarReducer,
    
});
 
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;