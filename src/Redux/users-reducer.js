import { userAPI } from "../api/api"

const FOLLOW = 'follow'
const UNFOLLOW ='unfollow'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [  ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching}
            case TOGGLE_IS_FOLLOWING_PROGRESS: 
                return {...state, followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)}
                
        default:
            return state;
    }
}

export const follow = (id) => ({type: FOLLOW, userid: id})
export const unfollow = (id) => ({type: UNFOLLOW, userid: id})
export const setUsers = (users, totalUsersCount) => ({type: SET_USERS, users, totalUsersCount})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const changeFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const changeFollowingInProgress = (followingInProgress, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, id})

export const getUsersThunkCreator =(pagesCount, pageSize) => {
    return (dispatch) => {
        dispatch(changeFetching(true));
            userAPI.getUsers(pagesCount, pageSize).then(data => {
            dispatch(changeFetching(false));
            dispatch(setUsers(data.items, data.totalCount));
                });
    }
    }
export const setCurrentPageThunkCreator = (pagesCount, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pagesCount));
        dispatch(changeFetching(true));
        userAPI.getUsers(pagesCount, pageSize).then(data => {
            dispatch(changeFetching(false));
            dispatch(setUsers(data.items, data.totalCount));
            });
    }
}

export const setUnFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(changeFollowingInProgress(true, userId))
                        userAPI.unFollow(userId).then(data => {
                            if (data.resultCode === 0) {
                                dispatch(unfollow(userId))
                            }
                            dispatch(changeFollowingInProgress(false, userId))
                         })
    }
}
export const setFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(changeFollowingInProgress(true, userId))
                        userAPI.follow(userId).then(data => {
                            if (data.resultCode === 0) {
                                dispatch(follow(userId))
                            }
                            dispatch(changeFollowingInProgress(false, userId))
                         })
    }
}
export default usersReducer;