import levkov from "../static/gleb.jpeg"
import vasilkov from "../static/egor.jpeg"
import profileLogo from "../static/profile.png"

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

let initialState = {
    user_id: 669,
    dialogs: [
        { id: 115, name: "Gleb Levkov", avatar: levkov },
        { id: 228, name: "Egor Vasilkov", avatar: vasilkov },
        { id: 453, name: "Dmitry Cringeman", avatar: profileLogo },
    ],
    messagies: [
        { id: 115, message: "Hi, how are u?" },
        { id: 669, message: "I'm fine! Thanks!" },
        { id: 115, message: "What are u think about training in cs:go?" },
        { id: 669, message: "Let`s go!" },
    ],
    new_message: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 669,
                message: state.new_message
            }
            return { ...state, messagies: [...state.messagies, newMessage], new_message: "" };
        }
        case UPDATE_MESSAGE_TEXT: {
            return { ...state, new_message: action.message }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreator = (message) =>
    ({ type: UPDATE_MESSAGE_TEXT, message: message })

export default dialogsReducer;