import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "/auth/SET_USER_DATA_POST";
const SET_CAPTCHA = "/auth/SET_CAPTCHA"

let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null
};
const authReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case SET_CAPTCHA:
      return {...state, ...action.payload}
    default:
      return state;
  }
};

const setAuthUserData = (userID, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userID, email, login, isAuth },
  };
};
const setCaptcha = (captchaUrl) => {
  return { type: SET_CAPTCHA,
  payload: {captchaUrl}}
}
export const setAuthUserDataThunkCreator = () => async (dispatch) => {
  let data = await authAPI.getAuthMe();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (
  dispatch
) => {
  let data = await authAPI.loginMe(email, password, rememberMe, captcha);
  debugger
  if (data.resultCode === 0) {
    let data = await authAPI.getAuthMe();
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  } else {
    if (data.resultCode === 10) {
       dispatch(getCaptchaUrl())
    }
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    let action = stopSubmit("login", { _error: message });
    dispatch(action);
  }
};

export const logout = () =>{
  return (dispatch) => {
    authAPI.logOutMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export const getCaptchaUrl =  () => async (dispatch) => {
  const data = await securityAPI.getCapchaURL()
  const captchaUrl = data.url;
  dispatch(setCaptcha(captchaUrl))


};
export default authReducer;
