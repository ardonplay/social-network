import React from "react";

const DialogItem = (props) => {
  return (
    <div className="mt-3 bg-gray-700 p-2.5 rounded-full w-44">
      <div className="flex flex-row items-center">
        <img src={props.avatar} className="w-10 rounded-full" />
        <p className="ml-1">{props.name}</p>
      </div>
    </div>
  );
};

export default DialogItem;