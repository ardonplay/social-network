import React from "react";
import { addMessageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogs-reducer";
let newMessageElement = React.createRef();

const NewMessage = (props) => {

  const publish = () => {
    let action = addMessageActionCreator()
    props.dispatch(action);
  };
  
  const changeMessageText = () => {
    let action = updateMessageTextActionCreator(newMessageElement.current.value)
    props.dispatch(action);
  }

  return (
    <div className="absolute bottom-5">
    <div className="flex flex-col items-start">
      <div className="flex flex-row w-96 mt-2">
        <input
          type="text"
          ref={newMessageElement}
          aria-describedby="new-post-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="type your message..."
          value={props.new_message}
          onChange={changeMessageText}
        />
        <button
          type="submit"
          onClick={publish}
          className="ml-2 text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send
        </button>
      </div>
    </div>
    </div>
  );
};

export default NewMessage;
