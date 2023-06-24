import React from "react";
let newPostElement = React.createRef();

const NewPostBox = (props) => {
  const publishPost = () => {
    props.addPost(newPostElement.current.value);
    props.updateNewPostText("")
  };

  const changePostText = () => {
    console.log(props.new_post_message)
    props.updateNewPostText(newPostElement.current.value);
  }
  return (
    <div className="flex flex-col items-start">
      <label className="font-bold">My Posts</label>
      <div className="flex flex-row w-96 mt-2">
        <input
          type="text"
          ref={newPostElement}
          aria-describedby="new-post-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="your news..."
          value={props.new_post_message}
          onChange={changePostText}
        />
        <button
          type="submit"
          onClick={publishPost}
          className="ml-2 text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default NewPostBox;
