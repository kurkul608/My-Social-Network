import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reducer';
import sideBarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    sideBar: sideBarReducer,
    form: formReducer,
    app: appReducer
});
 
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;