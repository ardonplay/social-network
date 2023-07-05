import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";
import NewMessage from "./NewMessage";
import NewMessageContainer from "./NewMessageContainer";
const Dialogs = (props) => {
  let user_id = props.dialog_data.user_id;
  
  let dialog_items = props.dialog_data.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} avatar={dialog.avatar} id={dialog.id} key={dialog.id}/>
  ));

  let messagies = props.dialog_data.messagies.map((message) => (
    <Message message={message.message} id={message.id} user_id={user_id} key={message.id}/>
  ));
  
  return (
    <div className="flex flex-row w-full backdrop-blur-md rounded-lg">
      <div className="m-5">
        <div className="flex flex-col items-start">{dialog_items}</div>
      </div>

      <div className="m-6 w-full">
        {messagies}
        <NewMessageContainer dispatch={props.dispatch} new_message={props.dialog_data.new_message}/></div>
    </div>
  );
};

export default Dialogs;
