
const SET_USER_DATA = 'SET_USER_DATA-POST';

let initialState ={
    userID: null,
    email: null,
    login: null,
    isFetching: false
};
const authReducer = (state = initialState, action) => {
    
    // eslint-disable-next-line default-case
    switch(action.type){
          case SET_USER_DATA:
            return {...state,  ...action.data}
          
        default:
            return state;
    }
    
}


  export const setAuthUserData = (userID, email, login) => {
    debugger
    return {
      type: SET_USER_DATA,
      data: {userID, email, login}
    } 
  }
export default authReducer;