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
    let editedState = JSON.parse(JSON.stringify(state));;

    const updateNewMessageText = (message) =>{
        editedState.new_message = message;
    }

    const addMessage = () => {
        let newMessage = {
            id: 669,
            message: state.new_message
        }
        editedState.messagies.push(newMessage)
        updateNewMessageText("")
    }

    switch (action.type) {
        case ADD_MESSAGE:
            addMessage()
            return editedState;
        case UPDATE_MESSAGE_TEXT:
            updateNewMessageText(action.message)
            return editedState;
        default:
            return editedState;
    }
}   

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreator = (message) =>
    ({ type: UPDATE_MESSAGE_TEXT, message: message })

export default dialogsReducer;