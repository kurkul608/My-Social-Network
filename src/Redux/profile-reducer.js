import profileIMG from './ProfileHead/images/Head.jpg'
import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState ={
    postData: [
        {id: 1, message: 'Hi!', likesCount: 157, disslikesCount: 0},
        {id: 2, message: 'Today is 10.03.2020', likesCount: 725, disslikesCount: 13}
      ],
    profileIMG: profileIMG,
    profile: null,
    newPostText: '',
    status: ''
};
const profileReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: action.body,
                likesCount: 10,
                disslikesCount: 0
              };
            return {
              ...state,
              postData: [...state.postData, newPost],
              newPostText: ''
            };
          case SET_USER_PROFILE:
            return {...state, profile: action.profile}
          case SET_USER_STATUS:
            return {...state, status: action.status}
          
        default:
            return state;
    }
    
}

export const addPostActionCreator = (text) =>{
    return {
      type: ADD_POST,
      body: text
    }
  }
  export const setUserProfile = (profile) => {
    
    return {
      type: SET_USER_PROFILE,
      profile
    } 
  }
  export const setUserStatusAC = (status) => {
    return {
      type: SET_USER_STATUS,
      status
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
  export const getStatus = (userId) => {
    return (dispatch) => {
      (!userId) ? 
        profileAPI.getAuthMe().then(data => {
          if (data.resultCode === 0) {
            let {id} = data.data;
            profileAPI.getStatus(id).then(data=> {
              dispatch(setUserStatusAC(data))
            }); 
          }})
      : profileAPI.getStatus(userId).then(data=> {
        dispatch(setUserStatusAC(data))
      })
    }
  }

  export const putStatus = (status) => {
    return (dispatch) => {
      profileAPI.putStatus(status).then(data => {
        if (data.resultCode === 0) {
          dispatch(setUserStatusAC(status))
        }
      })
    }
  }
export default profileReducer;