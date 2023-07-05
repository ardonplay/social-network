import levkov from "../static/gleb.jpeg"
import vasilkov from "../static/egor.jpeg"

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

const profileReducer = (state, action) => {
    const addPost = () => {
        let newPost = {
            date: "23.06.2023",
            message: state.new_post_message,
            name: "Gleb Levkov",
            profileIcon: levkov
        }
        state.posts.push(newPost)
        updateNewPostText("")
    }

    const updateNewPostText = (postMessage) =>{
        state.new_post_message = postMessage;
    }

    switch (action.type) {
        case ADD_POST:
            addPost()
            return state;
        case UPDATE_POST_TEXT:
            updateNewPostText(action.message)
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (message) =>
    ({ type: UPDATE_POST_TEXT, message: message })

export default profileReducer;