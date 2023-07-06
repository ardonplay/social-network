const FOLLOW = "FOLLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
let initialState = {
    users: [{ id: 1, followed: false, name: "Gleb Levkov", status: "I am genious!", location: { country: "Belarus", city: "Minsk" } },
    { id: 2, followed: true, name: "Egor Vasilkov", status: "I am java.", location: { country: "Belarus", city: "Orsha" } },
    { id: 3, followed: true, name: "Zakhar Haritonovich", status: "Just a prizoner of this world.", location: { country: "Belarus", city: "Brest" } }]
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
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}


export const followActionCreator = (id) => ({ type: FOLLOW, id: id })

export const unfollowActionCreator = (id) => ({ type: UNFOLLOW, id: id })

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users: users })

export default usersReducer;