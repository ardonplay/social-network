import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../redux/profile-reducer";
import NewPostBox from "./NewPostBox";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    new_post_message: state.profile_data.new_post_message,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    publishPost: () => {dispatch(addPostActionCreator())},
    changePostText: (text) => {dispatch(updatePostTextActionCreator(text))}
  }
}
const NewPostBoxContainer = connect(mapStateToProps, mapDispatchToProps)(NewPostBox);

export default NewPostBoxContainer;
