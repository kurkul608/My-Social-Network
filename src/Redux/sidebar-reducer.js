
let initialState = {
    menu: [
        {path:'/profile', name:'My Profile', id: 1},
        {path:'/messages', name:'Messages', id: 2},
        {path:'/friends', name:'My Friends', id:3},
        {path:'/music', name:'Music', id:4},
      ]
}
const sideBarReducer = (state = initialState, action) => {
    return state;
}
export default sideBarReducer;