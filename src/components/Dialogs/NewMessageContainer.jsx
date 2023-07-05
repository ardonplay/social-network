import { addMessageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        new_message: state.dialog_data.new_message
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeMessageText: (text) => {dispatch(updateMessageTextActionCreator(text))},
        send: () => {dispatch(addMessageActionCreator())}
    }
}
const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
