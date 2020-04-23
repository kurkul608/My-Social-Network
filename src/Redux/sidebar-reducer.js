
const CHANGE_ACTIVE = "CHANGE_ACTIVE"

let initialState = {
    menu: [
        {path:'/profile', name:'My Profile', id: 1},
        {path:'/messages', name:'Messages', id: 2},
        {path:'/users', name:'Users', id:3},
        {path:'/music', name:'Music', id:4},
      ],
      active: false
}
const sideBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_ACTIVE:
            return {...state, active: action.active}
        default:
            return state;
    }
    
}

const setActiveAC = (active) =>{
    return{
        type: CHANGE_ACTIVE,
        active: active
    }
}

export const setActiveTrue = () => async (dispatch) => {
    dispatch(setActiveAC(true))
}
export const setActiveFalse = () => async (dispatch) => {
    dispatch(setActiveAC(false))
}
export default sideBarReducer;