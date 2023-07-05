const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

const dialogsReducer = (state, action) => {
    const updateNewMessageText = (message) =>{
        state.new_message = message;
    }

    const addMessage = () => {
        let newMessage = {
            id: 669,
            message: state.new_message
        }
        state.messagies.push(newMessage)
        updateNewMessageText("")
    }

    switch (action.type) {
        case ADD_MESSAGE:
            addMessage()
            return state;
        case UPDATE_MESSAGE_TEXT:
            updateNewMessageText(action.message)
            return state;
        default:
            return state;
    }
}   

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreator = (message) =>
    ({ type: UPDATE_MESSAGE_TEXT, message: message })

export default dialogsReducer;