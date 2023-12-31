import React from "react";

const Message = (props) => {
    let style = "mt-3 bg-gray-700 p-2.5 rounded-full text-left"
    
    if(props.id === props.user_id){
        style = "mt-3 ml-60 bg-sky-400 p-2.5 rounded-full text-justify"
    }

  return (
    <div className={style}>
      <div className="flex flex-row items-start">
        <p className="ml-1 hyphens-manual">{props.message}</p>
      </div>
    </div>
  );
};

export default Message;