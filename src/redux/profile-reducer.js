import levkov from "../static/gleb.jpeg"

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

let initialState = {
    profile_info: {
        name: "Vladimir Moshchuk",
        date: "04.03.2004",
        city: "Minsk",
        education: "BSUIR'25"
    },
    posts: [{ id: 1, name: "Gleb Levkov", message: "Wtf?", date: "23.06.2023", profileIcon: levkov }],
    new_post_message: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 2,
                date: "23.06.2023",
                message: state.new_post_message,
                name: "Gleb Levkov",
                profileIcon: levkov
            }
            return {...state, posts: [...state.posts, newPost], new_post_message: ""}
        }
        case UPDATE_POST_TEXT:{
            return {...state, new_post_message: action.message}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (message) =>
    ({ type: UPDATE_POST_TEXT, message: message })

export default profileReducer;