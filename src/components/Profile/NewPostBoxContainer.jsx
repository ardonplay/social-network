import React from "react";
import { updatePostTextActionCreator, addPostActionCreator } from "../../redux/profile-reducer";
import NewPostBox from "./NewPostBox";

const NewPostBoxContainer = (props) => {
  const onPublishPost = () => {
    let action = addPostActionCreator()
    props.dispatch(action);
  };

  const onChangePostText = (text) => {
    let action = updatePostTextActionCreator(text)
    props.dispatch(action);
  }

  let NewPostBoxProps = {
    publishPost: onPublishPost,
    changePostText: onChangePostText,
    new_post_message: props.new_post_message
  }

  return (
   <NewPostBox {...NewPostBoxProps}/>
  );
};

export default NewPostBoxContainer;
