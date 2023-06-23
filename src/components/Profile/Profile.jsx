import React from "react";

import wall from "../../static/wallBackground.png";
import profile from "../../static/profile.png";
import ProfileInfo from "./ProfileInfo";
import Post from "./Post";
import NewPostBox from "./NewPostBox";

const Profile = (props) => {
  let profileIcon = profile

  if (props.profileIcon != undefined) {
    profileIcon = props.profileIcon;
  }


  let posts =
    props.posts != undefined
      ? props.posts.map((post) => (
          <Post name={post.name} date={post.date} message={post.message} profileIcon={post.profileIcon}/>
        ))
      : undefined;

  let profileWall = props.wall != undefined ? props.wall : wall;
  return (
    <div className="flex-auto w-80 backdrop-blur-md rounded-lg">
      <div className="m-5">
        <img
          src={profileWall}
          className="object-cover h-36 w-full rounded-lg"
        />

        <div className="flex flex-row mt-3">
          <div>
            <img src={profileIcon} className="w-16" />
          </div>
          <ProfileInfo
            profileInfo={props.profileInfo}
          />
        </div>
        <div className="flex flex-col mt-3 items-start">
          <NewPostBox />
          <div className="flex flex-col items-start mt-3">{posts}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
