import profileIMG from "./ProfileHead/images/Head.jpg";
import { profileAPI } from "../api/api";

const ADD_POST = "/profilePage/ADD-POST";
const SET_USER_PROFILE = "/profilePage/SET_USER_PROFILE";
const SET_USER_STATUS = "/profilePage/SET_USER_STATUS";
const DELETE_POST = "/profilePage/DELETE_POST"
const SAVE_USER_PHOTO = "/profilePage/SAVE_USER_PHOTO"

let initialState = {
  postData: [
    { id: 1, message: "Hi!", likesCount: 157, disslikesCount: 0 },
    {
      id: 2,
      message: "Today is 10.03.2020",
      likesCount: 725,
      disslikesCount: 13,
    },
  ],
  profileIMG: profileIMG,
  profile: null,
  newPostText: "",
  status: "",
};
const profileReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.body,
        likesCount: 10,
        disslikesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return {...state, postData: state.postData.filter(p => p.id !== action.id)}
    case SAVE_USER_PHOTO:
      return {...state, pfofile: {...state.profile, photos: action.photos}}

    default:
      return state;
  }
};

export const addPostActionCreator = (text) => {
  return {
    type: ADD_POST,
    body: text,
  };
};
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    id: postId,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setUserStatusAC = (status) => {
  return {
    type: SET_USER_STATUS,
    status,
  };
};
export const saveUserPhotoAC = (photos) => {
  return {
    type: SAVE_USER_PHOTO,
    photos: photos
  }
}


// Thunks 

export const setUserProfileThunkCreator = (userId) => async (dispatch) => {
  if (!userId) {
    let data = await profileAPI.getAuthMe();
    if (data.resultCode === 0) {
      let { id } = data.data
      let response = await profileAPI.getUserProfile(id);
      dispatch(setUserProfile(response))
    }
  } else {
    let data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data))
  }
};
export const getStatus = (userId) => async (dispatch) => {
  if (!userId) {
    let data = await profileAPI.getAuthMe();
    if (data.resultCode === 0){
      let { id } = data.data
      let response = await profileAPI.getStatus(id);
      dispatch(setUserStatusAC(response))
    }
  } else {
    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatusAC(data))
  }
};

export const putStatus = (status) => async (dispatch)=>  {
  let data = await profileAPI.putStatus(status);
  if (data.resultCode === 0){
    dispatch(setUserStatusAC(status))
  }
};
export const savePhoto = (file) => async (dispatch) => {
  let data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0){
    dispatch(saveUserPhotoAC(data.data.photos))
  }
}
export default profileReducer;
