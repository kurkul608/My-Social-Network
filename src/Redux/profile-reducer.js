import profileIMG from "./ProfileHead/images/Head.jpg";
import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "/profilePage/ADD-POST";
const SET_USER_PROFILE = "/profilePage/SET_USER_PROFILE";
const SET_USER_STATUS = "/profilePage/SET_USER_STATUS";
const DELETE_POST = "/profilePage/DELETE_POST"
const SAVE_USER_PHOTO = "/profilePage/SAVE_USER_PHOTO"
const TOGGLE_IS_FETCHING="/profilePage/TOGGLE_IS_FETCHING"
const SAVE_USER_PROFILE = "/profilePage.SAVE_USER_PROFILE"

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
        isFetching: true,
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return {...state, postData: state.postData.filter(p => p.id !== action.id)}
    case SAVE_USER_PHOTO:
      return {...state, pfofile: {...state.profile, photos: action.photos}}
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    // case SAVE_USER_PROFILE:
    //   debugger
    //   return {...state, profile: {...state.profile, aboutMe: action.profile.aboutMe,
    //      fullName: action.profile.fullName},
    //     lookingForAJob: action.profile.lookingForAJob, 
    //     lookingForAJobDescription: action.profile.lookingForAJobDescription}
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
// export const saveUserProfileAC = (profile) => {
//   return {
//     type: SAVE_USER_PROFILE,
//     profile: profile
//   }
// }
export const changeFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

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
  dispatch(changeFetching(true))
  let data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0){
    dispatch(saveUserPhotoAC(data.data.photos))
  }
  dispatch(changeFetching(false))
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const id = getState().auth.userId
  dispatch(changeFetching(true))
  let data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0){
    dispatch(setUserProfileThunkCreator(id))
    dispatch(changeFetching(false))
  } else {
    dispatch(changeFetching(false))
    let action = stopSubmit("edit-profile", { _error: data.messages[0] });  
    dispatch(action);
    return Promise.reject({ _error: data.messages[0] })
  }
  
}
export default profileReducer;
