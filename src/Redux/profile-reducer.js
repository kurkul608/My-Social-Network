import profileIMG from './ProfileHead/images/Head.jpg'
import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState ={
    postData: [
        {id: 1, message: 'Hi!', likesCount: 157, disslikesCount: 0},
        {id: 2, message: 'Today is 10.03.2020', likesCount: 725, disslikesCount: 13}
      ],
    
    profileIMG: profileIMG,
    profile: null,
    newPostText: ''
};
const profileReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 10,
                disslikesCount: 0
              };
            return {
              ...state,
              postData: [...state.postData, newPost],
              newPostText: ''
            };
          
        case UPDATE_NEW_POST_TEXT: 
            return {
              ...state,
              newPostText: action.newText
            };
          case SET_USER_PROFILE:
            return {...state, profile: action.profile}
          
        default:
            return state;
    }
    
}

export const addPostActionCreator = () =>{
    return {
      type: ADD_POST
    }
  }
  export const updateNewPostTextActionCreator = (text) =>{
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
  }
  export const setUserProfile = (profile) => {
    
    return {
      type: SET_USER_PROFILE,
      profile
    } 
  }

  export const setUserProfileThunkCreator = (userId) => {
    
    return (dispatch) => {
      (!userId) ? 
        profileAPI.getAuthMe().then(data => {
          if (data.resultCode === 0) {
            let {id} = data.data;
            profileAPI.getUserProfile(id).then(data => {
              dispatch(setUserProfile(data));
                }); 
          }})
         : profileAPI.getUserProfile(userId).then(data => {
          dispatch(setUserProfile(data));
            })
      
    }
  }
export default profileReducer;