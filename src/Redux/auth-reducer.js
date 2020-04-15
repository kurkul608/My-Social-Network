import { authAPI, logAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA_POST';

let initialState ={
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}; 
const authReducer = (state = initialState, action) => {
    
    // eslint-disable-next-line default-case
    switch(action.type){
          case SET_USER_DATA:
            return {...state,  ...action.payload}
          
        default:
            return state;
    }
    
}


  export const setAuthUserData = (userID, email, login, isAuth) => {
    return {
      type: SET_USER_DATA,
      payload: {userID, email, login, isAuth}
    } 
  }
  export const setAuthUserDataThunkCreator = () => {
    return (dispatch) => {
      authAPI.getAuthMe().then(data => {
        if (data.resultCode === 0) {
          let {id, email, login} = data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
        
          }); 
    }
  }

  export const login = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
      authAPI.loginMe(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
          authAPI.getAuthMe().then(data => {
            if (data.resultCode === 0) {
              let {id, email, login} = data.data;
              dispatch(setAuthUserData(id, email, login, true));
            }
            
              }); 
          
            }
        
          })
    }
  }

  export const logout = () => {
    return (dispatch) => {
      authAPI.logOutMe().then(data => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
          ;}
        
          }) 
    }
  }
export default authReducer;