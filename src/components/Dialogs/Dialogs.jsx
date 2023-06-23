import React from "react";
import egorAva from "../../static/egor.jpeg";
import glebAva from "../../static/gleb.jpeg";
import profileLogo from "../../static/profile.png";
import DialogItem from "./DialogItem";
import Message from "./Message";
const Dialogs = (props) => {
  let user_id = 669;
  
  let dialogs = [
    { id: 115, name: "Gleb Levkov", avatar: glebAva },
    { id: 228, name: "Egor Vasilkov", avatar: egorAva },
    { id: 453, name: "Dmitry Cringeman", avatar: profileLogo },
  ];
  let dialog_items = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} avatar={dialog.avatar} id={dialog.id} />
  ));

  let messagies = [
    { id: 115, message: "Hi, how are u?" },
    { id: 669, message: "I'm fine! Thanks!" },
    { id: 115, message: "What are u think about training in cs:go?" },
    { id: 669, message: "Let`s go!" },
  ].map((message) => (
    <Message message={message.message} id={message.id} user_id={user_id} />
  ));
  
  return (
    <div className="flex flex-row w-full backdrop-blur-md rounded-lg">
      <div className="m-5">
        <div className="flex flex-col items-start">{dialog_items}</div>
      </div>

      <div className="mt-6">{messagies}</div>
    </div>
  );
};

export default Dialogs;
