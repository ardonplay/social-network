const FOLLOW = "FOLLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users.map(user => (user.id === action.id ? { ...user, followed: true } : user))
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(user => (user.id === action.id ? { ...user, followed: false } : user))
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalCount: action.totalCount }
        }
        default:
            return state;
    }
}


export const followActionCreator = (id) => ({ type: FOLLOW, id: id })

export const unfollowActionCreator = (id) => ({ type: UNFOLLOW, id: id })

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users: users })

export const setTotalCountActionCreator = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount: totalCount })

export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })

export default usersReducer;