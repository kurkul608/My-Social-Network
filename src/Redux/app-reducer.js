import profileIMG from "./ProfileHead/images/Head.jpg";
import { profileAPI } from "../api/api";
import { setAuthUserDataThunkCreator } from "./auth-reducer";

const INITIALIZED_SUCCESS = "ADD-POST";

let initialState = {
    initialized: false
  
};
const appReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true 
      };
    default:
      return state;
  }
};

export const initializingSuccess = () =>({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch)=>{
    let promise = dispatch(setAuthUserDataThunkCreator())
    Promise.all([promise]).then(() => {
        dispatch(initializingSuccess()) 
    })
    
    

}

export default appReducer;
