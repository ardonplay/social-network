const FOLLOW = "FOLLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
let initialState = {
    users: []
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
            console.log({ ...state, users: [...action.users] })
            return { ...state, users: [...action.users] }
        }
        default:
            return state;
    }
}


export const followActionCreator = (id) => ({ type: FOLLOW, id: id })

export const unfollowActionCreator = (id) => ({ type: UNFOLLOW, id: id })

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users: users })

export default usersReducer;