import React from "react";

import wall from "../../static/wallBackground.png";
import profile from "../../static/profile.png";
import ProfileInfo from "./ProfileInfo";
import Post from "./Post";
import NewPostBoxContainer from "./NewPostBoxContainer";
import PostsContainer from "./PostsContainer";

const Profile = (props) => {
  let profile_data = props.profile_data

  let profileIcon = profile

  if (props.profileIcon !== undefined) {
    profileIcon = props.profileIcon;
  }

  let profileWall = profile_data.wall !== undefined ? profile_data.wall : wall;
  return (
    <div className="flex-auto w-80 backdrop-blur-md rounded-lg">
      <div className="m-5">
        <img
          src={profileWall}
          className="object-cover h-36 w-full rounded-lg"
          alt="profileWall"
        />

        <div className="flex flex-row mt-3">
          <div>
            <img src={profileIcon} className="w-16" alt="profileIcon" />
          </div>
          <ProfileInfo
            profileInfo={profile_data.profile_info}
          />
        </div>
        <div className="flex flex-col mt-3 items-start">
          <NewPostBoxContainer dispatch={props.dispatch} new_post_message={props.profile_data.new_post_message} />
          <PostsContainer/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
