import React from "react";
import profile from "../../static/profile.png";

const Post = (props) => {
  let profileIcon = profile;

  if (props.profileIcon != undefined) {
    profileIcon = props.profileIcon;
  }

  return (
    <div className="flex flex-col items-start mt-5">
      <div className="flex flex-row items-start">
        <img src={profileIcon} className="w-10 rounded-full" />
        <div className="ml-3 flex flex-col w-auto items-start">
          <div className="">{props.name}</div>
          <div className="font-extralight text-xs -mt-1">{props.date}</div>
        </div>
      </div>
      <div className="ml-10">{props.message}</div>
    </div>
  );
};

export default Post;
