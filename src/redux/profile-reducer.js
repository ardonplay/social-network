import levkov from "../static/gleb.jpeg"
import vasilkov from "../static/egor.jpeg"

const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

let initialState = {
    profile_info: {
        name: "Vladimir Moshchuk",
        date: "04.03.2004",
        city: "Minsk",
        education: "BSUIR'25"
    },
    posts: [{ name: "Gleb Levkov", message: "Wtf?", date: "23.06.2023", profileIcon: levkov }],
    new_post_message: ""
}
const profileReducer = (state = initialState, action) => {
    let editedState = JSON.parse(JSON.stringify(state));;
    
    const addPost = () => {
        let newPost = {
            date: "23.06.2023",
            message: state.new_post_message,
            name: "Gleb Levkov",
            profileIcon: levkov
        }
        editedState.posts.push(newPost)
        updateNewPostText("")
    }

    const updateNewPostText = (postMessage) =>{
        editedState.new_post_message = postMessage;    
    }

    switch (action.type) {
        case ADD_POST:
            addPost()
            return editedState;
        case UPDATE_POST_TEXT:
            updateNewPostText(action.message)
            return editedState;
        default:
            return editedState;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (message) =>
    ({ type: UPDATE_POST_TEXT, message: message })

export default profileReducer;