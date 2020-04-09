const FOLLOW = 'follow'
const UNFOLLOW ='unfollow'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    users: [  ],
    pageSize: 5,
    totalUsersCount: 0,
    jhn: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, 
                users: state.users.map(u => {
                    if (u.id === action.userid) {return ({...u, followed: true })}
                    return u;
                })}
        case UNFOLLOW:
            return {...state, 
                users: state.users.map(u => {
                    if (u.id === action.userid) {return ({...u, followed: false })}
                    return u;
                })}
            case SET_USERS:
                return {...state, users: action.users, totalUsersCount: action.totalUsersCount}
            case SET_CURRENT_PAGE:
                return {...state, currentPage: action.currentPage}
        default:
            return state;
    }
}

export const followAC = (id) => ({type: FOLLOW, userid: id})
export const unfollowAC = (id) => ({type: UNFOLLOW, userid: id})
export const setUsersAC = (users, totalUsersCount) => ({type: SET_USERS, users, totalUsersCount})
export const setCurrentPageAC = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})

export default usersReducer;