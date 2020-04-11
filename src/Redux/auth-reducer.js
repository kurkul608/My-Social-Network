
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
            return {...state,  ...action.data, isAuth: true}
          
        default:
            return state;
    }
    
}


  export const setAuthUserData = (userID, email, login) => {
    return {
      type: SET_USER_DATA,
      data: {userID, email, login}
    } 
  }
export default authReducer;