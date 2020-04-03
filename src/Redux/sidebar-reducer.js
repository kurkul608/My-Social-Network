
let initialState = {
    menu: [
        {path:'/profile', name:'My Profile'},
        {path:'/messages', name:'Messages'},
        {path:'/friends', name:'My Friends'},
        {path:'/music', name:'Music'},
      ]
}
const sideBarReducer = (state = initialState, action) => {
    return state;
}
export default sideBarReducer;